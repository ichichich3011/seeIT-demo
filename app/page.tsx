import UserCard from '@/components/UserCard';
import Link from 'next/link';
import { Suspense } from 'react';
import UserCardSkeleton from '@/components/loading/UserCardSkeleton';

export default async function Home() {
    const userNames = [
        'aalibaabaa',
        'intigabriel',
        'vuhrmeister',
        'laeckerv',
        'ichichich3011',
        'leerob',
        'vercel'
    ];
    return (
        <main className="max-w-screen-2xl mx-auto min-h-screen ">
            <div
                className={'grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row grid-cols-1 auto-rows-fr flex-row gap-16 px-8'}>
                {userNames.map((userName: string, index: number) =>
                    <Suspense
                        key={`${userName}-${index}`}
                        fallback={<UserCardSkeleton/>}
                    >
                        <Link
                            className={'min-w-52 w-full h-full col-span-1'}
                            href={`/${userName}`}
                        >
                            <UserCard userName={userName}/>
                        </Link>
                    </Suspense>
                )}
            </div>
        </main>
    );
}
