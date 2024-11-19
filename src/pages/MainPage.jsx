import { useState } from "react";
const NavLinks = ["Home", "About Us", "Pricing", "Features"];

export default function DreamJobWebsite() {
  return (
    <div className="bg-black text-white overflow-hidden font-plusJakartaSans">
      <div className="max-w-[1440px] mx-auto ">
        <Header />
        <Hero />
      </div>
      
      <div className="max-w-[1440px] mx-auto">
        <WorkWithCompany />
       
        <GetUpdateSection />
        <BottomHero />
        <Footer />
      </div>
    </div>
  );
}


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <div className="relative ">
      <div className="flex items-center justify-between xl:px-[112px] pt-4 lg:pt-[50px] px-4">
        <div className="">
          <div className="flex items-center gap-[48px] ">
          
            <div className="hidden lg:flex gap-[30px]">
              {NavLinks.map((link, index) => (
                <p
                  key={index}
                  className="first:bg-PrimaryGradient first:bg-clip-text first:text-transparent text-white cursor-pointer hover:bg-PrimaryGradient hover:bg-clip-text hover:text-transparent transition ease-in-out duration-500"
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
        </div>
        <div className="space-x-4 hidden lg:flex">
          <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white py-3 px-14 font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px]">
            Register
          </button>
          <div className="p-[1px] bg-PrimaryGradient rounded-[5px] ">
            <button className="text-white py-3 px-12 font-semibold rounded-[5px]  overflow-hidden bg-black hover:bg-[#ad87f8]  transition ease-in-out duration-500">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
      {/* mobile  menu  */}
      <div
        className={`absolute p-4 h-[100vh] w-full lg:hidden bg-black text-white transition-transform duration-500 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center z-50 gap-5`}
      >
        <div className="flex flex-col gap-2">
          {NavLinks.map((link, index) => (
            <p
              key={index}
              className="first:bg-PrimaryGradient first:bg-clip-text first:text-transparent cursor-pointer hover:bg-PrimaryGradient hover:bg-clip-text hover:text-transparent"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white py-2 px-5 font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px]">
            Register
          </button>
          <div className="p-[1px] bg-PrimaryGradient rounded-[5px] ">
            <button className="text-white py-2 px-5 font-semibold rounded-[5px] overflow-hidden bg-black hover:bg-[#ad87f8] transition ease-in-out duration-500">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function Hero() {
  return (
    <div className=" xl:px-[112px] pt-[50px] lg:pt-[100px] px-4 overflow-hidden">
      <div className="">
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative">
            <p
              className={`font-cabin md:leading-[110px] text-[30px] sm:text-[50px] lg:text-[80px] xl:text-[116px] font-[900] tracking-tighter z-20 relative`}
            >
              My Name is Robert
            </p>
         
            <img
              src="/assets/badge.svg"
              alt="hero img"
              height={143}
              width={214}
              className="hidden sm:block absolute w-[100px] md:h-[130px] md:w-[200px] -top-5 -left-12  sm:-left-16 md:-top-65 md:-left-36  lg:-left-32  z-10"
            />
            <img
              src="/assets/dream-job/arrow.svg"
              alt="arrow"
              width={200}
              height={200}
              className="hidden md:block absolute -bottom-28 -left-36 lg:-bottom-40 lg:-left-24"
            />
          </div>
          <p className="text-base md:text-lg font-normal mt-5 md:mt-10 text-center">
            I&apos;m a software developer with a passion for computer programming and creating innovative solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-5 md:mt-[47px]">
            <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] md:h-[60px] py-2 px-5 md:px-14 ">
              Get Started
            </button>
            <div>
             
            </div>
          </div>
          <div className="relative flex gap-12 mt-10 md:mt-24 flex-wrap justify-center">
            <div>
              <p className={`font-cabin  md:text-[32px] font-[900]`}>20M+</p>
              <p className="text-center md:text-lg font-normal">Users</p>
            </div>
            <div>
              <p className={`font-cabin md:text-[32px] font-[900]`}>500K+</p>
              <p className="text-center md:text-lg font-normal">Jobs</p>
            </div>
            <div>
              <p className={`font-cabin  md:text-[32px] font-[900]`}>100+</p>
              <p className="text-center md:text-lg font-normal">Partners</p>
            </div>
          </div>
          <img
            src="/assets/dream-job/arrow_bottom.svg"
            alt="arrow bottom image"
            height={80}
            width={80}
            className="h-16 w-16 md:h-20 md:w-20 mt-5 md:mt-[50px] mb-5 md:ml-48"
          />
          <img
            src="/assets/dream-job/applyCard.png"
            alt="apply card image"
            height={75}
            width={113}
            className="hidden md:block absolute  lg:bottom-60 left-0 lg:left-32 blur-[6.728085994720459px] -rotate-[35deg]"
          />
          <img
            src="/assets/dream-job/applyCard.png"
            alt="apply card image"
            height={122}
            width={182}
            className="h-[100px] w-[150px] lg:h-[152px] lg:w-[182px] hidden md:block absolute right-0 lg:bottom-60 lg:right-32  rotate-[55deg]"
          />
        </div>
      </div>
    </div>
  );
}

function WorkWithCompany() {
  return (
    <div className="mx-4 xl:mx-[175px]">
      <div className="flex flex-col md:flex-row gap-10 xl:gap-[112px] items-center justify-center">
        <div>
          <img
            src="/assets/dream-job/icon_group.png"
            alt="icon group image"
            height={439}
            width={535}
            className="w-[300px] md:w-[400px] xl:w-[535px]"
          />
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className={`font-cabin text-[30px] md:text-[40px] font-[900]`}>
            <p>
              Work With{" "}
              <span className="bg-PrimaryGradient bg-clip-text text-transparent">
                Exciting
              </span>
              <br />
              Companies
            </p>
          </div>
          <div>
            <p className="md:text-lg text-[#D8D8D8] font-normal">
              Et in sapien enim congue interdum pulvinar non sed. <br /> Ac
              augue netus tellus semper.
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] md:h-[60px] py-2 px-5 md:px-14 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






function CustomCheckBox() {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <div
      className="h-4 w-4 md:h-[26px] md:w-[26px] flex justify-center items-center bg-PrimaryGradient rounded-md"
      onClick={() => setShowIcon(!showIcon)}
    >
      <div className={showIcon ? "" : "hidden"}>
        <svg
          className=" w-4 h-4 md:w-5 md:h-5"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          viewBox="0 0 26 26"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
}
function GetUpdateSection() {
  return (
    <div className="mx-4 xl:mx-[175px] my-[50px] lg:my-[100px] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[100px] xl:gap-[158px]">
      <div className="w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[447px]">
        <div className="rounded-t-[63.31px] p-[35px] xl:p-[47px] bg-[#111111] ">
          <div className="bg-PrimaryGradient rounded-[14px] p-[13px] flex justify-between items-center">
            <div>
              {" "}
              <svg
                className="text-themeColor-500 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-black"></div>
          </div>
        </div>
        <div className="relative bg-black flex items-center justify-between py-7">
          <div className="absolute -left-5">
            <CustomCheckBox />
          </div>
          <p className="text-sm ml-5">Job a Alerts</p>
          <p className="text-sm">1 new job for front end </p>
        </div>
        <div className="bg-[#111111] pt-[29px] pb-[11px] flex flex-col justify-center items-center">
          <div className="flex items-start gap-[19px]">
            <div className="flex items-center gap-[17px]">
              <CustomCheckBox />
              <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-white"></div>
            </div>
            <div>
              <CustomCheckBox />
              <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-PrimaryGradient mt-2"></div>
            </div>
          </div>
          <div className="flex items-start gap-[19px] mt-7">
            <div className="flex items-center gap-[17px]">
              <CustomCheckBox />
              <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-white"></div>
            </div>
            <div>
              <CustomCheckBox />
              <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-white mt-2"></div>
            </div>
          </div>
        </div>
        <div className="relative bg-black flex justify-between py-7">
          <div className="absolute -left-5">
            <CustomCheckBox />
          </div>
          <p className="text-sm ml-5">Job a Alerts</p>
          <p className="text-sm">1 new job for front end</p>
        </div>
        <div className="rounded-b-[63.31px] pt-[19px] pb-[35px] md:pb-[48px] bg-[#111111] ">
          <div className="flex justify-center items-center gap-5">
            <div className="space-x-[7px] flex items-center">
              <CustomCheckBox />
              <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-white"></div>
            </div>
            <div className="h-[10px] rounded-full w-[80px] md:w-[100px] xl:w-[146px] bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[25px]">
        <div className={`font-cabin text-[30px] md:text-[40px] font-[900]`}>
          <p>
            Always Get The{" "}
            <span className="bg-PrimaryGradient bg-clip-text text-transparent">
              Latest
            </span>
            <br />
            Information
          </p>
        </div>
        <div>
          <p className="md:text-lg text-[#D8D8D8] font-normal">
            Et in sapien enim congue interdum pulvinar non sed. <br /> Ac augue
            netus tellus semper.
          </p>
        </div>
        <div className="bg-[#111111] py-2 px-[10px] flex items-center justify-between rounded-[5px] focus-within:ring-[1px] ring-white">
          <input
            type="text"
            className="w-[60%] p-3 bg-transparent outline-none"
            placeholder="Email"
          />
          <button className=" float-end bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] w-[135px] h-[40px] md:h-[60px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
function BottomHero() {
  return (
    <div className="mx-4 xl:mx-[175px]">
      <div className="flex flex-col-reverse md:flex-row gap-10 xl:gap-[112px] items-center justify-center">
        <div className="flex flex-col gap-[25px]">
          <div className={`font-cabin text-[30px] md:text-[40px] font-[900]`}>
            <p>
              So Many People are{" "}
              <span className="bg-PrimaryGradient bg-clip-text text-transparent">
                Engaged
              </span>
              <br />
              All over the world
            </p>
          </div>
          <div>
            <p className="md:text-lg text-[#D8D8D8] font-normal">
              Et in sapien enim congue interdum pulvinar non sed. <br /> Ac
              augue netus tellus semper.
            </p>
          </div>
          <div>
            <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] md:h-[60px] py-2 px-5 md:px-14 ">
              Post A Job
            </button>
          </div>
        </div>
        <div>
          <img
            src="/assets/dream-job/Bottom_hero_image.svg"
            alt="icon group image"
            height={439}
            width={535}
            className="w-[300px] md:w-[400px] xl:w-[535px]"
          />
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="mx-4 lg:mx-[175px] mt-[50px] md:mt-[100px]">
      <div className="flex flex-col sm:flex-row justify-center gap-7 md:gap-10 items-center md:justify-between md:items-start mb-10">
        <div>
          <img
            src="/assets/dream-job/logo.svg"
            alt="footer logo image"
            width={170}
            height={50}
            className="w-[100px] lg:w-[170px]"
          />
        </div>
        <div>
          <p className="text-xs md:text-lg font-[900]">
            Find Us On Social Media :
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center group hover:cursor-pointer hover:border-[#ad87f8] transition ease-in-out duration-500">
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.64858 16.4583V9.11193H9.28012L9.6741 6.2489H6.6485V4.42098C6.6485 3.59206 6.89412 3.0272 8.16271 3.0272L9.7806 3.02649V0.465828C9.50078 0.431 8.54031 0.353027 7.42305 0.353027C5.09031 0.353027 3.49327 1.68724 3.49327 4.13752V6.2489H0.85498V9.11193H3.49327V16.4582H6.64858V16.4583Z"
                  className=" fill-white group-hover:fill-[#ad87f8]"
                />
              </svg>
            </div>
            <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center group hover:cursor-pointer hover:border-[#ad87f8] transition ease-in-out duration-500">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5213 0.0831317V0.0803223H12.2765L12.5524 0.133702C12.7363 0.168357 12.9033 0.213771 13.0534 0.269961C13.2035 0.32615 13.3487 0.391708 13.4891 0.466623C13.6295 0.541537 13.7568 0.61787 13.871 0.695593C13.9843 0.77239 14.086 0.853864 14.176 0.940016C14.265 1.02711 14.404 1.04959 14.5928 1.00744C14.7816 0.965301 14.9849 0.906766 15.2027 0.831852C15.4205 0.756938 15.636 0.672654 15.849 0.579001C16.062 0.485348 16.1917 0.425886 16.2382 0.4006C16.2837 0.374388 16.3079 0.360341 16.3108 0.358459L16.3137 0.354244L16.3282 0.347221L16.3427 0.340197L16.3572 0.333173L16.3718 0.32615L16.3747 0.321936L16.379 0.319126L16.3834 0.316317L16.3863 0.312103L16.4008 0.307888L16.4153 0.305079L16.4124 0.32615L16.4081 0.347221L16.4008 0.368292L16.3935 0.389363L16.3863 0.40341L16.379 0.417457L16.3718 0.438528C16.3669 0.452575 16.3621 0.4713 16.3572 0.494717C16.3524 0.518134 16.3064 0.611773 16.2193 0.775663C16.1321 0.939553 16.0232 1.10577 15.8925 1.27434C15.7618 1.44291 15.6447 1.57026 15.5411 1.65643C15.4365 1.74352 15.3673 1.80439 15.3334 1.83904C15.2995 1.87462 15.2584 1.9074 15.21 1.93737L15.1374 1.98373L15.1228 1.99075L15.1083 1.99778L15.1054 2.00199L15.1011 2.0048L15.0967 2.00761L15.0938 2.01182L15.0793 2.01885L15.0647 2.02587L15.0619 2.03009L15.0575 2.0329L15.0531 2.0357L15.0502 2.03992L15.0473 2.04413L15.043 2.04694L15.0386 2.04975L15.0357 2.05397H15.1083L15.5149 1.96968C15.786 1.91349 16.045 1.8456 16.2919 1.766L16.684 1.63957L16.7276 1.62552L16.7493 1.6185L16.7639 1.61148L16.7784 1.60445L16.7929 1.59743L16.8074 1.59041L16.8365 1.58619L16.8655 1.58338V1.61148L16.8583 1.61429L16.851 1.6185L16.8481 1.62271L16.8437 1.62552L16.8394 1.62833L16.8365 1.63255L16.8336 1.63676L16.8292 1.63957L16.8249 1.64238L16.8219 1.64659L16.8191 1.65081L16.8147 1.65362L16.8074 1.66767L16.8002 1.68171L16.7958 1.68452C16.7939 1.68733 16.7324 1.76692 16.6114 1.92333C16.4904 2.08066 16.425 2.16025 16.4153 2.16213C16.4057 2.16494 16.3921 2.17899 16.3747 2.20427C16.3582 2.23048 16.2556 2.33491 16.0668 2.51753C15.878 2.70014 15.6931 2.86261 15.5121 3.00497C15.33 3.14825 15.2381 3.3243 15.2361 3.53315C15.2332 3.74105 15.2221 3.97611 15.2027 4.23832C15.1834 4.50054 15.147 4.78382 15.0938 5.08818C15.0406 5.39254 14.9583 5.7367 14.8469 6.12066C14.7356 6.50461 14.6 6.87921 14.4403 7.24444C14.2805 7.60967 14.1135 7.93743 13.9393 8.22775C13.765 8.51806 13.6053 8.76389 13.46 8.96523C13.3148 9.16657 13.1672 9.35621 13.0171 9.53415C12.867 9.71208 12.6773 9.9125 12.4478 10.1354C12.2174 10.3573 12.0916 10.4791 12.0703 10.5006C12.048 10.5212 11.9531 10.598 11.7856 10.731C11.6191 10.8649 11.44 10.9988 11.2483 11.1327C11.0576 11.2657 10.8823 11.3767 10.7226 11.4656C10.5628 11.5546 10.3702 11.6562 10.1446 11.7705C9.91998 11.8857 9.67696 11.9924 9.41556 12.0908C9.15416 12.1891 8.87824 12.2804 8.58779 12.3647C8.29734 12.449 8.01658 12.5145 7.74549 12.5613C7.47442 12.6082 7.16703 12.648 6.82333 12.6807L6.30778 12.7299V12.7369H5.36383V12.7299L5.24039 12.7229C5.15811 12.7182 5.09033 12.7135 5.03708 12.7088C4.98384 12.7042 4.78294 12.6784 4.4344 12.6316C4.08587 12.5848 3.81237 12.5379 3.61389 12.4911C3.41543 12.4443 3.12013 12.3553 2.72803 12.2242C2.33593 12.0931 2.00046 11.9606 1.72163 11.8267C1.44378 11.6937 1.26951 11.6094 1.19883 11.5738C1.12912 11.5392 1.0507 11.4961 0.963567 11.4446L0.832866 11.3673L0.829976 11.3631L0.825604 11.3603L0.821248 11.3575L0.818343 11.3533L0.803821 11.3462L0.789299 11.3392L0.786409 11.335L0.782037 11.3322L0.777681 11.3294L0.774776 11.3252L0.771886 11.321L0.767515 11.3182H0.760254V11.2901L0.774776 11.2929L0.789299 11.2971L0.854649 11.3041C0.898216 11.3088 1.01682 11.3158 1.21045 11.3252C1.40409 11.3345 1.60981 11.3345 1.82765 11.3252C2.04548 11.3158 2.26817 11.2947 2.49567 11.262C2.72319 11.2292 2.99186 11.173 3.30166 11.0934C3.61148 11.0138 3.89612 10.9192 4.15559 10.8096C4.41409 10.6991 4.59803 10.6167 4.70744 10.5624C4.81586 10.509 4.98142 10.4098 5.20409 10.2646L5.5381 10.0469L5.541 10.0427L5.54536 10.0398L5.54973 10.037L5.55262 10.0328L5.55553 10.0286L5.55988 10.0258L5.56425 10.023L5.56714 10.0188L5.58167 10.0146L5.59619 10.0118L5.59909 9.99771L5.60345 9.98366L5.60782 9.98085L5.61071 9.97664L5.49453 9.96961C5.41709 9.96494 5.34205 9.96024 5.26944 9.95557C5.19683 9.95089 5.08307 9.92982 4.92816 9.89235C4.77327 9.85489 4.60626 9.7987 4.42714 9.72379C4.24804 9.64887 4.07377 9.5599 3.90434 9.45689C3.73492 9.35388 3.61244 9.26818 3.53692 9.19982C3.46238 9.13238 3.36556 9.03687 3.24648 8.91326C3.12837 8.78871 3.02574 8.66087 2.9386 8.52977C2.85147 8.39866 2.76821 8.2474 2.68883 8.07604L2.56828 7.82038L2.56102 7.79931L2.55376 7.77824L2.5494 7.76419L2.5465 7.75014L2.56828 7.75295L2.59007 7.75716L2.74981 7.77824C2.85632 7.79228 3.02333 7.79696 3.25083 7.79228C3.47835 7.78761 3.63567 7.77824 3.72281 7.76419C3.80994 7.75014 3.8632 7.74077 3.88255 7.73609L3.9116 7.72907L3.94791 7.72205L3.98421 7.71502L3.98712 7.71081L3.99147 7.708L3.99584 7.70519L3.99873 7.70098L3.96969 7.69395L3.94064 7.68693L3.9116 7.6799L3.88255 7.67288L3.85351 7.66586C3.83415 7.66118 3.80027 7.65181 3.75185 7.63776C3.70345 7.62372 3.57275 7.5722 3.35975 7.48324C3.14677 7.39428 2.97733 7.30765 2.85147 7.22337C2.72529 7.13884 2.60498 7.0464 2.49132 6.94664C2.37804 6.8455 2.25364 6.71532 2.11809 6.55612C1.98255 6.39692 1.86154 6.21196 1.75503 6.00125C1.64854 5.79054 1.56867 5.5892 1.51542 5.39722C1.46238 5.20637 1.42738 5.01124 1.41087 4.81426L1.38471 4.51927L1.39924 4.52207L1.41376 4.52629L1.42828 4.53331L1.4428 4.54034L1.45733 4.54736L1.47185 4.55438L1.69694 4.65271C1.84702 4.71827 2.03338 4.77446 2.25605 4.82128C2.47874 4.8681 2.61185 4.89386 2.65542 4.89854L2.72077 4.90557H2.85147L2.84858 4.90135L2.84421 4.89854L2.83985 4.89573L2.83695 4.89152L2.83406 4.8873L2.82969 4.88449L2.82533 4.88168L2.82242 4.87747L2.8079 4.87045L2.79338 4.86342L2.79049 4.85921L2.78612 4.8564L2.78176 4.85359L2.77886 4.84938L2.76434 4.84235L2.74981 4.83533L2.74692 4.83112C2.74402 4.82923 2.70238 4.79927 2.62202 4.74121C2.54262 4.68221 2.45937 4.60589 2.37223 4.51224C2.2851 4.41859 2.19796 4.32026 2.11083 4.21725C2.02354 4.114 1.94578 4.00354 1.87847 3.88714C1.81071 3.77008 1.73906 3.62117 1.66354 3.44043C1.589 3.26063 1.53236 3.07942 1.49363 2.8968C1.45491 2.71419 1.43313 2.53392 1.42828 2.35598C1.42345 2.17805 1.42828 2.02587 1.4428 1.89945C1.45733 1.77302 1.48637 1.6302 1.52994 1.471C1.5735 1.31181 1.63644 1.14324 1.71873 0.965301L1.84217 0.698403L1.84943 0.677332L1.85669 0.656261L1.86106 0.653452L1.86395 0.649237L1.86686 0.645023L1.87121 0.642214L1.87558 0.645023L1.87847 0.649237L1.88138 0.653452L1.88573 0.656261L1.89011 0.65907L1.893 0.663285L1.8959 0.667499L1.90026 0.670308L1.90752 0.684356L1.91478 0.698403L1.91915 0.701212L1.92204 0.705427L2.11809 0.916136C2.24879 1.05661 2.4037 1.21347 2.58281 1.38672C2.76192 1.55997 2.86116 1.64987 2.88051 1.65643C2.89989 1.66392 2.92408 1.68545 2.95313 1.72105C2.98217 1.7557 3.07899 1.83858 3.24357 1.96968C3.40817 2.10079 3.62358 2.25297 3.88982 2.42622C4.15607 2.59946 4.45135 2.77038 4.77568 2.93895C5.10002 3.10751 5.44856 3.25969 5.82129 3.39548C6.19403 3.53128 6.45543 3.62024 6.60549 3.66238C6.75557 3.70452 7.01212 3.75837 7.37517 3.82392C7.73823 3.88948 8.01175 3.93162 8.19569 3.95035C8.37964 3.96907 8.50551 3.97985 8.57327 3.98266L8.67492 3.98547L8.67203 3.9644L8.66766 3.94333L8.63862 3.76774C8.61926 3.65068 8.60957 3.48679 8.60957 3.27608C8.60957 3.06537 8.62652 2.87105 8.6604 2.69312C8.6943 2.51518 8.74512 2.33491 8.81289 2.1523C8.88066 1.96968 8.94698 1.82311 9.01184 1.71262C9.07769 1.60305 9.16385 1.47803 9.27034 1.33755C9.37685 1.19708 9.51481 1.05193 9.68423 0.902089C9.85366 0.752246 10.0473 0.618797 10.2651 0.501741C10.483 0.384685 10.6839 0.295709 10.8678 0.234842C11.0517 0.173976 11.2067 0.134166 11.3325 0.11544C11.4584 0.0967155 11.5213 0.0859412 11.5213 0.0831317Z"
                  className=" fill-white group-hover:fill-[#ad87f8]"
                />
              </svg>
            </div>
            <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center group hover:cursor-pointer hover:border-[#ad87f8] transition ease-in-out duration-500">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.760254 8.40566C0.760254 5.18895 0.760254 3.5806 1.52677 2.42215C1.86905 1.90485 2.31208 1.46183 2.82938 1.11954C3.98783 0.353027 5.59618 0.353027 8.81289 0.353027C12.0296 0.353027 13.6379 0.353027 14.7964 1.11954C15.3137 1.46183 15.7567 1.90485 16.099 2.42215C16.8655 3.5806 16.8655 5.18895 16.8655 8.40566C16.8655 11.6224 16.8655 13.2307 16.099 14.3892C15.7567 14.9065 15.3137 15.3495 14.7964 15.6918C13.6379 16.4583 12.0296 16.4583 8.81289 16.4583C5.59618 16.4583 3.98783 16.4583 2.82938 15.6918C2.31208 15.3495 1.86905 14.9065 1.52677 14.3892C0.760254 13.2307 0.760254 11.6224 0.760254 8.40566ZM12.9817 8.40586C12.9817 10.7083 11.1152 12.5748 8.81274 12.5748C6.5103 12.5748 4.6438 10.7083 4.6438 8.40586C4.6438 6.10342 6.5103 4.23692 8.81274 4.23692C11.1152 4.23692 12.9817 6.10342 12.9817 8.40586ZM8.81274 11.1643C10.3362 11.1643 11.5712 9.92933 11.5712 8.40586C11.5712 6.8824 10.3362 5.64739 8.81274 5.64739C7.28928 5.64739 6.05427 6.8824 6.05427 8.40586C6.05427 9.92933 7.28928 11.1643 8.81274 11.1643ZM13.0001 5.00003C13.5524 5.00003 14.0001 4.55231 14.0001 4.00003C14.0001 3.44774 13.5524 3.00003 13.0001 3.00003C12.4478 3.00003 12.0001 3.44774 12.0001 4.00003C12.0001 4.55231 12.4478 5.00003 13.0001 5.00003Z"
                  className=" fill-white group-hover:fill-[#ad87f8]"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-lg font-extrabold">
            We’re Always Happy To Help
          </p>
          <p className="text-xs md:text-lg font-extrabold text-center md:text-right">
            uifry@gmail.com
          </p>
        </div>
      </div>
      <div className="py-[0.5px] bg-[#E4D8D866]"></div>
        <div className="flex flex-col sm:flex-row justify-center gap-7 md:gap-10 items-center md:justify-between md:items-start mt-10">
        
           

                </div>
    </div>
  );
}