'use client';

import Btn from "@/app/ui/components/button";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

export default function HomePets() {
    const titleRefs1 = useRef<(HTMLSpanElement | null)[]>([]);
    const titleRefs2 = useRef<(HTMLSpanElement | null)[]>([]);
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titleArray1 = ['O', 'n', 'e', ' ', 'M', 'o', 'r', 'e', ' ', 'F', 'r', 'i', 'e', 'n', 'd', ' '];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titleArray2 = ['T', 'h', 'o', 'u', 's', 'a', 'n', 'd', 's', ' ', 'M', 'o', 'r', 'e', ' ', 'F', 'u', 'n', '!'];

    const handleClick = () => {
        console.log('a')
    }

    const showTextTitle = useCallback(() => {
        titleArray1.forEach((_, id) => {
            setTimeout(() => {
                if (titleRefs1.current[id]) {
                    titleRefs1.current[id].classList.remove('opacity-0');
                    titleRefs1.current[id].classList.add('animate-fade-in');
                }
            }, 130 * id)
        })

        titleArray2.forEach((_, index) => {
            setTimeout(() => {
                if (titleRefs2.current[index]) {
                    titleRefs2.current[index].classList.remove('opacity-0');
                    titleRefs2.current[index].classList.add('animate-fade-in');
                }
            }, 100 * index + 130 * titleArray1.length)
        })

        setTimeout(() => {
            if (divRefs.current[6]) {
                divRefs.current[6].classList.remove('opacity-0');
                divRefs.current[6].classList.add('animate-fade-in');
            }
        }, 1000)
    }, [titleArray1, titleArray2]);

    const animateDiv = () => {
        if (divRefs.current) {
            divRefs.current[5]?.classList.add('translate-y-[600px]');
            divRefs.current[0]?.classList.add('translate-y-[600px]');
            divRefs.current[1]?.classList.add('translate-y-[600px]');
            divRefs.current[2]?.classList.add('translate-y-[600px]');
            divRefs.current[3]?.classList.add('translate-y-[600px]');
            divRefs.current[4]?.classList.add('translate-y-[600px]');


            setTimeout(() => {
                divRefs.current[0]?.classList.remove('translate-y-[600px]');
                divRefs.current[0]?.classList.add('bottom-0', 'left-0', 'translate-y-[250px]', 'rotate-[24deg]');

                divRefs.current[5]?.classList.remove('translate-y-[600px]', 'opacity-0');
            }, 800)

            setTimeout(() => {
                divRefs.current[1]?.classList.remove('translate-y-[600px]');
                divRefs.current[1]?.classList.add('bottom-0', '-left-14', 'translate-y-[300px]', 'rotate-[9deg]');

                divRefs.current[2]?.classList.remove('translate-y-[600px]');
                divRefs.current[2]?.classList.add('bottom-0', 'left-10', 'translate-y-[-500px]', 'rotate-[24deg]');

                divRefs.current[3]?.classList.remove('translate-y-[600px]');
                divRefs.current[3]?.classList.add('bottom-0', 'left-0', 'translate-y-[-425px]', 'rotate-[43deg]');

                divRefs.current[4]?.classList.remove('translate-y-[600px]');
                divRefs.current[4]?.classList.add('bottom-0', 'left-0', 'translate-y-[-430px]', 'rotate-[-23deg]');
            }, 1000)
        }
    }

    useEffect(() => {
        showTextTitle();
        animateDiv();
    }, [showTextTitle])

    return (
        <>
            <div className="absolute w-[635px] h-[635px] rounded-[99px] bg-[var(--yellow)] translate-x-[-220px] sm:translate-x-[-250px] translate-y-[-740px] sm:translate-y-[-680px] rotate-[25deg]">
            </div>

            <div className="overflow-hidden relative px-2 sm:px-0">
                <div className="mx-auto max-w-7xl grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-5 my-auto z-10">
                        <div className="relative">
                            <h1 className="text-4xl sm:text-6xl text-[var(--dblue)] font-extrabold">
                                {titleArray1.map((t, index) => (
                                    <span ref={(el) => { titleRefs1.current[index] = el; }} key={index} className="opacity-0">{t}</span>
                                ))}
                                <div>
                                    {titleArray2.map((t, index) => (
                                        <span ref={(el) => { titleRefs2.current[index] = el; }} key={index} className="text-3xl sm:text-5xl opacity-0 font-bold">{t}</span>
                                    ))}
                                </div>
                            </h1>
                            <div className="absolute w-[68px] h-[68px] rounded-[20px] rotate-[20deg] bg-[var(--yellow)] -top-1 -left-4 -z-10"></div>
                        </div>
                        <div ref={(el) => { divRefs.current[6] = el; }} className="opacity-0" style={{ '--fade-in': `${2}s` } as React.CSSProperties}>
                            <p className="mt-10 text-xs sm:text-base">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ diffrent pets than can meet your need!</p>
                            <div className="flex gap-5 mt-10">
                                <Btn type="view" onClick={handleClick} load={false}>View Intro</Btn>
                                <Btn type="explore" onClick={handleClick} load={false}>Explore Now</Btn>
                            </div>
                        </div>
                    </div>
                    <div className="relative sm:col-start-7 sm:col-end-12 z-10  pl-4 sm:pl-0">
                        <div ref={(el) => { divRefs.current[5] = el; }} className="duration-500  opacity-0">
                            <Image src='/bg.png' alt='bg' width={160} height={160} className="w-full h-[624px] object-cover"></Image>
                        </div>
                        <div ref={(el) => { divRefs.current[0] = el; }} className="absolute w-[635px] h-[635px] rounded-[99px] bg-[var(--yellow)] duration-500 -z-10">
                        </div>
                        <div ref={(el) => { divRefs.current[1] = el; }} className="absolute w-[635px] h-[635px] rounded-[99px] bg-[var(--blue)] duration-500 -z-20">
                        </div>
                        <div ref={(el) => { divRefs.current[2] = el; }} className="absolute w-[15px] h-[15px] rounded-sm bg-[var(--yellow)] duration-500"></div>
                        <div ref={(el) => { divRefs.current[3] = el; }} className="absolute w-[22px] h-[22px] rounded-md bg-[var(--blue)] duration-500 "></div>
                        <div ref={(el) => { divRefs.current[4] = el; }} className="absolute w-[28px] h-[28px] rounded-md bg-[var(--yellow)] duration-500 -z-10"></div>
                    </div>

                    <div className="absolute bottom-0 w-[635px] h-[635px] rounded-[99px] bg-[var(--yellow)] translate-x-[-150px] translate-y-[650px] rotate-[56deg] z-0">
                    </div>
                </div>
            </div>
        </>
    );
}