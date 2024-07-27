import Link from "next/link";
import { Icon } from "@iconify/react";

interface ButtonProps {
    urlLink: string;
    buttonText: string;
}

const PaymentButton: React.FC<ButtonProps> = ({ urlLink, buttonText }) => {
    return (
        <Link
            href={urlLink}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
        >
            <p className="bg-light-cyan text-white text-center font-bold w-20 h-20 rounded-full flex items-center justify-center hover:opacity-90">
                <Icon icon="mdi:tick" className="text-white" style={{ fontSize: "35" }} />
            </p>
        </Link>

    );
};

export default PaymentButton;
