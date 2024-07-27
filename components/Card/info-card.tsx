import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

interface WalletInforProps {
    availableToken: string;
}

const WalletInfor: React.FC<WalletInforProps> = ({ availableToken }) => {
    const [totalEnergy, setTotalEnergy] = useState<number>(0);

    useEffect(() => {
        setTotalEnergy(Number(availableToken) * 1.25);
    }, [availableToken]);

    return (
        <div className="mt-8 w-full h-72 rounded-2xl overflow-hidden border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
            <div className="px-4 py-5">
                <div className='flex flex-row items-center justify-between bg-lg-light-cyan rounded-full px-4 py-3'>
                    <div className='text-white text-sm'>Available Token</div>
                    <div className='text-white text-base font-bold'>{availableToken}</div>
                </div>
                <div className="py-8">
                    <div className="flex justify-between text-gray-700 text-base">
                        <div>
                            <p className="text-base font-semibold text-gray">Total Energy</p>
                            <p className="text-base font-semibold text-gray">(in kW)</p>
                        </div>
                        <div className="text-base font-semibold text-gray">{totalEnergy}</div>
                    </div>
                    <div className="flex justify-between text-gray-700 text-base mt-4">
                        <div>
                            <p className="text-base font-semibold text-gray">Total Amount</p>
                            <p className="text-base font-semibold text-gray">(in RM)</p>
                        </div>
                        <div className="text-base font-semibold text-gray">{availableToken}</div>
                    </div>
                </div>
                <hr className="border-gray" />
                <div className="pt-3">
                    <div className="flex justify-between">
                        <div className='text-xs font-semibold text-light-blacK flex flex-row items-center justify-between'>
                            <Icon icon="carbon:information-filled" className="text-xs-light-gray mr-2" style={{ fontSize: "14px" }} />
                            1 kW = 1.25 EVEC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletInfor;
