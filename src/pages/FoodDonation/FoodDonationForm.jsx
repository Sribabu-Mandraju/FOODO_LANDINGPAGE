import React, { useState } from "react";
import Select from "react-select";
import donate from '../../assets/img/donation.png'
import axios from 'axios'


const FoodDonationForm = () => {

    const FoodOptions = [
        { value: "Veg", label: "Veg" },
        { value: "Non-Veg", label: "Non-Veg" },
      ];
      
      const FoodCategory = [
        { value: "Raw-Food", label: "Raw-Food" },
        { value: "Cooked-Food", label: "Cooked-Food" },
        { value: "Packaged-Food", label: "Packaged-Food" },
      ];
      
      
      const Districts = [
        { value: "Chennai", label: "Chennai" },
        { value: "Coimbatore", label: "Coimbatore" },
        { value: "Madurai", label: "Madurai" },
        { value: "Tiruchirappalli", label: "Tiruchirappalli" },
        { value: "Salem", label: "Salem" },
        { value: "Tiruppur", label: "Tiruppur" },
        { value: "Erode", label: "Erode" },
        { value: "Vellore", label: "Vellore" },
        { value: "Thoothukudi", label: "Thoothukudi" },
        { value: "Thanjavur", label: "Thanjavur" },
      ];
      

  const [formData, setFormData] = useState({
    foodname: "",
    email: "",
    phonenumber: "",
    quantity: "",
    address: "",
    mealType: "",
    categoryType: "",
    district: "",
  });

 
  const handleChange = (event) => {
   const inputData = {...formData}
   inputData[event.target.name] = event.target.value;
   setFormData(inputData)
   console.log(inputData)
  };

  const postData = async () => {
    try {
  
      const response = await fetch("http://localhost:3000/api/auth/donatefood",{
        method:"POST",
        body:JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },

      });
      const data = await response.json()

      if (data.success) {
        alert("Submitted successfully");
        setFormData({
          foodname: "",
          email: "",
          phonenumber: "",
          quantity: "",
          address: "",
          mealType: "",
          categoryType: "",
          district: "",
        })

      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    // Validation checks
    if (
      !formData.foodname ||
      !formData.email ||
      !formData.phonenumber ||
      !formData.quantity ||
      !formData.address ||
      !formData.mealType ||
      !formData.categoryType ||
      !formData.district
    ) {
      alert("All fields are required");
      return;
    }
    if (!/^\d{10}$/.test(formData.phonenumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    postData()

    
  };

  return (
   
    <>
        <div className="text-center text-3xl md:text-5xl font-bold my-3 mt-[100px]">Donate</div>
        <div className="w-full flex flex-wrap justify-around donate-bg backdrop-opacity-[.8]	">
            <img src={donate} className="w-[90%] max-w-[700px]" alt="" />
            <form className="w-[95%] mx-auto max-w-[600px] flex flex-col" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <label className=" m-1" htmlFor="foodname">Food Name</label>
                        <input
                        type="text"
                        id="foodname"
                        name="foodname"
                        className="p-1 m-1 border-black"
                        value={formData.foodname}
                        onChange={handleChange}
                
                        />
                    </div>
                    <div className="flex flex-col">
                      <label className="m-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-1 m-1 border-black"
                        value={formData.email}
                        onChange={handleChange}
           
                      />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                            <label className=" m-1" htmlFor="phonenumber">Phone Number</label>
                            <input
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            className="p-1 m-1 border-black"
                            value={formData.phonenumber}
                            onChange={handleChange}
           
                          />
                    </div>
                    <div className="flex flex-col">
                        <label className="m-1 "> Meal Type</label>
                        <select 
                        className="select-input m-1  bg-[#e6fffc] h-[60px] border-[2px] rounded-md"
                        value={formData.value}
                        name="mealType"
                        onChange={handleChange}
                        style={{
                            height:"50px"
                        }}
                       
                        >
                          <option value="">--MEAL TYPE --</option>
                        {
                            FoodOptions.map((data,index) => (
                                <option value={data.value} key={index} className="text-[#008374] bg-white font-bold text-[20px] px-[12px] py-[4px]">{data.label}</option>
                            ))
                        }
                    </select>

                   
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    

                    <div className="flex flex-col">
                        <label className="m-1 "> Categiry</label>
                        <select 
                        className="select-input m-1  bg-[#e6fffc] h-[60px] border-[2px] rounded-md"
                        value={formData.value}
                        name="categoryType"
                        onChange={handleChange}
                        style={{
                            height:"50px"
                        }}
                       
                        >
                          <option value="">--CATEGORY TYPE --</option>
                        {
                            FoodCategory.map((data,index) => (
                                <option value={data.value} key={index} className="text-[#008374] bg-white font-bold text-[20px] px-[12px] py-[4px]">{data.label}</option>
                            ))
                        }
                    </select>

                   
                    </div>
                    <div className="flex flex-col">
                            <label className=" m-1" htmlFor="phonenumber">Quantity</label>   
                            <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="p-1 m-1 border-black"
                            value={formData.quantity}
                            onChange={handleChange}
           
                          />
                    </div>

                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                            <label className=" m-1" htmlFor="district">District</label>
                            <select 
                            className="select-input m-1  bg-[#e6fffc] h-[60px] border-[2px] rounded-md"
                            name="district"
                            onChange={handleChange}
                            style={{
                                height:"50px"
                            }}
                        
                            >
                        <option value=""   className="font-bold">--District--</option>
                        {
                            Districts.map((data,index) => (
                                <option value={data.value} key={index} className="text-[#008374] bg-white font-bold text-[20px] px-[12px] py-[4px]">{data.label}</option>
                            ))
                        }
                    </select>
                    
                    </div>
                    <div className="flex flex-col">
                            <label className=" m-1" htmlFor="address">Address</label>   
                            <input
                            type="text"
                            id="address"
                            name="address"
                            className="p-1 m-1 border-black"
                            value={formData.address}
                            onChange={handleChange}
           
                          />
                    </div>
                   
                   
                    
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-3 my-4">
                
                   <button className="w-full rounded-[7px] shadow bg-[#2828c5] py-3 text-white text-center font-bold text-[25px]" type="submit" >Donate</button>
                </div>

            </form>


        </div>
    </>
  );
};

export default FoodDonationForm;