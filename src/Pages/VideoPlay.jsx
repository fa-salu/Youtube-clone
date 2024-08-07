import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Context/ApiContext";

const VideoPlay = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  // Find the main video using the URL parameter
  const mainVideo = data.find((video) => video.video.videoId === id);

  // Style object for the iframe
  const iframeStyles = {
    width: "800px",
    height: "450px",
    border: "none",
    marginBottom: "20px", // Add some space below the iframe
  };

  // Style object for related videos
  const relatedVideosStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  };

  // Style object for individual video items
  const videoItemStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    width: "200px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {mainVideo ? (
        <div>
          <iframe
            style={iframeStyles}
            src={`https://www.youtube.com/embed/${mainVideo.video.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={mainVideo.video.title}
          ></iframe>

          <h3>Related Videos</h3>
          <div style={relatedVideosStyles}>
            {data
              .filter((video) => video.video.videoId !== mainVideo.video.videoId) // Exclude the main video
              .map((video) => (
                <Link to={`/videoplay/${video.video.videoId}`} key={video.video.videoId}>
                  <div style={videoItemStyles}>
                    <img src={video.video.thumbnail} alt={video.video.title} width="180" />
                    <h4 style={{ fontSize: "14px", color: "#333" }}>{video.video.title}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default VideoPlay;
