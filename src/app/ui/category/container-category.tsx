'use client';

import MainCategory from "@/app/ui/category/main-container";
import SideNavCategory from "@/app/ui/category/sidenav-container";
import { useState } from "react";

interface Filter {
    gene: string,
    color: string,
}

export default function ContainerCategory() {
    const [gene, setGene] = useState('');
    const [color, setColor] = useState('');

    const onSendData = ((data: Filter) => {
        setGene(data.gene);
        setColor(data.color)
    })
    
    return (
        <>
            <div className="hidden sm:block select-none">
                <SideNavCategory onSendData={onSendData}></SideNavCategory>
            </div>
            <div className="col-span-3">
                <MainCategory gene={gene} color={color}></MainCategory>
            </div>
        </>
    );
}