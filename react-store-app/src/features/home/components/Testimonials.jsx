import React, { useEffect, useState } from "react";
import { getTestimonials } from "../../../shared/services/testimonialsService";
function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const testimonialsData = await getTestimonials();
        setTestimonials(testimonialsData);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="mx-auto px-6 py-10 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Customer Testimonials
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Hear what our satisfied customers have to say about our products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {testimonial.name}
            </h3>
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="mr-0.5">
                  {i < testimonial.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-center mb-4">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <a to="/" className="text-sm hover:underline underline-offset-4">
          Read More Reviews →
        </a>
      </div>
    </div>
  );
}

export default Testimonials;
