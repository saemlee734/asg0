function main() {
    var canvas = document.getElementById('example');
    if (!canvas) { 
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var ctx = canvas.getContext('2d');

    // Set the canvas background color to black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw initial vectors
    drawVectors();

    // Add event listeners for buttons
    document.getElementById('drawVectorsButton').addEventListener('click', drawVectors);
    document.getElementById('drawOperationButton').addEventListener('click', drawOperation);
}

// Function to draw user-input vectors (red and blue)
function drawVectors() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Read vector inputs
    var x1 = parseFloat(document.getElementById('xCoord1').value);
    var y1 = parseFloat(document.getElementById('yCoord1').value);
    var x2 = parseFloat(document.getElementById('xCoord2').value);
    var y2 = parseFloat(document.getElementById('yCoord2').value);

    window.v1 = new Vector3([x1, y1, 0]); // Store globally so they stay the same
    window.v2 = new Vector3([x2, y2, 0]);

    // Draw red and blue vectors
    drawVector(window.v1, "red");
    drawVector(window.v2, "blue");
}

// Function to perform vector operations
function drawOperation() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    // Clear canvas but keep red and blue vectors
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw the original red and blue vectors so they remain unchanged
    drawVector(window.v1, "red");
    drawVector(window.v2, "blue");

    var scalar = parseFloat(document.getElementById('scalar').value);
    var operation = document.getElementById('operation').value;

    var result1, result2;  // Result vectors

    switch (operation) {
        case 'add':
            result1 = new Vector3([window.v1.elements[0] + window.v2.elements[0], window.v1.elements[1] + window.v2.elements[1], 0]);
            break;
        case 'sub':
            result1 = new Vector3([window.v1.elements[0] - window.v2.elements[0], window.v1.elements[1] - window.v2.elements[1], 0]);
            break;
        case 'mul':
            result1 = new Vector3([window.v1.elements[0] * scalar, window.v1.elements[1] * scalar, 0]);
            result2 = new Vector3([window.v2.elements[0] * scalar, window.v2.elements[1] * scalar, 0]);
            break;
        case 'div':
            if (scalar !== 0) {
                result1 = new Vector3([window.v1.elements[0] / scalar, window.v1.elements[1] / scalar, 0]);
                result2 = new Vector3([window.v2.elements[0] / scalar, window.v2.elements[1] / scalar, 0]);
            } else {
                console.log("Error: Cannot divide by zero.");
                return;
            }
            break;
        case 'magnitude':
            console.log(`Magnitude of v1: ${window.v1.magnitude()}`);
            console.log(`Magnitude of v2: ${window.v2.magnitude()}`);
            return;  // No green vector for magnitude
        case 'normalize':
            result1 = new Vector3([window.v1.elements[0], window.v1.elements[1], 0]).normalize();
            result2 = new Vector3([window.v2.elements[0], window.v2.elements[1], 0]).normalize();
            break;
        case 'angle':
            angleBetween(window.v1, window.v2);
            return; // No vector to draw
        case 'area':
            areaTriangle(window.v1, window.v2);
            return; // No vector to draw
    }
    
    // Draw the operation results in green (with transparency)
    if (result1) {
        drawVector(result1, "rgba(0, 255, 0, 0.5)");  // Green vector for v1
    }
    if (result2) {
        drawVector(result2, "rgba(0, 255, 0, 0.5)");  // Green vector for v2
    }
}

// Function to draw a vector with optional transparency
function drawVector(v, color) {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(200, 200);

    var x = v.elements[0] * 20;
    var y = v.elements[1] * 20;

    ctx.lineTo(200 + x, 200 - y);
    ctx.stroke();
}

function angleBetween(v1, v2) {
    var dotProduct = Vector3.dot(v1, v2);
    var magnitudeV1 = v1.magnitude();
    var magnitudeV2 = v2.magnitude();

    if (magnitudeV1 === 0 || magnitudeV2 === 0) {
        console.log("Error: Cannot compute angle with a zero vector.");
        return;
    }

    var cosTheta = dotProduct / (magnitudeV1 * magnitudeV2);
    
    // Ensure cosTheta is within the valid range for arccos to avoid NaN errors due to floating-point inaccuracies
    cosTheta = Math.max(-1, Math.min(1, cosTheta));

    var angleInRadians = Math.acos(cosTheta);
    var angleInDegrees = angleInRadians * (180 / Math.PI);

    console.log(`Angle between v1 and v2: ${angleInDegrees.toFixed(2)} degrees`);
}

function areaTriangle(v1, v2) {
    var crossProduct = Vector3.cross(v1, v2);
    var area = 0.5 * Math.abs(crossProduct.elements[2]); // Only z-component matters in 2D

    console.log(`Area of the triangle: ${area.toFixed(2)}`);
}
