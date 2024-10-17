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
            case 'join':
                return 'w-auto px-7 text-base border border-solid text-white bg-[var(--dblue)] font-bold rounded-[57px]';
            case 'view':
                return 'w-auto px-7 py-3 gap-2 text-sm sm:text-base border border-[var(--dblue)] border-2 text-[var(--dblue)] font-medium rounded-[57px] hover:scale-110';
            case 'view-cate':
                return 'w-auto px-7 py-3 gap-2 text-sm sm:text-base border border-white border-2 text-white font-medium rounded-[57px] hover:scale-110';
            case 'sort':
                return 'w-auto px-5 py-2 text-sm border border-gray-500 text-gray-500 font-medium rounded-[20px]';
            case 'explore':
                return 'w-auto px-9 py-3 text-sm sm:text-base bg-[var(--dblue)] text-white font-medium rounded-[57px] hover:scale-110';
            case 'explore-cate':
                return 'w-auto px-9 py-3 text-sm sm:text-base bg-white text-black font-medium rounded-[57px] hover:scale-110';
            case 'more':
                return 'w-full sm:w-auto px-7 py-3 gap-2 text-sm border border-[var(--dblue)] border-2 text-[var(--dblue)] font-medium rounded-[57px] hover:scale-110';
            default:
                return ''
        }
    };

    const checkButtonIconBefore = () => {
        switch (type) {
            case 'primary':
            case 'extra':
            case 'subscribe':
            case 'sign':
            case 'view':
            case 'view-cate':
            case 'explore':
            case 'more':
                return false
            default:
                return true;

        }
    }

    const checkButtonIconAfter = () => {
        switch (type) {
            case 'primary':
            case 'extra':
            case 'subscribe':
            case 'sign':
            case 'explore':
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
            case 'view':
                return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#003459" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                )
            case 'view-cate':
                return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#FDFDFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                )
            case 'more':
                return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                )
            default:
                return;
        }
    };
    return (
        <>
            <button className={`flex items-center justify-center ${getButtonStyle()}`} onClick={onClick}>
                {checkButtonIconBefore() && getSVG()}
                {children}
                {checkButtonIconAfter() && getSVG()}
                {load && getSVG()}
            </button>
        </>
    );
}