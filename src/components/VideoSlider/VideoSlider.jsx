// import React from "react";
// import "./VideoSlider.scss";

// const VideoPlayer = () => {
//   const videoId = ""; // Replace 'VIDEO_ID' with your YouTube video ID

//   return (
//     <div className="videos">
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/GifMkcz6qYc"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/MDLZVNa44ms"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/ugcBuZ9f7h0"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/kAQvuhewNNY"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/U1vwmhbJN5g"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/u26UGUMG9-4"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/x7PpMF_B2C4"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//       <iframe
//         width="240"
//         height="440"
//         src="https://www.youtube.com/embed/U_4dgpGGoH8"
//         title="YouTube Video Player"
//         frameBorder="0"
//         allowFullScreen></iframe>
//     </div>
//   );
// };

// export default VideoPlayer;

import React from "react";
import "./VideoSlider.scss";

const VideoPlayer = () => {
  const videoId = "MywGNmoSJsA"; // Replace 'VIDEO_ID' with your YouTube video ID
  const arrayOfVideos = [
    {
      link: "https://www.youtube.com/embed/MDLZVNa44ms`",
    },
    {
      link: "https://www.youtube.com/embed/ugcBuZ9f7h0",
    },
    {
      link: "https://www.youtube.com/embed/kAQvuhewNNY`",
    },
    {
      link: "https://www.youtube.com/embed/GifMkcz6qYc`",
    },
    {
      link: "https://www.youtube.com/embed/U1vwmhbJN5g`",
    },
    {
      link: "https://www.youtube.com/embed/u26UGUMG9-4`",
    },
    {
      link: "https://www.youtube.com/embed/x7PpMF_B2C4`",
    },
    {
      link: "https://www.youtube.com/embed/U_4dgpGGoH8`",
    },
  ];

  return (
    <div className="videos">
      {arrayOfVideos.map((item, index) => {
        return (
          <iframe
            key={index}
            width="240"
            height="440"
            src={item.link}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen></iframe>
        );
      })}
    </div>
  );
};

export default VideoPlayer;
