import { useState, useEffect } from "react";
import axios from "axios";

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const output = await axios.get("/api/songs");
      console.log(output);
      setSongs(output.data);
    };
    fetchSongs();
  }, []);

  return (
    <>
      <h1>Songs</h1>
      {songs ? (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      ) : (
        <h3>No songs yet!</h3>
      )}
    </>
  );
}

export default Songs;
