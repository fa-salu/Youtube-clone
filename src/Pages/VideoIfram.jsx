import React, { useContext } from "react";
import { DataContext } from "../Context/ApiContext";

const VideoIfram = () => {
  const { data } = useContext(DataContext);

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div style={style.container}>
      {data.map((item) => (
        <section  style={style.section}>
          <div key={item.id.videoId} style={style.video}>
            <iframe
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={item.snippet.title}
              style={style.thumbnail}
            ></iframe>
          </div>
          <p style={style.viNames}>{item.snippet.title}</p>
        </section>
      ))}
    </div>
  );
};

export default VideoIfram;

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '90px',
    marginLeft: '60px',
  },
  section: {
    width: '300px',
    margin: '10px',
    textAlign: 'center',
  },
  video: {
    width: '300px',
    height: '200px',
    background: '#eee', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  viNames: {
    marginTop: '5px',
    fontSize: '14px',
    color: '#333',
  },
};
