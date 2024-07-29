// import React, { useEffect, useState } from "react";


// const FetchApi = () => {
//     const [data, setData] = useState([])
//     console.log(data);
//     useEffect(() => {
//       const fetchApi = async () => {
//         const res = await fetch(
//           "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
//           {
//             method: "GET",
//             headers: {
//               "x-rapidapi-key":
//                 "e8aaab0f7cmshfeeebdb03c0fae6p1ed5b6jsnd679fcd3908b",
//               "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//             },
//           }
//         );
//         const data = await res.json()
//         return data
//       };
//       fetchApi().then((res)=> {
//         setData(res)
//       }).catch((err)=> {
//         console.log(err);
//       })
//     }, []);
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default FetchApi

import React, { useEffect, useContext } from "react";
import { VideoContext } from "../../assets/context";

const FetchApi = () => {
    const { videos, setVideos } = useContext(VideoContext);

    useEffect(() => {
        const fetchApi = async () => {
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
            return data;
        };

        fetchApi()
            .then((res) => {
                setVideos(res.items);  // Assuming the response structure
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setVideos]);

    return (
        <div>
            {/* Render data here */}
            {videos.map((video, index) => (
                <div key={index}>
                    <h3>{video.snippet.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default FetchApi;

