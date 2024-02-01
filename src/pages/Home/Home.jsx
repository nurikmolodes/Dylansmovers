import React, { useState } from "react";
import "./Home.scss";
import Questions from "../../components/Questions/Questions";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const next = () => {};
  return (
    <div
      className="home"
      style={{
        background: `url(https://cdngeneral.rentcafe.com//dmslivecafe/UploadedImages/0648e513-cd26-4793-aa98-6e99f15d527f.jpg)`,
      }}>
      <section className="header">
        <div className="top">
          <p className="title">DMV Movers</p>
          <p className="subtitle">
            Moving can be challenging, yet it doesn't need to turn into a nightmare.
          </p>
        </div>
        <Questions />
      </section>
    </div>
  );
};

export default Home;
