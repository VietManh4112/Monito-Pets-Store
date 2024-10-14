import '@/app/globals.css';
import { Metadata } from 'next';
import NavPets from "@/app/ui/nav-pets";
import FooterPets from "@/app/ui/footer-pets";

export const metadata: Metadata = {
  title: {
    template: '%s | Pricing Plans',
    default: 'Pets'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className='scroll-smooth'>
            <body className='font-mono'>
                <div className="mx-auto max-w-7xl">
                    <NavPets></NavPets>
                </div>
                {children}
                <div className="py-16 bg-[var(--linear)] rounded-t-3xl pt-20">
                    <FooterPets></FooterPets>
                </div>
            </body>
        </html>
    );
}