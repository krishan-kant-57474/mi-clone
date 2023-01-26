import React from "react";
import "../Styles/VideoCard.css";

const playButton = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m9.5 16.5 7-4.5-7-4.5ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
  </svg>
);

const VideoCard = ({ image, name, index }) => {
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <a href="#">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
