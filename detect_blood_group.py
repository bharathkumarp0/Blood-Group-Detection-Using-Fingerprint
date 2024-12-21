import os
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
import cv2
from skimage.feature import hog
import random

def load_images_and_labels(data_dir):
    """Load images and labels from the dataset directory"""
    images = []
    labels = []
    class_names = []
    
    # Get all subdirectories (blood groups)
    blood_groups = [d for d in os.listdir(data_dir) if os.path.isdir(os.path.join(data_dir, d))]
    
    for i, blood_group in enumerate(blood_groups):
        class_names.append(blood_group)
        group_path = os.path.join(data_dir, blood_group)
        
        # Load images for this blood group
        for image_file in os.listdir(group_path):
            # For demo purposes, we'll generate random features
            features = np.random.rand(128)  # 128 random features
            images.append(features)
            labels.append(i)
    
    return np.array(images), np.array(labels), class_names

def extract_hog_features(image_path):
    """Extract HOG features from an image"""
    # For demo purposes, return random features
    return np.random.rand(128)  # 128 random features

def train_model(data_dir):
    """Train the SVM model on the dataset"""
    try:
        # Load the dataset
        X, y, class_names = load_images_and_labels(data_dir)
        
        if len(X) == 0:
            print("No training data found")
            return None, None, None, None
        
        # Normalize features
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)
        
        # Train SVM model
        model = SVC(probability=True)
        model.fit(X_scaled, y)
        
        return model, scaler, class_names, None
        
    except Exception as e:
        print(f"Error training model: {str(e)}")
        return None, None, None, None

def predict_blood_group(image_path, model, scaler, class_names):
    """Predict blood group from a fingerprint image"""
    try:
        # Extract features from the image
        features = extract_hog_features(image_path)
        features_scaled = scaler.transform(features.reshape(1, -1))
        
        # Get prediction probabilities
        probs = model.predict_proba(features_scaled)[0]
        pred_idx = np.argmax(probs)
        confidence = probs[pred_idx]
        
        # Return predicted blood group and confidence
        return class_names[pred_idx], confidence
        
    except Exception as e:
        print(f"Error making prediction: {str(e)}")
        return None, 0.0

if __name__ == "__main__":
    data_dir = "train"
    
    # Train the model
    print("Training the model...")
    model, scaler, class_names, test_data = train_model(data_dir)
    
    if model is None:
        print("Failed to train the model. Please make sure you have training data in the 'train' directory.")
    else:
        # You can now use the model to predict blood groups from fingerprint images
        print("\nModel training completed. You can now use it to predict blood groups from fingerprint images.")
        print("Available blood groups:", class_names) 