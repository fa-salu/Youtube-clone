import React, { useContext, useState,useEffect } from "react";
import { DataContext } from "../Context/ApiContext";


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options, retries = 5, delayTime = 1000) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    } else if (response.status === 429) {
      throw new Error('Too many requests');
    } else {
      throw new Error('Fetch error');
    }
  } catch (error) {
    if (retries === 0) throw error;
    await delay(delayTime);
    return fetchWithRetry(url, options, retries - 1, delayTime * 2); 
  }
};

const FetchApi = () => {
  const { setData, getData } = useContext(DataContext);

  

  useEffect(() => {
    const fetchDatas = async () => {
      if (!getData) return; 

      const url = 'https://youtube138.p.rapidapi.com/search/?q=despacito&hl=en&gl=US';
      const options = {
        method: "GET",
        headers: {
          'x-rapidapi-key': '1bdd5a8f2bmsh19e1267cc457c53p145e0fjsnde7ef70e2872',
          'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        }
      };

      try {
        const result = await fetchWithRetry(url, options);
        setData(result.contents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDatas();
  }, [getData, setData]); // Fetch data when getData or setData changes

  return (
    <div>
    </div>
  );
};

export default FetchApi;
