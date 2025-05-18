<<<<<<< HEAD
// import { CDN_URL } from '../utils/constant';
import { FaStar, FaMapMarkerAlt, FaRegClock} from 'react-icons/fa';
const RestaurantCard = ({ resData }) => {
    const info = resData?.info || {};
    const {
      name,
      image,
      cuisine,
      locality,
      timing,
      cft,
    } = info;
   const offerValue = resData?.gold?.offerValue;
    return (
      <div className="restaurant-card">
        <div className="card-image">
          <div className="star">
            <span className="badge badge-success">
              {info?.rating?.aggregate_rating}
              <FaStar />
            </span>
          </div>
          <a href="#">
            <img
              src={
                image?.url ||
                "https://via.placeholder.com/264x288?text=No+Image"
              }
              alt={name || "Restaurant"}
            />
          </a>
          {offerValue && (
          <div className='discount-ribbon'>
            <div className='ribbon'>
              <h5>Get <strong>{offerValue}</strong></h5>
            </div>
          </div>)}
        </div>
        <div className="card-body">
          <h6><a href="#">{name || "Unknown Restaurant"}</a></h6>
  
          <p className="types">
            {cuisine?.map((c, i) => (
              <span key={i}>
                {c.name}
                {i !== cuisine.length - 1 && <span className="separator"> • </span>}
              </span>
            ))}
          </p>
  
          <p className="spl-det">
            <span className="location">{locality?.name}</span>
            <span className="distance-taken">
              <FaMapMarkerAlt /> {resData?.distance}
            </span>
          </p>
  
          <p className="spl-det extra-detail">
            <span className="opentime"><FaRegClock /> {timing?.text}</span>
            <span className="min-order"> {cft?.text}</span>
          </p>
          
        </div>
      </div>


    );
  };
=======
// import { CDN_URL } from '../utils/constant';
import { FaStar, FaMapMarkerAlt, FaRegClock} from 'react-icons/fa';
const RestaurantCard = ({ resData }) => {
    const info = resData?.info || {};
    const {
      name,
      image,
      cuisine,
      locality,
      timing,
      cft,
    } = info;
   const offerValue = resData?.gold?.offerValue;
    return (
      <div className="restaurant-card">
        <div className="card-image">
          <div className="star">
            <span className="badge badge-success">
              {info?.rating?.aggregate_rating}
              <FaStar />
            </span>
          </div>
          <a href="#">
            <img
              src={
                image?.url ||
                "https://via.placeholder.com/264x288?text=No+Image"
              }
              alt={name || "Restaurant"}
            />
          </a>
          {offerValue && (
          <div className='discount-ribbon'>
            <div className='ribbon'>
              <h5>Get <strong>{offerValue}</strong></h5>
            </div>
          </div>)}
        </div>
        <div className="card-body">
          <h6><a href="#">{name || "Unknown Restaurant"}</a></h6>
  
          <p className="types">
            {cuisine?.map((c, i) => (
              <span key={i}>
                {c.name}
                {i !== cuisine.length - 1 && <span className="separator"> • </span>}
              </span>
            ))}
          </p>
  
          <p className="spl-det">
            <span className="location">{locality?.name}</span>
            <span className="distance-taken">
              <FaMapMarkerAlt /> {resData?.distance}
            </span>
          </p>
  
          <p className="spl-det extra-detail">
            <span className="opentime"><FaRegClock /> {timing?.text}</span>
            <span className="min-order"> {cft?.text}</span>
          </p>
          
        </div>
      </div>


    );
  };
>>>>>>> c89fe74f1cb371af8271a367585aade2501a6136
  export default RestaurantCard;