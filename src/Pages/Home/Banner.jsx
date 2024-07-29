

const Banner = () => {
    return (
        <div>
            <div  data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
         className="hero lg:h-[800px] mt-7">
  <div className="hero-content flex-col lg:flex-row-reverse gap-40">
    <div className="text-center">
        <h1  className="lg:text-5xl md:text-5xl font-bold mb-5"><span className="text-[#f06633] font-extrabold">Wishing</span> you a very</h1>
        <h1 className="text-[#feb9cc] lg:text-5xl md:text-5xl font-bold mb-5">happy birthday</h1>
        <h1  className="lg:text-5xl md:text-5xl font-bold mb-5"> and a splendid year</h1>
        <h1 className="font-extrabold text-[#88d4f2] lg:text-5xl md:text-5xl">Ahead</h1>
     
       
    </div>
    <img  src="https://www.metrokids.com/wp-content/uploads/2023/08/gettyimages-1074986054-2.jpg" className="lg:w-1/2 rounded-lg shadow-2xl" />
  </div>
</div>
        </div>
    );
};

export default Banner;