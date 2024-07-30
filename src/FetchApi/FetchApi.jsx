import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/ApiContext";

const FetchApi = () => {
  const { setData } = useContext(DataContext);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(
          "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "e8aaab0f7cmshfeeebdb03c0fae6p1ed5b6jsnd679fcd3908b",
              "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        setData(data.items); 
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchApi();
  }, [setData]);

  return null; 
};

export default FetchApi;
