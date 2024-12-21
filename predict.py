import sys
from detect_blood_group import train_model, predict_blood_group

def main():
    if len(sys.argv) != 2:
        print("Usage: python predict.py <path_to_fingerprint_image>")
        sys.exit(1)

    image_path = sys.argv[1]
    train_dir = "train"

    # Train the model (or load pre-trained model if you have one)
    print("Training the model...")
    model, scaler, class_names, _ = train_model(train_dir)

    if model is None:
        print("Failed to train the model. Please make sure you have training data in the 'train' directory.")
        sys.exit(1)

    try:
        # Predict blood group
        blood_group, confidence = predict_blood_group(image_path, model, scaler, class_names)
        print(f"\nPredicted Blood Group: {blood_group}")
        print(f"Confidence: {confidence:.2%}")
    except Exception as e:
        print(f"Error predicting blood group: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main() 