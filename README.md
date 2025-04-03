# Assignment 0 - Vector Operations and Visualization

## Author
**Name:** Sabrina Lee  
**Email:** saemlee@ucsc.edu  

## Description
This project is a web-based interactive tool that allows users to input and visualize vectors, perform vector operations, and display results using HTML5 Canvas. The project includes the following features:
- Draw user-defined vectors (`v1` and `v2`) in red and blue.
- Perform vector operations (addition, subtraction, multiplication, division, normalization, and magnitude calculation).
- Calculate and visualize the **angle between vectors**.
- Compute and display the **area of the triangle** formed by the vectors.
- Display results on the canvas and log calculations in the console.

## Technologies Used
- **HTML** (User Interface)
- **JavaScript** (Logic & Rendering)
- **WebGL Library (`cuon-matrix.js`)** (Vector calculations)
- **GitHub Pages** (Hosting)

## How to Run
1. Open `asg0.html` in a web browser that supports **Canvas and JavaScript**.
2. Enter the vector coordinates in the input fields.
3. Click **Draw** to visualize the vectors.
4. Choose an operation from the dropdown and click **Draw Operation**.
5. Open the **browser console (`F12` or `Ctrl + Shift + I`)** to see calculations like magnitude, angle, and area.

## Live Demo
You can view the live version of this project at:  
[https://your-username.github.io/asg0/asg0.html](https://your-username.github.io/asg0/asg0.html)

## Notes to Grader
- The **angle calculation** uses the dot product formula.
- The **area calculation** uses the cross product magnitude.
- Extra effort was put into UI clarity and result transparency (vectors are color-coded).
- Any additional features or bugs encountered should be noted in the browser console.

## Installation (Optional for Local Testing)
If you want to run this project locally:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/asg0.git
