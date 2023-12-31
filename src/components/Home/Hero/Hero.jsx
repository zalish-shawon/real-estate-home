/* eslint-disable react/no-unknown-property */

const Hero = () => {
    return (
        <div className="flex">
            {/* Left Section */}
            <div className="w-full">
                <div className="absolute -z-10 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1139" height="800" viewBox="0 0 1139 800" fill="none">
                        <path d="M940.723 0H0.284912V800H940.723L1138.71 400.591L940.723 0Z" fill="#FF5017" />
                    </svg>
                </div>
                <div className="flex justify-between w-full" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1139" height="800" viewBox="0 0 1139 800" fill="none">
                        <path d="M878.569 0H0.284912V800H882.011L1138.71 400.094L878.569 0Z" fill="#010F58" />
                    </svg>

                </div>
                <div className="absolute top-[360px] ml-16 flex justify-between items-center gap-20">
                    {/* Left Button */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none">
                        <circle cx="50.7607" cy="50" r="49" stroke="#FF5017" stroke-width="2" />
                        <path d="M61.3436 27.3962C62.3044 27.3962 63.2793 27.7918 63.9716 28.5689C65.2715 30.0242 65.1585 32.2566 63.7032 33.5565L45.4343 50.0027L63.7173 66.449C65.1726 67.7488 65.2856 69.9812 63.9857 71.4365C62.6858 72.8777 60.4534 73.0049 58.9982 71.705L37.8045 52.6307C37.0557 51.9667 36.6318 51.0059 36.6318 50.0027C36.6318 48.9996 37.0557 48.0529 37.8045 47.3747L58.9982 28.3004C59.6622 27.6929 60.51 27.3962 61.3436 27.3962Z" fill="#F8FAFA" />
                    </svg>

                    <div>
                        <h1 className="text-6xl text-white font-bold">Discover Most <br /> Suitable Property</h1>
                        <p className="text-white mt-9 text-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmt <br />
                            mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <div className="bg-[#FF5017] text-white text-xl font-semibold h-[60px] w-[400px] mt-10">
                                <div className="ml-6">
                                    <button>Sell</button>
                                    <button className="ml-6 pt-3 px-3 pb-2 rounded-lg bg-white text-[#FF5017]">Rent</button>
                                    <button className="ml-6">Buy</button>
                                </div>
                            </div>
                            <div className="bg-[#FF5017] text-white text-xl font-semibold h-[120px] w-[1200px]">
                                {/* Form section */}
                                <form action="">
                                    <div className="flex items-center pt-3 gap-3">
                                        <div className="flex flex-col ml-6">
                                            <label className="mb-2" htmlFor="">Type</label>
                                            <input type="text" placeholder="Property type" className="h-[40px] w-[180px] text-black font-normal pl-4" />
                                        </div>
                                        <div className="flex flex-col ml-6">
                                            <label className="mb-2" htmlFor="">Your location</label>
                                            <input type="text" placeholder="Your location" className="h-[40px] w-[180px] text-black font-normal pl-4" />
                                        </div>
                                        <div className="flex flex-col ml-6">
                                            <label className="mb-2" htmlFor="">Bed/Bathrooms</label>
                                            <input type="text" placeholder="Bed/Bathrooms" className="h-[40px] w-[180px] text-black font-normal pl-4" />
                                        </div>
                                        <div className="flex flex-col ml-6">
                                            <label className="mb-2" htmlFor="">Price</label>
                                            <input type="text" placeholder="Price" className="h-[40px] w-[180px] text-black font-normal pl-4" />
                                        </div>
                                        <div className="flex h-[80px]">
                                            <input className="h-[80px] text-black ml-3" type="text" placeholder=" Search" />
                                            <button className="-ml-[59px] h-full"><svg className="" xmlns="http://www.w3.org/2000/svg" width="78" height="82" viewBox="0 0 59 63" fill="none">
                                                <rect x="0.166138" y="0.168945" width="58.8339" height="62.3364" fill="#010F58" />
                                                <path d="M27.3168 19.1245C27.7941 19.2129 28.2854 19.2718 28.7556 19.397C29.7102 19.6401 30.5595 20.1263 31.3035 20.7818C32.4125 21.7541 33.1705 22.9768 33.5425 24.45C33.9426 26.0262 33.8443 27.573 33.2407 29.0683C33.0161 29.6207 32.7073 30.1363 32.4265 30.6888C32.5669 30.8435 32.7494 31.0276 33.0021 31.0865C33.1144 31.1086 33.2547 31.1013 33.353 31.0423C33.5144 30.9466 33.6688 30.9392 33.8092 31.0276C33.9917 31.1381 34.1812 31.2633 34.3286 31.4253C35.8166 33.0237 37.2906 34.6295 38.7716 36.2352C39.1927 36.6919 39.1857 37.2001 38.7575 37.6421C38.3715 38.0398 37.9854 38.4302 37.5924 38.8206C37.1853 39.2331 36.687 39.2257 36.2939 38.7985C34.7919 37.1706 33.2898 35.5502 31.7948 33.915C31.6544 33.7677 31.5562 33.5688 31.4719 33.3773C31.4018 33.23 31.4228 33.0679 31.5141 32.9132C31.5702 32.8175 31.5983 32.6628 31.5632 32.567C31.479 32.3387 31.3526 32.1325 31.2684 31.963C30.7209 32.2871 30.2296 32.6186 29.7032 32.8764C28.6363 33.3994 27.5063 33.5762 26.3341 33.473C24.9514 33.3478 23.7231 32.8248 22.6492 31.9262C21.6877 31.116 20.9788 30.0995 20.5366 28.8915C20.0733 27.6246 19.968 26.3135 20.2067 24.9803C20.4313 23.7355 20.9366 22.6233 21.7298 21.6657C22.5861 20.6124 23.6249 19.8611 24.8812 19.4707C25.3585 19.3234 25.8639 19.2571 26.3552 19.1613C26.4114 19.1466 26.4745 19.1319 26.5307 19.1245C26.7904 19.1245 27.0501 19.1245 27.3168 19.1245ZM26.9378 21.3563C24.3408 21.349 22.2211 23.5808 22.2141 26.3061C22.2141 29.0315 24.3267 31.2559 26.9307 31.2633C29.5277 31.2707 31.6474 29.0462 31.6544 26.3135C31.6615 23.5955 29.5418 21.3637 26.9378 21.3563Z" fill="white" />
                                            </svg></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute -z-20 flex left-[930px]">
                <img className=" h-[800px] w-full" src="https://s3-alpha-sig.figma.com/img/fac8/820d/ec3ac95b296619f4de53d7e78e581549?Expires=1704672000&Signature=HqbDldxIuD8sjcVCTeabInHQIRP8RT3EcuncdL8uJwuT6emJmyczbYUdK526q0-wkXmAfwMeragWsVzgQ9daQ~ngA-oPiosX7GwdYOk3I7lNewdY50rwlL7muc9lYI8IlWT2efcm-aU2TZfCM6KaxpP47hzUm4QZu5TBDHyGuGdyUGwprj99mAuEvUVqpkQmwihhBwaiveGo3Q1Q77Rr6Ky0~rBDICIg~0ZhE2WKPUbAYlrmdV0kKqzqb~6ZsiFL6eK-DkRRlVnwyH6aUJdZO7b2KSAM8bigp-lJbZZk8~~HQqwBSOy0IOXT6dwCacC2pfbtQslCK2xmIlWo4vmubg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            {/* Right Button */}
            <div className="absolute right-16 top-[530px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none">
                    <circle cx="50.9264" cy="50" r="50" fill="#FF5017" />
                    <path d="M40.3435 72.6038C39.3828 72.6038 38.4078 72.2082 37.7155 71.4311C36.4156 69.9758 36.5287 67.7434 37.984 66.4435L56.2529 49.9973L37.9698 33.551C36.5145 32.2512 36.4015 30.0188 37.7014 28.5635C39.0013 27.1223 41.2337 26.9951 42.689 28.295L63.8826 47.3693C64.6314 48.0333 65.0553 48.9941 65.0553 49.9973C65.0553 51.0004 64.6314 51.9471 63.8826 52.6253L42.689 71.6996C42.0249 72.3071 41.1772 72.6038 40.3435 72.6038Z" fill="#F8FAFA" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;