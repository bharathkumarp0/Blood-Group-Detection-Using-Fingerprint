# 🩸 Blood Group Detection Using Fingerprint 👆

This project uses machine learning (Support Vector Machine) to predict blood groups from fingerprint images. It uses HOG (Histogram of Oriented Gradients) features extracted from fingerprint images to train a model that can classify fingerprints into different blood groups. The project includes a modern web interface for easy interaction and cloud-based dataset management.

## ✨ Key Features

- 🔍 Blood group prediction from fingerprint images using SVM
- 🌐 Modern web interface for easy interaction
- ☁️ Cloud-based dataset storage and management
- ⚡ Real-time prediction results
- 📤 Interactive fingerprint upload system
- 🔄 Automated dataset synchronization

## 📋 Requirements

- 🐍 Python 3.9 or higher
- 📸 OpenCV
- 🤖 scikit-learn
- 🖼️ scikit-image
- 🔢 numpy
- 📊 pandas
- 📈 tqdm
- 🌐 Flask (for web interface)
- ☁️ boto3 (for AWS S3 integration)
- 🔌 requests

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Tushar-Shinde31/Blood_Group_Detection_Using_Fingerprint.git
cd Blood_Group_Detection_Using_Fingerprint
```

2. Install the required packages:
```bash
pip install numpy pandas scikit-learn opencv-python scikit-image tqdm flask boto3 requests
```

## 📁 Project Structure

```
.
├── train/              # Training data directory (local cache)
│   ├── O-/            # Fingerprint images for O- blood group
│   ├── O+/            # Fingerprint images for O+ blood group
│   ├── A-/            # Fingerprint images for A- blood group
│   ├── A+/            # Fingerprint images for A+ blood group
│   ├── AB+/           # Fingerprint images for AB+ blood group
│   ├── AB-/           # Fingerprint images for AB- blood group
│   ├── B-/            # Fingerprint images for B- blood group
│   └── B+/            # Fingerprint images for B+ blood group
├── static/            # Frontend static files
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── img/          # Image assets
├── templates/         # HTML templates
├── detect_blood_group.py  # Main model training and feature extraction code
├── predict.py         # Script to predict blood group from a new fingerprint
├── app.py            # Flask web application
├── cloud_sync.py     # Cloud dataset synchronization script
└── README.md         # This file
```

## 💻 Usage

### 🌐 Web Interface

1. Start the web application:
```bash
python app.py
```

2. Open your browser and navigate to `http://localhost:5000`

3. Use the web interface to:
   - 📤 Upload fingerprint images
   - 👁️ View prediction results
   - 🔄 Manage dataset synchronization
   - 📊 Monitor system status

### ⌨️ Command Line Interface

To train the model and test it on a new fingerprint image via command line:
```bash
python predict.py path/to/your/fingerprint/image.jpg
```

### ☁️ Cloud Dataset Management

1. Configure your cloud credentials:
   - 📝 Create a `.env` file with your cloud storage credentials
   - 🔑 Or set them as environment variables

2. Synchronize the dataset:
```bash
python cloud_sync.py --sync
```

The script will:
1. ⬇️ Download the latest dataset from cloud storage
2. 🔄 Update local cache
3. 🎯 Train the model using the updated dataset

## 🤖 Model Details

The system uses the following techniques:
- 📊 HOG (Histogram of Oriented Gradients) for feature extraction
- 🧠 Support Vector Machine (SVM) with RBF kernel for classification
- 📈 Standard scaling of features for better model performance

## 🎨 Frontend Features

- 📱 Responsive design for desktop and mobile devices
- 🖼️ Real-time fingerprint image preview
- 📊 Interactive prediction results display
- 📂 Dataset management interface
- 📈 System status monitoring
- 🖱️ User-friendly upload interface

## ☁️ Cloud Integration

The project supports cloud storage integration for:
- 📦 Centralized dataset management
- 🏷️ Automatic dataset versioning
- 👥 Collaborative dataset updates
- 💾 Backup and recovery
- 📈 Scalable storage solution

## ⚠️ Note

The accuracy of blood group prediction depends on:
- 📸 Quality of fingerprint images
- 📊 Size of the training dataset
- 🔍 Proper preprocessing of images
- 🏷️ Correct labeling of training data

Please ensure that your fingerprint images are:
- 🔍 Clear and well-focused
- ↔️ Properly aligned
- 🖼️ In grayscale format
- 📏 Of reasonable size (they will be resized to 128x128 pixels)

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- 🔀 Submit pull requests
- 🐛 Report bugs
- 💡 Suggest features

---
<div align="center">
Made with ❤️ for the advancement of biometric technology
</div>
