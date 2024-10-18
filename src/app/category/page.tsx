
import HeaderCategory from "@/app/ui/category/header-category";
import MainCategory from "@/app/ui/category/main-container";

export default function Page() {
    return (
        <>
            <div className="max-w-7xl pt-20 mx-4 sm:mx-auto">
                <HeaderCategory></HeaderCategory>
            </div>
            <div className="max-w-7xl pt-5 sm:pt-20 grid sm:grid-cols-4 gap-5 mx-4 sm:mx-auto">
                <MainCategory></MainCategory>
            </div>
        </>
    );
}