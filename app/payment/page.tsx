import { Icon } from "@iconify/react";
import PaymentButton from '../../components/Button/payment-button'
import PaymentLayout from "@/components/Navigation/payment-layout";

export default function PaymentPage() {
    return (
        <div>
            <PaymentLayout />
            <div className="mt-8 w-full max-h-fit rounded-2xl overflow-hidden border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                <div className="px-4 py-2">
                    <div className="inset-0 flex items-center justify-center">
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
                            <div className="text-base font-semibold text-gray">10</div>
                        </div>
                        <div className="flex justify-between text-gray-700 text-base mt-4">
                            <div>
                                <p className="text-base font-semibold text-gray">Amount</p>
                                <p className="text-base font-semibold text-gray">(in RM)</p>
                            </div>
                            <div className="text-base font-semibold text-gray">26.00</div>
                        </div>
                        <div className='flex items-center text-sm font-semibold text-light-blacK mt-4'>
                            <Icon icon="carbon:information-filled" className="text-xs-light-gray mr-2" style={{ fontSize: "14" }} />
                            1 kW = RM22.60
                        </div>
                    </div>
                    <hr className="border-gray" />
                    <div className="py-5">
                        <div className="flex justify-between">
                            <div className='text-xl font-semibold text-black'>Total (in EHT)</div>
                            <div className='text-xl font-semibold text-black'>520</div>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentButton urlLink="/history" buttonText="Go to Transaction History" />
        </div>
    );
}
