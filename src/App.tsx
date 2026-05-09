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
          <div className="absolute bg-[#00000000] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none ">
            <img src={students} alt="" className="w-[250px] md:w-[350px]" />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#174489] flex justify-center items-center w-[158px] h-[47px] mt-[140px] text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </header>

      <p className="text-center py-8 text-[#2D2D2D] text-[16px] font-[500px]">
        What to Expect
      </p>
      <section id="spacer">
        <div className="flex card-container p-[28px]">
          <div className="flex bg-[#DCE7F9] p-[9.54px] rounded-[10px] items-center gap-x-2">
            <img src={communityicon} alt="" className=" md:w-[350px]" />
            <h2 className="font-bold text-[24px]">Community</h2>
          </div>
          <h3 className="font-normal text-[16px]">
            Meet Other Students in your Campus
          </h3>
        </div>
      </section>
    </>
  );
}

export default App;
