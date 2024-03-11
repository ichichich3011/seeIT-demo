import Image from 'next/image'

const HeaderComponent = () => {
    return (
        <div className="p-4 flex md:flex-row flex-col justify-between bg-gray-100 items-center">
            <h1 className="text-4xl font-bold">Next.JS Demo</h1>
            <Image priority src="/seeIT.svg" alt="logo" width={200} height={200}/>
        </div>
    )
}

export default HeaderComponent
