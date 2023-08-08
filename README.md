#Exactspace-NodeJs-Assignment
Level-1     BASH 

Description
This script helps you find the largest log file with the .log extension on your computer and then truncates it to 100 lines using the tail command. It is useful for managing large log files and ensuring that they do not become too overwhelming to handle.

How it Works
The script uses a for loop to find all files with the .log extension in the specified directory (/path/to/logs) and its subdirectories. It then calculates the number of lines in each log file using the wc -l command and compares them to find the largest file.

If a log file is found, it truncates it to 100 lines using the tail -n 100 command and saves the truncated content to a temporary file. Finally, it replaces the original file with the truncated content.



