const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function BoxSekeleton() {
    return (
        <div className="p-2 bg-white rounded-xl shadow-md">
            <div className="bg-gray-200 w-72 h-72 rounded-xl">
            </div>
            <div className="p-2 mt-2 bg-gray-100 rounded-md">
                <div className="text-sm sm:text-base font-bold w-68 h-5 bg-gray-200 pb-2 rounded-md"></div>
                <div className="sm:flex items-center sm:space-x-1 mt-2">
                    <div className="text-xs font-medium text-gray-500 w-24 h-3 bg-gray-200 pb-2 rounded-md"></div>
                    <span className="hidden sm:block w-2 bg-gray-200"></span>
                    <div className="text-xs pt-1 sm:pt-0 font-medium w-24 h-3 text-gray-500 bg-gray-200 rounded-md"></div>
                </div>
                <div className="text-sm font-bold w-68 h-5 bg-gray-200 rounded-md mt-2"></div>
            </div>
        </div>
    )
}

export function BoxsSekeleton() {
    return (
        <>
            <div className={`${shimmer} relative max-w-5xl overflow-hidden`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h3 className="text-[var(--dblue)] font-bold text-2xl w-32 h-6 rounded-md bg-gray-200"></h3>
                        <p className="ml-4 font-medium text-sm text-gray-500 w-20 h-4 rounded-md bg-gray-200"></p>
                    </div>
                    <div className="hidden sm:block w-36 h-9 bg-gray-200 rounded-xl"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-4">
                    <BoxSekeleton></BoxSekeleton>
                    <BoxSekeleton></BoxSekeleton>
                    <BoxSekeleton></BoxSekeleton>
                    <BoxSekeleton></BoxSekeleton>
                    <BoxSekeleton></BoxSekeleton>
                    <BoxSekeleton></BoxSekeleton>
                </div>
            </div>

        </>
    )
}