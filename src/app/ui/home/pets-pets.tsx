'use client';

import Btn from "@/app/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

export default function Pets() {
    const arrImg = [{
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231-Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', id: 0
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052-Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', id: 1
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102-Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', id: 2
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512-Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', id: 3
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231-Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', id: 4
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502-Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', id: 5
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/fbB4a0CWRe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Ql6rFjgbV6.webp', name: 'M0231-Pomeranian White', gene: 'Female', age: '02 months', price: '6.500.000', id: 6
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/hqmfPjLDVr.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/qm1AbAA1cN.webp', name: 'M0512-Poodle Tiny Dairy Cow', gene: 'Male', age: '02 months', price: '5.000.000', id: 7
    }]
    const flagRef = useRef<HTMLDivElement>(null);
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [img, setImg] = useState(arrImg.map(img => img.src));

    const hoverImg = (hoverSrc: string, index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? hoverSrc : src)));
    }

    const leaveImg = (index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? arrImg[index].src : src)));
    }

    const showBanner = () => {
        if (divRefs.current[0]) {
            const divRect = divRefs.current[0].getBoundingClientRect().top;
            if (divRect < 600) {
                divRefs.current[0].classList.remove('opacity-0', 'translate-y-10');
                divRefs.current[0].classList.add('animate-fade-in');
            }
        }

        if (flagRef.current) {
            const flagRect = flagRef.current.getBoundingClientRect().top;
            if (flagRect < 300) {
                if (divRefs.current) {
                    divRefs.current[1]?.classList.remove('opacity-0');
                    divRefs.current[1]?.classList.add('animate-fade-in');
                    divRefs.current[2]?.classList.remove('opacity-0');
                    divRefs.current[2]?.classList.add('animate-fade-in');
                }
            }
        }
    }

    useLayoutEffect(() => {
        showBanner();

        window.addEventListener('scroll', showBanner, { passive: true })

        return () => {
            window.removeEventListener('scroll', showBanner);
        }
    }, [])

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <div ref={(el) => { divRefs.current[0] = el; }} className=" translate-y-10 opacity-0 duration-1000 ease-in-out">
                    <p className="font-thin text-base">Whats new?</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg sm:text-2xl font-bold text-[var(--dblue)]">Take A Look At Some Of Our Pets</h1>
                        <div className="hidden sm:block"><Btn type="more" load={false}>View More</Btn></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 py-7">
                        {arrImg.map((arr) => (
                            <div key={arr.id} className="p-2 bg-white rounded-xl shadow-md">
                                <Link href={`/pets/${arr.name}`}>
                                    <div onMouseEnter={() => hoverImg(arr.hoverSrc, arr.id)} onMouseLeave={() => leaveImg(arr.id)}>
                                        <Image src={img[arr.id]} alt='img' width={160} height={160} className="w-full object-cover rounded-xl"></Image>
                                    </div>
                                    <div className="p-2 mt-2 space-y-1">
                                        <div className="text-sm sm:text-base font-bold">{arr.name}</div>
                                        <div className="sm:flex items-center sm:space-x-1">
                                            <div className="text-xs font-medium text-gray-500">Gene: <span className="font-bold">{arr.gene}</span></div>
                                            <span className="hidden sm:block">&sdot;</span>
                                            <div className="text-xs pt-1 sm:pt-0 font-medium text-gray-500">Age: <span className="font-bold">{arr.age}</span></div>
                                        </div>
                                        <div className="text-sm font-bold">{arr.price} VND</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="block sm:hidden col-span-2"><Btn type="more" load={false}>View More</Btn></div>
                    </div>
                </div>

                <div ref={flagRef} className="relative overflow-hidden grid sm:grid-cols-2 bg-[var(--dblue)] sm:gap-4 rounded-2xl mt-12 z-10">
                    <div ref={(el) => { divRefs.current[1] = el; }} className="sm:px-5 sm:pt-7 flex justify-center order-2 sm:order-1 opacity-0" style={{ '--fade-in': `${2}s` } as React.CSSProperties}>
                        <Image src='/bg-banner1.svg' alt="banner" width={160} height={160} className="object-cover w-auto h-[342px]"></Image>
                    </div>
                    <div ref={(el) => { divRefs.current[2] = el; }} className="text-center sm:text-right mx-auto my-auto order-1 sm:order-2 opacity-0" style={{ '--fade-in': `${2}s` } as React.CSSProperties}>
                        <div className="sm:max-w-[403px] px-4 py-8 sm:px-0 sm:py-0">
                            <h1 className="font-extrabold text-4xl sm:text-5xl text-[var(--dblue)]">
                                One More Friend
                                <div className="font-bold text-2xl sm:text-4xl">Thousands More Fun!</div>
                            </h1>
                            <p className="text-xs font-medium mt-2">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ diffrent pets than can meet your need!</p>
                            <div className="flex gap-4 sm:gap-5 mt-6 justify-end">
                                <Btn type="view" load={false}>View Intro</Btn>
                                <Btn type="explore" load={false}>Explore Now</Btn>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[780px] h-[635px] rounded-[99px] rotate-[12deg] sm:rotate-[25deg] bg-[var(--myellow-40)] translate-x-[-320px] sm:translate-x-[650px] translate-y-[-355px] sm:translate-y-[-250px] -z-10"></div>
                    <div className="absolute w-[790px] h-[790px] rounded-[99px] rotate-[28deg] bg-[var(--dblue-80)] translate-x-[-200px] sm:translate-x-[-170px] translate-y-[500px] sm:translate-y-[140px] -z-10"></div>
                </div>
            </div>
        </>
    );
}