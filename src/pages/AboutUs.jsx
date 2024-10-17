import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Gift Galore</h1>
        <p className="text-lg text-gray-600 mt-2">
          Making Gift-Giving Simple and Memorable
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2024, Gift Galore was born from a simple idea: make
          gift-giving easier and more meaningful. We understand the challenge of
          finding the perfect gift, whether it's for a birthday, anniversary, or
          any special occasion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Gift Galore, our mission is to simplify the gift-giving process
          while ensuring each gift is thoughtful and personal. We believe that
          every occasion deserves the perfect gift, and finding it shouldn't be
          stressful.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <div className="text-gray-600">
          <p>Email: <a href="mailto:support@giftgalore.com" className="text-blue-500 underline">support@giftgalore.com</a></p>
          <p>Phone: <a href="tel:+254791273101" className="text-blue-500 underline">+254-791-273-101</a></p>
          <p>Address: 123 Gift Street, Shopping District, GF 12345</p>
        </div>
      </section>
    </div>
  );
};

export default About;
