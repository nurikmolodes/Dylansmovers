import React, { useState } from "react";
import "./Home.scss";
import Questions from "../../components/Questions/Questions";
import { Link } from "react-router-dom";
import move from "../../assets/move.png";
import ready from "../../assets/ready.png";
import fee from "../../assets/fee.png";
import license from "../../assets/license.png";
import movers from "../../assets/logo.png";

const Home = () => {
  const [section, setSection] = useState(1);
  return (
    <div
      className="home"
      style={{
        background: `url(https://cdngeneral.rentcafe.com//dmslivecafe/UploadedImages/0648e513-cd26-4793-aa98-6e99f15d527f.jpg)`,
      }}>
      <section className="header">
        {section !== 5 && (
          <div className="top">
            <p className="title">DMV Movers</p>
            <p className="subtitle">
              Moving can be challenging, yet it doesn't need to turn into a nightmare.
            </p>
          </div>
        )}
        <Questions section={section} setSection={setSection} />
      </section>
      <section className="info">
        <div className="titles">
          <div className="subtitle">
            <p className="first">We are a moving company with personalized service.</p>
            <p className="second">
              BoxStar Movers provide moving solutions to all our customers in the Northern Virginia,
              Washington D.C. and Maryland areas.
            </p>
            <Link>More About Us</Link>
          </div>
          <img src={move} />
        </div>

        <div className="guarantees">
          <div className="up">
            <div className="guarantee">
              <img
                src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62cfde96c58a3a466fff197d_tools-fill.svg"
                alt=""
              />
              <p>Ready & Fully Equipped</p>
            </div>
            <div className="guarantee">
              <img
                src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62cfdbd8654fb1b40d992003_eye-2-fill.svg"
                alt=""
              />
              <p>100% Transparent Fees</p>
            </div>
            <div className="guarantee">
              <img
                src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62cfde8c9b9e41391aaa743c_shield-check-fill.svg"
                alt=""
              />
              <p>Licensed & Insured</p>
            </div>
          </div>
          <p className="down">
            <img src={movers} />
            <p>
              Welcome to Dylan's Movers, the leading moving company in Northern VA. Our team of
              experienced professionals strives to provide top-notch moving services to customers in
              Northern Virginia, Washington D.C., and Maryland areas. We’re dedicated to making your
              experience as stress-free as possible. We understand that moving can be a daunting
              challenge, but with our team by your side, you can sit back and relax, knowing that
              your personal belongings are in good hands.
            </p>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
