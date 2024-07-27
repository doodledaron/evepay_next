import Link from "next/link";

interface ButtonProps {
  urlLink: string;
  buttonText: string;
}

const NextButton: React.FC<ButtonProps> = ({ urlLink, buttonText }) => {
  return (
    <Link
      href={urlLink}
      className="fixed bottom-5 w-4/5 self-center"
      // className="w-full"
      // className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
    >
      <p className="mt-16 bg-light-cyan text-white text-center font-bold py-4 px-4 rounded-full">
        {buttonText}
      </p>
    </Link>

  );
};

export default NextButton;