import img from "../../../assets/image1.png"
import bg from "../../../assets/bg.png"
import circle from "../../../assets/circle.svg"
import vec from '../../../assets/circle_vec.svg'
const Services = () => {
    return (
        <div className="mt-24 mb-28 relative">
            <div className="relative">
                <img className="w-[1920px] h-[591px]" src={img} alt="" />
                <div className="absolute bottom-[1px]">
                    <img className="w-[1920px] h-[591px]" src={bg} alt="" />
                </div>

                <div className="absolute top-[150px] left-[700px] flex flex-col justify-center items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="117" height="117" viewBox="0 0 117 117" fill="none">
                            <circle cx="58.8435" cy="58.2635" r="57.8654" fill="#FF5017" />
                            <circle cx="58.8435" cy="58.2634" r="50.9946" fill="#F8FAFA" />
                            <path d="M47.9493 34.6475V81.8794L85.0601 58.2634L47.9493 34.6475Z" fill="#FF5017" />
                        </svg>
                    </div>
                    <div>
                    <h1 className="text-4xl font-bold text-white mt-5">Watch Our Video Tutorial</h1>
                    </div>
                </div> 
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000" className="h-[416px] w-[1200px] mx-auto flex justify-center items-center gap-[100px] shadow-xl absolute left-[300px] top-[380px] bg-[#F8FAFA]">
                        <div className="flex flex-col  items-center">
                        <img className="mt-5" src={circle} alt="" />
                        <img className="absolute " src={vec} alt="" />
                        <div className="absolute mt-[90px] ml-3">
                        <h1 className="text-[#FF5017] text-3xl font-bold ">98700 +</h1>
                        </div>
                        <h3 className="font-bold text-2xl mt-8 text-[#010F58]">Properties Listed</h3>
                        </div>
                        <div className="flex flex-col  items-center">
                        <img className="mt-5" src={circle} alt="" />
                        <img className="absolute " src={vec} alt="" />
                        <div className="absolute mt-[90px] ml-3">
                        <h1 className="text-[#FF5017] text-3xl font-bold ">48751 +</h1>
                        </div>
                        <h3 className="font-bold text-2xl mt-8 text-[#010F58]">Properties Sold</h3>
                        </div>
                        <div className="flex flex-col  items-center">
                        <img className="mt-5" src={circle} alt="" />
                        <img className="absolute " src={vec} alt="" />
                        <div className="absolute mt-[90px] ml-3">
                        <h1 className="text-[#FF5017] text-3xl font-bold ">67845 +</h1>
                        </div>
                        <h3 className="font-bold text-2xl mt-8 text-[#010F58]">Satisfied Clients</h3>
                        </div>
                        <div className="flex flex-col  items-center">
                        <img className="mt-5" src={circle} alt="" />
                        <img className="absolute " src={vec} alt="" />
                        <div className="absolute mt-[90px] ml-3">
                        <h1 className="text-[#FF5017] text-3xl font-bold ">10+</h1>
                        </div>
                        <h3 className="font-bold text-2xl mt-8 text-[#010F58]">Realtor Awards</h3>
                        </div>
            </div>
        </div>
    );
};

export default Services;