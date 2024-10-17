import { useRef, useState, useEffect } from "react";

function useDebounce(value: string, delay: number): string {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default function TextInput({ placeholder, type, isInputSearch, onSendData }: { placeholder: string, type: string, isInputSearch: boolean, onSendData?: (value: string) => void }) {
    const [inputValue, setInputValue] = useState('');
    const debouncedSearchTerm = useDebounce(inputValue, 500);
    const inputRef = useRef<HTMLInputElement>(null);

    const getInputType = () => {
        switch (type) {
            case 'number':
                return 'border-b w-full p-2 placeholder:text-sm placeholder:font-medium placeholder:text-black/80';
            default:
                return 'w-full p-3 rounded-md bg-zinc-800';
        }
    }

    const increasePrice = () => {
        if (inputRef.current) {
            const currentValue = parseFloat(inputRef.current.value) || 0;
            inputRef.current.value = (currentValue + 500000).toString();
            setInputValue(inputRef.current.value);
        }
    }

    const decreasePrice = () => {
        if (inputRef.current) {
            const currentValue = parseFloat(inputRef.current.value) || 0;
            if (currentValue > 0) {
                inputRef.current.value = (currentValue - 500000).toString();
                setInputValue(inputRef.current.value);
            }
        }
    }

    useEffect(() => {
        if (debouncedSearchTerm != '') {
            if (onSendData) {
                onSendData(debouncedSearchTerm);
            }
        } else {
            if (onSendData) {
                onSendData('');
            }
        }
    }, [debouncedSearchTerm, onSendData]);

    return (
        <>
            {
                isInputSearch
                    ? <div className="ml-auto flex flex-1 relative md:grow-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-search absolute left-2.5 top-3 h-4 w-4 text-black">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input className="flex border border-input px-3 py-2 text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 rounded-3xl bg-white pl-8 lg:w-80" type={type} placeholder={placeholder} onChange={(e) => {
                            if (onSendData) {
                                onSendData(e.target.value)
                            }
                        }}>
                        </input>
                    </div>
                    : <div className="flex relative items-center">
                        <input ref={inputRef} className={`${getInputType()}`} type={type} placeholder={placeholder} onChange={(e) => {
                            setInputValue(e.target.value);
                        }}>
                        </input>
                        {type.includes('number') && <div className="absolute right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-2" onClick={increasePrice}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-2" onClick={decreasePrice}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>}
                    </div>
            }
        </>
    );
}