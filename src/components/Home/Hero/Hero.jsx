/* eslint-disable react/no-unknown-property */

const Hero = () => {
    return (
        <div className="flex">
            <div>
                <div className="absolute -z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1139" height="800" viewBox="0 0 1139 800" fill="none">
                        <path d="M940.723 0H0.284912V800H940.723L1138.71 400.591L940.723 0Z" fill="#FF5017" />
                    </svg>
                </div>
                <div className="flex justify-between" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1139" height="800" viewBox="0 0 1139 800" fill="none">
                        <path d="M878.569 0H0.284912V800H882.011L1138.71 400.094L878.569 0Z" fill="#010F58" />
                    </svg>

                </div>
                <div className="absolute bottom-1 ml-16 flex justify-between items-center gap-20">
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
                            <div className="bg-[#FF5017] text-white text-xl font-semibold h-[120px] w-[900px]">
                                <form action="">
                                    <div className="flex items-center pt-3 gap-3">
                                    <div className="flex flex-col ml-6">
                                    <label className="mb-2" htmlFor="">Type</label>
                                    <input type="text" placeholder="Property type" className="h-[40px] w-[180px] font-normal pl-4"/>
                                    </div>
                                    <div className="flex flex-col ml-6">
                                    <label className="mb-2" htmlFor="">Your location</label>
                                    <input type="text" placeholder="Property type" className="h-[40px] w-[180px] font-normal pl-4"/>
                                    </div>
                                    <div className="flex flex-col ml-6">
                                    <label className="mb-2" htmlFor="">Bed/Bathrooms</label>
                                    <input type="text" placeholder="Property type" className="h-[40px] w-[180px] font-normal pl-4"/>
                                    </div>
                                    <div className="flex flex-col ml-6">
                                    <label className="mb-2" htmlFor="">Price</label>
                                    <input type="text" placeholder="Property type" className="h-[40px] w-[180px] font-normal pl-4"/>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute -z-20 flex left-[930px]">
                <img className=" h-[800px]" src="https://s3-alpha-sig.figma.com/img/fac8/820d/ec3ac95b296619f4de53d7e78e581549?Expires=1704672000&Signature=HqbDldxIuD8sjcVCTeabInHQIRP8RT3EcuncdL8uJwuT6emJmyczbYUdK526q0-wkXmAfwMeragWsVzgQ9daQ~ngA-oPiosX7GwdYOk3I7lNewdY50rwlL7muc9lYI8IlWT2efcm-aU2TZfCM6KaxpP47hzUm4QZu5TBDHyGuGdyUGwprj99mAuEvUVqpkQmwihhBwaiveGo3Q1Q77Rr6Ky0~rBDICIg~0ZhE2WKPUbAYlrmdV0kKqzqb~6ZsiFL6eK-DkRRlVnwyH6aUJdZO7b2KSAM8bigp-lJbZZk8~~HQqwBSOy0IOXT6dwCacC2pfbtQslCK2xmIlWo4vmubg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>

        </div>
    );
};

export default Hero;