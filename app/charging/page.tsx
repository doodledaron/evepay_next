import React from "react";
import ChargingCard from "../../components/Card/charging-card";
import NextButton from "../../components/Button/next-button";

export default function WalletCheck() {
  return (
    <div>
      <ChargingCard />

      <NextButton urlLink="/payment" buttonText="Stop Charging" />
    </div>
  );
}
