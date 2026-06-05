// import "./App.css";
// import schoolLogo from "./assets/schoolLogo.svg";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// import communityicon from "./assets/communityicon.svg";
// import bill from "./assets/billicon.svg";
// import { motion } from "framer-motion";
// import ticket from "./assets/ticket.svg";
// import handshake from "./assets/handshake.svg";
// import appstore from "./assets/apple store.svg";
// import googleplay from "./assets/playstore.svg";
// import iphone from "./assets/iphone 15.png";
// import schoollogoWhite from "./assets/schoologoWhite.svg";
// import twitter from "./assets/twitterlogo1.svg";
// import { useState } from "react";
// import Header from "./components/Header";
// import { FaInstagram } from "react-icons/fa";
// export const navLinks = ["Welcome", "About", "Support"];
// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("Welcome");
//   return (
//     <>
//       <Header
//         setIsOpen={setIsOpen}
//         activeLink={activeLink}
//         setActiveLink={setActiveLink}
//       />

//       <p className="text-center py-8 text-[#2D2D2D] text-[16px] lg:text-[32px] font-[500px]">
//         What to Expect
//       </p>

//       <section className="px-4 md:px-6    lg:px-10">
//         <div className="md:max-w-[1250px] lg:gap-x-6 lg:flex lg:flex-row  md:w-[90vw] m-auto">
//           <div className=" card-container lg:w-[299px]  lg:h-[320px]  rounded-[20px] lg:rounded-[48px] mb-5 p-[28px]">
//             <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] lg:w-[86px] lg:h-[86px] p-[9.54px] rounded-full items-center gap-x-2">
//               <img src={communityicon} alt="" className="w-full" />
//             </div>
//             <div className="mt-6">
//               <h2 className="font-bold text-[24px] lg:text-[40px]">
//                 Community
//               </h2>
//               <h3 className="font-normal text-[#2d2d2d] lg:text-[24px] text-[16px]">
//                 Meet Other Students in your Campus
//               </h3>
//             </div>
//           </div>

//           <div className=" card-container2 lg:w-[299px]  lg:h-[320px]  rounded-[20px] lg:rounded-[48px] mb-5 p-[28px]">
//             <div className="flex bg-[#DCE7F9] lg:w-[86px] lg:h-[86px] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
//               <img src={bill} alt="" className="w-full" />
//             </div>
//             <div className="mt-6">
//               <h2 className="font-bold text-[24px] lg:text-[40px]">Payment</h2>
//               <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
//                 Easy Payment of student’s levy
//               </h3>
//             </div>
//           </div>
//           <div className=" card-container lg:rounded-[48px]  lg:h-[320px] lg:w-[299px] rounded-[20px] mb-5 p-[28px]">
//             <div className="flex bg-[#DCE7F9] w-[60px] lg:w-[86px] lg:h-[86px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
//               <img src={ticket} alt="" className=" md:w-[350px]" />
//             </div>
//             <div className="mt-6">
//               <h2 className="font-bold text-[24px] lg:text-[40px]">
//                 Ticket Sales
//               </h2>
//               <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
//                 Purchase campus event tickets
//               </h3>
//             </div>
//           </div>
//           <div className=" card-container lg:w-[299px] lg:h-[320px] lg:rounded-[48px] rounded-[20px] mb-5 p-[28px]">
//             <div className="flex bg-[#DCE7F9] w-[60px] lg:w-[86px] lg:h-[86px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
//               <img src={handshake} alt="" className=" md:w-[350px]" />
//             </div>
//             <div className="mt-6">
//               <h2 className="font-bold text-[24px] lg:text-[40px]">200+</h2>
//               <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
//                 Find your campus and join
//               </h3>
//             </div>
//           </div>
//         </div>

//         <h1 className="text-center font-medium uppercase max-lg:py-6 lg:pt-30 lg:pb-2 text-[24px] lg:text-[40px]">
//           Coming soon on google and app store
//         </h1>
//         <div className="flex coming-soon lg:rounded-[72px] md:w-[90vw] m-auto md:max-w-[1250px] lg:h-[383px] lg:flex-row items-center gap-y-2 lg:gap-x-4 flex-col rounded-[20px] justify-center pt-[21.396px] lg:pt-0 px-[69.914px] lg:px-0 pb-[23.601px] lg:pb-0">
//           <div className="lg:w-[317px] lg:h-[100px]">
//             <img src={googleplay} alt="" className="w-full  h-full" />
//           </div>
//           <div className="lg:w-[300px] lg:h-[100px]">
//             <img src={appstore} alt="" className="w-full h-full" />
//           </div>
//         </div>
//       </section>
//       <section className="bg-[#DCE7F9] lg:flex h-[894px] lg:gap-x-10 lg:h-[1069px] overflow-hidden my-4 mt-8 lg:mt-14 pt-6 lg:pt-[124px] lg:pr-[101px] lg:pl-[100px] lg:pb-[71px] px-4">
//         <div>
//           <p className="font-medium text-[16px] lg:text-[32px] lg:pb-16">
//             SchoolPlug is Limitless!
//           </p>
//           <h1 className="font-bold text-[48px] lg:text-[96px] leading-tight uppercase">
//             Think <br /> about <br /> Campus <br /> activities?
//           </h1>
//           <h3 className="font-normal text-[16px] lg:text-[32px]">
//             We are bringing all to you!
//           </h3>
//           <a
//             href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
//             download="app-release.apk"
//           >
//             <button className="hidden lg:block bg-[#174489] w-[326px] justify-center items-center h-[80px] mt-10 text-[24px] font-bold  text-white px-4 py-2 rounded-full">
//               Get Mobile App
//             </button>
//           </a>
//         </div>
//         <div className="flex mt-10 relative lg:ml-[130px] justify-center">
//           <motion.div
//             className="relative lg:w-[600px] w-fit"
//             animate={{
//               y: [0, -20, 0], // Moves up 20px and back down
//             }}
//             transition={{
//               duration: 4, // 4 seconds for a full loop (slow)
//               repeat: Infinity, // Loop forever
//               ease: "easeInOut", // Smooth start and end
//             }}
//           >
//             <img src={iphone} alt="iPhone mockup" className="block lg:w-full" />
//           </motion.div>
//         </div>
//       </section>
//       <article className="px-4 my-10 md:px-6 lg:px-10">
//         <div className="download-app rounded-[20px] lg:rounded-[108px] lg:h-[684px] lg:pt-[124px] lg:py-[60px] flex lg:px-[60px] flex-col lg:p-0 p-[12px] items-center">
//           <h1 className="font-medium uppercase mb-0 lg:text-[40px] text-center text-[24px]">
//             Download and Install app instantly
//           </h1>
//           <p className="text-center lg:pb-8 py-4 text-[16px] lg:text-[32px] font-normal">
//             While we are still waiting on Google and App Store, click <br />
//             download to install SchoolPlug today!
//           </p>
//           <div className="hidden lg:flex justify-center dowloadContainer items-center w-full  mx-auto rounded-[72px] py-20">
//             <a
//               href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
//               download="app-release.apk"
//             >
//               <button className="bg-[#174489]  mr-[200px] flex justify-center items-center w-[431px] h-[108px] text-[24px] font-bold  text-white px-4 py-2 rounded-full">
//                 Download App
//               </button>
//             </a>
//           </div>
//           <a
//             href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
//             download="app-release.apk"
//           >
//             <button className="bg-[#174489] mt-2 flex lg:hidden justify-center items-center w-[158px] h-[47px] text-[14px] font-bold  text-white px-4 py-2 rounded-full">
//               Download App
//             </button>
//           </a>
//         </div>
//       </article>
//       <footer className="bg-[#174489] pt-[41px] px-[32px] lg:px-[100px] pb-[48px] text-white">
//         <div className="flex justify-between items-center gap-x-3">
//           <div className="flex items-center gap-x-3">
//             <img src={schoollogoWhite} alt="logo" />
//             <h3 className="text-white font-semibold text-[21.497px]">
//               SchoolPlug
//             </h3>
//           </div>
//           <p className="text-[#FAFAFA] lg:block hidden font-normal text-[20px]">
//             Join your fellow students and enjoy the seamless service they do.
//           </p>
//         </div>
//         <div className="flex items-center justify-between gap-x-3">
//           <div className="flex items-center max-lg:mt-5 lg:mt-3 lg:ml-[50px] gap-x-3">
//             <a href="https://x.com/SchoolPlug" target="_blank">
//               <img
//                 src={twitter}
//                 alt="twitter"
//                 // className="max-lg:mt-5 lg:mt-3 lg:ml-[50px]"
//               />
//             </a>
//             <a href="https://www.instagram.com/schoolplug.en" target="_blank">
//               <FaInstagram size={24} color="white" />
//             </a>
//           </div>
//           <h1 className="lg:block text-[32px] font-semibold hidden">
//             Coming soon on Google Play Store and App Store
//           </h1>
//         </div>
//         <p className="text-[#FAFAFA] lg:hidden font-normal pt-8 text-[16px]">
//           Join your fellow students and enjoy the seamless service they do.
//         </p>
//         <div className="flex flex-col lg:hidden mt-3">
//           <h1 className="text-white font-semibold mb-0 text-[24px]">
//             Coming soon on Google
//           </h1>
//           <h1 className="text-white font-semibold mb-0 text-[24px]">
//             Play Store and App Store
//           </h1>
//         </div>
//         <div className="flex lg:hidden items-center mt-7 gap-x-5">
//           <p className="text-[#BCBCBC] font-normal text-[14px]">Terms</p>
//           <p className="text-[#BCBCBC] font-normal text-[14px]">Privacy</p>
//         </div>
//         <div className="lg:flex justify-between lg:mt-11 items-center ">
//           <p className="text-[#BCBCBC] font-normal text-[14px] pt-10">
//             © schoolplug 2026, all right reserved
//           </p>
//           <div className="lg:flex hidden  items-center mt-7 gap-x-5">
//             <p className="text-[#BCBCBC] font-normal text-[14px]">Terms</p>
//             <p className="text-[#BCBCBC] font-normal text-[14px]">Privacy</p>
//           </div>
//         </div>
//       </footer>
//       {/* Mobile Menu */}
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//           />

//           {/* Menu */}
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed top-0 right-0 h-screen w-[75%] max-w-[320px] bg-white z-50 p-6 shadow-2xl"
//           >
//             <div className="flex justify-between items-center">
//               <div className="flex items-center pt-1.5 gap-x-1">
//                 <img src={schoolLogo} alt="logo" />
//                 <h3 className="text-[#2B70DB] font-semibold text-[14px]">
//                   SchoolPlug
//                 </h3>
//               </div>

//               <button onClick={() => setIsOpen(false)}>✕</button>
//             </div>

//             <div className="flex flex-col mt-10">
//               {navLinks.map((item) => (
//                 <div
//                   key={item}
//                   className="border-b last:border-b-0 border-[#EAEAEA] py-3"
//                 >
//                   <a
//                     href={
//                       item === "Support" ? "mailto:support@schoolplug.ng" : "#"
//                     }
//                     onClick={() => setActiveLink(item)}
//                     className={`block text-[14px] transition-all duration-200 ${
//                       activeLink === item
//                         ? "font-semibold text-[#181818]"
//                         : "font-normal text-[#7B7B7B] hover:text-[#181818]"
//                     }`}
//                   >
//                     {item}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </motion.aside>
//         </>
//       )}
//     </>
//   );
// }

// export default App;
import "./App.css";
import schoolLogo from "./assets/schoolLogo.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";

import communityicon from "./assets/communityicon.svg";
import bill from "./assets/billicon.svg";
import { motion } from "framer-motion";
import ticket from "./assets/ticket.svg";
import handshake from "./assets/handshake.svg";
import appstore from "./assets/apple store.svg";
import googleplay from "./assets/playstore.svg";
import iphone from "./assets/iphone 15.png";
import schoollogoWhite from "./assets/schoologoWhite.svg";
import twitter from "./assets/twitterlogo1.svg";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { FaInstagram } from "react-icons/fa";
export const navLinks = ["Welcome", "About", "Support"];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Welcome");

  useEffect(() => {
    // 1. Check if the URL has a 'postId' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (postId) {
      // 2. Try to forcefully open the mobile app using its custom scheme
      const appDeepLink = "schoolplugmobile://post/" + postId;
      window.location.href = appDeepLink;
    }
  }, []);

  return (
    <>
      <Header
        setIsOpen={setIsOpen}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <p className="text-center py-8 text-[#2D2D2D] text-[16px] lg:text-[32px] font-[500px]">
        What to Expect
      </p>

      <section className="px-4 md:px-6    lg:px-10">
        <div className="md:max-w-[1250px] lg:gap-x-6 lg:flex lg:flex-row  md:w-[90vw] m-auto">
          <div className=" card-container lg:w-[299px]  lg:h-[320px]  rounded-[20px] lg:rounded-[48px] mb-5 p-[28px]">
            <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] lg:w-[86px] lg:h-[86px] p-[9.54px] rounded-full items-center gap-x-2">
              <img src={communityicon} alt="" className="w-full" />
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-[24px] lg:text-[40px]">
                Community
              </h2>
              <h3 className="font-normal text-[#2d2d2d] lg:text-[24px] text-[16px]">
                Meet Other Students in your Campus
              </h3>
            </div>
          </div>

          <div className=" card-container2 lg:w-[299px]  lg:h-[320px]  rounded-[20px] lg:rounded-[48px] mb-5 p-[28px]">
            <div className="flex bg-[#DCE7F9] lg:w-[86px] lg:h-[86px] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
              <img src={bill} alt="" className="w-full" />
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-[24px] lg:text-[40px]">Payment</h2>
              <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
                Easy Payment of student’s levy
              </h3>
            </div>
          </div>
          <div className=" card-container lg:rounded-[48px]  lg:h-[320px] lg:w-[299px] rounded-[20px] mb-5 p-[28px]">
            <div className="flex bg-[#DCE7F9] w-[60px] lg:w-[86px] lg:h-[86px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
              <img src={ticket} alt="" className=" md:w-[350px]" />
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-[24px] lg:text-[40px]">
                Ticket Sales
              </h2>
              <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
                Purchase campus event tickets
              </h3>
            </div>
          </div>
          <div className=" card-container lg:w-[299px] lg:h-[320px] lg:rounded-[48px] rounded-[20px] mb-5 p-[28px]">
            <div className="flex bg-[#DCE7F9] w-[60px] lg:w-[86px] lg:h-[86px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
              <img src={handshake} alt="" className=" md:w-[350px]" />
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-[24px] lg:text-[40px]">200+</h2>
              <h3 className="font-normal text-[#2d2d2d] text-[16px] lg:text-[24px]">
                Find your campus and join
              </h3>
            </div>
          </div>
        </div>

        <h1 className="text-center font-medium uppercase max-lg:py-6 lg:pt-30 lg:pb-2 text-[24px] lg:text-[40px]">
          Coming soon on google and app store
        </h1>
        <div className="flex coming-soon lg:rounded-[72px] md:w-[90vw] m-auto md:max-w-[1250px] lg:h-[383px] lg:flex-row items-center gap-y-2 lg:gap-x-4 flex-col rounded-[20px] justify-center pt-[21.396px] lg:pt-0 px-[69.914px] lg:px-0 pb-[23.601px] lg:pb-0">
          <div className="lg:w-[317px] lg:h-[100px]">
            <img src={googleplay} alt="" className="w-full  h-full" />
          </div>
          <div className="lg:w-[300px] lg:h-[100px]">
            <img src={appstore} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="bg-[#DCE7F9] lg:flex h-[894px] lg:gap-x-10 lg:h-[1069px] overflow-hidden my-4 mt-8 lg:mt-14 pt-6 lg:pt-[124px] lg:pr-[101px] lg:pl-[100px] lg:pb-[71px] px-4">
        <div>
          <p className="font-medium text-[16px] lg:text-[32px] lg:pb-16">
            SchoolPlug is Limitless!
          </p>
          <h1 className="font-bold text-[48px] lg:text-[96px] leading-tight uppercase">
            Think <br /> about <br /> Campus <br /> activities?
          </h1>
          <h3 className="font-normal text-[16px] lg:text-[32px]">
            We are bringing all to you!
          </h3>
          <a
            href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
            download="app-release.apk"
          >
            <button className="hidden lg:block bg-[#174489] w-[326px] justify-center items-center h-[80px] mt-10 text-[24px] font-bold  text-white px-4 py-2 rounded-full">
              Get Mobile App
            </button>
          </a>
        </div>
        <div className="flex mt-10 relative lg:ml-[130px] justify-center">
          <motion.div
            className="relative lg:w-[600px] w-fit"
            animate={{
              y: [0, -20, 0], // Moves up 20px and back down
            }}
            transition={{
              duration: 4, // 4 seconds for a full loop (slow)
              repeat: Infinity, // Loop forever
              ease: "easeInOut", // Smooth start and end
            }}
          >
            <img src={iphone} alt="iPhone mockup" className="block lg:w-full" />
          </motion.div>
        </div>
      </section>
      <article className="px-4 my-10 md:px-6 lg:px-10">
        <div className="download-app rounded-[20px] lg:rounded-[108px] lg:h-[684px] lg:pt-[124px] lg:py-[60px] flex lg:px-[60px] flex-col lg:p-0 p-[12px] items-center">
          <h1 className="font-medium uppercase mb-0 lg:text-[40px] text-center text-[24px]">
            Download and Install app instantly
          </h1>
          <p className="text-center lg:pb-8 py-4 text-[16px] lg:text-[32px] font-normal">
            While we are still waiting on Google and App Store, click <br />
            download to install SchoolPlug today!
          </p>
          <div className="hidden lg:flex justify-center dowloadContainer items-center w-full  mx-auto rounded-[72px] py-20">
            <a
              href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
              download="app-release.apk"
            >
              <button className="bg-[#174489]  mr-[200px] flex justify-center items-center w-[431px] h-[108px] text-[24px] font-bold  text-white px-4 py-2 rounded-full">
                Download App
              </button>
            </a>
          </div>
          <a
            href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
            download="app-release.apk"
          >
            <button className="bg-[#174489] mt-2 flex lg:hidden justify-center items-center w-[158px] h-[47px] text-[14px] font-bold  text-white px-4 py-2 rounded-full">
              Download App
            </button>
          </a>
        </div>
      </article>
      <footer className="bg-[#174489] pt-[41px] px-[32px] lg:px-[100px] pb-[48px] text-white">
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <img src={schoollogoWhite} alt="logo" />
            <h3 className="text-white font-semibold text-[21.497px]">
              SchoolPlug
            </h3>
          </div>
          <p className="text-[#FAFAFA] lg:block hidden font-normal text-[20px]">
            Join your fellow students and enjoy the seamless service they do.
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-center max-lg:mt-5 lg:mt-3 lg:ml-[50px] gap-x-3">
            <a href="https://x.com/SchoolPlug" target="_blank">
              <img
                src={twitter}
                alt="twitter"
                // className="max-lg:mt-5 lg:mt-3 lg:ml-[50px]"
              />
            </a>
            <a href="https://www.instagram.com/schoolplug.en" target="_blank">
              <FaInstagram size={24} color="white" />
            </a>
          </div>
          <h1 className="lg:block text-[32px] font-semibold hidden">
            Coming soon on Google Play Store and App Store
          </h1>
        </div>
        <p className="text-[#FAFAFA] lg:hidden font-normal pt-8 text-[16px]">
          Join your fellow students and enjoy the seamless service they do.
        </p>
        <div className="flex flex-col lg:hidden mt-3">
          <h1 className="text-white font-semibold mb-0 text-[24px]">
            Coming soon on Google
          </h1>
          <h1 className="text-white font-semibold mb-0 text-[24px]">
            Play Store and App Store
          </h1>
        </div>
        <div className="flex lg:hidden items-center mt-7 gap-x-5">
          <p className="text-[#BCBCBC] font-normal text-[14px]">Terms</p>
          <p className="text-[#BCBCBC] font-normal text-[14px]">Privacy</p>
        </div>
        <div className="lg:flex justify-between lg:mt-11 items-center ">
          <p className="text-[#BCBCBC] font-normal text-[14px] pt-10">
            © schoolplug 2026, all right reserved
          </p>
          <div className="lg:flex hidden  items-center mt-7 gap-x-5">
            <p className="text-[#BCBCBC] font-normal text-[14px]">Terms</p>
            <p className="text-[#BCBCBC] font-normal text-[14px]">Privacy</p>
          </div>
        </div>
      </footer>
      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-[75%] max-w-[320px] bg-white z-50 p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center pt-1.5 gap-x-1">
                <img src={schoolLogo} alt="logo" />
                <h3 className="text-[#2B70DB] font-semibold text-[14px]">
                  SchoolPlug
                </h3>
              </div>

              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col mt-10">
              {navLinks.map((item) => (
                <div
                  key={item}
                  className="border-b last:border-b-0 border-[#EAEAEA] py-3"
                >
                  <a
                    href={
                      item === "Support" ? "mailto:support@schoolplug.ng" : "#"
                    }
                    onClick={() => setActiveLink(item)}
                    className={`block text-[14px] transition-all duration-200 ${
                      activeLink === item
                        ? "font-semibold text-[#181818]"
                        : "font-normal text-[#7B7B7B] hover:text-[#181818]"
                    }`}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
}

export default App;
