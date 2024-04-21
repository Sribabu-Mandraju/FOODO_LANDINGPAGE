import React, { useState } from "react";
// import contact from "../../assets/contact-new.png";
import contact from "../../assets/img/contact1.jpg";
// import contact from "../../assets/Admin-bro.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message}`
    );
  };

  return (
    <section className="my-24 flex justify-center items-center gap-16">
      <div className="image hidden sm:block">
        <img src={contact} alt="contact image" className="sm:w-72" />
      </div>
      <div className="form w-2/3 sm:w-fit">
        <p className="text-xl font-semibold text-start">Get in touch</p>
        <form className="flex flex-col sm:w-[20rem]" onSubmit={handleSubmit}>
          <label className=" m-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-1 m-1 border-black"
            value={formData.name}
            onChange={handleChange}
            style={{ outline: "2px solid #008374", borderRadius: "2px" }}
          />

          <label className="my-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-1 m-1 border-black"
            value={formData.email}
            onChange={handleChange}
            style={{ outline: "2px solid #008374", borderRadius: "2px" }}
          />

          <label className=" m-1" htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="p-1 m-1 border-black"
            value={formData.subject}
            onChange={handleChange}
            style={{ outline: "2px solid #008374", borderRadius: "2px" }}
          />

          <label className="my-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="p-1 m-1 border-black"
            value={formData.message}
            onChange={handleChange}
            style={{ outline: "2px solid #008374", borderRadius: "2px" }}
          />

          <button
            className="bg-[#008374] px-4 py-2 my-4 rounded-md text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;