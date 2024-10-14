'use client';

import Btn from "@/app/ui/components/button";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Pet {
    src: string;
    hoverSrc: string;
    name: string;
    gene: string;
    age: string;
    price: string;
    id: number;
    color: string;
}

export default function MainCategory({ gene, color }: { gene: string, color: string }) {
    const arrImg = [{
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 0
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 1
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'Black', id: 2
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Black & White', id: 3
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'Silver', id: 4
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Tan', id: 5
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 6
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 7
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'Black', id: 8
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Black & White', id: 9
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'Silver', id: 10
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Tan', id: 11
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 12
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 13
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'red', id: 14
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Apricot', id: 15
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'red', id: 16
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Apricot', id: 17
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'red', id: 18
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 19
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'red', id: 20
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Apricot', id: 21
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'red', id: 22
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Apricot', id: 23
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 24
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 25
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'Black', id: 26
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Black & White', id: 27
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'Silver', id: 28
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Tan', id: 29
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 30
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 31
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'Black', id: 32
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Black & White', id: 33
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'Silver', id: 34
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Tan', id: 35
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'Red', id: 36
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 37
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'red', id: 38
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Apricot', id: 39
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'red', id: 40
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Apricot', id: 41
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/i0Mc6XGDy9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/1b8kJg95Pe.webp', name: 'M0231 - Pomeranian', gene: 'Male', age: '02 months', price: '6.900.000', color: 'red', id: 42
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/Khn5szgFs9.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/2tiRYWaEHt.webp', name: 'M052 - Poodle Tiny Yellow', gene: 'Female', age: '02 months', price: '3.900.000', color: 'Apricot', id: 43
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/kiUO9dojJP.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/6Oz1Zg5p59.webp', name: 'M0102 - Poodle Tiny Sepia', gene: 'Male', age: '02 months', price: '4.000.000', color: 'red', id: 44
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/mmK9ONN1d4.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/E1ttxT2auD.webp', name: 'M0512 - Alaskan Malamute Grey', gene: 'Male', age: '02 months', price: '8.900.000', color: 'Apricot', id: 45
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/NO8UR4w8J3.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/eJ76fg8xAl.webp', name: 'M0231 - Pembroke Corgi Cream', gene: 'Male', age: '02 months', price: '7.900.000', color: 'red', id: 46
    }, {
        src: 'https://attic.sh/_static/ai/dreamscape/hero/OFxwywiBcU.webp', hoverSrc: 'https://attic.sh/_static/ai/dreamscape/hero/EWXw15CnkD.webp', name: 'M0502 - Pembroke Corgi Tricolor', gene: 'Female', age: '02 months', price: '9.000.000', color: 'Apricot', id: 47
    }]
    const arrImgRef = useRef(arrImg);
    const [img, setImg] = useState(arrImgRef.current.map(img => img.src));
    const [page, setPage] = useState(1);
    const itemsPerPage = useRef(6);
    const [arrFilter, setArrFilter] = useState<Pet[]>([]);
    const [imgPage, setImgPage] = useState<Pet[]>([]);
    const maxPage = Math.ceil(arrFilter.length / itemsPerPage.current);
    const [pages, setPages] = useState<number[]>([]);
    const pageRange = useRef(3);

    const hoverImg = (hoverSrc: string, index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? hoverSrc : src)));
    }

    const leaveImg = (index: number) => {
        setImg(prev => prev.map((src, i) => (i === index ? arrImgRef.current[index].src : src)));
    }

    const handlePrev = () => {
        setPage(page => page - 1);
    }

    const handlePage = (index: number) => {
        setPage(index);
    }

    const handleNext = () => {
        setPage(page => page + 1);
    }

    //tinh toan hien thi page
    const showPages = useCallback(() => {
        let start = 2;
        let end = 1;

        if (maxPage <= pageRange.current) {
            end = maxPage;
        } else {
            const pad = Math.ceil(pageRange.current / 2);

            if (page - pad <= 0) {
                start = 3;
                end = start + pageRange.current - 1;
            } else {
                end = page + pad;
                if (end >= maxPage) {
                    end = maxPage;
                }
                start = end - pageRange.current + 1;
            }
        }

        const newPages = [];
        if (start > 3) {
            newPages.push(0);
        }

        for (let i = start - 1; i < end; i++) {
            newPages.push(i);
        }

        if (end < maxPage) {
            newPages.push(0);
        }
        setPages(newPages)
    }, [maxPage, page])

    //ham tra ve mang co so luong anh pets hien thi trong 1 page.
    const totalPets = useCallback((arrF: Pet[]) => {
        const start = (page - 1) * itemsPerPage.current;
        const end = start + itemsPerPage.current;
        const imgPage = arrF.slice(start, end);
        return imgPage;
    }, [page])

    // ham loc mang, tra ve mang moi theo yeu cau.
    const filterGenePets = useMemo(() => {
        if (gene != '') {
            const arrF = arrImgRef.current.filter(items => gene.includes(items.gene));
            return arrF;
        }
        return arrImgRef.current;
    }, [gene])

    const filterColorPets = useCallback((arrFG: Pet[]) => {
        if (color != '') {
            const arrF = arrFG.filter(items => color.includes(items.color));
            return arrF;
        }
        return arrFG;
    }, [color])

    useEffect(() => {
        const arrFG = filterGenePets;
        const arrF = filterColorPets(arrFG);
        setArrFilter(arrF);

        const imgP = totalPets(arrF);
        setImgPage(imgP);
    }, [filterGenePets, filterColorPets, totalPets])

    useEffect(() => {
        showPages();
    },[showPages])
    return (
        <>
            <div className="sm:hidden flex justify-between items-center pb-6">
                <div>
                    <Btn type="view" load={false}>Sort by:Popular</Btn>
                </div>
                <div className="flex gap-2 px-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6.33723V5.59998C20 5.03992 19.9996 4.75993 19.8906 4.54602C19.7948 4.35786 19.6425 4.20487 19.4544 4.10899C19.2405 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35786 4.10899 4.54602C4 4.75993 4 5.03992 4 5.59998V6.33723C4 6.58182 4 6.70417 4.02763 6.81925C4.05213 6.92129 4.09263 7.0188 4.14746 7.10828C4.20928 7.20916 4.29574 7.29562 4.46859 7.46846L4.46875 7.46863L9.53149 12.5314C9.70444 12.7043 9.79068 12.7908 9.85252 12.8917C9.90735 12.9812 9.94816 13.0787 9.97266 13.1808C10 13.2947 10 13.4156 10 13.6553V13.6627V18.4111C10 19.2683 10 19.697 10.1805 19.9551C10.3382 20.1805 10.5814 20.3311 10.8535 20.3713C11.1651 20.4173 11.5487 20.2256 12.3154 19.8423L13.1154 19.4423C13.4365 19.2817 13.5968 19.2014 13.7141 19.0817C13.8178 18.9758 13.897 18.8481 13.9453 18.708C14 18.5495 14 18.3701 14 18.0111V13.6627C14 13.4181 14 13.2959 14.0276 13.1808C14.0521 13.0787 14.0926 12.9812 14.1475 12.8917C14.2093 12.7908 14.2957 12.7044 14.4685 12.5316L14.4688 12.5314L19.5315 7.46863C19.7044 7.29568 19.7907 7.20919 19.8525 7.10828C19.9073 7.0188 19.9482 6.92129 19.9727 6.81925C20 6.70534 20 6.58431 20 6.34468V6.33723Z" stroke="#002A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Filter</h3>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h3 className="text-[var(--dblue)] font-bold text-2xl">Small Dog</h3>
                    <p className="ml-4 font-medium text-sm text-gray-500">{arrFilter.length} puppies</p>
                </div>
                <div className="hidden sm:block"><Btn type="view" load={false}>Sort by:Popular</Btn></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {imgPage.map((arr) => (
                    <div key={arr.id} className="p-2 bg-white rounded-xl shadow-md">
                        <div onMouseMove={() => hoverImg(arr.hoverSrc, arr.id)} onMouseLeave={() => leaveImg(arr.id)}>
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
                    </div>
                ))}
            </div>
            <div className={`${maxPage == 0 ? 'hidden' : ''} py-10 flex justify-center items-center gap-3 select-none`}>
                <div onClick={page != 1 ? handlePrev : undefined} className={`${page == 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 17L12 17M12 17L16 21M12 17L16 13" stroke="#002A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className={`${page == 1 ? 'bg-[var(--dblue)] text-white' : 'text-[var(--dblue)] hover:bg-gray-100'} ${maxPage <= 3 ? 'hidden' : ''} font-bold text-lg px-3 cursor-pointer  rounded-lg `} onClick={() => handlePage(1)}>1</div>
                {pages.map((pg, index) => (
                    <div key={index}>
                        {pg == 0 ? <div>...</div> : <div className={`${page == pg ? 'bg-[var(--dblue)] text-white' : 'text-[var(--dblue)] hover:bg-gray-100'} font-bold text-lg px-3 cursor-pointer  rounded-lg `} onClick={() => handlePage(pg)}>{pg}</div>}
                    </div>
                ))}
                <div className={`${page == maxPage ? 'bg-[var(--dblue)] text-white' : 'text-[var(--dblue)] hover:bg-gray-100'} ${maxPage == 4 ? 'hidden' : ''} font-bold text-lg px-3 cursor-pointer  rounded-lg `} onClick={() => handlePage(maxPage)}>{maxPage}</div>

                <div onClick={page != maxPage ? handleNext : undefined} className={`${page == maxPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17L22 17M22 17L18 21M22 17L18 13" stroke="#002A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`${maxPage == 0 ? '' : 'hidden'} flex justify-center items-center w-full h-5/6`}>
                Không có hàng phù hợp.
            </div>
        </>
    );
}