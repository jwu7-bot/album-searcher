Github Pages: https://jwu7-bot.github.io/album-searcher

# Album Searcher React App

A simple React app that allows users to search for albums and their details from the Last.fm API. The app uses environment variables to store the API key and fetches album data based on a search term.

## Features

- Search for albums by name or artist.
- Display album details like album name, artist, and album artwork.
- Environment variable configuration to hide the API key.

## Technologies Used

- React.js
- Last.fm API
- Fetch API
- Environment Variables for API Key

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Clone the repository

```bash
git clone https://github.com/jwu7-bot/album_searcher.git
```

### Install dependencies
Navigate to the project directory and run the following command to install the required dependencies:

```bash
cd album-searcher
npm install
```

### Set up environment variables
Create a .env file in the root directory of the project and add your Last.fm API key.

```env
REACT_APP_API_KEY=your-api-key-here
```

### Run the app
Start the development server:

```bash
npm start
```


