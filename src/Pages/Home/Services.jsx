import { Link } from "react-router-dom";

const Services = ({ card }) => {
  const {id,image, name, price, description} = card;
    return (
    <div >
      <div className="card lg:w-96 w-80  bg-base-100 shadow-xl ">
        <figure>
          <img
          className="h-60 w-96"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg text-gray-500 font-bold">${price}</p>
          {
                    description.length > 200 &&
                         <p className="text-lg text-gray-500">{description.slice(0, 117)}.....</p>
                        
                }
       
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`} className="btn bg-[#88d4f2] text-white font-bold">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
