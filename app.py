import os
from flask import Flask, render_template, request, flash, jsonify
from werkzeug.utils import secure_filename
from detect_blood_group import train_model, predict_blood_group
from cloud_storage import CloudStorage

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for flash messages

# Configure upload folder
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initialize cloud storage
cloud_storage = CloudStorage()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Check if a file was uploaded
        if 'file' not in request.files:
            return render_template('index.html', error='No file uploaded')
        
        file = request.files['file']
        if file.filename == '':
            return render_template('index.html', error='No file selected')
        
        if not allowed_file(file.filename):
            return render_template('index.html', error='Invalid file type. Please upload an image file (png, jpg, jpeg, gif)')
        
        try:
            # Save the uploaded file
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            
            # Check if we need to create the sample dataset
            train_dir = 'train'
            if not os.path.exists(train_dir) or not any(os.path.isdir(os.path.join(train_dir, d)) for d in os.listdir(train_dir)):
                print("Creating sample dataset...")
                success = cloud_storage.download_dataset()
                if not success:
                    return render_template('index.html', error='Failed to create sample dataset. Please try again.')
            
            # Train model (or load pre-trained model)
            model, scaler, class_names, _ = train_model('train')
            
            if model is None:
                return render_template('index.html', error='Model training failed. Please ensure training data is available.')
            
            # Make prediction
            blood_group, confidence = predict_blood_group(filepath, model, scaler, class_names)
            
            # Clean up uploaded file
            os.remove(filepath)
            
            return render_template('index.html', 
                                 result={'blood_group': blood_group, 
                                        'confidence': confidence})
            
        except Exception as e:
            return render_template('index.html', error=f'Error processing image: {str(e)}')
    
    return render_template('index.html')

@app.route('/download_dataset', methods=['POST'])
def download_dataset():
    try:
        success = cloud_storage.download_dataset()
        if success:
            return jsonify({'success': True, 'message': 'Sample dataset created successfully'})
        else:
            return jsonify({'success': False, 'message': 'Failed to create sample dataset'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Default to 5000 if PORT is not set
    app.run(host='0.0.0.0', port=port)
