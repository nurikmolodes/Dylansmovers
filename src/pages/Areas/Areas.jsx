/* eslint-disable react/no-unescaped-entities */
import "./Areas.scss";
import tips from "../../assets/tips.png";
import Accordion from "../../components/Accordion/Accordion";
import { useEffect } from "react";

const Areas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const firstOfAll = [
    {
      title: "Why Should I Hire a Professional Mover?",
      content:
        "Professional movers make what’s usually a stressful process effortless. They are skilled moving experts that can help get all your goods from A to B without hassle.",
    },
    {
      title: "When is the Best Time to Move?",
      content: "There’s no best time to move - we’re here whenever you need to start moving!",
    },
    {
      title: "My Move Date Has Changed; What Should I Do?",
      content:
        "Please get in touch with us with the new date as soon as possible so we can reschedule.",
    },
  ];
  const fiveWeeks = [
    {
      title: "How and When Should I Pay?",
      content:
        "Please pay using cash or debit/credit card at the move. We kindly note that all card transactions incur a 4% convenience fee, and we do not accept personal checks.",
    },
    {
      title: "Am I Protected Against Loss Or Damage While My Goods Are in Transit?",
      content:
        "All movers have standard carrier-based liability with limited protection on your goods. Please read our terms & conditions or contact our support team to learn more.",
    },
    {
      title: "Can I Move Jewelry and Other Valuable?",
      content:
        "Yes, but please declare valuable items to us first to ensure their proper handling.",
    },
  ];
  const firstWeek = [
    {
      title: "Can I Move My House Plants?",
      content:
        "We can transport your house plants. However, we cannot accept any responsibility for damage during the moving process (i.e., lack of water and light, seizure on interstate lines).",
    },
    {
      title: "Can I Move My Pets?",
      content: "No, we don't move pets unfortunately.",
    },
    {
      title: "How Far in Advance Should I Schedule My Move?",
      content: "We highly recommend scheduling your move with us as soon as possible.",
    },
  ];
  const duringTheMove = [
    {
      title: "Are There Any Items That You Cannot Move?",
      content:
        "Dylan's Movers will not move any items with health and safety concerns. These include hazardous or combustible materials such as propane tanks, firearms, paints, aerosols,etc. Contact us if you have any queries about your goods.",
    },
    {
      title: "Can the Movers Arrange the Furniture to My Liking in My New Home?",
      content:
        "Of course! We call ourselves a white-glove service for a reason - we want your move tofeel seamless! We’ll work with you to ensure you’re delighted with your furniture arrangements.",
    },
    {
      title: "Can I Tip Movers?",
      content:
        "Sure! If you are satisfied with your moving experience, you’re more than welcome to tipyour movers.",
    },
  ];

  return (
    <div className="areas">
      <header>
        <p>Service areas</p>
        <span>Moving services offered in your area</span>
      </header>
      <div className="blocks">
        <div className="block">
          <img
            src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d68a6135c5c72cc10998af_Full%20Move%20Protection.svg"
            loading="lazy"
            width="60"
            height="60"
            alt=""
          />
          <div className="text">Full Move Protective</div>
        </div>
        <div className="block">
          <img
            src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d68a5f7911f41b90af9794_Ready%20For%20Any%20Size.svg"
            loading="lazy"
            width="60"
            height="60"
            alt=""
          />
          <div className="text">Ready For Any Size</div>
        </div>
        <div className="block">
          <img
            src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d68a5f00fc120ba68638be_Packing%20Services.svg"
            loading="lazy"
            width="60"
            height="60"
            alt=""
          />
          <div className="text">Packing Services</div>
        </div>
        <div className="block">
          <img
            src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62d68a5fe253949c0761697a_Assembly%20Not%20Required.svg"
            loading="lazy"
            width="60"
            height="60"
            alt=""
            className="image-2"
          />
          <div className="text">Assembly Not Required</div>
        </div>
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Stafford County</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649ae0f61c79f9ddf6b4ed12_62d7ab463632836843e48416_Stafford-County-p-1600.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Prince William County</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649af2a8b88f3b3493a0fb96_62d7ad03ca6635d1777d4994_Prince-William-County.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Sterling</p>
      </section>
      <div className="image">
        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/loudoun/dulles-airport-image-1-ab4f2cf45056a36_ab4f2e2d-5056-a36a-07ac8585edc2196f.jpg" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Loudoun County</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649af3b0e07ecbe198b891c7_62d66dc3b43387d08d6192cc_Loudoun-County-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Vienna</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649af429bec206eea72940e9_62d66d186aba1113c73a0982_Vienna-Corner-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">McLean</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bd55d790a27e89e0caf70_62d66be4bc0ead06c5eacd23_McLean.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Falls Church</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bd5c23db704aca23bc380_62d7ac3e6642891eb7ef3ffb_Falls-Church-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Herndon Movers</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bd5710cf4801a457272ab_62d7ac643632838c4de49a1f_Herndon-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Clifton</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bd5dc386d144f4fa82b9b_62d7abe9160fff0ff4e89bc2_Clifton-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Maryland</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bdb83d4427b2d59befc03_62d7abd536328337c0e48cda_Maryland-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Washington DC</p>
      </section>
      <div className="image">
        <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTi0ViUDfyXSrTN2QUsOh8yMOs6AYdDPbx2ssYuApoTVdNX9ZeYcU1fPzW1wZ23bkAp-6lzsUKvxkTW-oVLLV0FPxHOJMg0M5e6j0pJCQ" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Arlington, VA</p>
      </section>
      <div className="image">
        <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQtQFMWyOu_QMeouHObSPSzH3Lf-r1aeDzb4VJqnCqWfDucQ0WLKBEt1aVHmq5Rx2qU-ZVs82wl3h_TNSyeSDMp7Lf4vSb0NlvtCBo60A" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Fairfax County</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bdc1ddf65ec0f6367626a_62d7ab2956c60b840ab81dc3_Fairfax-County-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Chantilly</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649bdc4fc1906e34c52ccaac_62d665f7b43387e38f613b08_Chantilly-p-2000.webp" />
      </div>
      {/* break  */}
      <section className="third">
        <p className="title">Tysons Corner</p>
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/649af43c8e3290aee18450fc_62d7ac93034af77060e3489a_Tysons-Corner-p-2000.webp" />
      </div>
      {/* break  */}
    </div>
  );
};

export default Areas;
