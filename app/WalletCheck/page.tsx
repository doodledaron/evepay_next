import React from 'react'
import { Icon } from "@iconify/react";
import NextButton from "../../components/Button/next-button";
import WalletInfor from '@/components/Card/info-card';
import SwipeableButton from '../../components/Button/SwipeButton';

export default function WalletCheck() {
    const walletBalance = 6; // Replace this with your actual balance value

    return (
        <div>
            <div className="flex flex-col mt-0 items-center">
                <div className='flex flex-row space-x-3 justify-between items-center'>
                    <Icon
                        icon="solar:wallet-outline"
                        style={{ color: "#72ACA9", fontSize: "28px" }}
                    />

                    <h1 className='text-center font-semibold text-lg'><strong>Maschain Wallet</strong></h1>

                    {walletBalance > 4 ? (
                        <span className="relative inline-flex items-center justify-center w-6 h-6 bg-dark-green-transparent rounded-full">
                            <Icon icon="charm:circle-tick" className="text-dark-green" style={{ fontSize: "15" }} />
                        </span>
                    ) : (
                        <Icon icon="mingcute:warning-fill" className="text-light-red" style={{ fontSize: "23" }} />
                    )}

                </div>

                <p className='text-center font-semibold text-gray text-sm'>#WalletID</p>

            </div ><WalletInfor />

            {/* 10% of 51.2kw */}
            {walletBalance > 4 ? (
                <SwipeableButton urlLink="/charging" buttonText="Swipe To Charge" />
            ) : (
                <NextButton urlLink="/topup" buttonText="Top Up Now" />
            )}

        </div>
    )
} 
