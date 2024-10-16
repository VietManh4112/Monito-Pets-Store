'use client';

import Btn from "@/app/ui/components/button";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function ProductsPets() {
    const arrImg = [{
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', id: 0
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', id: 1
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', id: 2
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', id: 3
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', id: 4
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', id: 5
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/fbB4a0CWRe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Ql6rFjgbV6.webp', name: 'M0231 - Pomeranian White', gene: 'Female', age: '02 months', price: '6.500.000', id: 6
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/hqmfPjLDVr.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/qm1AbAA1cN.webp', name: 'M0512 - Poodle Tiny Dairy Cow', gene: 'Male', age: '02 months', price: '5.000.000', id: 7
    }]
    const [img, setImg] = useState(arrImg.map(img => img.src));
    const gifRefs = useRef<(HTMLDivElement | null)[]>([]);
    const divRefs = useRef<(HTMLDivElement | null)[]>([]);
    const flagRef = useRef<HTMLDivElement>(null);

    const addProgess = (index: number) => {
        if (gifRefs.current[index]) {
            gifRefs.current[index].classList.remove('w-0');
            gifRefs.current[index].classList.add('w-full');
        }
    }

    const deleteProgess = (index: number) => {
        if (gifRefs.current[index]) {
            gifRefs.current[index].classList.remove('w-full');
            gifRefs.current[index].classList.add('w-0');
        }
    }

    const hoverImg = (hoverSrc: string, index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? hoverSrc : src)));
    }

    const leaveImg = (index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? arrImg[index].src : src)));
    }

    const checkFlag = () => {
        if (divRefs.current[0]) {
            const divRect = divRefs.current[0].getBoundingClientRect().top;
            if (divRect < 600) {
                divRefs.current[0].classList.remove('opacity-0', 'translate-y-10');
                divRefs.current[0].classList.add('animate-fade-in');
            }
        }

        if (flagRef.current) {
            const flagRect = flagRef.current.getBoundingClientRect().top;
            if (flagRect < 400) {
                if (divRefs.current) {
                    divRefs.current[1]?.classList.remove('opacity-0');
                    divRefs.current[1]?.classList.add('animate-fade-in');
                    setTimeout(() => {
                        divRefs.current[1]?.classList.add('animate-marqueeX');
                    }, 500)
                }
            }
            if (flagRect < 200) {
                if (divRefs.current) {
                    divRefs.current[2]?.classList.remove('opacity-0');
                    divRefs.current[2]?.classList.add('animate-fade-in');
                    divRefs.current[3]?.classList.remove('opacity-0');
                    divRefs.current[3]?.classList.add('animate-fade-in');
                }
            }
        }
    }

    useLayoutEffect(() => {
        checkFlag();

        window.addEventListener('scroll', checkFlag, { passive: true });

        return () => {
            window.removeEventListener('scroll', checkFlag);
        }
    }, [])

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <div ref={(el) => { divRefs.current[0] = el; }} className="opacity-0 translate-y-10 duration-1000 ease-in-out">
                    <p className="font-thin text-base">Hard to choose right products for your pets?</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg sm:text-2xl font-bold text-[var(--dblue)]">Our Products</h1>
                        <div className="hidden sm:block"><Btn type="view" load={false}>View More</Btn></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 py-7">
                        {arrImg.map((arr) => (
                            <div key={arr.id} className="p-2 bg-white rounded-xl shadow-md" onMouseEnter={() => addProgess(arr.id)} onMouseLeave={() => deleteProgess(arr.id)}>
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
                                <div className="relative overflow-hidden z-10">
                                    <div ref={(el) => { gifRefs.current[arr.id] = el; }} className="absolute rounded-lg bg-[var(--myellow-40)] h-full w-0 duration-500 ease-in-out -z-10"></div>
                                    <div className="flex space-x-1 p-2 items-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.7682 10.1406L5.66663 9.44918C5.72523 9.42578 5.79554 9.41406 5.86581 9.41406H18.0299C18.358 9.41406 18.6158 9.67184 18.6158 10V18.2422C18.6158 19.2148 17.8307 20 16.858 20H5.13925C4.16656 20 3.38144 19.2148 3.38144 18.2422V10.6914C3.38144 10.4453 3.53382 10.2227 3.7682 10.1406Z" fill="#FC1A40" />
                                            <path d="M3.38144 10.6914V18.2422C3.38144 19.2148 4.16656 20 5.13925 20H10.9986V9.41406H5.86581C5.7955 9.41406 5.72519 9.42578 5.66663 9.44918L3.7682 10.1406C3.53382 10.2227 3.38144 10.4453 3.38144 10.6914Z" fill="#C60034" />
                                            <path d="M3.59238 3.81984C3.79156 3.01124 4.38925 2.37847 5.19785 2.12062C5.99472 1.87449 6.85023 2.05031 7.47129 2.61277L8.8307 3.80812L9.10019 2.01519C9.2291 1.19488 9.75644 0.50343 10.5416 0.175344C10.6939 0.116712 10.8462 0.0698366 10.9986 0.0463991C11.6431 -0.0825072 12.3111 0.0581178 12.8502 0.456594C13.565 0.972219 13.9283 1.83941 13.8111 2.70656C13.6822 3.57374 13.0962 4.31202 12.2643 4.60499L10.9986 5.06202L9.44 5.63624C9.42828 5.63624 9.42828 5.63624 9.42828 5.63624L6.72125 6.6323C6.45175 6.72609 6.1705 6.773 5.90097 6.773C5.32668 6.773 4.76421 6.56199 4.3189 6.16359C3.66269 5.57765 3.38144 4.67527 3.59238 3.81984Z" fill="#FE9923" />
                                            <path d="M4.31894 6.16361C4.76425 6.56201 5.32675 6.77303 5.90101 6.77303C6.1705 6.77303 6.45175 6.72611 6.72128 6.63232L9.42831 5.63627C9.42831 5.63627 9.42831 5.63627 9.44003 5.63627L10.9986 5.06205V0.0463867C10.8463 0.0698633 10.6939 0.116699 10.5416 0.175332C9.75648 0.503418 9.2291 1.19486 9.10023 2.01518L8.83074 3.80811L7.47132 2.61275C6.85027 2.05029 5.99476 1.87447 5.19788 2.12061C4.38929 2.37846 3.79163 3.01123 3.59242 3.81982C3.38144 4.67529 3.66269 5.57768 4.31894 6.16361Z" fill="#FE8821" />
                                            <path d="M1.37755 9.1445L2.17443 11.3476C2.26821 11.582 2.49087 11.7226 2.72524 11.7226C2.79556 11.7226 2.86587 11.7109 2.92442 11.6875L8.98306 9.48439L9.5338 7.66798L10.9986 7.99607L12.2877 8.28904L18.3463 6.08591C18.651 5.96876 18.8033 5.62888 18.6979 5.33591L17.8893 3.13286C17.7369 2.68755 17.4088 2.33591 16.9869 2.13673C16.565 1.93755 16.0846 1.91408 15.6393 2.07814L10.9986 3.76564L10.6822 3.88279C10.6822 3.88279 9.41657 6.1797 9.38138 6.1797C9.3579 6.1797 8.85403 5.89845 8.36185 5.62888C7.86978 5.35935 7.37755 5.07814 7.37755 5.07814L2.43228 6.88279C1.98696 7.04685 1.6354 7.37501 1.43622 7.79689C1.23693 8.21872 1.21353 8.69923 1.37755 9.1445Z" fill="#FF3E75" />
                                            <path d="M1.37753 9.14449L2.17441 11.3476C2.2682 11.582 2.49085 11.7226 2.72523 11.7226C2.79554 11.7226 2.86585 11.7109 2.92441 11.6875L8.98304 9.48438L9.53378 7.66797L10.9986 7.99605V3.76562L10.6822 3.88277C10.6822 3.88277 9.4166 6.17969 9.3814 6.17969C9.35792 6.17969 8.85406 5.89844 8.36187 5.62887C7.86976 5.35934 7.37753 5.07812 7.37753 5.07812L2.43226 6.88277C1.98695 7.04684 1.63538 7.375 1.4362 7.79688C1.23691 8.21871 1.21351 8.69922 1.37753 9.14449Z" fill="#FC1A40" />
                                            <path d="M12.7564 9.41406V20H9.24081V9.41406H12.7564Z" fill="#FCBF29" />
                                            <path d="M10.6822 3.88281L10.9987 4.75L12.2877 8.2891L10.9987 8.75789L9.53382 9.28523L8.98308 9.48441L7.37753 5.07816L10.6822 3.88281Z" fill="#FCBF29" />
                                            <path d="M9.24066 9.41406H10.9985V20H9.24066V9.41406Z" fill="#FE9923" />
                                            <path d="M7.37753 5.07816L8.98304 9.48441L9.53378 9.2852L10.9986 8.75785V4.75L10.6822 3.88281L7.37753 5.07816Z" fill="#FE9923" />
                                        </svg>

                                        <span>&sdot;</span>
                                        <span className="font-bold text-sm">Free Toy & Free Shaker</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="block sm:hidden col-span-2"><Btn type="more" load={false}>View More</Btn></div>
                    </div>
                </div>

                <div ref={flagRef} className="mx-auto max-w-7xl pt-10 overflow-hidden">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-end">
                            <p className="text-base font-medium text-black">Proud to be part of</p>
                            <h2 className="font-bold text-2xl text-[var(--dblue)]">Pet Sellers</h2>
                        </div>
                        <Btn type="more" load={false}>View all our sellers</Btn>
                    </div>

                    <div className="relative">
                        <div ref={(el) => { divRefs.current[1] = el; }} className="mt-4 flex relative gap-5 opacity-0">
                            {Array.from({ length: 14 }).map((_, id) => (
                                <div key={id} className="flex-none">
                                    <Image src={`/sl${id % 7 + 1}.svg`} alt="seller" width={162.8} height={165} className="object-cover"></Image>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 bg-gradient-to-r w-10 h-full from-gray-50"></div>
                        <div className="absolute top-0 right-0 bg-gradient-to-l w-10 h-full from-gray-50"></div>
                    </div>
                </div>

                <div className="relative overflow-hidden grid sm:grid-cols-2 bg-[#FFB775] sm:gap-4 rounded-2xl mt-12 z-10">
                    <div ref={(el) => { divRefs.current[2] = el; }} className="opacity-0 text-left mx-auto my-auto" style={{ '--fade-in': `${3}s` } as React.CSSProperties}>
                        <div className="max-w-2xl">
                            <h1 className="flex font-semibold text-5xl text-[var(--dblue)]">
                                Adoption&nbsp;
                                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.3146 8.51235V8.56143C22.3139 9.5215 22.4822 10.4745 22.8121 11.3785L22.7927 11.3199C23.1133 12.2007 23.6581 12.9867 24.3754 13.6032L24.3818 13.608C25.0618 14.2081 25.9662 14.5739 26.9578 14.5739H27.0353H27.0321C28.3403 14.5666 29.5932 14.0553 30.5205 13.1504C31.5335 12.2387 32.3216 11.1129 32.8251 9.85831L32.8461 9.79813C33.3341 8.61246 33.5911 7.34756 33.6036 6.06903V6.01361C33.6036 5.02552 33.4275 4.07701 33.1061 3.19659L33.1255 3.25518C32.8049 2.37433 32.2601 1.58836 31.5428 0.971801L31.5363 0.96705C30.8065 0.323216 29.853 -0.0223897 28.8716 0.00112587H28.8764C27.5678 0.00661014 26.3142 0.518173 25.388 1.42468C24.3851 2.33632 23.6036 3.45697 23.1011 4.70407L23.0801 4.76424C22.6134 5.87268 22.3372 7.16005 22.3227 8.5076V8.51235H22.3146ZM30.9469 20.4645L30.9452 20.5975C30.9433 21.7882 31.3186 22.9502 32.0192 23.9228L32.0063 23.9038C32.3258 24.3551 32.7519 24.7238 33.2483 24.9786C33.7447 25.2334 34.2965 25.3666 34.8568 25.3669L35.0167 25.3638H35.0086C36.3324 25.3495 37.6047 24.8593 38.5843 23.9861L38.5794 23.9909C39.6215 23.1158 40.4643 22.0357 41.0533 20.8207C41.6423 19.6057 41.9643 18.2829 41.9984 16.9381V16.9254L42 16.7955C42 15.5525 41.6027 14.3997 40.926 13.4544L40.9389 13.4734C40.6065 12.997 40.1556 12.6116 39.6287 12.3539C39.1019 12.0962 38.5167 11.9746 37.9286 12.0008H37.9366C36.6129 12.015 35.3405 12.5053 34.361 13.3784L34.3658 13.3736C33.3222 14.2539 32.4786 15.3392 31.8897 16.5593C31.3007 17.7794 30.9795 19.1071 30.9469 20.4566V20.4676V20.4645ZM20.9968 19.7962C18.6389 19.9224 16.3807 20.7703 14.54 22.2206L14.5626 22.2031C12.3094 23.7721 10.368 25.732 8.83413 27.986L8.78245 28.0668C7.39997 29.8879 6.59202 32.0662 6.45845 34.3326L6.45684 34.3643L6.45361 34.502C6.45361 35.1418 6.61349 35.7467 6.89612 36.2771L6.88643 36.2565C7.1576 36.743 7.58112 37.131 8.09446 37.3634L8.11061 37.3697C8.58058 37.5898 9.12806 37.7624 9.69978 37.859L9.73854 37.8638C10.3347 37.956 10.9374 38.0015 11.5409 38H11.662H11.6556C13.3196 37.892 14.9521 37.503 16.4812 36.8504L16.3875 36.8868C17.8316 36.2694 19.3711 35.8942 20.9419 35.7768L20.9919 35.7736C22.7733 35.9034 24.4238 36.2961 25.9581 36.9121L25.8499 36.8741C27.4497 37.5041 29.1433 37.8753 30.8645 37.973L30.9097 37.9746C33.9955 37.9767 35.5383 36.7738 35.5383 34.3659C35.4684 32.6786 34.9735 31.0346 34.0978 29.5806L34.1252 29.6281C33.1804 27.8858 31.9933 26.2807 30.598 24.8586L30.6045 24.865C29.2407 23.4684 27.6811 22.2693 25.9726 21.3037L25.8725 21.2515C24.4133 20.3588 22.7413 19.856 21.0226 19.7931H21.0032L20.9968 19.7962ZM14.9647 14.5755H15.039C15.9914 14.5765 16.9104 14.2312 17.6182 13.6064L17.6149 13.6096C18.3265 13.0021 18.8689 12.2273 19.1912 11.3579L19.2041 11.3199C19.5245 10.4343 19.6868 9.50111 19.6838 8.56143V8.50918V8.51235C19.6692 7.15847 19.3931 5.87268 18.9005 4.69457L18.9263 4.76424C18.4259 3.49609 17.6385 2.35584 16.6233 1.42943L16.6169 1.42468C15.6904 0.519718 14.4378 0.008873 13.1301 0.00270936H13.0542C12.0625 0.00270936 11.1581 0.370077 10.475 0.971801L10.4782 0.968634C9.77084 1.57511 9.22496 2.34468 8.90196 3.22035L8.88904 3.25835C8.58057 4.08493 8.40292 5.03977 8.40292 6.0342V6.06587V6.06428C8.41691 7.36974 8.68267 8.66081 9.1862 9.86939L9.16037 9.79972C9.66119 11.0748 10.4547 12.2197 11.4795 13.1456L11.486 13.152C12.4137 14.0546 13.6658 14.5641 14.9728 14.5708H14.9744L14.9647 14.5755ZM4.06339 12.0039L3.91481 12.0008C2.73423 12.0008 1.69255 12.5803 1.06916 13.4655L1.06108 13.4766C0.36726 14.4512 -0.00325012 15.6118 1.90735e-05 16.8003L0.00163651 16.9365V16.9301C0.0334435 18.2741 0.353107 19.5966 0.939892 20.8116C1.52668 22.0267 2.36747 23.1071 3.4077 23.983L3.42061 23.9941C4.39863 24.8639 5.6678 25.3523 6.98817 25.3669H6.99141C7.57462 25.3926 8.15499 25.2733 8.67851 25.0199C9.20203 24.7666 9.65169 24.3876 9.98563 23.9181L9.99371 23.907C10.7152 22.8998 11.0867 21.6916 11.0532 20.4613V20.4676C11.0222 19.1189 10.7031 17.7915 10.1164 16.5712C9.52974 15.3509 8.68852 14.2648 7.6471 13.3831L7.63418 13.3721C6.65726 12.5049 5.39077 12.0178 4.07308 12.0023H4.06985L4.06339 12.0039Z" fill="#003459" />
                                </svg>
                            </h1>
                            <h2 className="text-[var(--dblue)] font-bold text-4xl mt-2">We Need Help. So Do They.</h2>
                            <div className="text-xs font-medium mt-4">
                                <p>Adopt a pet and give it a home,</p>
                                <p>it will be love you back unconditionaly.</p>
                            </div>
                            <div className="flex gap-5 mt-8">
                                <Btn type="explore" load={false}>Explore Now</Btn>
                                <Btn type="view" load={false}>View Intro</Btn>
                            </div>
                        </div>
                    </div>
                    <div ref={(el) => { divRefs.current[3] = el; }} className="opacity-0 sm:px-5 flex justify-center order-2 sm:order-1" style={{ '--fade-in': `${3}s` } as React.CSSProperties}>
                        <Image src='/bg-banner2.svg' alt="banner" width={160} height={160} className="object-cover w-full h-[360px]"></Image>
                    </div>
                    <div className="absolute w-[780px] h-[635px] rounded-[99px] rotate-[155deg] bg-[var(--myellow-40)] translate-x-[-180px] translate-y-[-230px] -z-10"></div>
                    <div className="absolute w-[790px] h-[790px] rounded-[99px] rotate-[152deg] bg-[var(--linear)] opacity-30 translate-x-[650px] translate-y-[150px] -z-10"></div>
                </div>
            </div>
        </>
    );
}