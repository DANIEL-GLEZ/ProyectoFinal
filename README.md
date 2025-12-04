🚀 Interactive 3D Developer Portfolio

An immersive web experience that bridges the gap between 3D Modeling (Blender) and Web Development (Three.js). This project transforms a standard portfolio into an interactive 3D setup, allowing users to explore a developer's workspace directly from their browser.

📝 Project Description

"Final Project GG Graphics" is a capstone project designed to evaluate competencies in 3D modeling and WebGL integration.

The goal was to move beyond simple 3D primitives and develop a complex, high-fidelity model: A Programmer's Setup. After modeling the assets in Blender (desk, peripherals, environment), the challenge was to export them correctly and integrate them into a responsive HTML/CSS interface using Three.js.

The result is a "Split-Screen" portfolio where the user can consume content while interacting with a living 3D scene.

⚙️ Key Features

🎨 3D & Graphics

Custom Modeling: All assets (desk, chair, PC) were modeled from scratch using Blender.

Optimized Export: Proper use of the GLTF/GLB format for web performance.

Texture Mapping & UVs: Detailed texturing on models, including dynamic screens.

💻 Web & Interactivity

Three.js Integration: Full implementation of a 3D scene within the DOM using JavaScript modules.

Interactive Controls: Users can orbit, pan, and zoom using OrbitControls.

Raycasting: Advanced interaction where clicking specific 3D objects (like the TV/Monitor) triggers HTML modals/popups.

Dynamic Canvas Textures: The computer monitor inside the 3D scene features animated text drawn in real-time using the HTML Canvas API.

Lighting System: Interactive light toggles (Day/Night mode) affecting the 3D scene's rendering.

📱 UI/UX

Responsive Design: Split-layout that adapts to different screen sizes.

Modern CSS: Glassmorphism effects, gradients, and semantic HTML structure.

🛠️ Tech Stack

Technology

Usage



3D Modeling, UV Unwrapping, GLTF Export



Semantic Structure & DOM



Styling, Layouts, Animations



Logic, Raycasting, DOM Manipulation



WebGL Rendering Engine

🎮 Controls

Explore the scene using your mouse:

Action

Control

Rotate Camera

Left Click + Drag

Pan Camera

Right Click + Drag

Zoom

Mouse Wheel

Interact

Left Click on Objects (TV, Monitor)

🎓 Academic Information

This project was developed for the final evaluation of the Computer Graphics course.

Subject: Graficación (Computer Graphics)

Instructor: Rodrigo Fidel Gaxiola Sosa

Student: [Tu Nombre Completo Aquí]

Date: December 2025

🚀 How to Run Locally

Since this project uses ES6 Modules for Three.js, it requires a local server to run (to avoid CORS errors).

Clone the repo:

git clone [https://github.com/YourUsername/Portafolio-3D.git](https://github.com/YourUsername/Portafolio-3D.git)


Open in VS Code.

Use Live Server:

Install the "Live Server" extension.

Right-click on index.html and select "Open with Live Server".
