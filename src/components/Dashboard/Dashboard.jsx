/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Dashboard.scss";
import "../../firebase";
import { db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp } from "firebase/firestore";

const Dashboard = ({ handleLogout }) => {
  const reviewsCollectionRef = collection(db, "reviews");
  const videoReviewsCollectionRef = collection(db, "videoReviews");
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAddReview, setLoadingAddReview] = useState(false);
  const [loadingAddVideoReview, setLoadingAddVideoReview] = useState(false);
  const [loadingDeleteReview, setLoadingDeleteReview] = useState(false);
  const [loadingDeleteVideoReview, setLoadingDeleteVideoReview] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "", link: "" });
  const [newVideoReview, setNewVideoReview] = useState({ link: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const reviewsData = await getDocs(reviewsCollectionRef);
      const videoReviewsData = await getDocs(videoReviewsCollectionRef);
      // Sort reviews and video reviews by timestamp before updating the state
      const sortedReviews = reviewsData.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp);
      const sortedVideoReviews = videoReviewsData.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp);
      setReviews(sortedReviews);
      setVideoReviews(sortedVideoReviews);
      setLoading(false);
    };

    fetchData();
  }, []);

  const addReview = async () => {
    if (!newReview.name || !newReview.text || !newReview.link) {
      alert("Please fill out all fields.");
      return;
    }

    setLoadingAddReview(true);

    try {
      await addDoc(reviewsCollectionRef, { ...newReview, timestamp: serverTimestamp() });
      setNewReview({ name: "", text: "", link: "" });

      const data = await getDocs(reviewsCollectionRef);
      const sortedReviews = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp);
      setReviews(sortedReviews);
    } catch (error) {
      console.error("Error adding review:", error.message);
      alert("An error occurred while adding the review. Please try again.");
    }

    setLoadingAddReview(false);
  };
  function embedYoutubeLink(link) {
    // Check if the input link matches any of the supported formats
    if (
      link.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/,
      )
    ) {
      // Extract the video ID from the link
      var videoId = link.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/,
      )[1];
      // Construct the embedded link
      var embeddedLink = "https://www.youtube.com/embed/" + videoId;
      return embeddedLink;
    }
    // Check if the input link is already an embedded link
    else if (link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/embed\/)([\w-]+)/)) {
      // Return the embedded link unchanged
      return link;
    } else {
      return "Invalid YouTube link format";
    }
  }
  const addVideoReview = async () => {
    setLoadingAddVideoReview(true);

    try {
      await addDoc(videoReviewsCollectionRef, {
        link: embedYoutubeLink(newVideoReview.link.trim()),
        timestamp: serverTimestamp(),
      });
      setNewVideoReview({ link: "" });

      const data = await getDocs(videoReviewsCollectionRef);
      const sortedVideoReviews = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp);
      setVideoReviews(sortedVideoReviews);
    } catch (error) {
      console.error("Error adding video review:", error.message);
      alert("An error occurred while adding the video review. Please try again.");
    }

    setLoadingAddVideoReview(false);
  };

  const deleteReview = async (id) => {
    setLoadingDeleteReview(true);
    await deleteDoc(doc(db, "reviews", id));
    const data = await getDocs(reviewsCollectionRef);
    const sortedReviews = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => b.timestamp - a.timestamp);
    setReviews(sortedReviews);
    setLoadingDeleteReview(false);
  };

  const deleteVideoReview = async (id) => {
    setLoadingDeleteVideoReview(true);
    await deleteDoc(doc(db, "videoReviews", id));
    const data = await getDocs(videoReviewsCollectionRef);
    const sortedVideoReviews = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => b.timestamp - a.timestamp);
    setVideoReviews(sortedVideoReviews);
    setLoadingDeleteVideoReview(false);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleVideoReviewChange = (e) => {
    const { name, value } = e.target;
    setNewVideoReview((prevVideoReview) => ({ ...prevVideoReview, [name]: value }));
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {(loading ||
        loadingAddReview ||
        loadingAddVideoReview ||
        loadingDeleteReview ||
        loadingDeleteVideoReview) && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="video-review-section">
        <div className="add-video-review-form">
          <h3 className="form-title">Add New Video Review</h3>
          <input
            type="text"
            placeholder="Add a YouTube video link"
            name="link"
            value={newVideoReview.link}
            onChange={handleVideoReviewChange}
          />
          <button className="add-button" onClick={addVideoReview} disabled={loadingAddVideoReview}>
            {loadingAddVideoReview ? "Adding..." : "Add Video Review"}
          </button>
        </div>
        <div className="video-review-list">
          {videoReviews.map((videoReview) => (
            <div className="video-review-card" key={videoReview.id}>
              <iframe
                width="240"
                height="440"
                src={videoReview.link}
                title="YouTube Video Player"
                frameBorder="0"
                allowFullScreen></iframe>
              <button
                className="delete-button"
                onClick={() => deleteVideoReview(videoReview.id)}
                disabled={loadingDeleteVideoReview}>
                {loadingDeleteVideoReview ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="review-section">
        <div className="add-review-form">
          <h3 className="form-title">Add New Review</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newReview.name}
            onChange={handleReviewChange}
            required
          />
          <input
            type="text"
            placeholder="Text"
            name="text"
            value={newReview.text}
            onChange={handleReviewChange}
            required
          />
          <input
            type="text"
            placeholder="Add a link to the review source"
            name="link"
            value={newReview.link}
            onChange={handleReviewChange}
            required
          />
          <button className="add-button" onClick={addReview} disabled={loadingAddReview}>
            {loadingAddReview ? "Adding..." : "Add Review"}
          </button>
        </div>
        <div className="review-list">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <a href={review.link} target="_blank" target="_blank">
                <h3 className="review-name">{review.name}</h3>
                <p className="review-text">{review.text}</p>
              </a>
              <button
                className="delete-button"
                onClick={() => deleteReview(review.id)}
                disabled={loadingDeleteReview}>
                {loadingDeleteReview ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
