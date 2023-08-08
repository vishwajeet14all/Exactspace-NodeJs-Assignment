Exactspace-NodeJs-Assignment
1BASH 

Description
This script helps you find the largest log file with the .log extension on your computer and then truncates it to 100 lines using the tail command. It is useful for managing large log files and ensuring that they do not become too overwhelming to handle.

How it Works
The script uses a for loop to find all files with the .log extension in the specified directory (/path/to/logs) and its subdirectories. It then calculates the number of lines in each log file using the wc -l command and compares them to find the largest file.

If a log file is found, it truncates it to 100 lines using the tail -n 100 command and saves the truncated content to a temporary file. Finally, it replaces the original file with the truncated content.


Node.js Assignment - JSON Form Renderer
This is a simple Node.js web application that allows users to submit JSON data through a form and view the submitted data in different formats based on the level.

Hosted UR
https://exactspace-nodejs-assignment.onrender.com/

Features
Level 2 Collect JSON data from the user using a text area in the form. Submit the JSON data to the server. View the submitted JSON data as an API response.
Level 3 Collect JSON data from the user using a text area in the form. Submit the JSON data to the server. View the submitted JSON data in a rendered form on a new webpage.
How to Use
Clone the repository: git clone https://github.com/rajendrasarak90/Exactspace-NodeJs-Assignment.git
Install dependencies: npm install
Start Server: npm start
Open your web browser and navigate to http://localhost:3000.
On the homepage, you will see two forms for Level 2 and Level 3 respectively.

Dependencies
Express.js: Web application framework for Node.js.
Body Parser: Middleware for parsing JSON data from the request body.
Thank You ...!
