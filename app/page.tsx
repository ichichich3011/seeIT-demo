import UserCard from '@/components/ui/UserCard';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
    const userNames = [ 'abhisheksharma', 'ichichich3011', 'intigabriel', 'leerob', 'prometheus', 'vercel' ];
    return (
        <main className="max-w-screen-2xl min-h-screen ">
            <div
                className={'grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row grid-cols-1 auto-rows-fr flex-row gap-16 px-8'}>
                {userNames.map((userName: string, index: number) =>
                    <Suspense
                        key={`${userName}-${index}`}
                        fallback={<div>Loading...</div>}
                    >
                        <Link
                            className={' min-w-52 w-full h-full col-span-1'}
                            href={`/${userName}`}>
                            <UserCard userName={userName}/>
                        </Link>
                    </Suspense>
                )}
            </div>
        </main>
    );
}
