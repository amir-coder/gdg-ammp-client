import Layout from '../../components/layout';
import EventCard from "components/EventCard";
import { useEffect, useState } from "react";

const Events = () => {
  // an array of objects that will be used to render the events
  const events = [
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },
    {
      eventTitle: "Gdg devfest 2022",
      eventDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      eventLink: "#",
      eventSrc: "/devfest-social.png",
      eventAlt: "devfest",
    },

    // ...add more events here
  ];
  // This is a hook that runs after the component is rendered
  // It is used to add a transition to the images
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll(".events-container img");
    let imageLoadCounter = 0;

    images.forEach((img, index) => {
      img.style.opacity = 1;
      img.style.transform = "translateY(0)";
      img.style.transition = "transform 0.1s opacity 0.1s";
      img.style.transitionDelay = `${index / 5 + 1}s`;
      img.addEventListener("transitionend", () => {
        imageLoadCounter++;
        if (imageLoadCounter === images.length) {
          setIsLoaded(true);
        }
      });
    });
  }, []);

  // This is a hook that controls the modal state
  const [modalOpen, setModalOpen] = useState(false);

  // handle the modal form change
  // start by creating an array of objects that will contain the form data
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescr: "",
    eventLink: "",
    eventSrc: "",
    eventAlt: "",
  });

  // handle the form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  // handle the form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // add the new event to the events array and close the modal
    // verify that the form is not empty
    if (
      formData.eventTitle === "" ||
      formData.eventDescr === "" ||
      formData.eventLink === "" ||
      formData.eventSrc === "" ||
      formData.eventAlt === ""
    ) {
      // alert the user that the form is empty
      alert("Please fill in all the fields");
      return;
    }


    events.push(formData);
    setModalOpen(false);
  };



  return (
    <main className="main-events p-8 flex-col justify-center ">
      <button
        className=" absolute md:right-8  rounded-xl ml-auto"
        onClick={() => setModalOpen(true)}
      >
        Add an event
      </button>
      {/* a modal that contains the form to add an event the image source, the image source alt the event title the event description the event page link*/}
      {modalOpen && (
        <div className="fixed bottom-0 z-50 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  hmtlfor="eventName"
                >
                  Event Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="eventName"
                  type="text"
                  placeholder="Event Name"
                  onChange={handleFormChange}
                  name="eventTitle"
                  value={formData.eventTitle}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  hmtlfor="eventDescription"
                >
                  Event Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="eventDescription"
                  placeholder="Event Description"
                  onChange={handleFormChange}
                  name="eventDescr"
                  value={formData.eventDescr}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  hmtlfor="eventImgSrc"
                >
                  Event Image Source
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="eventImgSrc"
                  type="text"
                  placeholder="Event Image Source"
                  onChange={handleFormChange}
                  name="eventSrc"
                  value={formData.eventSrc}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  hmtlfor="eventImgAlt"
                >
                  Event Image Alt
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
            leading-tight focus:outline-none focus:shadow-outline"
                  id="eventImgAlt"
                  type="text"
                  placeholder="Event Image Alt"
                  onChange={handleFormChange}
                  name="eventAlt"
                  value={formData.eventAlt}
                  
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  hmtlfor="eventLink"
                >
                  Event Link
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="eventLink"
                  type="text"
                  placeholder="Event Link"
                  onChange={handleFormChange}
                  name="eventLink"
                  value={formData.eventLink}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <article className="events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-12 ">
        {events.map((event, index) => (
          <EventCard
            key={index}
            eventTitle={event.eventTitle}
            eventDescr={event.eventDescr}
            eventLink={event.eventLink}
            eventSrc={event.eventSrc}
            eventAlt={event.eventAlt}
            isLoaded={isLoaded}
          />
        ))}
      </article>
    </main>
  );
};


Events.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
  }

export default Events;
