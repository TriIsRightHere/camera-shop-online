import { React } from "react";
import "./App.css";
import { useState } from "react";

import camera from "./public/Camera.png";
import search from "./public/Search.png";
import cart from "./public/Shopping.png";
import heart from "./public/Heart.png";
import thumnail from "./public/Thumbnail.png";
import thumnail1 from "./public/Thumbnail1.png";
import thumnail2 from "./public/Thumbnail2.png";
import thumnail3 from "./public/Thumbnail3.png";
import thumnail4 from "./public/Thumbnail4.png";
import main from "./public/main.png";
import instock from "./public/InStock.png";
import battery from "./public/Battery.png";
import megapixal from "./public/megapixels.png";
import Chip from "./public/Chip.png";
import Lens from "./public/Lens.png";
import review from "./public/Reviews.png";
import Frame from "./public/Frame.png";
import Help from "./public/Help.png";
import share from "./public/share.png";
import Charger from "./public/Charger.png";
import LensIcon from "./public/LensIcon.png";
import DSLR from "./public/DSLR.png";
import adobe from "./public/adobe.png";
import image from "./public/Image.png";
import ChipCenter from "./public/ChipCenter.png";
import SutterSpeed from "./public/SutterSpeed.png";
import Stability from "./public/Stability.png";
import Shape from "./public/Shape.png";
import Shape2 from "./public/shape2.png";
import BigCam from "./public/bigCamera.png";
import Elip from "./public/Ellipse3.png";
import Elip1 from "./public/Ellipse4.png";
import Elip2 from "./public/Ellipse5.png";
import Elip3 from "./public/Ellipse6.png";
import Overlay from "./public/Overlay.png";
import Product from "./public/Product.png";
import Product1 from "./public/Product1.png";
import Product2 from "./public/Product2.png";
import Product3 from "./public/Product3.png";

import arrow from "./public/Arrow.png";
import Facebook from "./public/Facebook.png";
import Ig from "./public/Instagram.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";

