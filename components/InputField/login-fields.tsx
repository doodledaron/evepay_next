// import { Icon } from "@iconify/react";
import React, { useState } from "react";

const LoginFields = () => {
  return (
    <div>
      <div className="mt-12 flex items-center border border-gray rounded-lg p-4">
        {/* <Icon
          icon="fa6-solid:wallet"
          style={{ color: "#72ACA9", fontSize: "24px" }}
          className="mx-3 mr-4"
        /> */}
        <input
          type="text"
          placeholder="Wallet ID"
          className="flex-1 outline-none bg-transparent font-medium"
        />
      </div>
      <div className="mt-12 flex items-center border border-gray rounded-lg p-4">
        {/* <Icon
          icon="mdi:password"
          style={{ color: "#72ACA9", fontSize: "24px" }}
          className="mx-3  mr-4"
        /> */}
        <input
          type="password"
          placeholder="Password"
          className="flex-1 outline-none bg-transparent font-medium"
        />
      </div>
    </div>
  );
};

export default LoginFields;
