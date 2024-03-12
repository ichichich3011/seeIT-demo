import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUserData } from '@/lib/utils';
import { GitHubUser } from '@/types/types';

const UserCard = async ({userName}: { userName: string }) => {
    try {
        const user = await getUserData(userName) as GitHubUser
        return (
            <Card>
                <CardHeader className={'flex flex-row gap-4'}>
                    <Avatar>
                        <AvatarImage src={user.avatar_url} alt="Avatar"/>
                        {user?.name || user?.login &&
                            <AvatarFallback>
                                {user?.name?.substring(0, 1) || user?.login?.substring(0, 1)}
                            </AvatarFallback>}
                    </Avatar>
                    <h1>{user.name || user.login}</h1>
                </CardHeader>
                <CardContent className={'flex flex-col gap-4'}>
                    <div>Followers: {user.followers}</div>
                    <div>Following: {user.following}</div>
                </CardContent>
            </Card>
        )
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(
                JSON.stringify({
                    context: {
                        error: error.stack,
                    },
                    message: `Error during getting user info: ${error}`,
                })
            );
        }
        return null;
    }
}

export default UserCard
