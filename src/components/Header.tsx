import schoolLogo from "../assets/schoolLogo.svg";
import menuIcon from "../assets/menu.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import students from "../assets/biggerScreen.png";
import { navLinks } from "../App";
export default function Header({
  setIsOpen,
  activeLink,
  setActiveLink,
}: {
  setIsOpen: (value: boolean) => void;
  activeLink: string;
  setActiveLink: (value: string) => void;
}) {
  return (
    <header className="landingpage lg:min-h-screen">
      <nav className="flex justify-between  items-center md:max-w-[1250px]   md:w-[90vw]  m-auto p-3 ">
        <div className="flex items-center pt-1.5 lg:pt-0 gap-x-1">
          <div className="lg:w-[52px] lg:h-[52px]">
            <img src={schoolLogo} alt="logo" className="w-full" />
          </div>
          <h3 className="text-[#2B70DB] lg:text-[24px] font-semibold text-[14px]">
            SchoolPlug
          </h3>
        </div>
        <div className="hidden lg:flex gap-x-6 ">
          {navLinks.map((item) => (
            <div
              key={item}
              className="border-b last:border-b-0 border-[#EAEAEA] lg:border-none py-3"
            >
              <a
                href={item === "Support" ? "mailto:support@schoolplug.ng" : "#"}
                onClick={() => setActiveLink(item)}
                className={`block text-[14px] font-semibold transition-all duration-200 ${
                  activeLink === item
                    ? " text-[#181818]"
                    : " text-[#7B7B7B] hover:text-[#181818]"
                }`}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <img src={menuIcon} alt="menu" className="w-10 h-10" />
        </button>{" "}
        <a
          href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
          className="hidden lg:block"
          download="app-release.apk"
        >
          <button className="bg-[#174489] justify-center items-center w-[191px] h-[47px] text-[14px] font-bold  text-white px-4 py-2 rounded-full">
            Get Mobile App
          </button>{" "}
        </a>
      </nav>
      <div className="flex mt-10 flex-col lg:mt-20 items-center justify-center">
        <div className="lg:flex lg:flex-row gap-x-7">
          <h1 className="font-bold text-center text-[40px] lg:text-[88px] leading-tight mb-0">
            Student’s
          </h1>
          <h1 className="font-bold text-[40px] lg:text-[88px] leading-tight mb-0">
            Campus Media
          </h1>
        </div>
        <p className="text-center text-[#2D2D2D] mt-6 lg:mt-16 font-normal text-[16px] lg:text-[24px] px-3">
          This is not another social media platform yet! SchoolPlug <br /> is
          here for student’s campus activities.
        </p>
      </div>
      <div className="mt-[98px] lg:mt-[156px] w-full relative max-w-[700px] lg:max-w-[1200px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
          //   freeMode={{
          //     enabled: true,
          //     momentum: false,
          //   }}
          allowTouchMove={false}
          speed={5000}
          //   loopAdditionalSlides={4}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="w-full"
        >
          {[...Array(4)]
            .flatMap(() => [frame1, frame2, frame3, frame4])
            .map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[131.22px] md:!w-[131.22px] lg:!w-[299px]"
              >
                <div className="rounded-4xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt="student"
                    className="w-[131.22px] lg:w-[299px] h-[140.31px] lg:h-[320px] object-cover rounded-4xl"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute w-[244px] lg:w-[556px] h-[257px] lg:h-[587px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none p-6 md:p-10 rounded-4xl overflow-hidden">
          {/* The Glass Layer */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl" />
          {/* The Image */}
          <img
            src={students}
            alt="Students"
            className="relative z-10  w-full h-full"
          />
        </div>
      </div>

      <a
        href="https://pub-8ba94395a70941c9b4d1fa7511af6d2e.r2.dev/app-release.apk"
        download="app-release.apk"
        className="flex justify-center"
      >
        <button className="bg-[#174489] mb-8 lg flex lg:hidden justify-center items-center w-[158px] h-[47px] text-[14px] font-bold mt-[69px] text-white px-4 py-2 rounded-full">
          Get Mobile App
        </button>
      </a>
    </header>
  );
}
