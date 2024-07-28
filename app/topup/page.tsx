"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import TopUpCard from "@/components/Card/topup-card";
import TopUpButton from "@/components/Button/topup-button";

const TopUpPage = () => {
    const [inputValue, setInputValue] = useState(50);

    const topUp = async () => {
        const walletAddress = "0xa5314CF6Bd3a4fB9e2448CC92899EA15f24b538e";
        const toAddress = "0x91A9fd571BE76C48Abfa189BC6b575054800ee0c";
        const contractAddress = "0xFF9fE4aB4F4C255D4419B6366321e534eBE5eEdf";
        const callbackUrl = "https://postman-echo.com/post?";
        const signedData = "";  // Add signed data if available

        try {
            const response = await fetch('https://evepay.onrender.com/maschain_token/api_mint_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wallet_address: walletAddress,
                    to: toAddress,
                    amount: inputValue.toString(), // Pass the inputValue
                    contract_address: contractAddress,
                    callback_url: callbackUrl,
                    signed_data: signedData,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire('Success', 'Token minted successfully!', 'success');
            } else {
                Swal.fire('Error', data.message || 'Something went wrong!', 'error');
            }
        } catch (error: any) {
            Swal.fire('Error', error.message || 'Something went wrong!', 'error');
        }
    };

    return (
        <div>
            <TopUpCard inputValue={inputValue} setInputValue={setInputValue} topUp={topUp} />
            <TopUpButton topUp={topUp} />
        </div>
    );
};

export default TopUpPage;
