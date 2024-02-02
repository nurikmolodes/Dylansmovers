import React, { useState } from "react";
import "./Home.scss";
import Questions from "../../components/Questions/Questions";
import { Link } from "react-router-dom";
import move from "../../assets/move.png";
import ready from "../../assets/ready.png";
import fee from "../../assets/fee.png";
import license from "../../assets/license.png";
import movers from "../../assets/logo.png";
import YouTubeSwiper from "../../components/VideoSlider/VideoSlider";
import VideoPlayer from "../../components/VideoSlider/VideoSlider";

const Home = () => {
  const [section, setSection] = useState(1);

  const reviews = [
    {
      name: "Hannah Ashenafi",
      text: "Donnell and Luis were extremely professional, helpful, and efficient! They made sure our move went smoothly and handled our things with care to make sure nothing was broken. Also the prices were much lower than what other moving companies quoted me. I will definitely book with Dylan’s again in the future.",
      link: "https://www.google.com/maps/reviews/@38.8673125,-77.2732991,17z/data=!4m5!14m4!1m3!1m2!1s103011729655769189642!2s0x89b64d4ee2f00ecf:0xd6380de506727cc3?hl=en-US",
    },
    {
      name: "chang shu",
      text: "Professional service done by all the movers, especially thanks to Luis and David who leads the moving fast and smooth.",
      link: "https://www.google.com/maps/reviews/@38.9520773,-77.3952458,12z/data=!4m5!14m4!1m3!1m2!1s106467115595804983599!2s0x89b64d4ee2f00ecf:0xd6380de506727cc3?hl=en-US&entry=ttu",
    },
    {
      name: "Eva Polsky",
      text: "The guys totally rocked it today during my move! They showed up on time and had the utmost respect and patience with me while moving. They helped me pack all the little things, wrapped everything really well, disassembled and reassembled my bed frame, dresser, and computer desk. So happy I didn’t have to do that by myself! Everything was finished in just a few hours, which is way faster than I expected. 5 stars all the way! Highly recommended.",
      link: "https://www.google.com/maps/contrib/113845499942647097788/place/ChIJzw7w4k5NtokRw3xyBuUNONY/@35.2954595,-108.4816841,4z/data=!4m6!1m5!8m4!1e1!2s113845499942647097788!3m1!1e1?hl=en-US&entry=ttu",
    },
    {
      name: "Jaclyn O'Day",
      text: "I've used Dylan's Movers twice for in town moves in DC and they have done an excellent job both times. They are affordable, professional, personable, and overall made it a great moving experience. Their communication leading up to the move and on move day is on point. They bring plastic wrap, moving blankets, and tools to assemble and disassemble furniture.",
      link: "https://www.google.com/maps/contrib/100659762590463831802/place/ChIJzw7w4k5NtokRw3xyBuUNONY/@37.0204163,-85.5283772,3z/data=!4m4!1m3!8m2!1e1!2s100659762590463831802?hl=en-US&entry=ttu",
    },
    {
      name: "Christian M",
      text: "Dylan and Luis did a great job with the move. Professional, efficient, and handled all items with care. Highly recommend for your move in the DMV area.",
      link: "https://www.google.com/maps/reviews/@31.4077468,-118.2911636,4z/data=!4m5!14m4!1m3!1m2!1s115809383069657167752!2s0x89b64d4ee2f00ecf:0xd6380de506727cc3?hl=en-US",
    },
    {
      name: "katie seaman",
      text: "Dylan and his team have literally been LIFE SAVERS for me during my move. I travel full time for work and my schedule is insanely hectic and they have been able to work with me to keep the stress from moving as low as possible. They helped pack my entire apartment which was a feat and move it into storage temporarily and then they also helped me move my stuff from the unit to my new apartment. I would not have been able to do this move without their team. Firmly recommend!!",
      link: "https://www.google.com/maps/contrib/101008673237131904317/place/ChIJzw7w4k5NtokRw3xyBuUNONY/@39.7870524,-76.5504167,8z/data=!4m6!1m5!8m4!1e1!2s101008673237131904317!3m1!1e1?hl=en-US&entry=ttu",
    },
    {
      name: "Loretta",
      text: "Ronaldo and Luis were amazing!! They helped me with my little move as I was switching apartments in the same building! The move went very smoothly, they took great care of my stuff and really thought through on how to move my things carefully! I’m very happy with the service - thank you so much! Will definitely be using you guys again in the future!",
      link: "https://www.google.com/maps/contrib/110751630925060173286/place/ChIJzw7w4k5NtokRw3xyBuUNONY/@39.0358297,-98.9087648,5z/data=!4m6!1m5!8m4!1e1!2s110751630925060173286!3m1!1e1?hl=en-US&entry=ttu",
    },
  ];
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
    </div>
  );
};

export default Home;
