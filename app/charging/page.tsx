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

  const capacityUsed = 51.2;
  const api_url = `https://evepay.onrender.com/maschain_token/api_transfer_token/${capacityUsed}`;
  // Define the payload
  const payload = {
    wallet_address: "0x5b3a8eCB9677F56e46d67B7e69900cE322c030d1",
    to: "0xa5314CF6Bd3a4fB9e2448CC92899EA15f24b538e",
    amount: "7",
    contract_address: "0xA10b5960afae880bA86cb3Bb5ec1Ae2eBAe19083",
    callback_url: "https://postman-echo.com/post?"
  };


  //sms
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [chargingPercentage, setChargingPercentage] = useState(0)

  useEffect(() => {
    const sendMessage = async () => {
      setLoading(true);
      setError(false);
      setSuccess(false);

      try {
        const res = await fetch('/api/sendMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const apiResponse = await res.json();

        if (apiResponse.success) {
          setSuccess(true);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Check percentage and send message when it reaches 100%
    if (chargingPercentage === 100) {
      sendMessage();
    }
  }, [chargingPercentage]);

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
                    onPercentageChange={setChargingPercentage} // Pass down the percentage change handler
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NextButton urlLink={api_url} buttonText="Proceed To Pay" payload={payload} />
      {/* 
      {loading && <p>Sending message...</p>}
      {success && <p>Message sent successfully.</p>}
      {error && <p>Something went wrong. Please check the number.</p>} */}
    </div>
  );
}