"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Define the type for the items in serviceTab
interface ServiceTabItem {
  value: number; // Adjust this according to your actual data structure
}

// Define the props type for the CircularProgression component
interface CircularProgressionProps {
  serviceTab: ServiceTabItem[]; // Array of ServiceTabItem
  index: number; // Assuming index is a number
  onPercentageChange: (percentage: number) => void;
}

const ChargingCard: React.FC<CircularProgressionProps> = ({ serviceTab, index, onPercentageChange }) => {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targetValue = serviceTab[index].value; // Get the target value from serviceTab

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && percentage < targetValue) {
            // Immediately set percentage to target value
            setPercentage(targetValue);
            onPercentageChange(targetValue); // Call the prop function with target value
          }
        });
      },
      { threshold: 0 } // Change the threshold value as per your requirements
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percentage, serviceTab, index, onPercentageChange]); // Include onPercentageChange in dependencies

  // Custom styles for the CircularProgressbar
  const customStyles = {
    path: {
      stroke: "#72ACA9", // Change this to your desired color
      strokeWidth: 8, // Adjust the width of the progress path
    },
    trail: {
      stroke: "#D9D9D9", // The color of the trail (background)
      strokeWidth: 8, // Adjust the width of the trail
    },
    text: {
      fill: "#000", // Color of the text (percentage)
      fontSize: '16px', // Font size of the text
    },
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl">
      <div ref={containerRef} className="flex justify-center items-center h-60">
        <div style={{ width: '180px', height: '180px' }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={customStyles} // Apply custom styles here
          />
        </div>
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-4">
        <div className="col-span-2 font-bold text-base text-gray">
          Plug Connected
          <p className="text-black text-lg">Charging...</p>
        </div>
        <div className="row-span-2">
          <Icon
            icon="ph:charging-station-bold"
            style={{ color: "#72ACA9", fontSize: "52px" }}
            className="float-end me-2"
          />
        </div>
      </div>

      <hr className="h-1.5 bg-md-gray rounded-2xl mx-5 border-none" />

      <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-4">
        <div className="col-span-8 font-bold text-5xl text-start">20kWh</div>
        <div className="col-span-1 font-bold text-base text-gray text-start">
          Total Spent
          <p className="text-black text-2xl font-bold text-start">
            RM 26.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChargingCard;