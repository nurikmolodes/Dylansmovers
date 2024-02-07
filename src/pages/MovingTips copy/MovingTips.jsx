import "./MovingTips.scss";
import tips from "../../assets/tips.png";
import Accordion from "../../components/Accordion/Accordion";

const MovingTips = () => {
  const firstOfAll = [
    {
      title: "Let us know any changes",
      content:
        "Make sure to let us know any changes to your relocation 72-hours prior to the move to avoid cancellation and date-change charges.",
    },
    {
      title: "Book loading doc",
      content: "Book loading doc",
    },
    {
      title: "Pack all miscellaneous items into boxes",
      content:
        "Empty all drawers and pack all miscellaneous items into boxes (Trash bags WILL NOT be moved in the truck unless with pillows/towels etc.)",
    },
    {
      title: "Reserved elevators",
      content:
        "Make sure the elevators at both locations are reserved and available for you on the day of your move!",
    },
    {
      title: "Apply to your county for moving permits",
      content:
        "Apply to your county for moving permits, if you think there will be a lack of parking next to your apartment or house. Parking for trucks needs to be as close as possible to your home entrance, because it makes moves more efficient and protects you from paying any associated parking tickets.",
    },
  ];
  const fiveWeeks = [
    {
      title: "Create a Timeline and a Checklist",
      content:
        "Start by creating a timeline of what needs to be done and when. It helps you keep track of everything, while also keeping yourself on schedule - Starting at least five weeks out will give you enough time to get organized and allow for minor delays that may occur along the way.",
    },
    {
      title: "Schedule in-home estimates with a moving company",
      content:
        "Once you have a timeline in place, schedule appointments with movers to come out and give you quotes. Many moving companies offer free or low-cost consultations so that they can meet with you at your home and go over all of the details for your move as well as provide an estimate on what it will cost. This will also allow them to see what your moving needs are and how they can best meet them.",
    },
    {
      title: "Create a budget for moving expenses",
      content:
        "Write down what you think it will cost to move, and then add an extra $500-1000 for good measure. It's always better to overestimate than underestimate when doing your estimates.",
    },
    {
      title: "Declutter your home",
      content:
        "Once you have your timeline and budget in place, it's time to get started with the big stuff. The first thing that you should take care of is decluttering your home. You want to remove as many things from your house as possible before moving day comes around because this will help reduce what needs to be moved into smaller loads which can help speed up the process.",
    },
    {
      title: "Try to make your move during an off-peak time",
      content:
        "Moving during a peak time will result in higher prices from moving companies. If you schedule your move for off-peak times, such as on the weekends or early mornings, movers may be more inclined to offer special rates and discounts since they have less traffic coming through their offices at that point of the day.",
    },
    {
      title: "Schedule your time with your movers",
      content:
        "Hiring movers is a great way to ensure that your belongings get from one place to another safely and efficiently. When you schedule the move with them, be sure to provide them with an inventory list so they know exactly what will need to be moved where! This cuts down on confusion between both parties and ensures there won't be any misunderstandings about what needs to get done.",
    },
    {
      title: "Schedule disconnect times for utilities",
      content:
        "Be sure to schedule times for utilities, such as gas and electricity, to be disconnected at least two days before you plan on moving. This will prevent any accidents from happening due to living wires or leaks in the home that could cause damage once your belongings are removed later down the road.",
    },
    {
      title: "Start getting rid of the unwanted items",
      content:
        "If you should throw something away, don’t keep it until the day of the move. This way, you only make the whole move more time-consuming. Instead, opt for this moving trick – start planning what you want to throw out five weeks before your move and consistently get rid of the unwanted items.",
    },
  ];
  const firstWeek = [
    {
      title: "Prepare your belongings for the move",
      content:
        "If you have a big move coming up, it is best to prepare your belongings for the move at least one week before. This gives you ample time to pack everything and organize what will be going into boxes of what won't need extra special care during transit.",
    },
    {
      title: "Gather all your important documents",
      content:
        "Before you move, gather all your important documents including things like bank statements and bills that have been sent to you over the last year. If there is anything wrong with what has been set up previously, it would be best to find out now rather than later! Pack these items into a safe place so they don't get lost during the move.",
    },
    {
      title: "Watch the weather channel",
      content:
        "You want to make sure you are watching the weather channel one or two days before your move. This way, you can prepare for inclement weather and ensure that everything goes smoothly when the moving day arrives!",
    },
    {
      title: "Prepare for your final walkthrough with your landlord",
      content:
        "If you have a final walkthrough with your landlord, be sure to bring all the keys and documents that they may need including any remaining rent or damage deposits. This will ensure that everything goes smoothly for both of you during this last stop!",
    },
    {
      title: "Unplug your fridge, freezer to defrost the night before",
      content:
        "This is an important step that many people forget about and it can be very dangerous if this isn't done properly. Unplugging your fridge and freezer the night before ensures they defrost overnight so there won't be any accidents when moving day arrives!",
    },
    {
      title: "Get Boxes in Different Sizes",
      content:
        "When moving, size matters – it’s easier to simply shove all your clothes into one or two big boxes than to try to fit them into smaller ones. Thus, one week before the move, you should go around your apartment, look around, and consider what sizes of boxes you need. This way, you will prepare yourself better for the upcoming move.",
    },
  ];
  const duringTheMove = [
    {
      title: "Pack any last-minute items",
      content:
        "Don't forget to pack any special items that need taking care of. If you have a lot of fragile things, it might be worth getting additional help for this day (friends, family members). Anything unusual like antiques should take extra time and consideration as well. Do not leave anything behind!",
    },
    {
      title: "Do a pre-loading walk-through",
      content:
        "Once everything is packed, take one last walk through your home to double-check that you've remembered anything. You want the movers to know exactly what's going and where it should be placed when they arrive at your new place.",
    },
    {
      title: "Protect floors and carpets during the move",
      content:
        "Use floor runners or area rugs to protect wood flooring, especially in high traffic areas. Also protect carpet and hardwood floor by laying a carpet mask. Similar to stretch wrap, a carpet mask provides a reliable layer of protection from dirt and minor scratches. Carpet masking is relatively affordable, especially when compared to the cost of replacing or cleaning your current carpet. The most common size is 24' x 200' and will vary in price, usually between $30-$60 on Amazon. Carpet masks have self-adhesive, install easily and have non-slip surfaces. Also ask your movers for extra protection materials to protect your floor on your moving day.",
    },
    {
      title: "Meet the Movers, be kind and considerate to them",
      content:
        "The movers should arrive at your house on time and be ready to work. They might not have any idea of what you're like but it's best if they get a good impression from the start, so try to come across as kind and understanding (if that is who you are) while also getting straight into business.",
    },
    {
      title: "Clean and secure your old home",
      content:
        "After the movers have left, you'll want to take some final precautions before leaving your old home too. Don't forget to clean and secure your old home! Give it a good sweep through before you go so that nobody has any reason to come back or break-in.",
    },
    {
      title: "Use Transparent Boxes and Labels for the Most Necessary Items",
      content:
        "You will need some belongings right after your move. Cosmetics, a mattress, some towels – all of these are just some examples. One helpful moving trick we can offer here is to pack these items in transparent boxes or attach large, visible labels to them. This way, you can localize the most necessary items immediately.",
    },
  ];
  const afterTheMove = [
    {
      title: "Inspect your boxes and containers",
      content:
        "Before you start unpacking all your boxes, it is important to take a look at them. Make sure that the tape on the box has not been tampered with and check for any damage or leakage in case something was broken during transit. If there are items inside the container, make sure they are still intact before you unpack everything else!",
    },
    {
      title: "Start unpacking the essentials",
      content:
        "As soon as you can, start unpacking the essentials. These include kitchen items such as plates and utensils, toiletries for your bathroom, clothes to hang in your closet or set aside if they need dry cleaning immediately, bedding, and towels. Now is also a good time to put up curtains on any windows that may be left bare.",
    },
    {
      title: "Get your utilities up and running",
      content:
        "After you have unpacked the essentials, it's time to get your utilities up and running. Open a new account with your gas company or call them if they have already sent out an agent by this point in time. The same thing applies to electricity companies as well! Get internet service installed at home - some providers might be able to do so right at your doorstep!",
    },
    {
      title: "Update your address",
      content:
        "After you have moved into your new home, make sure that you update all of your information with the relevant authorities including banks, credit cards companies, medical offices/insurance providers...you name it!",
    },
    {
      title: "Know about emergency needs",
      content:
        "Lastly, remember to take care of any emergency needs. Keep your meds stored in a safe place and make sure that you have fresh water on hand just in case the mainline is damaged or disrupted during moving!",
    },
  ];

  return (
    <div className="movingtips">
      <header>
        <p>Moving Tips</p>
        <span>
          How to remember important items and keep everything under control? Moving tips help you
          reduce the stress of moving and be more organized.
        </span>
      </header>
      <section className="under-header">
        <div className="text">
          <p>Why are Moving Tips so important?</p>
          <span>
            The process of moving is a lot more complicated than you may think. There are many
            factors that come into play when one decides to move, and these can vary from person to
            person. This list of moving tips will provide you with some helpful information on how
            best to go about your move in an efficient manner!
          </span>
        </div>
        <img src={tips} />
      </section>
      <section className="second">
        <p className="title">Moving Hacks</p>
        <div className="labels">
          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62da8b59e440cc274ff20e2c_For%20a%20large%20house.svg" />
            <span>For a Large House</span>
            <p>
              Numbering rooms and boxes instead of writing names, so it will be easier for movers to
              navigate where things should be.
            </p>
          </div>

          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62da8b5967f1cee41f136e76_Label%20each%20box.svg" />
            <span style={{ color: "#3d204f" }}>Label each box</span>
            <p>
              Labeling boxes with its contents and where it should be stored in the new home is a
              great way to organize your belongings. It helps movers and also ensures that nothing
              gets lost.
            </p>
          </div>

          <div className="label">
            <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/62da8b595aa618f48708faac_Remove%20Unnecessary.svg" />
            <span>Remove Unnecessary</span>
            <p>
              You don’t want to carry boxes and containers with things you know you’ll never use
              again. You can sell them, throw them away or give them to charity.
            </p>
          </div>
        </div>
      </section>
      <section className="third">
        <p className="title">First Of All</p>
        <Accordion items={firstOfAll} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d4678befb907d8da909_First%2520Of%2520All.webp" />
      </div>
      <section className="third">
        <p className="title">5 weeks before the move</p>
        <Accordion items={fiveWeeks} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d56c54a6bc501b8913f_5%2520weeks.webp" />
      </div>
      <section className="third">
        <p className="title">1 week before the move</p>
        <Accordion items={firstWeek} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d63c54a6b5c57b89163_1%2520week.webp" />
      </div>
      <section className="third">
        <p className="title">During the move</p>
        <Accordion items={duringTheMove} />
      </section>
      <div className="image">
        <img src="https://assets-global.website-files.com/62c6a1644fedf732c282fe5c/63072d7d2d96da9034cf4c1d_After.webp" />
      </div>
      <section className="third">
        <p className="title">After the move</p>
        <Accordion items={afterTheMove} />
      </section>
    </div>
  );
};

export default MovingTips;
