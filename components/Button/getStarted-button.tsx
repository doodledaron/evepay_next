'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    urlLink: string;
    buttonText: string;
}

const NextButton: React.FC<ButtonProps> = ({ urlLink, buttonText }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(urlLink);
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-24 w-4/5 self-center mt-16 bg-light-cyan text-white text-center font-bold py-4 px-4 rounded-full hover:opacity-90"
        >
            {buttonText}
        </button>
    );
};

export default NextButton;
