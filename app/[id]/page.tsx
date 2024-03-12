import UserDetail from '@/components/UserDetail';


const Page = ({params}: any) => {
    return <UserDetail userName={params.id}/>
}

export default Page;

export async function generateStaticParams() {
    return [
        {id: 'abhisheksharma'},
        {id: 'ichichich3011'},
        {id: 'intigabriel'},
        {id: 'leerob'}
    ]
}
