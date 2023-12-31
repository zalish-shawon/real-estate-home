/* eslint-disable react/no-unknown-property */
import logo from "../../../assets/logo2.png"
import fb from "../../../assets/Facebook.png"
import insta from "../../../assets/instagram.png"
import lnkdn from "../../../assets/Linkdin.png"
import twr from "../../../assets/Twitter.png"
import youtb from "../../../assets/Youtube.png"
import vctr from "../../../assets/Vector.png"
import footer1 from "../../../assets/footer1.png"
import footer2 from "../../../assets/footer2.png"
import footer3 from "../../../assets/footer3.png"
import footer4 from "../../../assets/footer4.png"
import payments from "../../../assets/payments.png"

const Footer = () => {
    return (
        <div className='bg-[#010F58] mt-7'>
            <div className="max-w-[85%] mx-auto py-28 pr-28 flex justify-around">
                <div>
                    <img src={logo} alt="" />
                    <p className="text-lg text-white mt-8">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
                    <div className="flex items-center gap-4 mt-5">
                        <img src={fb} alt="" />
                        <img src={insta} alt="" />
                        <img src={lnkdn} alt="" />
                        <img src={twr} alt="" />
                        <img src={youtb} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-white text-4xl font-bold'>Quick Links</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="4" viewBox="0 0 91 4" fill="none">
                        <rect x="-0.00012207" y="0.67334" width="68.7007" height="3.03282" rx="1.51641" fill="#FF5017" />
                        <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
                    </svg>
                    <div className="flex gap-3 items-center mt-5">
                        <img src={vctr} alt="" />
                        <a className="font-semibold text-2xl text-[#FF5017]">About US</a>
                    </div>
                    <div className="flex gap-3 items-center mt-5">
                        <img src={vctr} alt="" />
                        <a className="font-semibold text-2xl text-white">Contact</a>
                    </div>
                    <div className="flex gap-3 items-center mt-5">
                        <img src={vctr} alt="" />
                        <a className="font-semibold text-2xl text-white">Property</a>
                    </div>
                    <div className="flex gap-3 items-center mt-5">
                        <img src={vctr} alt="" />
                        <a className="font-semibold text-2xl text-white">Our Agents</a>
                    </div>
                    <div className="flex gap-3 items-center mt-5">
                        <img src={vctr} alt="" />
                        <a className="font-semibold text-2xl text-white">Careers</a>
                    </div>
                </div>
                <div>
                    {/* Recent posts */}
                    <h4 className='text-white text-4xl font-bold'>Recent Post</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="4" viewBox="0 0 91 4" fill="none">
                        <rect x="-0.00012207" y="0.67334" width="68.7007" height="3.03282" rx="1.51641" fill="#FF5017" />
                        <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
                    </svg>
                    <div className="flex justify-center items-center gap-6 mt-10">
                        <div>
                            <img src={footer1} alt="" />

                            <img className="mt-6" src={footer3} alt="" />
                        </div>
                        <div className="">
                            <img className="" src={footer2} alt="" />
                            <img className="mt-6" src={footer4} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    {/* Contact section */}
                    <h4 className='text-white text-4xl font-bold'>Contact Us</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="4" viewBox="0 0 91 4" fill="none">
                        <rect x="-0.00012207" y="0.67334" width="68.7007" height="3.03282" rx="1.51641" fill="#FF5017" />
                        <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
                        <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
                    </svg>
                    <div className="mt-10">
                        <div className="flex items-center gap-3 mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <circle cx="25.7117" cy="25.9346" r="25" fill="#F8FAFA" />
                                <path d="M22.4723 18.7949C22.6491 18.8693 22.8446 18.9159 23.0028 19.0228C23.31 19.2275 23.4636 19.5391 23.4776 19.9112C23.5008 20.5484 23.5474 21.181 23.701 21.8043C23.7615 22.0554 23.8406 22.3066 23.9011 22.5578C23.9988 22.9438 23.9058 23.288 23.6637 23.5996C23.2635 24.1159 22.8725 24.6415 22.4816 25.1671C22.4583 25.195 22.4583 25.2648 22.4769 25.302C23.2961 26.8695 24.455 28.116 26.0048 28.9811C26.1398 29.0602 26.2841 29.1997 26.419 29.1904C26.554 29.1811 26.675 29.0276 26.8007 28.93C27.2428 28.5951 27.6757 28.2555 28.1225 27.9253C28.4017 27.7206 28.7275 27.6648 29.0626 27.7439C29.4396 27.8323 29.812 27.9579 30.1983 28.0183C30.6823 28.0927 31.1756 28.1346 31.6643 28.1625C32.2368 28.1951 32.651 28.4928 32.8 29.0183C32.8326 29.1439 32.8465 29.2742 32.8465 29.4044C32.8512 30.2137 32.8372 31.023 32.8512 31.8323C32.8605 32.4928 32.4323 32.9812 31.8691 33.0603C31.8598 33.0603 31.8552 33.0696 31.8459 33.0742C31.6131 33.0742 31.3804 33.0742 31.1477 33.0742C31.1012 33.0649 31.0593 33.0603 31.0128 33.0556C30.4961 32.9951 29.9795 32.9626 29.4676 32.8789C28.0387 32.6463 26.6936 32.1719 25.4277 31.4742C23.4217 30.3672 21.8067 28.8462 20.5873 26.9067C19.5168 25.2183 18.8792 23.381 18.6558 21.395C18.6232 21.0973 18.5999 20.795 18.572 20.4973C18.572 20.2647 18.572 20.0322 18.572 19.7996C18.6511 19.6182 18.7116 19.4182 18.814 19.2507C18.9909 18.981 19.2702 18.8647 19.5773 18.7949C20.5408 18.7949 21.5088 18.7949 22.4723 18.7949Z" fill="#FF5017" />
                            </svg>
                            <div>
                                <p className="text-lg font-semibold text-white">Email</p>
                                <p className="text-lg font-semibold text-white">support@yourdomain.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <circle cx="25.7117" cy="25.9346" r="25" fill="#F8FAFA" />
                                <path d="M31.4234 20.2227H20C19.2146 20.2227 18.5792 20.8652 18.5792 21.6506L18.572 30.2182C18.572 31.0035 19.2146 31.6461 20 31.6461H31.4234C32.2087 31.6461 32.8513 31.0035 32.8513 30.2182V21.6506C32.8513 20.8652 32.2087 20.2227 31.4234 20.2227ZM31.4234 23.0785L25.7117 26.6483L20 23.0785V21.6506L25.7117 25.2204L31.4234 21.6506V23.0785Z" fill="#FF5017" />
                            </svg>
                            <div>
                                <p className="text-lg font-semibold text-white">Phone</p>
                                <p className="text-lg font-semibold text-white">+44 (0) 20 9994 7740</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <circle cx="25.7117" cy="25.9346" r="25" fill="#F8FAFA" />
                                <path d="M25.7116 15.7354C21.7644 15.7354 18.572 18.9278 18.572 22.875C18.572 28.2297 25.7116 36.1342 25.7116 36.1342C25.7116 36.1342 32.8512 28.2297 32.8512 22.875C32.8512 18.9278 29.6588 15.7354 25.7116 15.7354ZM25.7116 25.4248C24.3041 25.4248 23.1618 24.2825 23.1618 22.875C23.1618 21.4674 24.3041 20.3251 25.7116 20.3251C27.1191 20.3251 28.2615 21.4674 28.2615 22.875C28.2615 24.2825 27.1191 25.4248 25.7116 25.4248Z" fill="#FF5017" />
                            </svg>
                            <div>
                                <p className="text-lg font-semibold text-white">Address</p>
                                <p className="text-lg font-semibold text-white">7124 Landmark Tower,New York</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FF5017]">
                <div className="max-w-[85%] flex justify-between items-center mx-auto p-10">
                    <p className="text-white font-semibold text-lg">©2022 Kavinax Property. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
                            <g clip-path="url(#clip0_1_123)">
                                <path d="M22.681 9.6804C22.7333 12.3004 22.7774 14.9122 21.8618 17.4307C20.1991 22.0166 17.2553 25.3272 12.6449 27.021C12.0144 27.2525 11.428 27.2647 10.8055 27.0332C5.47221 25.055 2.38386 21.1068 1.04651 15.6353C0.813576 14.6766 0.713174 13.6936 0.713174 12.7025C0.721206 10.4075 0.729238 8.11247 0.705142 5.81745C0.701126 5.28533 0.885865 4.99287 1.36378 4.77759C4.64088 3.30715 7.91398 1.8164 11.1831 0.325653C11.5445 0.159111 11.8698 0.155049 12.2393 0.325653C15.4602 1.80015 18.677 3.27465 21.914 4.71259C22.5284 4.98475 22.7172 5.35845 22.6931 6.00024C22.6529 7.2229 22.681 8.45368 22.681 9.6804ZM9.2955 19.5916C9.56056 19.5348 9.71317 19.2951 9.8939 19.1123C12.5084 16.472 15.1349 13.8399 17.7292 11.1793C19.0666 9.80632 19.1549 10.3303 17.6449 8.73396C17.3798 8.45368 17.171 8.45774 16.926 8.73802C16.7694 8.91675 16.5927 9.07923 16.42 9.24577C14.2031 11.4595 11.9782 13.6652 9.78145 15.8993C9.36378 16.3258 9.09068 16.338 8.70113 15.8912C8.24731 15.3712 7.73727 14.9 7.25534 14.4126C6.0706 13.2143 6.08265 13.2265 4.95414 14.4451C4.6208 14.8066 4.64088 15.0422 4.9702 15.3712C6.26337 16.667 7.53647 17.9831 8.82161 19.2911C8.95815 19.421 9.07864 19.5713 9.2955 19.5916Z" fill="#F8FAFA" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_123">
                                    <rect width="22" height="27" fill="white" transform="translate(0.705078 0.200195)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-white font-semibold text-lg">Secure Payments</p>
                    </div>
                    <div>
                        <img className="w-[400px]" src={payments} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;