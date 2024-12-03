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

## 🎨 User Interfaces

### Next.js Frontend
The frontend provides a modern and intuitive user interface for uploading fingerprint images and viewing predictions.  

Example screenshot:  
![Next.js Interface Preview](https://via.placeholder.com/600x300)  
*Replace this placeholder with an actual screenshot.*

### Gradio Backend  
The Gradio interface serves as a functional demo for testing the ML model.  

Example screenshot:  
![Gradio Interface Preview](https://via.placeholder.com/600x300)  
*Replace this placeholder with an actual screenshot.*

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



### Key Updates:
- Included the **Next.js** frontend in the tech stack and workflow.
- Added instructions for running the frontend.
- Updated directory structure to reflect the frontend and backend split.
- Provided placeholders for screenshots of the interfaces.


🔧 Installation
Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and go to:

arduino
Copy code
http://localhost:3000/
Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run the Gradio app:

bash
Copy code
python app.py
The backend will run at:

arduino
Copy code
http://127.0.0.1:7860/
📈 Results and Visualizations
Accuracy Achieved: X%
Model Performance: Include metrics like confusion matrix, ROC curve, etc.
📝 Future Work
Enhance the dataset for better accuracy.
Explore cloud deployment for both frontend and backend.
Integrate more features to improve predictions and user experience.
🤝 Acknowledgments
This project was developed as part of an internship at Shadowfax Company. Special thanks to mentors and collaborators for their guidance and support.

📜 License
This project is licensed under the MIT License.
