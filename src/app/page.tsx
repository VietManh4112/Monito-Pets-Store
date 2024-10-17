import FAQsPets from "@/app/ui/home/faqs-pets";
import HomePets from "@/app/ui/home/home-pets";
import Pets from "@/app/ui/home/pets-pets";
import ProductsPets from "@/app/ui/home/products-pets";


export default function Page() {
    return (
        <>
            <div className="bg-[var(--linear)] rounded-b-3xl overflow-hidden pt-32 sm:pt-20">
                <HomePets></HomePets>
            </div>
            <div className="py-16">
                <Pets></Pets>
            </div>
            <div className="py-16 hidden sm:block">
                <ProductsPets></ProductsPets>
            </div>
            <div className="py-16">
                <FAQsPets></FAQsPets>
            </div>
        </>
    );
}