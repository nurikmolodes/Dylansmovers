import React from "react";
import "./Home.scss";

const Home = () => {
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
        <form className="bottom">
          <input required type="text" placeholder="Moving from Zip, City or State" />
          <input
            required
            style={{ marginLeft: "1px" }}
            type="text"
            placeholder="Moving to Zip, City or State"
          />
          <button type="submit">Next</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
