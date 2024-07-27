import Image from "next/image";
import NextButton from "../components/Button/next-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/main-page.jpg" alt="Main Page" width={421} height={396} />

      <p className="mt-5 text-center font-semibold text-gray text-sm">
        Get ready for seamless and secure charging?
      </p>
      <p className="text-center font-semibold text-gray text-sm">
        Login to your <span className="text-light-cyan">Maschain wallet</span>.
      </p>

      <NextButton urlLink="/login" buttonText="Get Started" />
    </div>
  );
}
