import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ room }) => {
  // console.log("🚀 ~ file: Card.jsx:4 ~ Card ~ room :", room )

  return (
    <Link
      to={`/rooms/${room?._id}`}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={room?.image}
            alt="Room Image"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          >
            {/* <HeartButton /> */}
          </div>
        </div>
        <div className="font-semibold text-lg">{room.location}</div>

        {/* TODO: data range function must be implemented to create the date range */}

        <div className="font-light text-neutral-500">5 nights</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">${room.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  room: PropTypes.object,
};

export default Card;
