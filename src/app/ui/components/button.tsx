'use client';

export default function Btn({ children, type, onClick, load }:
    { children: React.ReactNode, type: string, onClick?: () => void, load: boolean }) {
    const getButtonStyle = () => {
        switch (type) {
            case 'primary':
                return "md:w-1/2 w-auto py-1 px-2 md:px-4 text-black bg-white"
            case 'extra':
                return 'md:w-1/2 w-auto py-1 px-2 md:px-4 text-zinc-400'
            case 'add':
                return 'w-auto border py-1 text-white items-center gap-1 px-3 bg-black font-bold'
            case 'export':
                return 'w-auto border py-1 items-center gap-1 bg-white px-3 text-gray-600';
            case 'sale':
                return 'text-fuchsia-700';
            case 'subscribe':
                return 'w-full py-2 justify-center bg-gray-300 text-black font-medium mt-6';
            case 'view':
                return 'w-auto px-7 py-3 text-base border border-solid border-black text-[var(--blue)] font-normal rounded-3xl';
            case 'explore':
                return 'w-auto px-7 py-3 bg-[var(--blue)] text-white font-normal rounded-3xl';
            default:
                return ''
        }
    };

    const checkButtonIcon = () => {
        switch (type) {
            case 'primary':
            case 'extra':
            case 'subscribe':
            case 'sign':
                return false
            default:
                return true;

        }
    }

    const getSVG = () => {
        switch (type) {
            case 'sign':
                return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" animate-spin size-6">
                    <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>)
            default:
                return '';
        }
    };
    return (
        <>
            <button className={`flex items-center justify-center ${getButtonStyle()}`} onClick={onClick}>
                {checkButtonIcon() && getSVG()}
                {children}
                {load && getSVG()}
            </button>
        </>
    );
}