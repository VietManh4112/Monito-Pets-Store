'use client';

import Image from "next/image";
import { useRef, useState } from "react";

export default function Customer() {
    const arrImg = [{
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp',
        id: 1
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp',
        id: 2
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp',
        id: 3
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/fbB4a0CWRe.webp',
        id: 4
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/hqmfPjLDVr.webp',
        id: 5
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp',
        id: 6
    }]
    const [selectedImg, setSelectedImg] = useState(0);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

    const selectedIndex = (index: number) => {
        setSelectedImg(index);
        if(imgRefs.current[index]) {
            imgRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }

    return (
        <>
            <div className="py-6">
                <div className="pl-4">
                    <h1>Our lovely customer</h1>
                    <div className="mt-3 flex gap-3 snap-x snap-mandatory overflow-x-scroll overscroll-x-contain [scrollbar-width:none]">
                        {arrImg.map((arr) => (
                            <div ref={(el) => { imgRefs.current[arr.id - 1] = el; }} key={arr.id} className="flex-none snap-center">
                                <Image src={arr.src} alt="img" width={250} height={350} className="aspect-[5/7] rounded-xl object-cover"></Image>
                            </div>
                        ))}
                    </div>
                    <div className="flex my-6 gap-2 justify-center">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <button key={index} type="button" className={`${selectedImg == index ? 'w-6 bg-[var(--dblue)]' : 'w-2 bg-gray-400'} h-2 rounded-full `} onClick={() =>selectedIndex(index)}>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}