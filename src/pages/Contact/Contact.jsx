import React, { useState } from "react";
// import contact from "../../assets/contact-new.png";
import contact from "../../assets/img/contact1.jpg";
import axios from 'axios'
// import contact from "../../assets/Admin-bro.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const PostData = async () => {
    try{
      const response = await axios.post(" http://localhost:3000/api/auth/contact",formData,{
        headers:{
          contentType:"application/json"
        }
      })
      // console.log(response)
      const data = await response.data
      if(data.success){
        alert("form submitted successfully")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          contact:""
        })
      }
    }
    catch(err){
      console.log(err)
      alert(err.message)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.contact 
     
    ) {
      alert("All fields are required");
      return;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    PostData()
  };

  return (
    <section className="my-24 flex justify-center items-center gap-16">
      <div className="image hidden sm:block">
      <img src={contact} className="w-[90%] max-w-[700px]" alt="" />
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
         
          />
          <label className=" m-1" htmlFor="contact">
            Phone:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="p-1 m-1 border-black"
            value={formData.contact}
            onChange={handleChange}
         
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