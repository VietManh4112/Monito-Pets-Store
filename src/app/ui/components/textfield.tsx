
export default function TextInput({ placeholder, type, isInputSearch, onSendData }: { placeholder: string, type: string, isInputSearch: boolean, onSendData?: (value: string) => void }) {
    return (
        <>
            {
                isInputSearch
                    ? <div className="ml-auto flex flex-1 relative md:grow-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-search absolute left-2.5 top-3.5 h-4 w-4 text-black">
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
                    : <input className="w-full p-3 rounded-md bg-zinc-800" type={type} placeholder={placeholder} onChange={(e) => {
                        if (onSendData) {
                            onSendData(e.target.value)
                        }
                    }}>
                    </input>
            }
        </>
    );
}