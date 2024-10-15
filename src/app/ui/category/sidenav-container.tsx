'use client';

import TextInput from "@/app/ui/components/textfield";
import { useState } from "react";

export default function SideNavCategory({ onSendData }: { onSendData?: (data: { gene: string, color: string, min: string, max: string }) => void }) {
    const [gene, setGene] = useState('');
    const [color, setColor] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const checkGene = (value: string) => {
        if (gene.includes(value)) {
            setGene('');
            if (onSendData) {
                onSendData({ gene: '', color, min, max });
            }
        } else {
            setGene(value);
            if (onSendData) {
                onSendData({ gene: value, color, min, max });
            }
        }
    }

    const checkColor = (value: string) => {
        if (color.includes(value)) {
            setColor('');
            if (onSendData) {
                onSendData({ gene, color: '', min, max });
            }
        } else {
            setColor(value);
            if (onSendData) {
                onSendData({ gene, color: value, min, max });
            }
        }
    }

    const onSendDataMin = (value: string) => {
        setMin(value);
        if (value == '') {
            if (onSendData) {
                onSendData({ gene, color, min: '', max });
            }
        } else {
            if (onSendData) {
                onSendData({ gene, color, min: value, max });
            }
        }
    }

    const onSendDataMax = (value: string) => {
        setMax(value);
        if (value == '') {
            if (onSendData) {
                onSendData({ gene, color, min, max: '' });
            }
        } else {
            if (onSendData) {
                onSendData({ gene, color, min, max: value });
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
                    <div className="flex pt-2 gap-3">
                        <TextInput type="number" placeholder="Min" isInputSearch={false} onSendData={onSendDataMin}></TextInput>
                        <TextInput type="number" placeholder="Max" isInputSearch={false} onSendData={onSendDataMax}></TextInput>
                    </div>
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