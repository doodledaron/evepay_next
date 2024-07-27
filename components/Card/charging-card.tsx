"use client";

import Image from "next/image";
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
}

const ChargingCard: React.FC<CircularProgressionProps> = ({ serviceTab, index }) => {
  const [percentage, setPercentage] = useState(0);
  const [currentKW, setCurrentKW] = useState(0);
  const [currentRM, setCurrentRM] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targetValue = serviceTab[index].value; // Get the target value from serviceTab
    const targetKW = 51.2; // Total kW to charge to full
    const tokensPerKW = 1 / 1.25; // 1 kW costs 1/1.25 tokens
    const RMPerToken = 1; // 1 token = RM 1
    let interval: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the interval when the component is in view
            if (percentage < targetValue) {
              interval = setInterval(() => {
                setPercentage((prev) => {
                  if (prev < targetValue) {
                    const newPercentage = Math.min(prev + 1, targetValue);
                    const newKW = (newPercentage / 100) * targetKW;
                    setCurrentKW(newKW);
                    setCurrentRM(newKW * tokensPerKW * RMPerToken);
                    return newPercentage;
                  }
                  clearInterval(interval); // Clear the interval if the target is reached
                  return prev;
                });
              }, 300); // Adjust the interval duration as needed (in milliseconds)
            }
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
      clearInterval(interval); // Clear the interval on unmount
    };
  }, [percentage, serviceTab, index]);

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
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl min-w-80">
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
        <div className="row-span-1">
          <Icon
            icon="ph:charging-station-bold"
            style={{ color: "#72ACA9", fontSize: "52px" }}
            className="float-end me-2"
          />
        </div>
      </div>

      <hr className="h-1.5 bg-md-gray rounded-2xl mx-5 border-none" />

      <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-2">
        <div className="col-span-7 font-bold text-base text-gray text-start">
          Total Spent
          <p className="text-black text-xl font-bold text-start">
            RM {currentRM.toFixed(2)}
          </p>
        </div>
        <div className="col-span-4 font-bold text-3xl text-end mt-auto">
          {currentKW.toFixed(2)} kW
        </div>
      </div>
    </div>
  );
};

export default ChargingCard;