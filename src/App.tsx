import "./App.css";
import schoolLogo from "./assets/schoolLogo.svg";
import menuIcon from "./assets/menu.svg";
import frame1 from "./assets/frame1.png";
import frame2 from "./assets/frame2.png";
import frame3 from "./assets/frame3.png";
import frame4 from "./assets/frame4.png";
import students from "./assets/students.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import communityicon from "./assets/communityicon.svg";
import bill from "./assets/billicon.svg";
import { motion } from "framer-motion";
import ticket from "./assets/ticket.svg";
import handshake from "./assets/handshake.svg";
import appstore from "./assets/apple store.svg";
import googleplay from "./assets/playstore.svg";
import iphone from "./assets/iphone15.svg";
import schoollogoWhite from "./assets/schoologoWhite.svg";
import twitter from "./assets/twitterlogo1.svg";

function App() {
  return (
    <>
      <header className="landingpage min-h-[80dvh]">
        <nav className="flex justify-between items-center p-2">
          <div className="flex items-center gap-x-1">
            <img src={schoolLogo} alt="logo" />
            <h3 className="text-[#2B70DB] font-semibold text-[14px]">
              SchoolPlug
            </h3>
          </div>
          <img src={menuIcon} alt="menu" className="w-10 h-10" />
        </nav>
        <div className="flex mt-10 flex-col items-center justify-center">
          <h1 className="font-bold text-[40px] leading-tight mb-0">
            Student’s
          </h1>
          <h1 className="font-bold text-[40px] leading-tight mb-0">
            Campus Media
          </h1>
          <p className="max-lg:text-center text-[#2D2D2D] mt-6 font-normal text-[16px] px-3">
            This is not another social media platform yet! SchoolPlug is here
            for student’s campus activities.
          </p>
        </div>
        <div className="mt-[140px] w-full relative max-w-[700px] mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop={true}
            freeMode={true}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="w-full"
          >
            {[frame1, frame2, frame3, frame4].map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[131.22px] md:!w-[131.22px]"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt="student"
                    className="w-[131.22px] h-[140.31px] object-cover rounded-[2rem]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none p-6 md:p-10 rounded-4xl overflow-hidden">
            {/* The Glass Layer */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl" />

            {/* The Image */}
            <img
              src={students}
              alt="Students"
              className="relative z-10 w-[250px] md:w-[350px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#174489] flex justify-center items-center w-[158px] h-[47px] text-[14px] font-bold mt-[140px] text-white px-4 py-2 rounded-full">
            Get Mobile App
          </button>
        </div>
      </header>

      <p className="text-center py-8 text-[#2D2D2D] text-[16px] font-[500px]">
        What to Expect
      </p>
      <section className="px-4 md:px-6 lg:px-10">
        <div className=" card-container rounded-[20px] mb-5 p-[28px]">
          <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
            <img src={communityicon} alt="" className=" md:w-[350px]" />
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-[24px]">Community</h2>
            <h3 className="font-normal text-[#2d2d2d] text-[16px]">
              Meet Other Students in your Campus
            </h3>
          </div>
        </div>

        <div className=" card-container2 rounded-[20px] mb-5 p-[28px]">
          <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
            <img src={bill} alt="" className=" md:w-[350px]" />
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-[24px]">Payment</h2>
            <h3 className="font-normal text-[#2d2d2d] text-[16px]">
              Easy Payment of student’s levy
            </h3>
          </div>
        </div>
        <div className=" card-container rounded-[20px] mb-5 p-[28px]">
          <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
            <img src={ticket} alt="" className=" md:w-[350px]" />
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-[24px]">Ticket Sales</h2>
            <h3 className="font-normal text-[#2d2d2d] text-[16px]">
              Purchase campus event tickets
            </h3>
          </div>
        </div>
        <div className=" card-container rounded-[20px] mb-5 p-[28px]">
          <div className="flex bg-[#DCE7F9] w-[60px] h-[60px] p-[9.54px] rounded-full items-center gap-x-2">
            <img src={handshake} alt="" className=" md:w-[350px]" />
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-[24px]">200+ Schools</h2>
            <h3 className="font-normal text-[#2d2d2d] text-[16px]">
              Find your campus and join
            </h3>
          </div>
        </div>
        <h1 className="text-center font-medium uppercase py-6 text-[24px]">
          Coming to soon on google and app store
        </h1>
        <div className="flex coming-soon items-center gap-y-2 flex-col rounded-[20px] justify-center pt-[21.396px] px-[69.914px] pb-[23.601px]">
          <img src={googleplay} alt="" className="w-[187px] h-[59.389px]" />
          <img src={appstore} alt="" className="w-[187px] h-[59.389px]" />
        </div>
      </section>
      <section className="bg-[#DCE7F9] my-4 pt-6 px-4">
        <p className="font-medium text-[16px]">SchoolPlug is Limitless!</p>
        <h1 className="font-bold text-[48px] leading-tight uppercase">
          Think <br /> about <br /> Campus <br /> activities?
        </h1>
        <h3 className="font-normal text-[16px]">We are bringing all to you!</h3>
        <div className="flex justify-center">
          <motion.div
            className="relative w-fit"
            animate={{
              y: [0, -20, 0], // Moves up 20px and back down
            }}
            transition={{
              duration: 4, // 4 seconds for a full loop (slow)
              repeat: Infinity, // Loop forever
              ease: "easeInOut", // Smooth start and end
            }}
          >
            {/* Left Fading Border */}
            <div className="absolute left-[-10px] top-0 bottom-0 w-[10px] bg-gradient-to-t from-[#fafafa] to-transparent" />

            {/* Right Fading Border */}
            <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] bg-gradient-to-t from-[#fafafa] to-transparent" />

            <img src={iphone} alt="iPhone mockup" className="block" />
          </motion.div>
        </div>
      </section>
      <article className="px-4 my-10 md:px-6 lg:px-10">
        <div className="download-app rounded-[20px] flex flex-col p-[12px] items-center">
          <h1 className="font-medium uppercase mb-0 text-center text-[24px]">
            Download and Install app instantly
          </h1>
          <p className="text-center py-4 text-[16px] font-normal">
            While we are still waiting on Google and App Store, click download
            to install SchoolPlug today!
          </p>
          <button className="bg-[#174489] mt-2 flex justify-center items-center w-[158px] h-[47px] text-[14px] font-bold  text-white px-4 py-2 rounded-full">
            Download App
          </button>
        </div>
      </article>
      <footer className="bg-[#174489] pt-[41px] px-[32px] pb-[48px] text-white">
        <div className="flex items-center gap-x-3">
          <img src={schoollogoWhite} alt="logo" />
          <h3 className="text-white font-semibold text-[21.497px]">
            SchoolPlug
          </h3>
        </div>
        <img src={twitter} alt="twitter" className="mt-5" />
        <p className="text-[#FAFAFA] font-normal pt-8 text-[16px]">
          Join your fellow students and enjoy the seamless service they do.
        </p>
        <h1 className="text-white font-semibold text-[24px] mt-4">
          Coming soon on Google Play Store and App Store
        </h1>
        <div className="flex items-center mt-7 gap-x-5">
          <p className="text-[#BCBCBC] font-normal text-[14px]">Terms</p>
          <p className="text-[#BCBCBC] font-normal text-[14px]">Privacy</p>
        </div>
        <p className="text-[#BCBCBC] font-normal text-[14px] pt-10">
          © schoolplug 2026, all right reserved
        </p>
      </footer>
    </>
  );
}

export default App;
