import img from "../../../assets/image1.png"
import bg from "../../../assets/bg.png"
const Services = () => {
    return (
        <div className="mt-24 mb-28">
            <div className="relative">
                <img className="w-[1920px] h-[591px]" src={img} alt="" />
                <div className="absolute bottom-[1px]">
                    <img className="w-[1920px] h-[591px]" src={bg} alt="" />
                    </div> 
            </div>
        </div>
    );
};

export default Services;