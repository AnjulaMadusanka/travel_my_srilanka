// Author: Anjula Madusanka
// Component: Homepage
// Purpose: Displays the homepage with various sections and content.

import React from "react";
import { Card, CardContent } from "../components/cards";
import { Button } from "../components/buttons";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";
import section1Bg from "../assets/section1_bg.jpg";
import section2Bg from "../assets/section2_bg.jpg";
import section3Bg from "../assets/section3.jpg";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header navItems={["Home", "Tours", "About", "Contact"]} />
      
      <div className="relative px-4 md:px-10 lg:px-20 space-y-12">
        <Section 
          backgroundImage={section1Bg}
          className="h-[50vh] md:h-[60vh] text-center text-white lg:py-30 md:py-20 py-10 px-5 bg-opacity-75"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to Travel My Sri Lanka – Your Gateway to Paradise
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Discover the unparalleled beauty and charm of Sri Lanka with us.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              Explore Tours
            </Button>
          </motion.div>
        </Section>

        <Section 
          backgroundImage={section2Bg}
          className="container mx-auto py-20 text-white bg-opacity-75 px-5"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Why Travel My Sri Lanka?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-base md:text-lg lg:text-xl">
            <li>
              <strong>Tailor-Made Experiences:</strong> We craft personalized itineraries to suit your interests, whether it’s adventure, culture, relaxation, or all of the above.
            </li>
            <li>
              <strong>Expert Local Guides:</strong> Our experienced and passionate guides ensure you get the insider’s perspective on Sri Lanka’s rich history, traditions, and culture.
            </li>
            <li>
              <strong>Seamless Travel:</strong> From airport pickups to luxury accommodations and guided tours, we take care of every detail so you can travel stress-free.
            </li>
            <li>
              <strong>Sustainable Tourism:</strong> We believe in responsible travel. By supporting local communities and eco-friendly initiatives, we ensure your journey leaves a positive impact.
            </li>
          </ul>
        </Section>

        <Section className="container mx-auto py-20 px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Our Top Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 underline">{experience.title}</h3>
                  <p>{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section 
          backgroundImage={section3Bg}
          className="py-20 text-white px-5 bg-opacity-75"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Start Your Adventure Today
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              Your dream Sri Lankan adventure is just a click away. Whether you’re a solo traveler, a couple on a romantic getaway, or a family seeking new experiences, we have something for everyone.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              Contact Us
            </Button>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

const Section = ({ children, backgroundImage, className }) => (
  <section 
    className={`bg-cover bg-center rounded-[10px] shadow-lg ${className}`} 
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundBlendMode: 'overlay' }}
  >
    {children}
  </section>
);

const experiences = [
  {
    title: "Cultural Escapes",
    description: "Immerse yourself in the wonders of Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and the Dambulla Cave Temples."
  },
  {
    title: "Wildlife Safaris",
    description: "Witness majestic elephants, elusive leopards, and exotic birdlife in their natural habitats at Yala, Udawalawe, and Wilpattu National Parks."
  },
  {
    title: "Beach Bliss",
    description: "Relax on the pristine beaches of Bentota, Mirissa, or Trincomalee, or indulge in thrilling water sports along the coast."
  },
  {
    title: "Hill Country Retreats",
    description: "Journey through the emerald tea plantations of Nuwara Eliya, ride the scenic train to Ella, and hike the trails of Horton Plains."
  }
];

export default Homepage;
