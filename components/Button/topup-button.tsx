"use client";
import Link from "next/link";
import React from 'react';
import Swal from 'sweetalert2';

const TopUpButton = () => {
    const showAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your topup was successful.',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    };

    return (
        <div className="fixed bottom-5 w-4/5 self-center">
            <button
                onClick={showAlert}
                className="mt-16 bg-light-cyan text-white text-center font-bold py-4 px-4 rounded-full w-full" // Added w-full
            >
                Proceed
            </button>
        </div>
    );
};

export default TopUpButton;
