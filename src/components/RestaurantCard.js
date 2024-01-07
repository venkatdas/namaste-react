import {CDN_URL} from '../utils/constants'

 const RestaurantCard = ({ resultObj }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resultObj?.info; // Optoonal chaining we can move the data ot from result object so that it wil.

  return ( 
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-gray-100 h-[530px] ">
      <img
        className="rounded-lg w-[100%] h-[300px]"
        alt="alternate image"
        src={ CDN_URL+ cloudinaryImageId }
      />
      <h3 className=' font-bold py-2 text-lg  '>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resultObj.info.sla.deliveryTime} Minuites</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};


export default RestaurantCard