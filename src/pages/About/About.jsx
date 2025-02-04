/* eslint-disable react/no-unescaped-entities */
import "./About.scss";
import tips from "../../assets/tips.png";
import Accordion from "../../components/Accordion/Accordion";
import { useEffect } from "react";

const About = () => {
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
    <div className="abouter">
      <header>
        <p>We Promise. We Deliver.</p>
        <span>With Dylan's Movers, Focus on What Matters - We've Got Your Back.</span>
      </header>
      <section className="under-header">
        <div className="text">
          <p>Why Dylan's Movers?</p>
          <span>
            Dylan's Movers offers a professional and personalized moving experience tailored to your
            unique moving needs, whether you're relocating locally or long-distance. ‍
          </span>
          <span>
            - All-in-One Services: From expert packing to secure storage, we carefully handle every
            aspect of your move, including special items.
          </span>
          ‍
          <span>
            - Transparent Pricing: Expect clear, upfront quotes with no hidden fees, allowing for
            straightforward financial planning.
          </span>
          <span>
            ‍ - Expert Team: Our professional, background-checked movers treat your belongings with
            the utmost care, supported by top-notch customer service.
          </span>
          ‍ <span>Dylan's Movers - Your Heroes for Moving Day!</span>
        </div>
        <img src={tips} />
      </section>
      <section className="second">
        <div className="labels">
          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62e15ea7f23937aa405cc759_tools-fill.svg" />
            <span>Enjoy the most comprehensive moving service.</span>
            <p>
              Take comfort in knowing that your movers are highly trained and extensively experienced
              in the field. We handle everything from packing to unpacking, from disassembly to
              assembly, so you don’t have to worry about anything. Never has there been a service
              that covers the full spectrum of what needs to get done.Selected as a <a href="https://www.localmovers.com/movers-in-alexandria" target="_blank">Top Mover</a> by localmovers.com. 
            </p>
          </div>

          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62e15edf476f3093d77f72af_user-heart-line.svg" />
            <span>Nothing lost, nothing broken.</span>
            <p>
              You’ll be able to focus on what’s essential in getting from A to B. Our
              professionalmoving crew will take care of the rest, assuring you of complete
              protection of youritems. No more last-minute panic—get the security and peace of mind
              you deserve bytrusting Dylan's Movers to care for your possessions.
            </p>
          </div>

          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62e15ebb3fd1bec3b7b150b9_shield-check-fill.svg" />
            <span>We’re fully licensed and insured.</span>
            <p>
              Our professionals are not only trained but are licensed and insured by
              accreditedauthorities. Your move will be in good hands with experts that follow
              industry standards,so you’ll be able to get all your possessions into your new home
              seamlessly.
            </p>
          </div>
        </div>
      </section>
      <section className="third">
        <p className="title">Frequently asked questions</p>
        <Accordion items={firstOfAll} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d4678befb907d8da909_First%2520Of%2520All.webp" />
      </div>
      <section className="third">
        <Accordion items={fiveWeeks} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d56c54a6bc501b8913f_5%2520weeks.webp" />
      </div>
      <section className="third">
        <Accordion items={firstWeek} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d63c54a6b5c57b89163_1%2520week.webp" />
      </div>
      <section className="third">
        <Accordion items={duringTheMove} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d7d2d96da9034cf4c1d_After.webp" />
      </div>
    </div>
  );
};

export default About;
