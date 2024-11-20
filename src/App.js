import React, { useState } from "react";

// API key and URL
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://ws.audioscrobbler.com/2.0/";

const AlbumSearch = () => {
  // State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle form search
  const handleSearch = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        `${API_URL}?method=album.search&album=${searchTerm}&api_key=${API_KEY}&format=json`
      );

      // Check if response is ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse response as JSON
      const data = await response.json();

      //console.log(data);
      setSearchResults(data.results.albummatches.album);
    } catch (error) {
      // Handle error
      console.error("Error fetching data:", error);
    }
  };

  // Render component
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Album Search</h1>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for an album or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>
      <div style={styles.resultsContainer}>
        {searchResults.map((album) => (
          <div key={album.url} style={styles.albumCard}>
            <img
              src={album.image && album.image[3]["#text"]}
              alt={album.name}
              style={styles.albumImage}
            />
            <div style={styles.albumInfo}>
              <strong style={styles.albumName}>Album: {album.name}</strong>
              <strong style={styles.artistName}>Artist: {album.artist}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resultsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "800px",
  },
  albumCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  albumImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  albumInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  albumName: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  },
  artistName: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default AlbumSearch;
