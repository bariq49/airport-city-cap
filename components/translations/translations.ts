import { detail1, detail2 } from "@/public/images/detailsection";

export const translations = {
  eng: {

    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      fleet: "Fleet",
      contact: "Contact",

    },
    fleet: {
      from: "From",
      passengers: "Passengers",
      bags: 'Bags',
      limousine: 'Limousine',
      stationW: 'Station Wagon',
      minivan: "Mini Van",
      sectionTitle: "Memorable journey",
      sectionSubtitle: "Experience Luxury with Our Services",
      carData: [
        {
          title: 'Limousine',
          description: "Comfortable rides for everyday travel.",
          passengers: 3,
          bags: 3,
          price: "32$"
        },
        {
          title: 'Station Wagon',
          description: "Premium cars for special moments.",
          passengers: 4,
          bags: 4,
          price: "35$"
        },
        {
          title: "Mini Van",
          description: "Spacious travel for groups and families.",
          passengers: 8,
          bags: 8,
          price: "50$"
        },
      ]
    },
    contact: {
      heroSection: {
        title: "Contact Us",
        description: "Have questions or need assistance? Reach out to our team anytime."
      },
      contactInfo: {
        title: "Get in Touch",
        phone: {
          label: "Phone",
          number: "085 333 2629",
          link: "tel:0853332629"
        },
        whatsapp: {
          label: "WhatsApp",
          number: "+31 85 333 2629",
          link: "https://wa.me/31853332629"
        },
        facebook: {
          label: "Facebook",
          link: "https://web.facebook.com/profile.php?id=61575090688352&mibextid=wwXIfr&rdid=pxBA3t12se2UPkJT",
          text: "Visit our Facebook"
        },
        email: {
          label: "Email",
          email: "info@taxigate.nl",
          link: "mailto:info@taxigate.nl"
        },
        instagaram: {
          label: "Instagaram",
          email: "Taxi Gate",
          link: "https://www.instagram.com/taxigate.nl/"
        },

      },
      formSection: {
        title: "Send us a Message",
        formFields: {
          name: {
            label: "Full Name",
            placeholder: "Enter your full name"
          },
          email: {
            label: "Email Address",
            placeholder: "Enter your email address"
          },
          phone: {
            label: "Phone Number",
            placeholder: "Enter your phone number"
          },
          message: {
            label: "Your Message",
            placeholder: "Enter your message here"
          }
        },
        button: {
          sending: "Sending...",
          send: "Send Message"
        }
      },
      loadingMessage: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
    },
    services: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Discover Our Services",
      topServices: [
        {
          id: 1,
          image: detail1,
          alt: 'Airport transportation',
          title: 'Airport Shuttle and Taxi Services in Vienna – Tailored Transfers by Airport City Cab',
          description: "Airport City Cab offers personalized airport shuttle services in Vienna designed for your comfort and convenience. If you require regular airport transfers, we provide custom packages suited to your unique travel needs. Whether you're coming from a trade fair, hotel, or home, our seamless online booking system makes it easy to schedule your airport taxi to or from any destination. Travel stress-free—Airport City Cab gets you there on time, every time."
        },
        {
          id: 2,
          image: detail2,
          alt: 'Standard transport',
          title: 'We’re Here for You – 24/7, Every Day!',
          description: `At Airport City Cab, we’re available around the clock to serve you—24 hours a day, 7 days a week. Whether you're traveling alone or with a group, our modern and comfortable fleet, including spacious vans, ensures a safe and reliable journey from point A to B.
We pride ourselves on flexibility, allowing us to meet your needs with both individual and group transfers—anytime, anywhere in Vienna.`
        }
      ],
        bottomServices: [
        {
          id: 3,
          image: detail1,
          alt: 'Healthcare transport',
          subtitle: 'Transport Services',
          title: "Healthcare transport",
          description: 'We offer customized care transportation for people who are unable to travel themselves. We drive with our private taxis to and from hospitals, nursing homes, day care, rehabilitation centers and all other locations where (medical) care takes place.'
        },
        {
          id: 4,
          image: detail2,
          alt: 'Comfortable Bus Rides',
          subtitle: 'Comfortabele Taxibusreizen',
          title: 'Comfortable Bus Rides',
          description: 'Enjoy stress-free group travel with our spacious buses, offering reliability and comfort for trips of any scale. Ideal for corporate events, school trips, weddings, and large group outings with customizable routes.'
        },
        {
          id: 5,
          image: detail1,
          alt: 'Your Trusted Event Transportation Partner',
          subtitle: 'Events Transfer',
          title: 'Your Trusted Event Transportation Partner',
          description: 'Arrive in style, leave with lasting impressions. Trust us to provide reliable transport for your next big event. We handle concerts, sports events, conferences, and private parties with seamless coordination.'
        }
      ],

    },

  },
  nl: {
   navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      fleet: "Fleet",
      contact: "Contact",

    },

    fleet: {
      from: "From",
      passengers: "Passengers",
      bags: 'Bags',
      limousine: 'Limousine',
      stationW: 'Station Wagon',
      minivan: "Mini Van",
      sectionTitle: "Memorable journey",
      sectionSubtitle: "Experience Luxury with Our Services",
      carData: [
        {
          title: 'Limousine',
          description: "Comfortable rides for everyday travel.",
          passengers: 3,
          bags: 3,
          price: "32$"
        },
        {
          title: 'Station Wagon',
          description: "Premium cars for special moments.",
          passengers: 4,
          bags: 4,
          price: "35$"
        },
        {
          title: "Mini Van",
          description: "Spacious travel for groups and families.",
          passengers: 8,
          bags: 8,
          price: "50$"
        },
      ]
    },
    contact: {
      heroSection: {
        title: "Contact Us",
        description: "Have questions or need assistance? Reach out to our team anytime."
      },
      contactInfo: {
        title: "Get in Touch",
        phone: {
          label: "Phone",
          number: "085 333 2629",
          link: "tel:0853332629"
        },
        whatsapp: {
          label: "WhatsApp",
          number: "+31 85 333 2629",
          link: "https://wa.me/31853332629"
        },
        facebook: {
          label: "Facebook",
          link: "https://web.facebook.com/profile.php?id=61575090688352&mibextid=wwXIfr&rdid=pxBA3t12se2UPkJT",
          text: "Visit our Facebook"
        },
        email: {
          label: "Email",
          email: "info@taxigate.nl",
          link: "mailto:info@taxigate.nl"
        },
        instagaram: {
          label: "Instagaram",
          email: "Taxi Gate",
          link: "https://www.instagram.com/taxigate.nl/"
        },

      },
      formSection: {
        title: "Send us a Message",
        formFields: {
          name: {
            label: "Full Name",
            placeholder: "Enter your full name"
          },
          email: {
            label: "Email Address",
            placeholder: "Enter your email address"
          },
          phone: {
            label: "Phone Number",
            placeholder: "Enter your phone number"
          },
          message: {
            label: "Your Message",
            placeholder: "Enter your message here"
          }
        },
        button: {
          sending: "Sending...",
          send: "Send Message"
        }
      },
      loadingMessage: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
    },
    services: {
      sectionTitle: "Onze Diensten",
      sectionSubtitle: "Ontdek Onze Diensten",
      topServices: [
        {
          id: 1,
          image: detail1,
          alt: 'Luchthavenvervoer',
          subtitle: 'Luchthaventransfers',
          title: 'Luchthavenvervoer',
          description: "U kunt eenvoudig een taxi boeken naar en van luchthavens in Nederland, Duitsland en België. Wanneer u vanaf een luchthaven reist, houden wij uw vlucht in de gaten via het opgegeven vluchtnummer en wachten wij bij eventuele vertraging."
        },
        {
          id: 2,
          image: detail2,
          alt: 'Standaard vervoer',
          subtitle: 'Standaard Service',
          title: 'Standaard vervoer',
          description: `Via onze website kunt u een taxi bestellen naar en vanaf elke locatie in Nederland. Het maakt niet uit of u binnen 20 minuten een taxi nodig heeft of dat u uw rit van tevoren wilt reserveren. Voor al uw taxivervoer van A naar B bent u bij ons aan het juiste adres!`
        },
        
      ],
       bottomServices: [
        {
          id: 3,
          image: detail1,
          alt: 'Healthcare transport',
          title: "Airport Transfers Made Simple",
          description: 'At Airport City Cab, we specialize in timely, stress-free transfers to and from Vienna International Airport. Whether you are catching a flight or arriving in the city, our reliable airport shuttle ensures you reach your destination smoothly. '
        },
        {
          id: 4,
          image: detail2,
          alt: 'Comfortable Bus Rides',
          title: 'More Than Just Airport Rides',
          description: 'We offer much more than airport transfers. Choose Airport City Cab for personalized city tours, convenient domestic travel within Austria, comfortable international trips, or fast and secure courier and delivery services. '
        },
        {
          id: 5,
          image: detail1,
          alt: 'Your Trusted Event Transportation Partner',
          title: 'Vehicles for Every Occasion',
          description: 'Our fleet includes a variety of vehicles to suit your travel needs—whether you are a solo traveler, a business professional, a family with kids, or a group with extra luggage. Choose between Economy Class and Business Class shuttles for your preferred level of comfort.'
        }
      ],
    
    },



  },
};