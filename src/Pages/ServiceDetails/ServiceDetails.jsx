import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {
      const data = JSON.parse(useLoaderData())
      const { id } = useParams()
      const matchedService = data.find(match => match.id == id)

      const { name, image, price, big_description
      } = matchedService;

      return (
            <div className="text-white container mx-auto">
                  <div className="flex-col lg:flex justify-between items-center my-6">
                        <div className="flex-1">
                              <img className="w-full" src={image} alt={name} />
                        </div>
                        <div className="flex-1 px-12">
                              <h2 className="text-3xl font-bold my-6">{name}</h2>
                              <p className="text-base font-normal my-3 leading-16">{big_description}</p>
                              <button className="btn btn-secondary my-8 font-bold">Purchase Deal ${price}</button>
                        </div>

                  </div>
            </div>
      );
};

export default ServiceDetails;