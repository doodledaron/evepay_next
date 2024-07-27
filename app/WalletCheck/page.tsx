"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import NextButton from "../../components/Button/getStarted-button";
import WalletInfor from '@/components/Card/info-card';
import SwipeableButton from '../../components/Button/SwipeButton';

export default function WalletCheck() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [availableToken, setAvailableToken] = useState<string>("");
    const [min_token, setMinToken] = useState<number>(0.01);

    useEffect(() => {
        fetch(`${apiUrl}/maschain_token/api_check_balance`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                wallet_address: "0x5b3a8eCB9677F56e46d67B7e69900cE322c030d1",
                contract_address: "0xA10b5960afae880bA86cb3Bb5ec1Ae2eBAe19083"
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("HTTP error! status: ${ response.status }");
                }
                return response.json();
            })
            .then((balanceData) => {
                if (balanceData.status === 'success') {
                    setAvailableToken(balanceData.data.result);
                } else {
                    console.error('Failed to fetch balance:', balanceData.status);
                }
            })
            .catch((error) => {
                console.error("Error fetching the API:", error);
            });
    }, []);

    return (
        <div>
            <div className="flex flex-col mt-0 items-center">
                <div className='flex flex-row space-x-3 justify-between items-center'>
                    <Icon
                        icon="solar:wallet-outline"
                        style={{ color: "#72ACA9", fontSize: "28px" }}
                    />
                    <h1 className='text-center font-semibold text-lg'><strong>Maschain Wallet</strong></h1>
                    {Number(availableToken) > min_token ? (
                        <span className="relative inline-flex items-center justify-center w-6 h-6 bg-dark-green-transparent rounded-full">
                            <Icon icon="charm:circle-tick" className="text-dark-green" style={{ fontSize: "15px" }} />
                        </span>
                    ) : (
                        <Icon icon="mingcute:warning-fill" className="text-light-red" style={{ fontSize: "23px" }} />
                    )}
                </div>
                <p className='text-center font-semibold text-gray text-sm'>0x5***0d1</p>
            </div>
            <WalletInfor availableToken={availableToken} />
            {Number(availableToken) > min_token ? (
                <SwipeableButton urlLink="/charging" buttonText="Swipe To Charge" />
            ) : (
                <NextButton urlLink="/topup" buttonText="Top Up Now" />
            )}
        </div>
    );
}
