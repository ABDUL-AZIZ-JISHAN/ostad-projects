
const NewsLetter = () => {
    return (
        <div className="newsletter bg-white pt-[90px] pb-[137px]">
            <div className="container flex justify-center items-center flex-col text-center">
                <h3 className="section-subtitle mb-[22px]">SUBSCRIBE</h3>
                <h2 className="section-title w-[490px] capitalize mb-[5px]">Subscribe to get the latest news about us</h2>
                <p className="text-[#8B8B8B] capitalize">Please drop your email below to get daily update about what we do</p>
              <div className="relative h-[62px] w-[600px] mt-[40px]">
            <input type="email" className="px-[16px] py-[20px] border w-full h-full border border-solid border-black rounded-[14px] w-full text-[#8B8B8B] focus:outline-none" placeholder="Enter Your Email Adress" required/>
            <button type="submit" className="text-[16px] font-medium absolute w-[130px] h-[80%] top-[10%] right-[7px] rounded-[14px] bg-[#F55F1D] text-white px-4 py-2 rounded-md">Subscribe</button>
        </div>
            </div>
        </div>
    );
}

export default NewsLetter;
