// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// const Header = () => {
//   return (
//     <Navbar expand="lg" className=" bg-[#008374]">
//       <Container className="">
//         <Navbar.Brand href="#home" className="text-white">
//           LOGO
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="text-white"
//         />
//         <Navbar.Collapse id="basic-navbar-nav" className="text-white">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className="text-white">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#link" className="text-white">
//               Link
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top when the location changes
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <header className="sm:px-8 px-4 py-3  w-full   sm:fixed sm:top-0 bg-[#008374] text-white  z-[100000] ">
        <nav className="flex justify-between items-center max-container">
          <Link to="/" className="text-3xl font-bold" >
            HOPE.
          </Link>
          <ul className=" font-Lato flex-1 flex justify-center items-center gap-8 max-lg:hidden z-[10000000]">
            {navLinks.map((item) => (
              <li key={item.label} className="py-5 w-[80px] ">
                <Link
                  to={item.href}
                  className={`leading-normal text-lg text-slate-gray px-[20px] py-[10px] w-[100%]  ${
                    location.pathname === item.href ? "bg-black  text-white rounded-[20px]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div> */}
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu
              className="text-4xl text-white"
              style={{
                color: isMenuOpen ? "#222222" : "222222",
              }}
            />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto h-[20rem] bg-[#008374]  z-[100]">
            <div
              className="hidden max-lg:block fixed right-0  px-10 py-10 cursor-pointer  z-[100]"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl text-white" />
            </div>
            <ul className="font-Lato lg:hidden flex flex-col items-center justify-center h-full z-[100] text-white">
              {navLinks.map((item) => (
                <li key={item.label} className="pt-5">
                  <Link
                    to={item.href}
                    className="leading-normal py-5 text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Header;