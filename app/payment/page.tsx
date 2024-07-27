'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from "@iconify/react";
import PaymentButton from '../../components/Button/payment-button';
import PaymentLayout from "@/components/Navigation/payment-layout";

const PaymentPage: React.FC = () => {
    const router = useRouter();
    const [energyUsages, setEnergyAmount] = useState<number | null>(null);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const amountString = query.get('value');
        console.log(amountString);
        if (amountString) {
            const parsedAmount = parseFloat(amountString);
            console.log(parsedAmount);
            if (!isNaN(parsedAmount)) {
                setEnergyAmount(parsedAmount);
            } else {
                console.error('Failed to parse amount:', amountString);
            }
        }
    }, []);

    if (energyUsages === null) {
        return <p>No energy usage available</p>; // Fallback UI if amount is not available
    }

    const amount = energyUsages * 1.25;

    return (
        <div>
            <PaymentLayout />
            <div className="mt-8 w-full max-h-fit rounded-2xl overflow-hidden border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                <div className="px-4 py-2">
                    <div className="flex items-center justify-center">
                        <span className="flex items-center justify-center bg-dark-green-transparent rounded-full px-4 py-1">
                            <Icon
                                icon="charm:circle-tick"
                                className="text-dark-green mr-2"
                                style={{ fontSize: "20px" }} // Adjust icon size as needed
                            />
                            <p className="text-xs font-semibold text-dark-green">Paid</p>
                        </span>
                    </div>
                    <div className="pt-8">
                        <div className="flex justify-between text-gray-700 text-base">
                            <div>
                                <p className="text-base font-semibold text-gray">Energy Usage</p>
                                <p className="text-base font-semibold text-gray">(in kW)</p>
                            </div>
                            <div className="text-base font-semibold text-gray">{energyUsages.toFixed(2)}</div>
                        </div>
                        <div className="flex justify-between text-gray-700 text-base mt-4">
                            <div>
                                <p className="text-base font-semibold text-gray">Amount</p>
                                <p className="text-base font-semibold text-gray">(in EVEC)</p>
                            </div>
                            <div className="text-base font-semibold text-gray">{amount.toFixed(2)}</div>
                        </div>
                        <div className='flex items-center text-sm font-semibold text-light-black mt-4'>
                            <Icon icon="carbon:information-filled" className="text-xs-light-gray mr-2" style={{ fontSize: "14px" }} />
                            1 EVEC = 1.25 kW
                        </div>
                    </div>
                    <hr className="border-gray" />
                    <div className="py-5">
                        <div className="flex justify-between">
                            <div className='text-xl font-semibold text-black'>Total (in EVEC)</div>
                            <div className='text-xl font-semibold text-black'>{amount.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentButton urlLink="/history" buttonText="Go to Transaction History" />
        </div>
    );
};

export default PaymentPage;
