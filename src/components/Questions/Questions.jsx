import React, { useState } from "react";
import "./Questions.scss";
import emailjs from "@emailjs/browser";

const Questions = ({ section, setSection }) => {
  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selection, setSelection] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [fromWhereError, setFromWhereError] = useState("");
  const [toWhereError, setToWhereError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [selectionError, setSelectionError] = useState("");
  const [nameError, setNameError] = useState("");
  const [textError, setTextError] = useState("");
  console.log(fromWhere, toWhere, date, selection, name, text, phone, email);

  const handleFromWhereChange = (e) => {
    setFromWhere(e.target.value);
    setFromWhereError("");
  };

  const handleToWhereChange = (e) => {
    setToWhere(e.target.value);
    setToWhereError("");
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = e.target.value.replace(/[^\d-]/g, "");
    setPhone(formattedPhone);
    setPhoneError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateError("");
  };

  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
    setSelectionError("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setTextError("");
  };

  const validateFromWhere = () => {
    if (!fromWhere.trim()) {
      setFromWhereError('Please enter a value for "From Where"');
      return false;
    }
    return true;
  };

  const validateToWhere = () => {
    if (!toWhere.trim()) {
      setToWhereError('Please enter a value for "To Where"');
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    if (!phone.trim() || !/^\d{3}-?\d{3}-?\d{4}$/.test(phone)) {
      setPhoneError("Please enter a valid US phone number");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateDate = () => {
    if (!date.trim()) {
      setDateError("Please select a date");
      return false;
    }
    return true;
  };

  const validateSelection = () => {
    if (!selection.trim()) {
      setSelectionError("Please make a selection");
      return false;
    }
    return true;
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Please enter your name");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    const serviceId = "service_ha3hc6v";
    const templateId = "template_s8tfxmi";
    const publicKey = "F9zE3QCBEqsCRlSiI";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "dylansmovers@gmail.com",
      message: `From="${fromWhere}" To="${toWhere}",  Date="${date}", Move Size="${selection}",  Name="${name}",  message="${text}",  Phone Number="${phone}", Email="${email}"`,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email successfully sent", response);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  const handleNext = () => {
    switch (section) {
      case 1:
        if (validateFromWhere() && validateToWhere()) {
          setSection(section + 1);
        }
        break;
      case 2:
        if (validateDate() && validateSelection()) {
          setSection(section + 1);
        }
        break;
      case 3:
        if (validateName()) {
          setSection(section + 1);
        }
        break;
      case 4:
        if (validatePhone() && validateEmail()) {
          setSection(section + 1);
          handleSubmit();
        }
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setSection(section - 1);
  };

  return (
    <div className="questions">
      {section > 1 && section !== 5 && (
        <button className="back" onClick={handleBack}>
          Back
        </button>
      )}
      {section === 1 && (
        <div className="question">
          <input
            id="focus"
            type="text"
            placeholder="Moving From (Address)"
            value={fromWhere}
            onChange={handleFromWhereChange}
          />
          {fromWhereError && <p>{fromWhereError}</p>}
          <input
            type="text"
            placeholder="Moving To (Address)"
            value={toWhere}
            onChange={handleToWhereChange}
          />
          {toWhereError && <p>{toWhereError}</p>}
        </div>
      )}
      {section === 2 && (
        <div className="question">
          <div className="date">
            <span>Moving Date</span>
            <input type="date" placeholder="Moving Date" value={date} onChange={handleDateChange} />
          </div>
          {dateError && <p>{dateError}</p>}
          <select value={selection} onChange={handleSelectionChange}>
            <option value="">Move size</option>
            <option value="Few Items">Few Items</option>
            <option value="Room or Less">Room or Less</option>
            <option value="Studio Apartment">Studio Apartment</option>
            <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
            <option value="2 Bedroom Apartment">2 Bedroom Apartment</option>
            <option value="2 Bedroom Apartment">3 Bedroom Apartment</option>
            <option value="3 Bedroom Apartment">1 Bedroom House</option>
            <option value="2 Bedroom House">2 Bedroom House</option>
            <option value="3 Bedroom House">3 Bedroom House</option>
            <option value="4 Bedroom House">4 Bedroom House</option>
            <option value="5 Bedroom House">5 Bedroom House</option>
            <option value="2 Bedroom Townhouse">2 Bedroom Townhouse</option>
            <option value="3 Bedroom Townhouse">3 Bedroom Townhouse</option>
            <option value="4 Bedroom Townhouse">4 Bedroom Townhouse</option>
            <option value="5x10 Storage">5x10 Storage</option>
            <option value="5x15 Storage">5x15 Storage</option>
            <option value="10x20 Storage">10x20 Storage</option>
            <option value="20x40 Storage">20x40 Storage</option>
            <option value="Single Item">Single Item</option>
            <option value="Storage">Storage</option>
            <option value="Office">Office</option>
            <option value="Other/Not Listed">Other/Not Listed</option>
          </select>
          {selectionError && <p>{selectionError}</p>}
        </div>
      )}
      {section === 3 && (
        <div className="question">
          <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
          <input
            placeholder="Additional comment (optional)"
            value={text}
            onChange={handleTextChange}
          />
          {textError && <p>{textError}</p>}
        </div>
      )}
      {section === 4 && (
        <div className="question">
          <input
            type="tel"
            placeholder="Enter US phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <p className="error-phone">{phoneError}</p>}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-email">{emailError}</p>}
        </div>
      )}
      {section === 5 && (
        <div className="success">
          <div className="top-upper">
            <p className="title">Thank you for considering us.</p>
            <p className="second-title">
              Our team has received your request and we will be reaching out within one business day
              to provide your moving quote.
            </p>
            <p className="third-title">
              If you have any questions in the meantime: Feel free to call us directly at (571) 594
              9586
            </p>
          </div>
          <button
            onClick={() => {
              window.location.reload();
            }}>
            Go back
          </button>
        </div>
      )}

      <div className="buttons">
        {section > 1 && section !== 5 && (
          <button className="back-mobile" onClick={handleBack}>
            Back
          </button>
        )}
        {section !== 5 && (
          <button
            onClick={handleNext}
            disabled={
              (section === 1 && (!fromWhere.trim() || !toWhere.trim())) ||
              (section === 2 && (!date.trim() || !selection.trim())) ||
              (section === 3 && !name.trim()) ||
              (section === 4 && (!phone.trim() || !email.trim()))
            }>
            {section === 4 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Questions;
