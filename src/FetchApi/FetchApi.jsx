import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/ApiContext";

const FetchApi = () => {
  const { setData } = useContext(DataContext);
  useEffect(() => {
    const fetchDatas = async () => {
      const url =
        "https://youtube138.p.rapidapi.com/search/?q=despacito&hl=en&gl=US";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e8aaab0f7cmshfeeebdb03c0fae6p1ed5b6jsnd679fcd3908b",
          "x-rapidapi-host": "youtube138.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.contents);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDatas();
  }, []);
  return <div></div>;
};

export default FetchApi;
