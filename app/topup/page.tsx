import NextButton from "../../components/Button/next-button";
import TopUpCard from "@/components/Card/topup-card";

export default function TopUpPage() {
    return (
        <div>
            <TopUpCard />

            <NextButton urlLink="/" buttonText="TopUp" />
        </div>
    );
}