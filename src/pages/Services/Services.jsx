import "./Services.scss";
import Accordion from "../../components/Accordion/Accordion";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const firstOfAll = [
    {
      title: "What defines a local move",
      content:
        "Local moves typically involve relocating within the same city or a short distance away, often within a 50-mile radius. What’s important is that a local move is an intrastate move, meaning that you do not switch the states where you live.",
    },
    {
      title: "Why should i hire a professional mover?",
      content:
        "Professional movers make what’s usually a stressful process effortless. They are skilled moving experts who can help get all your goods from A to B without hassle.",
    },
    {
      title: "Am I Protected Against Loss Or Damage While My Goods Are in Transit?",
      content:
        "All movers have standard carrier-based liability with limited protection on your goods. Please read our terms and conditions or contact our support team to learn more.",
    },
  ];
  const fiveWeeks = [
    {
      title: "What is interstate moving",
      content:
        "Interstate moving services can be a great way to relocate your household from one state to another. With interstate movers, your belongings will be transported by a professional team of drivers and packers specializing in long-distance moves. Our interstate movers take care of everything: packing up all your belongings, loading them onto the truck, driving across the country with them, and unloading them into your new home or apartment on the other side!",
    },
    {
      title: "Do I need to pack myself or can the movers do it for me?",
      content:
        "The movers will pack your belongings for you, and they have a variety of packing materials to choose from. If you prefer not to use their professional packing services, the moving company can provide advice on how to do it yourself.",
    },
    {
      title: "What kind of things can I pack in a truck for moving cross-country?",
      content:
        "There are rules for transportation due to safety hazards. So, certain items on moving trucks are forbidden, including propane, paint, heavy chemicals, and guns with ammunition. We have lists of items that cannot be transported on the truck, so make sure you speak with one before loading up your vehicle or trailer.",
    },
  ];
  const firstWeek = [
    {
      title: "How much does commercial moving cost?",
      content:
        "The answer to that question depends on the size and complexity of your project as well as where you want your belongings moved from and to. Generally speaking, though, the average cost is around $4 per square foot with a minimum charge of $2,000 plus travel costs for each 1 hour spent in transit time (traveling both ways).",
    },
    {
      title: "What is the difference between commercial and residential moving services?",
      content:
        "Commercial movers are designed to handle large-scale moves for businesses, their employees, and customers. This is a service that business owners should not try to tackle on their own. You've come to the right place if you need help with your company's move! We offer comprehensive commercial moving services at a price that can't be beaten.",
    },
    {
      title: "Who are the most common types of businesses that need to hire professional movers?",
      content:
        "There are a few things to take into account before hiring us. You need our professional movers if you have large equipment or machinery, more than 50 boxes of miscellaneous items, or if the move is across state lines. You may also require us for an office relocation! The most common types of businesses that hire commercial moving services are offices, retail shops, and warehouses. If you run an office, you probably have filing cabinets, desks, or other large pieces of furniture that need to be moved. If your business is a retail shop, we can transport all of the merchandise while packing up your store with equipment like cash registers and kiosks. We're experienced in transporting heavy items from warehouse environments.",
    },
  ];
  const duringTheMove = [
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
      title: "How and when should i pay?",
      content:
        "Please pay using cash or debit/credit card at the move. We kindly note that all card transactions incur a 4% convenience fee, and we do not accept personal checks.",
    },
  ];
  const afterTheMove = [
    {
      title: "How do you pack my belongings",
      content:
        "At Dylan's Movers, we take a layered approach to packing. We pack your clothing right on top of the items that need protection and cushioning first, then finally build up all your heavier boxes with crumpled paper and protective items so they don’t break anything in their path. We use sturdy materials like moving-grade cardboard boxes, shrink-wrap and bubble wrap to protect your belongings.",
    },
    {
      title: "What should I pack myself and what can the moving company do for me?",
      content:
        "If you have a small move, you may want to pack yourself. Here are some items that should be done by the movers: furniture disassembly and re-assembly; heavy boxes (over 50 pounds); large appliances; fragile items like china or glassware. Some things can make your packing job easier – but there is no getting around the hard work and experience required to wrap everything securely for a longer journey. In addition to packing for a long journey, you need to pack each item so it's ready and easy to unpack.",
    },
    {
      title: "How long will it take to pack and unpack all of my belongings?",
      content:
        "The time it takes to pack and unpack your things depends on how much stuff you have. The more your things weigh, the longer it will take to load and unload them into trucks on both ends of a move. It's important that you plan for enough time – at least three days - if not more, so everything can be packed properly. You'll need much less time to pack up a smaller apartment or condo but it's better to give yourself more of a cushion so stress levels remain low.",
    },
  ];
  const labor = [
    {
      title: "How do I know if my move is a small job or not?",
      content:
        "A small job moving service is for those who need to move a few things or just one item. You know if your move falls into this category when it doesn't require all the services of a full-service mover - such as packing and unpacking, loading, driving logistics, de-cluttering before your arrival in the new place etc.",
    },
    {
      title: "Why should I use a small job mover?",
      content:
        "Small job movers are for people with only a few items. These movers are less expensive than full-service moving companies. The other benefit is that you can save a lot of time by skipping the packing, unpacking or driving logistics services. If your move doesn't require all the services of a full-service mover - such as loading, driving, unloading, and packing then you may be in need of a small job mover.",
    },
    {
      title: "Do Dylan's movers pack and move whole houses?",
      content:
        "From packing supplies to box up all of your small miscellaneous items to loading all your items into a truck, we do it all! You can trust us to get the job done, and get it done right.",
    },
  ];
  const piano = [
    {
      title: "Why should I hire a professional piano mover?",
      content:
        "Moving a piano is one of the most delicate and complicated moves, and it's imperative to have expert help who has done this many times before. We know how pianos work inside-out - all their quirks, intricacies, what they can withstand on their own as well as with other heavy objects around them in transit.",
    },
    {
      title: "How much does it cost to move a piano?",
      content:
        "Piano move costs can vary based on the type of piano and the difficulty of access in both locations. We estimate the cost of a piano move by discussing your needs and providing you with an in-home quote for any tricky situations.",
    },
    {
      title: "What should I keep with me on my moving day?",
      content:
        "Bring everything you or your family needs on your move day with you. Common items include soap, toothbrushes, toothpaste, toilet paper and paper towel. A medication list, important paperwork (like birth certificates and social security cards), and items that hold sentimental value (jewelry, credit cards, bank account numbers, etc.) should also be packed up. You can combine these essential items into a box or bag to take with you on your moving day.",
    },
  ];
  const gun = [
    {
      title: "How Far in Advance Should I Schedule My Move?",
      content: "We highly recommend scheduling your move with us as soon as possible.",
    },
    {
      title: "Are There Any Items That You Cannot Move?",
      content:
        "Dylan's Movers will not move any items with health and safety concerns. These include hazardous or combustible materials such as propane tanks, firearms, paints, aerosols, etc. Contact us if you have any queries about your goods.",
    },
    {
      title: "Am I Protected Against Loss Or Damage While My Goods Are in Transit?",
      content:
        "All movers have standard carrier-based liability with limited protection on your goods. Please read our terms &amp; conditions or contact our support team to learn more.",
    },
  ];
  const junk = [
    {
      title: "Can the Movers Arrange the Furniture to My Liking in My New Home?",
      content:
        "Of course! We call ourselves a white-glove service for a reason - we want your move to feel seamless! We’ll work with you to ensure you’re delighted with your furniture arrangements.",
    },
    {
      title: "Can I Move My House Plants?",
      content:
        "We can transport your house plants. However, we cannot accept any responsibility for damage during the moving process (i.e., lack of water and light, seizure on interstate lines).",
    },
    {
      title: "When is the Best Time to Move?",
      content: "There’s no best time to move - we’re here whenever you need to start moving!",
    },
  ];

  return (
    <div className="services">
      <header>
        <p>We provide all types of moving services</p>
      </header>

      <section className="third">
        <p className="title">Local moving</p>
        <span className="paragraph">
          Comprehensive Moving Solutions: Packing Assistance, Labor-Only Loading, Unloading,
          Residential, and Commercial Local Moving Services - We Handle It All!
        </span>
        <Accordion items={firstOfAll} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62f149550b52a64d30f3d4e4_Residential%20(1).jpg" />
      </div>

      <section className="third">
        <p className="title">Long distance</p>
        <span className="paragraph">
          Our long-distance movers in Northern Virginia, Washington DC, and Maryland care for every
          detail, ensuring your absolute comfort.
        </span>
        <Accordion items={fiveWeeks} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62e11c989e7a48452d004302_LongDistance.jpg" />
      </div>

      <section className="third">
        <p className="title">Office move (Commercial)</p>
        <span className="paragraph">
          Office movings are quite a challenge. We proudly offer top-tier commercial office moving
          services in Northern VA, Washington DC, and Maryland.
        </span>
        <Accordion items={firstWeek} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62f465ade54e01f4936e007f_OFFICE%20BIG.jpg" />
      </div>

      <section className="third">
        <p className="title">Storage Solutions</p>
        <span className="paragraph">
          We offer storage units in Virginia that bring peace of mind to those requiring a secure
          and accessible location to keep their goods.
        </span>
        <Accordion items={duringTheMove} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62e148877d4bc616a6f2578b_Storage.jpg" />
      </div>
      <section className="third">
        <p className="title">Packing services</p>
        <span className="paragraph">
          Are you looking for packing services? Check out the helpful information on the site and
          have the professionals handle the task, according to your needs!
        </span>
        <Accordion items={afterTheMove} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62f465b626c69862ed8b422e_Packing%20Services.jpg" />
      </div>

      <section className="third">
        <p className="title">Labor only help</p>
        <span className="paragraph">
          Get reliable moving labor help for your next move from Box Star Movers. Crews are
          experienced and care for all your needs - from loading to unloading.
        </span>
        <Accordion items={labor} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62e1281647918bd6fbe1ce42_Labor.jpg" />
      </div>

      <section className="third">
        <p className="title">Piano Moving Services</p>
        <span className="paragraph">
          Looking for piano movers? We have developed a special technique for safely moving pianos.
          Our team will take care of the entire process for you.
        </span>
        <Accordion items={piano} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62f4659c0245da3dd85d9b39_PIANO.jpg" />
      </div>

      <section className="third">
        <p className="title">Gun Safe Move</p>
        <span className="paragraph">
          Are you looking for Gun Safe Movers? Affordable and Professional Heavy Safe Moving in the
          DMV area. Check it out for yourself!
        </span>
        <Accordion items={gun} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62e14bb12e614787143aefa1_Safe.jpg" />
      </div>

      <section className="third">
        <p className="title">Junk Removal Services</p>
        <span className="paragraph">
          Need both movers and junk removal services? Our team can handle it all in Arlington, VA.
          Visit the site for more information and contact us today!
        </span>
        <Accordion items={junk} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62d5bb08a5f710333a158d60/62f46571c7f4a510e57bb576_JUNK%20BIG-p-2000.jpg" />
      </div>
    </div>
  );
};

export default Services;
