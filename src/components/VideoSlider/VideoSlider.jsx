import React, { useEffect, useState } from "react";
import "./VideoSlider.scss";
import "../../firebase";
import { db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const VideoPlayer = () => {
  // VIDEO REVIEWS
  const videoReviewsCollectionRef = collection(db, "videoReviews");
  const [videoReviews, setVideoReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("VIDEO-REVIEWS", videoReviews);
  useEffect(() => {
    const getVideoReviews = async () => {
      const data = await getDocs(videoReviewsCollectionRef);
      setVideoReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getVideoReviews();
  }, []);

  return (
    <div className="videos">
      {videoReviews?.map((videoReview) => (
        <iframe
          key={videoReview.id}
          width="240"
          height="440"
          src={videoReview.link}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen></iframe>
      ))}
    </div>
  );
};

export default VideoPlayer;
