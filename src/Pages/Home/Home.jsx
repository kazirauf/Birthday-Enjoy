import { useLoaderData } from "react-router-dom";
import Article from "./Article";
import Banner from "./Banner";
import PartyLocation from "./PartyLocation";
import Services from "./Services";

const Home = () => {
    const data = useLoaderData()
    return (
        <div className="lg:ml-0 md:ml-0 ml-14">
            <Banner></Banner>
          <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000">
        <h1 className="text-center lg:text-5xl mt-5 mb-5">Our Services</h1>
            <div className="flex justify-center">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-24 mt-20   gap-20">
            {
                data.map(card => <Services card={card} key={card.id}></Services>)
            }
                
            </div>
            </div>
          </div>
            <PartyLocation></PartyLocation>
            <Article></Article>

        </div>
    );
};

export default Home;