# To-do-notes
This repository contains a Dockerized ToDo Notes application. The application allows you to manage your tasks and keep track of your notes conveniently. With Docker, you can easily deploy and run the ToDo Notes application as a containerized application.

## Installation
This application used reactJs for front end and nodeJS for backend. SQLlite database is used to store the to-do's

  1) clone this repositary
  2) cd to frontend dir and inside ther terminal press 
        i)  npm install
        ii) npm start
        ~ this will start your frontend on http://localhost:3000
  3) cd to backend dir and in terminal enter
      i) npm install
      ii) npm start
       ~ this will start your backend express server on http://localhost:5000
       
## OR
  
  1) cd to frontend dir and build docker image using docker build -f Dockerfile -t frontend .
  2) cd to backend dir and build docker image using docker build -f Dockerfile -t backend .
  3) cd to root dir and start build with docker-compose up

## Screenshot 
  ![image](https://github.com/cristan02/To-do-notes/assets/94105472/f2871dc8-4820-4ef8-a528-b0073d4b0319)

       
