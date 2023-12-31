
const Category = () => {
    return (
        <div className="max-w-[85%] mx-auto mt-28">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-6xl font-bold text-[#010F58]">Browse By Categories</h1>
                </div>
                <div className="flex gap-3">
                    {/* Navigation Buttons */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 51 51" fill="none">
                        <rect x="1.34741" y="0.896973" width="49" height="49" rx="24.5" stroke="#FF5017" />
                        <path d="M30.6636 15.1103C31.1008 15.1103 31.5445 15.2903 31.8596 15.644C32.4511 16.3063 32.3997 17.3222 31.7374 17.9137L23.4235 25.3981L31.7438 32.8825C32.4061 33.4741 32.4575 34.49 31.866 35.1523C31.2744 35.8082 30.2585 35.866 29.5962 35.2745L19.9514 26.5941C19.6106 26.2919 19.4177 25.8547 19.4177 25.3981C19.4177 24.9416 19.6106 24.5108 19.9514 24.2022L29.5962 15.5218C29.8984 15.2453 30.2842 15.1103 30.6636 15.1103Z" fill="#FF5017" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 51 51" fill="none">
                        <rect x="0.847412" y="0.396973" width="50" height="50" rx="25" fill="#FF5017" />
                        <path d="M21.0315 35.6836C20.5942 35.6836 20.1506 35.5036 19.8355 35.15C19.244 34.4877 19.2954 33.4718 19.9577 32.8802L28.2715 25.3958L19.9512 17.9114C19.289 17.3198 19.2375 16.3039 19.8291 15.6416C20.4206 14.9858 21.4366 14.9279 22.0988 15.5195L31.7437 24.1998C32.0845 24.502 32.2774 24.9393 32.2774 25.3958C32.2774 25.8523 32.0845 26.2831 31.7437 26.5918L22.0988 35.2721C21.7966 35.5486 21.4108 35.6836 21.0315 35.6836Z" fill="#F8FAFA" />
                    </svg>
                </div>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="3000" className="flex justify-center items-center gap-8">
                {/* Categories cards */}
                <div className="flex items-center gap-4 mt-16">
                    <img className="w-[260px] h-[220px]" src="https://s3-alpha-sig.figma.com/img/69a0/caf0/b062c06a6b8142f73af7df6e4870fb06?Expires=1704672000&Signature=ldLYJKih6bwC1~6Jzeq01uagIwUrDkEfYcoO3YwWWJe5YqLwlAkdAxKZ~Td00UDDqe5-sytPgXGMQdDlDKpVCn0hvuBH7gR30mSP-vCv4NWaq2QGdqLk-nJ3LwLmHPeMJi9j7~zNQEZ87Bu2~YGAL92jEwGdxzjmavAlRKfupByYkmWAaTQV3rVmjMBAis5tvrWUMXUgNGk-K7pk2EF0WLfi15W-qZpiNHKqC7Ou0or-2rr58LEiC0A8IK4e0a5Um-RaFTKmgtQaS2-qG8S-1ADSQnaRL6zww2STgK2D68ihK9Bh9QfmLIb4MVHOfHZ3h~QR7VKAUc8O146PZCJ~rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="font-semibold text-xl text-[#010F58]">
                    <h3 className="capitalize font-bold text-2xl">appartment</h3>
                    <p>Lorem ipsum dolor sitam consectetur elit.</p>
                    <p>22 Property</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-16">
                    <img className="w-[260px] h-[220px]" src="https://s3-alpha-sig.figma.com/img/69a0/caf0/b062c06a6b8142f73af7df6e4870fb06?Expires=1704672000&Signature=ldLYJKih6bwC1~6Jzeq01uagIwUrDkEfYcoO3YwWWJe5YqLwlAkdAxKZ~Td00UDDqe5-sytPgXGMQdDlDKpVCn0hvuBH7gR30mSP-vCv4NWaq2QGdqLk-nJ3LwLmHPeMJi9j7~zNQEZ87Bu2~YGAL92jEwGdxzjmavAlRKfupByYkmWAaTQV3rVmjMBAis5tvrWUMXUgNGk-K7pk2EF0WLfi15W-qZpiNHKqC7Ou0or-2rr58LEiC0A8IK4e0a5Um-RaFTKmgtQaS2-qG8S-1ADSQnaRL6zww2STgK2D68ihK9Bh9QfmLIb4MVHOfHZ3h~QR7VKAUc8O146PZCJ~rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="font-semibold text-xl text-[#010F58]">
                    <h3 className="capitalize font-bold text-2xl">Duplex House</h3>
                    <p>Lorem ipsum dolor sitam consectetur elit.</p>
                    <p>25 Property</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-16">
                    <img className="w-[260px] h-[220px]" src="https://s3-alpha-sig.figma.com/img/69a0/caf0/b062c06a6b8142f73af7df6e4870fb06?Expires=1704672000&Signature=ldLYJKih6bwC1~6Jzeq01uagIwUrDkEfYcoO3YwWWJe5YqLwlAkdAxKZ~Td00UDDqe5-sytPgXGMQdDlDKpVCn0hvuBH7gR30mSP-vCv4NWaq2QGdqLk-nJ3LwLmHPeMJi9j7~zNQEZ87Bu2~YGAL92jEwGdxzjmavAlRKfupByYkmWAaTQV3rVmjMBAis5tvrWUMXUgNGk-K7pk2EF0WLfi15W-qZpiNHKqC7Ou0or-2rr58LEiC0A8IK4e0a5Um-RaFTKmgtQaS2-qG8S-1ADSQnaRL6zww2STgK2D68ihK9Bh9QfmLIb4MVHOfHZ3h~QR7VKAUc8O146PZCJ~rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="font-semibold text-xl text-[#010F58]">
                    <h3 className="capitalize font-bold text-2xl">Office</h3>
                    <p>Lorem ipsum dolor sitam consectetur elit.</p>
                    <p>30 Property</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;