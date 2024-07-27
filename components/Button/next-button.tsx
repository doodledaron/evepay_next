'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Ensure you're using the right import path

interface ButtonProps {
  urlLink: string;
  buttonText: string;
  payload: Record<string, any>; // Add payload prop // Add redirectUrl prop for successful navigation
}

const NextButton: React.FC<ButtonProps> = ({ urlLink, buttonText, payload }) => {
  const router = useRouter(); // Initialize useRouter

  const handleClick = async () => {
    try {
      const response = await fetch(urlLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Use the dynamic payload
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Success:', data);

        const redirectUrl = '/payment';
        // Navigate to the next page on success with 51.2 as a query parameter
        const queryString = new URLSearchParams({ value: '51.2' }).toString();
        router.push(`${redirectUrl}?${queryString}`);
      } else {
        console.error('Error:', data.message);
        // Handle error response
      }
    } catch (error) {
      console.error('Request failed:', error);
      // Handle network errors or other issues
    }
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
