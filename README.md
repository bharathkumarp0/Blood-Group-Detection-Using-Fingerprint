# Blood Group Detection Using Fingerprint (BGDUF)

![Gradio App](https://img.shields.io/badge/Gradio-App-blue)  
![Frontend](https://img.shields.io/badge/Frontend-Next.js-green)  
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-Enabled-brightgreen)  

## 🩸 Overview

The **Blood Group Detection Using Fingerprint (BGDUF)** project combines machine learning with a modern web interface to predict blood groups based on fingerprint patterns. The solution offers a seamless experience by integrating a **Next.js-based frontend** with a **Gradio-hosted machine learning model**.  

This project demonstrates an end-to-end pipeline, from a user-friendly frontend to a robust backend prediction model.  

---

## 🔍 Features

- **Non-invasive Detection:** Predict blood groups from fingerprint patterns.  
- **Modern Frontend:** Built with **Next.js**, offering a sleek and responsive user interface.  
- **Gradio Backend:** Simple and effective machine learning model deployment.  
- **End-to-End Pipeline:** From data collection to model deployment and user interaction.  

---

## 🚀 How It Works

1. **Frontend:**  
   - Users interact with a clean and responsive web interface built in **Next.js**.  
   - Fingerprint images are uploaded via the web app.  

2. **Backend:**  
   - The uploaded fingerprint is sent to a **Gradio-hosted machine learning model** for prediction.  

3. **Prediction:**  
   - The backend processes the input and predicts the blood group.  
   - Results are displayed instantly on the frontend.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (React-based framework)  
- **Backend:** Python with Gradio  
- **Machine Learning Frameworks:** TensorFlow/PyTorch  
- **Other Tools:** NumPy, Pandas, Matplotlib  

---

## 🧪 Model Training and Evaluation

- **Dataset:** Fingerprint dataset labeled with blood groups.  
- **Metrics:** Accuracy, Precision, Recall, F1-Score.  
- **Preprocessing:**  
  - Image resizing and normalization.  
  - Data augmentation for robustness.  
- **Model Architecture:** [Brief description, e.g., CNN model with X layers]  

---



## 📂 Directory Structure

```plaintext
.
├── frontend/               # Next.js frontend
├── backend/                # Gradio app and ML model
├── data/                   # Dataset used for training and testing
├── models/                 # Trained models
├── notebooks/              # Jupyter notebooks for experiments
├── app.py                  # Gradio backend code
├── requirements.txt        # Dependencies for backend
└── README.md               # Project documentation
