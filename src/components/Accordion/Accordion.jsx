/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Accordion.scss"; // import your SCSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${index === activeIndex ? "active" : ""}`}
            onClick={() => onItemClick(index)}>
            {item.title}
            <FontAwesomeIcon
              icon={index === activeIndex ? faChevronUp : faChevronDown}
              className="accordion-arrow"
            />
          </div>
          {index === activeIndex && <div className="accordion-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
