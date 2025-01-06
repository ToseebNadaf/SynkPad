<div align="center">
    <img src="https://raw.githubusercontent.com/ToseebNadaf/SynkPad/refs/heads/master/public/assets/images/logo.jpg" alt="BlogSync Logo" width="100" height="100">
    <br />
    <br />
  <h1 align="center">SynkPad - A Shared Collaborative Experience</h1>

  <p align="center">
    <a href="">Visit Website</a>
  </p>
</div>

 Welcome to **SynkPad**, the ultimate platform for seamless real-time collaboration. Whether you're working on team projects, brainstorming ideas, or managing shared documents, SynkPad empowers you with intuitive tools and a user-friendly interface. This built with Next.js to handle the user interface, Liveblocks for real-time collaboration, and styled with TailwindCSS. It’s a feature-rich Google Docs clone designed to showcase skills in building real-time collaborative environments.

 ## Tech Stack

 - Next.js

 - TypeScript

 - Liveblocks

 - Lexical Editor

 - ShadCN

 - Tailwind CSS

## Features

  **Authentication**: 
  - Secure user authentication using Clerk.
  
  **Collaborative Text Editor**: 
  - Real-time text editing with multiple users.

  **Document Management**: 
  - **Create Documents**: Easily create new documents.
  - **Delete Documents**: Remove unwanted documents.
  - **Share Documents**: Share via email or link with customizable permissions (view/edit).
  - **List Documents**: Display owned/shared documents with search and sorting capabilities.

  **Comments**: 
  - Add inline and general comments with threaded discussions.
  
  **Active Collaborators**: 
  - Real-time presence indicators for collaborators in the editor.

  **Notifications**: 
  - Alerts for shared documents, new comments, and collaborator activities.
  
  **Responsive Design**: 
  - Optimized for all devices.

<br/>
And much more, including clean code architecture and reusable components.

## Getting Started
### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ToseebNadaf/SynkPad.git
   cd SynkPad
2. **Set Up Environment Variables**
    ```env
    #Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    #Liveblocks
    NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
    LIVEBLOCKS_SECRET_KEY=
    ```
1. **Install the project dependencies using npm:** 
   ```bash
   npm install
2. **Running the Project**: 
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.