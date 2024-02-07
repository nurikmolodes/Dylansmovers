import React from "react";
import "./MovingTips.scss";
import tips from "../../assets/tips.png";

const MovingTips = () => {
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
    </div>
  );
};

export default MovingTips;
