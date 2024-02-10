/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Home.scss";
import Questions from "../../components/Questions/Questions";
import { Link } from "react-router-dom";
import move from "../../assets/move.png";
import movers from "../../assets/logo.png";
import VideoPlayer from "../../components/VideoSlider/VideoSlider";
import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import why4 from "../../assets/why4.png";
import "../../firebase";
import { db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const Home = () => {
  const [section, setSection] = useState(1);
  // REVIEWS
  const reviewsCollectionRef = collection(db, "reviews");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("REVIEWS", reviews);
  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getReviews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <section
        className="header"
        style={{
          background: `url(https://cdngeneral.rentcafe.com//dmslivecafe/UploadedImages/0648e513-cd26-4793-aa98-6e99f15d527f.jpg)`,
        }}>
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
            <img src={why3} alt="" />
            <p className="up">Assembly Not Required</p>
            <p className="down">
              We carefully take apart and reassemble your furniture back the way it was - so you can
              have a restful first night!
            </p>
          </div>
          <div className="service">
            <img src={why2} alt="" />
            <p className="up">Full Move Protection</p>
            <p className="down">
              Our movers take important steps to protect your home and cover all of your belongings
              in full protection.
            </p>
          </div>
          <div className="service">
            <img src={why1} alt="" />
            <p className="up">Packing Services</p>
            <p className="down">
              Let your moving stress melt away, move with Dylan' Movers knowing that your family's
              belongings are safe.
            </p>
          </div>
          <div className="service">
            <img src={why4} alt="" />
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
            At Dylan's Movers, we take the safety of your belongings seriously. That is why our
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
      <section className="fifth-section">
        <p>Our Customers Say It Best!</p>
        <VideoPlayer />
      </section>
      <section className="sixth-section">
        <p>Google Reviews</p>
        <div className="reviews">
          {reviews.map((item, index) => (
            <a href={item.link} target="_blank" key={index} rel="noreferrer">
              <div className="each">
                <strong>{item.name}</strong>
                <p>{item.text}</p>
                <div className="bottom">
                  <div className="stars">
                    <img
                      src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500d605fdd832677d9f30f_star-fill.svg"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500d605fdd832677d9f30f_star-fill.svg"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500d605fdd832677d9f30f_star-fill.svg"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500d605fdd832677d9f30f_star-fill.svg"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500d605fdd832677d9f30f_star-fill.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/64500ce46baead775783fb05_google_logo.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="seventh-section">
        <div className="resources">
          <div className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d65754ca4169533bf13b63_DEPofTransport.svg"
              loading="lazy"
              id="w-node-e3a9650a-7038-0a90-c6dd-7019f6aee335-c4813a8a"
              alt="Department Of Transportation Badge"
            />
          </div>
          <div id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a90-c4813a8a" className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d6575417aecdb9447d268b_Yelp.svg"
              loading="lazy"
              alt="YELP Badge"
            />
          </div>
          <div id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a8c-c4813a8a" className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62dfbfedb83ee8b2bbe92dd7_Thumbtrack.svg"
              loading="lazy"
              id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a8d-c4813a8a"
              alt="Thumbtack Top Pro Badge"
            />
          </div>
          <div id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a8e-c4813a8a" className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d65754e934bfa723672aac_Google.svg"
              loading="lazy"
              alt="Google 5 stars badge"
            />
          </div>
          <div className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62dfbfdebf672a27e59b3dab_Angies.png"
              loading="lazy"
              id="w-node-_710dc1c9-f2a6-9e27-91f1-6d58005d2fce-c4813a8a"
              alt="Angies List Super Service Award Badge"
            />
          </div>
          <div id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a92-c4813a8a" className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d657543f9316c3b42ed4eb_HomeAdvisor.svg"
              loading="lazy"
              alt="Home Advisor Five Star Rating Badge"
            />
          </div>
          <div id="w-node-_0d0823f4-eb21-f980-b3b0-1e1fc4813a94-c4813a8a" className="resource">
            <img
              src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d65754e934bfc658672aad_ProVirginiaMovers.svg"
              loading="lazy"
              alt="Pro Virginia Movers Badge"
            />
          </div>
        </div>
      </section>
      <section className="eighth-section">
        <p className="title">Forget about stress and move with Dylan's Movers.</p>
        <div className="text">
          <p>
            Are you overwhelmed by the approaching move? Let your moving stress melt away and move
            with Dylan's Movers, knowing your family's belongings are safe. Our team of experienced
            local movers in Northern VA is dedicated to providing our customers with the best
            experience possible. We’re ready to organize your move for you, but if you want to do it
            yourself, we provide helpful moving tips to help you keep everything seamless and under
            control.
          </p>
          <p>
            Moving is hard, but it doesn’t have to be a nightmare. Check out our storage solutions,
            packaging services, and more. Benefit from super-efficient moving services and enjoy
            your new house, office, or apartment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
