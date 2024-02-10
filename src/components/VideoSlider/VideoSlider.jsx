import { useEffect, useState } from "react";
import "./VideoSlider.scss";
import "../../firebase";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const VideoPlayer = () => {
  // VIDEO REVIEWS
  const videoReviewsCollectionRef = collection(db, "videoReviews");
  const [videoReviews, setVideoReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("VIDEO-REVIEWS", videoReviews);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const videoReviewsData = await getDocs(videoReviewsCollectionRef);
      const sortedVideoReviews = videoReviewsData.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp);

      setVideoReviews(sortedVideoReviews);
      setLoading(false);
    };

    fetchData();
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
