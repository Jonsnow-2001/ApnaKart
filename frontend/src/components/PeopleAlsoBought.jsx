import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";
import axios from "../lib/axios";
import ProductCard from "./ProductCard";

const PeopleAlsoBought = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get("/products/recommendations");
        setRecommendations(res.data);
      } catch (error) {
        console.log(error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while fetching recommendations"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div
      style={{
        transform: "scale(0.8)",
        transformOrigin: "center",
      }}
    >
      <h3 className="text-3xl font-semibold text-emerald-400">
        People Also Bought
      </h3>
      {/* className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-8 ">
        {recommendations.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PeopleAlsoBought;
