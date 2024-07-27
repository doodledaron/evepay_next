"use client";
import React, { useEffect, useState } from 'react';
// import { BaseSyntheticEvent, useState } from 'react';
import ChargingCard from "../../components/Card/charging-card";
import NextButton from "../../components/Button/next-button";

export default function WalletCheck() {
  const serviceTab = [
    {
      value: 100,
    }
  ];

  //sms
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const sendMessage = async () => {
  //     setLoading(true);
  //     setError(false);
  //     setSuccess(false);

  //     try {
  //       const res = await fetch('/api/sendMessage', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       const apiResponse = await res.json();

  //       if (apiResponse.success) {
  //         setSuccess(true);
  //       } else {
  //         setError(true);
  //       }
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const timer = setTimeout(sendMessage, 30000); // 30 seconds

  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  return (
    <div>
      <div className="w-full h-full ">
        <div className="flex lg:justify-around lg:flex-row flex-col justify-center">
          {serviceTab.map((x, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div>
                  <ChargingCard
                    serviceTab={serviceTab}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NextButton urlLink="/payment" buttonText="Proceed to Pay" />
      {/* {loading && <p>Sending message...</p>}
      {success && <p>Message sent successfully.</p>}
      {error && <p>Something went wrong. Please check the number.</p>} */}
    </div>
  );
}