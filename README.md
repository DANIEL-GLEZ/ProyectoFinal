# 🖥️ Interactive 3D Setup - Final Project

![Status](https://img.shields.io/badge/Status-Finished-success?style=for-the-badge)
![Blender](https://img.shields.io/badge/Blender-4.0-orange?style=for-the-badge&logo=blender)
![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)

> **"Final Project GG Graphics"**
> An immersive web experience that bridges the gap between 3D Modeling and Web Development.

## 🔗 Live Demo
🔴 **[Click here to view the project live](AQUI_PEGAS_TU_LINK_DE_VERCEL)**

---

## 📝 Project Description

This project serves as the final evaluation for the **Computer Graphics** course. The goal was to evolve from basic modeling to creating a complex, high-fidelity **Programmer's Setup** in **Blender**, and then integrating it into a responsive web interface using **HTML5** and **Three.js**.

The result is a **"Split-Layout" Portfolio**:
* **Left Side:** A scrollable, responsive interface with information about the developer.
* **Right Side:** A persistent, interactive 3D scene that users can explore in real-time.

---

## ⚙️ Key Features

### 🎨 3D Modeling & Assets (Blender)
* **Custom Modeling:** All assets (Desk, PC, Peripherals, Room) were modeled from scratch.
* **Optimization:** Assets exported in **.GLB (Binary glTF)** format for fast web loading.
* **UV Unwrapping:** Correct texture mapping for realistic screens and surfaces.

### 💻 Web Development (Three.js & JS)
* **Interactive Scene:** Full camera control (OrbitControls) allowing **Zoom**, **Pan**, and **Rotation**.
* **Raycasting Interaction:** Clickable 3D objects! Clicking the **"TV"** reveals a hidden modal window.
* **Dynamic Canvas Texture:** The computer monitor displays **animated text** (typing effect) rendered in real-time via HTML Canvas API.
* **Lighting System:** Includes ambient, directional, and spot lighting to create depth and shadows.

### 📱 UI/UX Design
* **Responsive Layout:** The interface adapts to different screen sizes (Split screen on Desktop, Stacked on Mobile).
* **Glassmorphism:** Modern UI elements with blur effects and gradients.
* **Dark/Light Mode:** Integrated theme toggle affecting both the UI and the 3D scene lighting.

---

## 🛠️ Technologies Used

| Category | Tech Stack |
| :--- | :--- |
| **3D Engine** | ![Three.js](https://img.shields.io/badge/-Three.js-black?logo=three.js) |
| **Modeling** | ![Blender](https://img.shields.io/badge/-Blender-orange?logo=blender) |
| **Frontend** | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) |

---

## 🚀 How to Run Locally

If you want to test this project on your machine, follow these steps (Standard HTML opening won't work due to CORS):

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/TuUsuario/Portafolio-3D.git](https://github.com/TuUsuario/Portafolio-3D.git)
    ```

2.  **Open in Visual Studio Code.**

3.  **Run with Live Server:**
    * Install the **"Live Server"** extension in VS Code.
    * Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🎓 Academic Information

* **Subject:** Graficación (Computer Graphics)
* **Instructor:** Rodrigo Fidel Gaxiola Sosa
* **Student:** Roberto Daniel González López
* **Date:** December 2025

---
Made with 💙 and lots of coffee. GG WAZAAA 👻👻👻
