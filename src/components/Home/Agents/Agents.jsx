import agents1 from "../../../assets/agents1.png"
import agents2 from "../../../assets/agenys2.png"
import sm from "../../../assets/Social Media.png"

const Agents = () => {
    return (
        <div className='max-w-[85% mx-auto mt-16'>
            <div className="flex justify-center mb-16">
                <div className="flex flex-col justify-center">
                    <h4 className='text-[#010F58] text-2xl font-bold text-center'>FIND MORE CHOOSE</h4>
                    <div className="ml-[180px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="8" viewBox="0 0 91 4" fill="none">
                            <rect x="-0.00012207" y="0.67334" width="68.7007" height="3.03282" rx="1.51641" fill="#FF5017" />
                            <circle cx="72.8168" cy="2.18974" r="1.5164" fill="#FF5017" />
                            <circle cx="78.0711" cy="2.18974" r="1.5164" fill="#FF5017" />
                            <circle cx="83.3252" cy="2.18974" r="1.5164" fill="#FF5017" />
                            <circle cx="88.5794" cy="2.18974" r="1.5164" fill="#FF5017" />
                        </svg>
                    </div>
                    <h1 className="text-6xl font-bold">Meet Our Agents</h1>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="3000" className="image-container">
                <div className="flex justify-center items-center gap-7">
                    <div className="relative group">
                        <img src={agents2} alt="" className="agent-image transition-opacity duration-300 ease-in-out transform group-hover:opacity-70" />
                        <div className="overlay absolute inset-0 opacity-0 bg-blue-500 bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <div className="overlay-content text-white text-center">
                                <p className="person-name font-bold text-lg mb-2">Mattie Joseph</p>
                                <div className="social-icons">
                                    <img src={sm} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={agents1} alt="" className="agent-image transition-opacity duration-300 ease-in-out transform group-hover:opacity-70" />
                        <div className="overlay absolute inset-0 opacity-0 bg-blue-500 bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <div className="overlay-content text-white text-center">
                                <p className="person-name font-bold text-lg mb-2">Mattie Joseph</p>
                                <div className="social-icons">
                                    <img src={sm} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={agents2} alt="" className="agent-image transition-opacity duration-300 ease-in-out transform group-hover:opacity-70" />
                        <div className="overlay absolute inset-0 opacity-0 bg-blue-500 bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <div className="overlay-content text-white text-center">
                                <p className="person-name font-bold text-lg mb-2">Mattie Joseph</p>
                                <div className="social-icons">
                                    <img src={sm} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Agents;