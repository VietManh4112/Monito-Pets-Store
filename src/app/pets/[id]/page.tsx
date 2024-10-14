import Customer from "@/app/ui/id/customer";
import InforPets from "@/app/ui/id/infor";

export default function Page() {
    return (
        <>
            <div className="max-w-7xl pt-24 mx-auto">
                <InforPets></InforPets>
            </div>
            <div className="max-w-7xl mx-auto pt-5">
                <Customer></Customer>
            </div>
        </>
    );
}