import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from '@/components/HeaderComponent';

const inter = Inter({subsets: [ "latin" ]});

export const metadata: Metadata = {
    title: "NextJS Demo for SEE IT",
    description: "Created for a meetup demo.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <header className="pb-4">
            <HeaderComponent/>
        </header>
        {children}
        </body>
        </html>
    );
}
