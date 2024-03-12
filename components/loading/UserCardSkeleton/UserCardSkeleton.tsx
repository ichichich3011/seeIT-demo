import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const UserCardSkeleton = async () => {
    return (
        <Card className={"animate-pulse"}>
            <CardHeader className={'flex flex-row gap-4 items-center'}>
                <Avatar>
                    <AvatarFallback/>
                </Avatar>
                <div className={"bg-gray-100 w-40 h-4"}/>
            </CardHeader>
            <CardContent className={'flex flex-col gap-4'}>
                <div className={"flex flex-row items-center gap-2 align-middle"}>Followers: <p className={"bg-gray-100 w-4 h-4"}/></div>
                <div className={"flex flex-row items-center gap-2 align-middle"}>Following: <p className={"bg-gray-100 w-4 h-4"}/></div>
            </CardContent>
        </Card>
    )
}

export default UserCardSkeleton
