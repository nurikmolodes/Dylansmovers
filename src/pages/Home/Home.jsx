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
            <p className="title">DMV Area Movers</p>
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
              Dylan's Movers provide moving solutions to all our customers in the Northern Virginia,
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
      <section className="third-section">
        <div className="title">
          <p className="first">Trusted local movers in DMV area</p>
          <p className="second">Our team is here to help you every step of the way.</p>
        </div>
        <div className="description">
          <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62f14e4cd09b133fa5995916_long%20distance.svg" />
          <p>
            If you’re planning a local move or a long-distance move, you need a company you can
            trust to handle your belongings with extra care. We take the time to carefully pack your
            belongings, load them onto our trucks, and transport them to your new home or office
            safely and efficiently.
          </p>
        </div>
      </section>
      <section className="fourth-section">
        <p className="title">Why should you choose our moving services?</p>
        <div className="services">
          <div className="service">
            <img
              src="https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg"
              alt=""
            />
            <p className="up">Assembly Not Required</p>
            <p className="down">
              We carefully take apart and reassemble your furniture back the way it was - so you can
              have a restful first night!
            </p>
          </div>
          <div className="service">
            <img
              src="https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg"
              alt=""
            />
            <p className="up">Full Move Protection</p>
            <p className="down">
              Our movers take important steps to protect your home and cover all of your belongings
              in full protection.
            </p>
          </div>
          <div className="service">
            <img
              src="https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg"
              alt=""
            />
            <p className="up">Packing Services</p>
            <p className="down">
              Let your moving stress melt away, move with Dylan' Movers knowing that your family's
              belongings are safe.
            </p>
          </div>
          <div className="service">
            <img
              src="https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg"
              alt=""
            />
            <p className="up">Ready For Any Sizes</p>
            <p className="down">
              From moving one item to a huge house or a small office to a whole building, it makes
              no difference to us, we have trucks for any size of your move
            </p>
          </div>
        </div>
        <div className="text">
          <img
            src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62f14e4bcba97a63247a4997_local.svg"
            alt=""
          />
          <p>
            At BoxStar Movers, we take the safety of your belongings seriously. That is why our
            North Virginia movers take important steps to cover all of your belongings in full
            protection. Our team is trained to pack your furniture and personal stuff carefully,
            ensuring everything is wrapped to prevent damage during the move. We carefully take
            apart and reassemble your furniture back the way it was - so you can have a restful
            first night in your new home. We have trucks for any size of your move. Our fleet is
            well-maintained and equipped with the latest technology to ensure your belongings are
            transported safely. No matter how big or small your move is, we’re ready to assist you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
