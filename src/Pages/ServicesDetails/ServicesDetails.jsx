import { Link, useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const services = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const service = services.find((c) => c.id === idInt);
    console.log(service);
    return (
        <div className="flex justify-center mt-10 h-[1000px] py-16 " style={{ 
            backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExMDUtYi0wMDliLmpwZw.jpg?s=pJ-bcQzY0bAy78VyqEb3spFIHkVsiOFnMEC2sArFGko")`, 
           backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="card w-[800px] bg-[#feb9cc] text-white shadow-xl ">
  <figure><img src={service.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl mb-5">{service.name}</h2>
    <p className="text-xl font-bold mb-3">Price: ${service.price}</p>
    <p className="text-xl">{service.description}</p>
    <div className="card-actions justify-end mt-5">
      <Link to="/" className="btn text-white  bg-[#88d4f2] font-bold">Go To Back</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesDetails;