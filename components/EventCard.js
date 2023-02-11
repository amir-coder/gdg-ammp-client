import Image from "next/image";
import Link from "next/link";
const EventCard = ({eventTitle,eventDescr,eventLink,eventSrc,eventAlt,isLoaded}) => {
    return ( 
        <div className="event-card  relative overflow-hidden rounded-lg">
            <div className="event-card__img ">
                <img
                    src={eventSrc}
                    alt={eventAlt}
                    className="w-full h-full object-cover"                   
                />
            </div>
            {isLoaded &&
            <div className="event-card__content w-full absolute h-2/3   top-1/3  bg-white  p-3  border-4 rounded-lg border-t-0   ">
                <h3 className="event-card__title text-center text-xl font-bold mb-1 ">{eventTitle}</h3>
                <p className="event-card__description text-sm   ">{eventDescr}</p>
                <div className="event-card__cta  absolute   top-3/4 left-2/3">
                    <Link href={eventLink} className="event-card__cta--link py-1 px-4 rounded-full">Learn More</Link>
                </div>
            </div>
            }
        </div>

    );
}
 
export default EventCard;