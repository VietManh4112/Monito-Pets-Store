import Btn from "@/app/ui/components/button";
import Image from "next/image";

export default function FAQsPets() {
    const arrImg = [{
        src: 'https://attic.sh/_static/ai/dreamscape/hero/VQlNQBk5DF.webp', title: 'What is a Pomeranian? How to Indentify Pomeranian Dogs',
        text: 'The pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...', id: 0
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/XPOBm3wJhy.webp', title: 'Dog Diet You Need To Know', 
        text: 'Dividing a dog`s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...', id: 1
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/ZmHVjFAm9m.webp', title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively', 
        text: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.', id: 2
    }]

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <p className="font-thin text-base">You already know?</p>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg sm:text-2xl font-bold text-[var(--dblue)]">Useful Pet Knowledge</h1>
                    <div className="hidden sm:block"><Btn type="view" load={false}>View More</Btn></div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5 py-7">
                    {arrImg.map((arr) => (
                        <div key={arr.id} className="rounded-xl space-y-2 p-2 bg-white shadow-md">
                            <Image src={arr.src} alt="img" width={160} height={160} className="w-full aspect-[3/2] rounded-lg object-cover"></Image>
                            <div className="p-2 space-y-2">
                                <span className="bg-[#00A7E7] rounded-3xl text-[10px] text-white font-bold px-2 py-1">Pet Knowledge</span>
                                <div>
                                    <h2 className="font-bold text-base">{arr.title}</h2>
                                    <p className="text-sm mt-2">{arr.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="block sm:hidden"><Btn type="view" load={false}>View More</Btn></div>
            </div>
        </>
    );
}