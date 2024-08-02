import React from "react";
import { useParams } from "react-router-dom";

const VideoPlay = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlay;
