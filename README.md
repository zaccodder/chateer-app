# Chateer App

Chateer is a real-time chat application that allows users to communicate with each other instantly. It is built with modern web technologies to provide a seamless and responsive user experience.

## Description

Chateer is a web-based real-time chat application that allows users to communicate with each other instantly. It is built with modern web technologies to provide a seamless and responsive user experience. The application is a single-page application built with React and uses Node.js as the backend server.

## Milestone

- [ ] Complete the development of the chat application
- [ ] Implement authentication
- [ ] Store user chat history
- [ ] Make the application responsive
- [ ] Add support for group chats
- [ ] Add support for sending images
- [ ] Add support for updating profile e.g profile picture
- [ ] Bonus - Add support for sending audio and video messages
- [ ] Bonus - Allow users to view bios of other users in the same chat rooms
- [ ] Bonus - Add support for making voice and video calls

## Tech Stack

- Frontend: React,tailwindcss, Socket.IO
- Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO, JsonWebtoken, bcryptjs
- Database: MongoDB

## Installation Guide

- Clone the repository
- Install dependencies using npm install in both the chateer-frontend and chateer-backend
  -Start the front end using npm run dev
- Start the server using npm run dev in the development mode
- Open your browser and navigate to http://localhost:5173

## Environment variables

- PORT: The port number that the server will listen to. Default is 3001
- MONGODB_URI: The connection string for the MongoDB. Default is a local MongoDB instance
- JWT_SECRET: The secret key for generating JsonWebtokens. Default is a random string
- CLOUDINARY_CLOUD_NAME: The cloud name for the cloudinary
- CLOUDINARY_API_KEY: The API key for the cloudinary
- CLOUDINARY_API_SECRET: The API secret for the cloudinary

## Development Guide

- Create a new branch for your feature
- Make changes to the code
- Test your code
- Push your changes and create a pull request
