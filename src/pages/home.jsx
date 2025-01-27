import React from "react";
import { Card, CardContent } from "../components/cards";
import { Button } from "../components/buttons";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Travel My Sri Lanka</h1>
          <nav className="space-x-4">
            <Button variant="link" className="text-white hover:underline">Home</Button>
            <Button variant="link" className="text-white hover:underline">Destinations</Button>
            <Button variant="link" className="text-white hover:underline">Tours</Button>
            <Button variant="link" className="text-white hover:underline">Contact</Button>
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-black" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?travel)' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold mb-4">Welcome to Travel My Sri Lanka – Your Gateway to Paradise</h2>
          <p className="text-lg mb-6">Discover the unparalleled beauty and charm of Sri Lanka with us.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">Explore Tours</Button>
        </motion.div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Travel My Sri Lanka?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Tailor-Made Experiences:</strong> We craft personalized itineraries to suit your interests, whether it’s adventure, culture, relaxation, or all of the above.</li>
          <li><strong>Expert Local Guides:</strong> Our experienced and passionate guides ensure you get the insider’s perspective on Sri Lanka’s rich history, traditions, and culture.</li>
          <li><strong>Seamless Travel:</strong> From airport pickups to luxury accommodations and guided tours, we take care of every detail so you can travel stress-free.</li>
          <li><strong>Sustainable Tourism:</strong> We believe in responsible travel. By supporting local communities and eco-friendly initiatives, we ensure your journey leaves a positive impact.</li>
        </ul>
      </section>

      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Top Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Cultural Escapes</h3>
              <p>Immerse yourself in the wonders of Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and the Dambulla Cave Temples.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Wildlife Safaris</h3>
              <p>Witness majestic elephants, elusive leopards, and exotic birdlife in their natural habitats at Yala, Udawalawe, and Wilpattu National Parks.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Beach Bliss</h3>
              <p>Relax on the pristine beaches of Bentota, Mirissa, or Trincomalee, or indulge in thrilling water sports along the coast.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Hill Country Retreats</h3>
              <p>Journey through the emerald tea plantations of Nuwara Eliya, ride the scenic train to Ella, and hike the trails of Horton Plains.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Adventure Today</h2>
          <p className="mb-4">Your dream Sri Lankan adventure is just a click away. Whether you’re a solo traveler, a couple on a romantic getaway, or a family seeking new experiences, we have something for everyone.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">Contact Us</Button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Travel My Sri Lanka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
