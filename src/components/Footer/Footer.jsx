import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Footer = () => {
//   return (
//     <footer className="w-full p-4 bg-[#008374] text-white">
//       <div className="flex flex-col sm:flex-row justify-around my-4  w-full">
//         <div className="icons flex flex-col justify-center items-start gap-4 ">
//           <p className="text-left text-4xl">LOGO</p>
//           <div className="social-icons flex gap-2">
//             <div className="border-[1px] rounded-full border-white p-2">
//               <FaGoogle />
//             </div>
//             <div className="border-[1px] rounded-full border-white p-2">
//               <FaTwitter />
//             </div>
//             <div className="border-[1px] rounded-full border-white p-2">
//               <FaInstagram />
//             </div>
//             <div className="border-[1px] rounded-full border-white p-2">
//               <FaLinkedin />
//             </div>
//           </div>
//           <p>IIIT Nuzvid, Vijayawada, India.</p>
//         </div>

//         <div className="flex  sm:flex-col  sm:items-start flex-row justify-evenly gap-4 items-start my-4">
//           <div className="contact flex flex-col gap-4 justify-center items-start">
//             <p className="font-semibold text-xl">Contact Us</p>
//             <div className="flex justify-center items-center gap-2">
//               <IoMdMail />
//               <span>vr@gmail.com</span>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <FaPhoneAlt />
//               <span>1234506789</span>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <FaPhoneAlt />
//               <span>Satya Prakash</span>
//             </div>
//           </div>

//           <div className="help flex flex-col gap-4 ">
//             <p className="font-semibold text-xl">Let Us Help You</p>
//             <span>100% Purchase Protection</span>
//             <span>Your Account</span>
//             <span>Return Center</span>
//             <span>Help</span>
//           </div>
//         </div>
//       </div>

//       <div className="line my-4  p-[1px] bg-black"></div>
//       <p className="text-center"> 2023 by Satya. Created with Bootstrap.</p>
//     </footer>
//   );
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-h-[300px]  mt-[70px] bg-[#001a00] gap-5">
                <div className="icons flex flex-col justify-center items-start gap-4 text-white ps-5 pt-5 ">
                    <p className="text-left text-4xl">LOGO</p>
                    <div className="social-icons flex gap-2">
                    <div className="border-[1px] rounded-full border-white p-2">
                        <FaGoogle />
                    </div>
                    <div className="border-[1px] rounded-full border-white p-2">
                        <FaTwitter />
                    </div>
                    <div className="border-[1px] rounded-full border-white p-2">
                        <FaInstagram />
                    </div>
                    <div className="border-[1px] rounded-full border-white p-2">
                        <FaLinkedin />
                    </div>
                    </div>
                    <p>IIIT Nuzvid, Vijayawada, India.</p>
                </div>
                <div className="icons flex flex-col justify-center items-start gap-4 ps-5">
                    <div className="contact flex flex-col gap-4 justify-center items-start">
                      <p className="font-semibold text-xl text-white ">Links</p>
                      <div className="flex justify-center items-center gap-2 text-[grey] hover:text-white  cursor-pointer">
                        <MdOutlineDoubleArrow />
                        <span>Home</span>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[grey] hover:text-white  cursor-pointer">
                        <MdOutlineDoubleArrow />
                        <span>About</span>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[grey] hover:text-white  cursor-pointer">
                        <MdOutlineDoubleArrow />
                        <span>Donate</span>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[grey] hover:text-white  cursor-pointer">
                        <MdOutlineDoubleArrow />
                        <span>Services</span>
                      </div>
                      
                    </div>
                </div>
                <div className="icons flex flex-col justify-center items-start gap-4 text-white ps-5">
                    <div className="contact flex flex-col gap-4 justify-center items-start">
                      <p className="font-semibold text-xl">Contact Us</p>
                      <div className="flex justify-center items-center gap-2">
                        <IoMdMail />
                        <span>vr@gmail.com</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <FaPhoneAlt />
                        <span>1234506789</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <FaPhoneAlt />
                        <span>Satya Prakash</span>
                      </div>
                    </div>
                </div>

                <div className="icons flex flex-col justify-center items-start gap-4 text-white ps-5">
                  <p className="font-semibold text-xl">Let Us Help You</p>
                  <span>100% Purchase Protection</span>
                  <span>Your Account</span>
                  <span>Return Center</span>
                  <span>Help</span>
                </div>            
            </div>
            <div className="w-full bg-black text-center text-white ">2023 by Sribabu. || all &copy; copy right are reserved || Created with Love.</div>
            
        </>
    )
};

export default Footer;