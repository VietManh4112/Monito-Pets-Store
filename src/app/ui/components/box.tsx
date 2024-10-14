import Btn from "@/app/components/button";

export default function Box({ title, type, count }: { title: string, type: string, count: number }) {
    return (
        <div className={`${title === 'Creator' ? 'bg-black text-white' :'bg-white'} p-6  border rounded-xl`}>
            <h2 className="font-semibold text-xl">
                {title}
            </h2>
            <div className="mt-8 flex items-end">
                <div className="font-bold text-4xl">${count}</div>
                <div className="text-sm font-medium text-gray-500 ml-2">
                    USD/{type === 'monthly' ? <span >month</span>  : <span >year</span>}
                    {type != 'monthly' && <p>billed once yearly</p>}
                </div>
            </div>
            <Btn type="subscribe" load={true}>Subscribe</Btn>
            <ul className="p-6 flex-row gap-2 text-gray-500 list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]">
                <li>{title === 'Starter' ? '1.000 ' : title === 'Creator' ? '2.500 ' : '7.000 '}credits per month</li>
                <li>Take {title === 'Starter' ? '300 ' : title === 'Creator' ? '500 ' : '2.000 '} photos per month</li>
                <li>Train {title === 'Starter' ? '1 ' : title === 'Creator' ? '3 ' : '7 '}AI models per month</li>
                <li>Flux photorealistic model</li>
                <li>Personal use license</li>
                {title === 'Professional' && <li>Early access to new features</li>}
            </ul>
        </div>
    )
}