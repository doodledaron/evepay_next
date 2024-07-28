import React from 'react'
import { Icon } from "@iconify/react";

const PaymentLayout = () => {
    return (
        <div className="flex flex-col mt-0 items-center">
            <div className='flex flex-row space-x-3 justify-between items-center'>
                <Icon
                    icon="solar:wallet-outline"
                    style={{ color: "#72ACA9", fontSize: "28px" }}
                />

                <h1 className='text-center font-semibold text-lg'><strong>Maschain Wallet</strong></h1>
            </div>

            <p className='text-center font-semibold text-gray text-sm'>0x9***e0c</p>

        </div>
    )
}

export default PaymentLayout
