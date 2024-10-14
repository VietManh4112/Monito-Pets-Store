'use client';

import { useState } from "react";

export default function SideNavCategory({ onSendData }: { onSendData?: (data: { gene: string, color: string }) => void }) {
    const [gene, setGene] = useState('');
    const [color, setColor] = useState('');

    const checkGene = (value: string) => {
        if (value == gene) {
            setGene('');
            if (onSendData) {
                onSendData({ gene: '', color });
            }
        } else {
            setGene(value);
            if (onSendData) {
                onSendData({ gene: value, color });
            }
        }
    }

    const checkColor = (value: string) => {
        if (value == color) {
            setColor('');
            if (onSendData) {
                onSendData({ gene, color: ''});
            }
        } else {
            setColor(value);
            if (onSendData) {
                onSendData({ gene, color: value});
            }
        }
    }

    return (
        <>
            <h2 className="text-[var(--dblue)] font-bold text-2xl">Filter</h2>
            <div className="pt-4">
                <div className="pb-4 border-b">
                    <h3 className="font-bold">Gender</h3>
                    <label className="flex mt-2">
                        <input type="checkbox" checked={gene === 'Male'} value='Male' onChange={(e) => checkGene(e.target.value)}></input>
                        <p className="text-sm font-medium ml-2" >Male</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={gene === 'Female'} value='Female' onChange={(e) => checkGene(e.target.value)}></input>
                        <p className="text-sm font-medium ml-2">Female</p>
                    </label>
                </div>
                <div className="py-4 border-b">
                    <h3 className="font-bold">Color</h3>
                    <label className="flex mt-2">
                        <input type="checkbox" checked={color === 'Red'} value='Red' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Red</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={color === 'Apricot'} value='Apricot' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Apricot</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={color === 'Black'} value='Black' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Black</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={color === 'Black & White'} value='Black & White' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Black & White</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={color === 'Silver'} value='Silver' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Silver</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" checked={color === 'Tan'} value='Tan' onChange={(e) => checkColor(e.target.value)} />
                        <p className="text-sm font-medium ml-2">Tan</p>
                    </label>
                </div>
                <div className="py-4 border-b">
                    <h3 className="font-bold">Price</h3>
                </div>
                <div className="py-4 border-b mb-20">
                    <h3 className="font-bold">Breed</h3>
                    <label className="flex">
                        <input type="checkbox" value='Small' />
                        <p className="text-sm font-medium ml-2">Small</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" value='Medium' />
                        <p className="text-sm font-medium ml-2">Medium</p>
                    </label>
                    <label className="flex">
                        <input type="checkbox" value='Large' />
                        <p className="text-sm font-medium ml-2">Large</p>
                    </label>
                </div>
            </div>
        </>
    );
}