import NextButton from "../../components/Button/next-button";
import TopUpCard from "@/components/Card/topup-card";

export default function TopUpPage() {
    return (
        <div>
            <p className="text-base font-semibold">Choose a channel to Top Up</p>
            
            <TopUpCard />

            <NextButton urlLink="/" buttonText="Proceed" />
        </div>
    );
}