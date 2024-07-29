import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="text-center mt-32 "
      >
        <h1 className="text-slate-800 text-5xl font-bold mb-4">The Article</h1>
        <p className="text-lg text-gray-400 ">
          our birthday parties is specially for kids
        </p>
      <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 lg:ml-24 mt-10  gap-10 ">
          <div className="card lg:w-96 md:w-96 w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.cdnparenting.com/articles/2020/02/04143529/1547838509.webp"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Best Gift To Bring On Birthday Party
              </h2>
              <p>
                The perfect birthday gift is one that reflects the recipient's
                interests and personality, showing that you've put thought into
                making their day extra special.
              </p>
              <div className="card-actions justify-center">
                <Link className="text-orange-500">Learn more </Link>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 md:w-96 w-80 bg-base-100 shadow-xl ">
            <figure>
              <img
                src="https://hongkongliving.com/wp-content/uploads/2019/11/Childrens-party.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Best Food To Serve In Birthday Party
              </h2>
              <p>
                The best foods for a birthday party are crowd-pleasers like
                finger foods, appetizers, and a delicious birthday cake to
                satisfy diverse tastes and preferences.
              </p>
              <div className="card-actions justify-center">
                <Link className="text-orange-500">Learn more </Link>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 md:w-96 w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.sbs.com.au/dims4/default/b46a380/2147483647/strip/true/crop/2090x1176+0+93/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ftopics%2Fpublic%2Fgettyimages-200167864-002_martinbarraud.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Tips And Trick Successful Held A Party
              </h2>
              <p>
                To successfully host a party, focus on planning, organization,
                and creating a fun atmosphere that ensures everyone has a great
                time
              </p>
              <div className="card-actions justify-center">
                <Link className="text-orange-500">Learn more </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <button className="btn bg-[#88d4f2] text-white font-bold justify-center mt-14">
        
          see more
        </button>
      </div>
    </div>
  );
};

export default Article;
