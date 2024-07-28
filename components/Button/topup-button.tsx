"use client";
import React from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const TopUpButton = ({ topUp }: { topUp: () => void }) => {
    const router = useRouter();

    const handleButtonClick = async () => {
        try {
            await topUp();
            Swal.fire({
                title: 'Success!',
                text: 'Your topup was successful.',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/charging');  // Redirect to the desired page
                }
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Your topup failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="fixed bottom-5 w-4/5 self-center">
            <button
                onClick={handleButtonClick}
                className="mt-16 bg-light-cyan text-white text-center font-bold py-4 px-4 rounded-full w-full"
            >
                Proceed
            </button>
        </div>
    );
};

export default TopUpButton;
