"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TopUpCard = () => {
    const amounts = [5, 10, 20, 50, 100, 150, 200, 300];
    const [inputValue, setInputValue] = useState(50); 

    const handleButtonClick = (amount: number) => {
        setInputValue(amount); 
    };

    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-md">
                <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-4">
                    <div className="col-span-8 font-bold text-base text-gray">
                        <img src="/pbe.png" alt="TNG" width={150} height={100} />
                    </div>
                    <div className="col-span-2 font-bold text-base text-gray">

                    </div>
                </div>
            </div>

            <div className="max-w-sm mt-4 rounded-2xl overflow-hidden shadow-md p-3">
                <p className="font-bold p-3 ml-2">Amount</p>
                <div className="flex justify-center my-6">
                    <input
                        type="number"
                        value={inputValue}
                        placeholder="50"
                        className="text-black outline-none font-bold text-center text-5xl bg-transparent "
                        style={{ width: '5ch' }}
                        maxLength={5}
                        disabled
                    />
                </div>

                <div className="grid grid-cols-4 gap-4 m-2 my-10">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            onClick={() => handleButtonClick(amount)}
                            className=" font-bold p-3 rounded-lg bg-slate-100 text-black hover:bg-lg-light-cyan"
                        >
                            {amount}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopUpCard
