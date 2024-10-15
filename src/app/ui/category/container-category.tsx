'use client';

import MainCategory from "@/app/ui/category/main-container";
import SideNavCategory from "@/app/ui/category/sidenav-container";
import { useState } from "react";

interface Filter {
    gene: string,
    color: string,
    min: string,
    max: string,
}

export default function ContainerCategory() {
    const [gene, setGene] = useState('');
    const [color, setColor] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const onSendData = ((data: Filter) => {
        setGene(data.gene);
        setColor(data.color);
        setMin(data.min);
        setMax(data.max);
    })
    
    return (
        <>
            <div className="hidden sm:block select-none">
                <SideNavCategory onSendData={onSendData}></SideNavCategory>
            </div>
            <div className="col-span-3">
                <MainCategory gene={gene} color={color} min={min} max={max}></MainCategory>
            </div>
        </>
    );
}