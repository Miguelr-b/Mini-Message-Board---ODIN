# Mini Message Board

A simple message board where anyone can read the messages that were already sent and write a new one. The page is styled to look like a command prompt (cmd).

This project was made for practice only, as part of the [The Odin Project](https://www.theodinproject.com/) curriculum. It is not a real product and should not be used to store anything important.

## How it works

- The main page shows the list of messages, the same way a terminal shows lines of commands. Each message shows the name of the author, the date and time, and the text.
- The "new message" button in the bottom bar takes you to a second page with a form.
- In the form, you enter your name and your message, then submit.
- After submitting, the server saves the message and you go back to the main page, where the new message is already listed.

## How it was built

- **Node.js** and **Express** for the server and routes.
- **EJS** to build the HTML pages with the message data.
- Plain **CSS** for the cmd look.
- **Render** to host the project online.

## Running locally

1. Clone the repository and go into the project folder.
2. Install the dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node --watch index.js
   ```

4. Open `http://localhost:3030` in your browser. If your project uses a different port, change the number.

## Live version

The project is hosted on Render: **https://mini-message-board-mm7q.onrender.com/**

### A note about the free hosting

This project runs on Render's free plan, which has a limitation. If nobody visits the site for a while (about 15 minutes), Render turns the server off to save resources. When someone visits again, the server has to start up from zero, so the first page load can take 50 seconds or more. After it wakes up, the site works at normal speed until it goes idle again.

So if the site seems stuck on the first visit, just wait a bit. It is not broken.

## Notes

- This is a learning project, with no login, no moderation and no protection against unwanted messages.
- On free hosting plans, messages may be erased when the server restarts or spins down.
