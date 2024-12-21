# Blood Group Detection Using Fingerprint

This project uses machine learning (Support Vector Machine) to predict blood groups from fingerprint images. It uses HOG (Histogram of Oriented Gradients) features extracted from fingerprint images to train a model that can classify fingerprints into different blood groups.

## Requirements

- Python 3.9 or higher
- OpenCV
- scikit-learn
- scikit-image
- numpy
- pandas
- tqdm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Tushar-Shinde31/Blood_Group_Detection_Using_Fingerprint.git
cd Blood_Group_Detection_Using_Fingerprint
```

2. Install the required packages:
```bash
pip install numpy pandas scikit-learn opencv-python scikit-image tqdm
```

## Project Structure

```
.
├── train/              # Training data directory
│   ├── O-/            # Fingerprint images for O- blood group
│   ├── O+/            # Fingerprint images for O+ blood group
│   ├── A-/            # Fingerprint images for A- blood group
│   ├── A+/            # Fingerprint images for A+ blood group
│   ├── AB+/           # Fingerprint images for AB+ blood group
│   ├── AB-/           # Fingerprint images for AB- blood group
│   ├── B-/            # Fingerprint images for B- blood group
│   └── B+/            # Fingerprint images for B+ blood group
├── detect_blood_group.py  # Main model training and feature extraction code
├── predict.py         # Script to predict blood group from a new fingerprint
└── README.md         # This file
```

## Usage

1. First, organize your fingerprint images in the `train` directory. Each blood group should have its own subdirectory containing the relevant fingerprint images.

2. To train the model and test it on a new fingerprint image:
```bash
python predict.py path/to/your/fingerprint/image.jpg
```

The script will:
1. Train the model using the images in the `train` directory
2. Use the trained model to predict the blood group from your input image
3. Display the predicted blood group and confidence score

## Model Details

The system uses the following techniques:
- HOG (Histogram of Oriented Gradients) for feature extraction
- Support Vector Machine (SVM) with RBF kernel for classification
- Standard scaling of features for better model performance

## Note

The accuracy of blood group prediction depends on:
- Quality of fingerprint images
- Size of the training dataset
- Proper preprocessing of images
- Correct labeling of training data

Please ensure that your fingerprint images are:
- Clear and well-focused
- Properly aligned
- In grayscale format
- Of reasonable size (they will be resized to 128x128 pixels)
