'use client';

import Btn from "@/app/ui/components/button";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

export default function HeaderCategory() {
    const titleRefs1 = useRef<(HTMLSpanElement | null)[]>([]);
    const titleRefs2 = useRef<(HTMLSpanElement | null)[]>([]);
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titleArray1 = ['O', 'n', 'e', ' ', 'M', 'o', 'r', 'e', ' ', 'F', 'r', 'i', 'e', 'n', 'd'];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titleArray2 = ['T', 'h', 'o', 'u', 's', 'a', 'n', 'd', 's', ' ', 'M', 'o', 'r', 'e', ' ', 'F', 'u', 'n', '!'];

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

    useEffect(() => {
        showTextTitle();
    }, [showTextTitle])

    return (
        <>
            <div className="flex gap-2 text-sm text-gray-500 font-medium my-3">
                <p>Home</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15" stroke="#667479" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Dog</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15" stroke="#667479" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Small Dog</p>
            </div>

            <div className="relative overflow-hidden  rounded-3xl bg-[var(--linear)] pt-16 z-10">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-7 gap-8 px-4 sm:px-0">
                    <div className="relative sm:col-span-4 order-2 sm:order-1">
                        <div className="sm:absolute bottom-0 w-full">
                            <Image src='/bg-category.svg' alt="img" width={160} height={160} className="object-cover w-full"></Image>
                        </div>
                    </div>
                    <div className="sm:col-span-3 my-auto z-10 flex flex-col order-1 sm:order-2 sm:items-end sm:text-end sm:pr-12">
                        <div className="relative">
                            <h1 className="text-4xl sm:text-5xl text-[var(--dblue)] sm:text-white font-extrabold">
                                {titleArray1.map((t, index) => (
                                    <span ref={(el) => { titleRefs1.current[index] = el; }} key={index} className="opacity-0">{t}</span>
                                ))}
                                <div>
                                    {titleArray2.map((t, index) => (
                                        <span ref={(el) => { titleRefs2.current[index] = el; }} key={index} className="text-3xl sm:text-4xl opacity-0 font-bold">{t}</span>
                                    ))}
                                </div>
                            </h1>
                        </div>
                        <div ref={(el) => { divRefs.current[6] = el; }} className="opacity-0 text-[var(--dblue)] sm:text-white" style={{ '--fade-in': `${2}s` } as React.CSSProperties}>
                            <div className="mt-4 sm:mt-10 max-w-sm text-xs">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ diffrent pets than can meet your need!</div>
                            <div className="flex justify-end gap-5 mt-10 sm:mb-16">
                                <Btn type="view-cate" load={false}>View Intro</Btn>
                                <Btn type="explore-cate" load={false}>Explore Now</Btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[817px] h-[817px] rounded-[99px] rotate-[-175deg] sm:rotate-[160deg] bg-[var(--dblue)] translate-x-[-150px] sm:translate-x-[600px] translate-y-[-80px] sm:translate-y-[-400px] -z-10"></div>
            </div>
        </>
    );
}