const reviews = [
    {
        Title: "Best on the market",
        decripsion: "i love this product because the support is great. Please...",
        worldtraveler: "worldtraveler",
    },
    {
        Title: "Best on the market",
        decripsion: "i love this product because the support is great. Please...",
        worldtraveler: "worldtraveler",
    },
    {
        Title: "Best on the market",
        decripsion: "i love this product because the support is great. Please...",
        worldtraveler: "worldtraveler",
    },
    {
        Title: "Best on the market",
        decripsion: "i love this product because the support is great. Please...",
        worldtraveler: "worldtraveler",
    },
];
function App() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState();
    const [modalEdit, setModalEdit] = useState(false);
    const openEdit = () => setModalEdit(true);
    const closeEdit = () => setModalEdit(false);
    const [rv, setRv] = useState({
        Title: null,
        decripsion: null,
        worldtraveler: null,
    });
    function submitForm(e) {
        setRv({
            Title: "Best on the market",
            decripsion: e.value,
            worldtraveler: "worldtraveler",
        });
    }
    function setData() {
        reviews.push(rv);
    }
    return (
        <div>
            <header className="h-[146.667px] flex items-center">
                <div className="w-2/5 py-[26px] flex text-[32px] justify-around items-center">
                    <div>Home</div>
                    <div>Products</div>
                    <div>Contact</div>
                </div>
                <div className="w-1/5 flex justify-center">
                    <img src={camera} alt="logo" />
                </div>
                <div className="w-2/5 h-[146.667px] bg-black flex item-center">
                    <div className="w-3/5 flex justify-end items-center">
                        <input
                            placeholder="Subscribe in our newsletter..."
                            className="text-center w-[386.667px] h-[61.333px] rounded-[26.667px]"
                        />
                    </div>
                    <div className="flex m-auto justify-between">
                        <div className="px-3">
                            <img
                                src={search}
                                alt="search"
                                className="w-[45px] h-[45px] object-cover"
                            />
                        </div>
                        <div className="px-3">
                            <img
                                src={heart}
                                alt="heart"
                                className="w-[45px] h-[45px] object-cover"
                            />
                        </div>
                        <div className="px-3 relative">
                            <img
                                src={cart}
                                alt="cart"
                                className="w-[45px] h-[45px] object-cover "
                            />
                            <span className="absolute flex items-center h-3 w-[25px] transform translate-x-[90%] translate-y-[-90%] top-1/2">
                                <span className="animate-ping absolute flex rounded-full bg-red-500 opacity-100 h-[20px] w-[20px]"></span>
                                <span className="relative flex rounded-full h-[25px] w-[50px] bg-red-600  items-center justify-center text-white font-bold">
                                    {count}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mx-[100px] mt-[74px]">
                <section className="flex">
                    <div className="w-1/2 flex">
                        <div className="flex-col h-[720px] justify-center items-center">
                            <div className="my-[40px]">
                                <img src={thumnail} alt="Nature" className="w-[100px] h-[100px]" />
                            </div>
                            <div className="my-[40px]">
                                <img src={thumnail1} alt="Snow" className="w-[100px] h-[100px]" />
                            </div>
                            <div className="my-[40px]">
                                <img
                                    src={thumnail2}
                                    alt="Mountains"
                                    className="w-[100px] h-[100px]"
                                />
                            </div>
                            <div className="my-[40px]">
                                <img src={thumnail3} alt="Lights" className="w-[100px] h-[100px]" />
                            </div>
                            <div className="my-[40px]">
                                <img src={thumnail4} alt="Lights" className="w-[100px] h-[100px]" />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <img
                                    src={main}
                                    alt="Nature"
                                    className="w-[696px] h-[720px] object-cover"
                                />
                                <div className="w-[696px] h-[0.5px] bg-gray-500 mt-[33px]"></div>
                            </div>
                            <div className="w-[694.667px]">
                                <div>
                                    <h2 className="text-[30px] py-4 flex justify-between items-center">
                                        <span>Description</span>{" "}
                                        {visible === 1 ? (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(0)}
                                            >
                                                -
                                            </span>
                                        ) : (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(1)}
                                            >
                                                +
                                            </span>
                                        )}
                                    </h2>
                                    {visible === 1 && (
                                        <p className="text-[#555]">
                                            Your full frame journey begins with the Z 5. Simple yet
                                            sophisticated, compact yet powerful, the Z 5 is built to
                                            grow with you. It’s everything you’d expect from a full
                                            frame mirrorless camera—intense detail, expansive views,
                                            brilliant low light capabilities, 4K UHD video and
                                            more—plus all the innovative tools you need to push the
                                            limits of your creativity.
                                        </p>
                                    )}
                                    <div className="w-[696px] h-[0.5px] bg-gray-500 mt-[33px]"></div>
                                </div>
                                <div>
                                    <h2 className="text-[30px] py-4 flex justify-between items-center">
                                        <span>Tech Specs</span>
                                        {visible === 2 ? (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(0)}
                                            >
                                                -
                                            </span>
                                        ) : (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(2)}
                                            >
                                                +
                                            </span>
                                        )}
                                    </h2>
                                    {visible === 2 && (
                                        <p className="text-[#555]">
                                            Your full frame journey begins with the Z 5. Simple yet
                                            sophisticated, compact yet powerful, the Z 5 is built to
                                            grow with you. It’s everything you’d expect from a full
                                            frame mirrorless camera—intense detail, expansive views,
                                            brilliant low light capabilities, 4K UHD video and
                                            more—plus all the innovative tools you need to push the
                                            limits of your creativity.
                                        </p>
                                    )}
                                    <div className="w-[696px] h-[0.5px] bg-gray-500 mt-[33px]"></div>
                                </div>
                                <div>
                                    <h2 className="text-[30px] py-4 flex justify-between items-center">
                                        <span>Shipping & Warranty</span>
                                        {visible === 3 ? (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(0)}
                                            >
                                                -
                                            </span>
                                        ) : (
                                            <span
                                                className="text-5xl font-bold cursor-pointer"
                                                onClick={() => setVisible(3)}
                                            >
                                                +
                                            </span>
                                        )}
                                    </h2>
                                    {visible === 3 && (
                                        <p className="text-[#555]">
                                            Your full frame journey begins with the Z 5. Simple yet
                                            sophisticated, compact yet powerful, the Z 5 is built to
                                            grow with you. It’s everything you’d expect from a full
                                            frame mirrorless camera—intense detail, expansive views,
                                            brilliant low light capabilities, 4K UHD video and
                                            more—plus all the innovative tools you need to push the
                                            limits of your creativity.
                                        </p>
                                    )}
                                    <div className="w-[696px] h-[0.5px] bg-gray-500 mt-[33px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-black text-[45px] font-bold flex justify-between">
                            Nikon Z5{" "}
                            <span className="text-[18px] flex items-center">
                                4.2 (1653)
                                <div className="flex">
                                    <img src={review} alt="review" width={24} height={24} />
                                    <img src={review} alt="review" width={24} height={24} />
                                    <img src={review} alt="review" width={24} height={24} />
                                    <img src={review} alt="review" width={24} height={24} />
                                    <img src={review} alt="review" width={24} height={24} />
                                </div>
                            </span>
                        </h1>
                        <h2 className="text-[30px] text-black mt-[10px] mb-[26px]">
                            $899
                            <span className="line-through text-gray-500 text-[23px] font-normal">
                                $1,099.95
                            </span>
                        </h2>
                        <div>
                            <p className="text-[23px] my-[5px]">Options</p>
                            <button className="p-[13px] bg-black rounded-[6.667px] text-white">
                                Z 5 Body Only
                            </button>
                            <button className="ml-[10px] p-[13px] bg-white rounded-[6.667px] border border-black">
                                24-50mm Lens Kit
                            </button>
                        </div>
                        <div className=" space-y-2 mt-[35px]">
                            <h2 className="flex space-x-1 items-center">
                                <img src={instock} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Currently In Stock</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={Chip} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Expeed 6 Chip</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={Lens} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Works with 24-50mm Lens</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={megapixal} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">24.3 million Effective Pixels</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={battery} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">EN-EL15c rechargeable Li-ion battery</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <p className="text-[18px] underline">View All Tech Specs</p>
                            </h2>
                        </div>
                        <div className="flex  space-x-4 items-center mt-[55px]">
                            <button className="px-[66px] py-[13px] bg-[#B4E907] rounded-[133.333px]  border border-black">
                                Add To Cart
                            </button>
                            <button
                                className="px-[66px] py-[13px] bg-black rounded-[133.333px] border border-black text-white"
                                onClick={() => setCount(count + 1)}
                            >
                                Buy It Now
                            </button>
                        </div>
                        <div className="w-[840px] h-[0.5px] bg-black mt-[33px]"></div>
                        <div className="space-y-2 mt-[15px]">
                            <h2 className="flex space-x-1 items-center">
                                <img src={Help} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Got any questions? Contact us</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={Frame} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Free Shipping over $150</p>
                            </h2>
                            <h2 className="flex space-x-1 items-center">
                                <img src={share} alt="instock" width={24} height={24} />{" "}
                                <p className="text-[18px]">Share</p>
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="mt-[256px]">
                    <h1 className="text-[45px] font-bold text-center">What’s included</h1>
                    <div className="flex justify-around mt-[66px]">
                        <img src={DSLR} alt="dslr" />
                        <img src={LensIcon} alt="dslr" />
                        <img src={Charger} alt="dslr" />
                        <img src={adobe} alt="dslr" />
                    </div>
                    <div className="flex mt-[100px]  width={553.333} height={688}">
                        <div className="w-1/2 ml-[112px] rounded-tl-[26px] rounded-bl-[26px] bg-black text-white ">
                            <div className="mt-[125px]">
                                <h1 className="text-[45px] font-bold text-center">
                                    Expand your creative playground
                                </h1>
                            </div>
                            <div className="mt-[26px]">
                                <p className="w-[694px] mx-auto">
                                    Your full frame journey begins with the Z 5. Simple yet
                                    sophisticated, compact yet powerful, the Z 5 is built to grow
                                    with you. It’s everything you’d expect from a full frame
                                    mirrorless camera—intense detail, expansive views, brilliant low
                                    light capabilities, 4K UHD video and more—plus all the
                                    innovative tools you need to push the limits of your creativity.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img
                                src={image}
                                alt="..."
                                className=" object-cover rounded-tr-[26px] rounded-br-[26px]"
                                width={848}
                                height={506.667}
                            />
                        </div>
                    </div>
                    <div className="mt-[66px] grid grid-cols-3 gap-4  ml-[100px]">
                        <div>
                            <img src={ChipCenter} alt="chip" width={553.333} height={688} />
                            <h1 className="text-[36px] font-semibold my-[26px]">Super powered.</h1>
                            <p className="text-[23px] ">
                                Z 5 is powered by Nikon’s fast, comprehensive EXPEED 6 image
                                processing system. It’s the secret behind the camera’s sensational
                                photo and video quality, autofocus performance, low-light
                                capabilities, distortion control, image clarity, color reproduction
                                and more.
                            </p>
                        </div>
                        <div>
                            <img src={SutterSpeed} alt="chip" width={553.333} height={688} />

                            <h1 className="text-[36px] font-semibold my-[26px]">
                                The stabilityyou crave.
                            </h1>
                            <p className="text-[23px] ">
                                Sharpness starts with stability, and Z 5 has one of the best
                                in-camera image stabilization systems available. NIKKOR Z lenses
                                activate 5-axis VR image stabilization—up to five stops* of
                                stabilization in up to five directions
                            </p>
                        </div>
                        <div>
                            <img src={Stability} alt="chip" width={553.333} height={688} />
                            <h1 className="text-[36px] font-semibold my-[26px]">
                                In the blink of an iris.
                            </h1>
                            <p className="text-[23px] ">
                                Freeze time with shutter speeds as fast as 1/8000 of a second—fast
                                enough to capture moments invisible to the naked eye. When shooting
                                with wide aperture settings for shallow depth-of-field and blurred
                                backgrounds, that speed can also be used to control your shot’s
                                brightness.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px]">
                    <h1 className="text-[45px] font-bold text-center">
                        Don’t take our word for it
                    </h1>
                    <div className="mt-[66px] flex justify-between items-center">
                        <div className="w-[373px] h-[293px] bg-white text-center shadow-md">
                            <h2 className="text-[24px] font-medium flex justify-center items-center pt-[55px]">
                                Excellent
                            </h2>
                            <div className="flex space-x-4  justify-center items-center my-[10px]">
                                <div className="bg-[#219653] w-[53px] h-[53px] flex justify-center items-center">
                                    <img src={Shape} alt="..." width={37} height={37} />
                                </div>
                                <div className="bg-[#219653] w-[53px] h-[53px] flex justify-center items-center">
                                    <img src={Shape} alt="..." width={37} height={37} />
                                </div>{" "}
                                <div className="bg-[#219653] w-[53px] h-[53px] flex justify-center items-center">
                                    <img src={Shape} alt="..." width={37} height={37} />
                                </div>{" "}
                                <div className="bg-[#219653] w-[53px] h-[53px] flex justify-center items-center">
                                    <img src={Shape} alt="..." width={37} height={37} />
                                </div>{" "}
                                <div className="bg-[#219653] w-[53px] h-[53px] flex justify-center items-center">
                                    <img src={Shape} alt="..." width={37} height={37} />
                                </div>
                            </div>
                            <p className="text-[18px]">
                                Base on <span className=" underline font-bold">456 reviews</span>
                            </p>
                            <div className="flex justify-center items-center mt-[10px]">
                                <img src={Shape2} alt="..." width={37} height={37} />
                                <p className="font-bold text-[21px]">Trustpilot</p>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={4}
                            modules={[Navigation, Pagination, A11y]}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".backs",
                            }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            rewind={true}
                            loop={true}
                        >
                            {reviews.map((item, i) => {
                                return (
                                    <SwiperSlide>
                                        <div className="w-[373px] h-[293px] bg-white text-left shadow-md p-[26px]">
                                            <div className="flex space-x-4 justify-between  items-center my-[10px] pt-[25px]">
                                                <div className="flex space-x-1 justify-between items-center my-[10px]">
                                                    <div className="bg-[#219653] w-[18px] h-[18px] flex justify-center items-center">
                                                        <img
                                                            src={Shape}
                                                            alt="..."
                                                            width={37}
                                                            height={37}
                                                        />
                                                    </div>
                                                    <div className="bg-[#219653] w-[18px] h-[18px] flex justify-center items-center">
                                                        <img
                                                            src={Shape}
                                                            alt="..."
                                                            width={37}
                                                            height={37}
                                                        />
                                                    </div>{" "}
                                                    <div className="bg-[#219653] w-[18px] h-[18px] flex justify-center items-center">
                                                        <img
                                                            src={Shape}
                                                            alt="..."
                                                            width={37}
                                                            height={37}
                                                        />
                                                    </div>{" "}
                                                    <div className="bg-[#219653] w-[18px] h-[18px] flex justify-center items-center">
                                                        <img
                                                            src={Shape}
                                                            alt="..."
                                                            width={37}
                                                            height={37}
                                                        />
                                                    </div>{" "}
                                                    <div className="bg-[#219653] w-[18px] h-[18px] flex justify-center items-center">
                                                        <img
                                                            src={Shape}
                                                            alt="..."
                                                            width={37}
                                                            height={37}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>2 days ago</p>
                                                </div>
                                            </div>
                                            <h2 className="text-[24px] font-medium">
                                                {item.Title}
                                            </h2>
                                            <p className="text-[18px]">{item.decripsion}</p>
                                            <div className="flex justify-left items-center mt-[10px]">
                                                <p className="font-bold text-[21px]">
                                                    {item.worldtraveler}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => openEdit()}
                            className="px-[66px] py-[13px] bg-black rounded-[133.333px] border border-black text-white mt-[68px] "
                        >
                            Write a review
                        </button>
                        {modalEdit && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
                                onClick={closeEdit}
                            >
                                <div
                                    className="bg-white p-6 rounded-md "
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span
                                        className="absolute top-0 right-0 p-4 cursor-pointer text-xl"
                                        onClick={closeEdit}
                                    >
                                        &times;
                                    </span>
                                    <div className="flex-col space-x-4">
                                        <input
                                            placeholder="Subscribe in our newsletter..."
                                            className="text-center w-[386.667px] h-[61.333px] rounded-[26.667px]"
                                            onChange={(e) => submitForm(e.target)}
                                        />
                                        <button onClick={() => setData()}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <section className="mt-[333px]">
                    <div className="bg-black relative  h-[597.333px] rounded-[26.667px]">
                        <div className="text-white w-1/2  pt-[74px] pl-[117px]">
                            <h1 className="text-[45px] font-bold w-[721.333px]  text-left">
                                Got a question? We are here to help
                            </h1>
                            <p className="my-[33px] w-[721.333px] text-left">
                                If you don’t find an answer in our FAQ page, please contact us
                                below, our customer support is available Monday to Friday: 9am- 5pm.
                            </p>
                            <div className="flex">
                                <img src={Elip} alt="..." />
                                <img src={Elip1} alt="..." />
                                <img src={Elip2} alt="..." />
                                <img src={Elip3} alt="..." />
                            </div>
                            <div className="flex space-x-3  items-center">
                                <button className="bg-white text-black text-[21px] px-[66.667px] py-[13.333px] rounded-[133.333px]  mt-[44px]">
                                    Contact us
                                </button>
                                <h2 className="text-[18px] text-[#FFFFFF80] mt-[40px]">
                                    You’ll get a response within 24 hours
                                </h2>
                            </div>
                        </div>
                        <img
                            src={BigCam}
                            alt="..."
                            className=" absolute top-[-31%] ml-[50%] translate-x-[32%]"
                        />
                    </div>
                </section>
            </section>
            <div className="mt-[80px] w-full">
                <img src={Overlay} alt="..." className="w-full" />
            </div>
            <div className="mx-[100px] mt-[68px] mb-[255px]">
                <h1 className="text-[45px] font-bold">You may also like</h1>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Navigation, Pagination, A11y]}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".backs",
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    rewind={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product1} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product2} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product3} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <div className="w-[400px] h-[600px] bg-white px-[33px] rounded-[26.667px]">
                                <div className=" pt-[33px]">
                                    <img src={Product3} alt="..." />
                                </div>
                                <div className="mt-[76px]">
                                    <h2 className="text-[30px] font-medium">Canon EOS 90D</h2>
                                    <p className="text-[23px] text-[#ccc]">$699.99</p>

                                    <div className="flex items-center justify-between">
                                        <button className="bg-black  px-[66.667px] py-[13.333px] rounded-[133.333px] text-white my-[33px]">
                                            + Quick Add
                                        </button>
                                        <p className="flex items-center space-x-3">
                                            <span>4.2</span>{" "}
                                            <img src={review} alt="review" width={24} height={24} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className=" space-x-3 mt-[64px] flex justify-end mr-[100px]">
                    <button onClick={() => console.log("hi")} className="backs text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="30"
                            viewBox="0 0 36 30"
                            fill="none"
                        >
                            <path
                                d="M0.919079 16.4975C0.138031 15.7164 0.138031 14.4501 0.919079 13.669L13.647 0.941118C14.428 0.160069 15.6944 0.160069 16.4754 0.941118C17.2565 1.72217 17.2565 2.9885 16.4754 3.76955L5.16172 15.0833L16.4754 26.397C17.2565 27.178 17.2565 28.4443 16.4754 29.2254C15.6944 30.0064 14.4281 30.0064 13.647 29.2254L0.919079 16.4975ZM35.6666 17.0833L2.33329 17.0833L2.33329 13.0833L35.6666 13.0833L35.6666 17.0833Z"
                                fill="#AAAAAA"
                            />
                        </svg>
                    </button>
                    <button className="next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="30"
                            viewBox="0 0 36 30"
                            fill="none"
                        >
                            <path
                                d="M34.7475 16.4975C35.5286 15.7164 35.5286 14.4501 34.7475 13.669L22.0196 0.941118C21.2386 0.160069 19.9722 0.160069 19.1912 0.941118C18.4101 1.72217 18.4101 2.9885 19.1912 3.76955L30.5049 15.0833L19.1912 26.397C18.4101 27.178 18.4101 28.4443 19.1912 29.2254C19.9722 30.0064 21.2386 30.0064 22.0196 29.2254L34.7475 16.4975ZM-1.74846e-07 17.0833L33.3333 17.0833L33.3333 13.0833L1.74846e-07 13.0833L-1.74846e-07 17.0833Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <footer className="h-[146px] bg-black flex items-center">
                <div className="w-1/2 flex space-x-3 justify-center mx-auto">
                    <input
                        placeholder="Subscribe in our newsletter..."
                        className="text-center w-[386.667px] h-[61.333px] rounded-[26.667px]"
                    />
                    <div className="bg-white w-[61px] h-[61px] rounded-full">
                        <img src={arrow} alt="..." />
                    </div>
                </div>
                <div className="flex w-1/2  justify-around items-center">
                    <div className="text-white flex space-x-3">
                        <h3>Home</h3>
                        <p>|</p>
                        <h3>Products</h3>
                        <p>|</p>
                        <h3>About</h3>
                        <p>|</p>
                        <h3>Contact</h3>
                        <p>|</p>
                        <h3>Careers</h3>
                        <p>|</p>
                        <h3>Partner</h3>
                    </div>
                    <div className="flex space-x-5">
                        <img src={Facebook} alt="..." />
                        <img src={Ig} alt="..." />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
