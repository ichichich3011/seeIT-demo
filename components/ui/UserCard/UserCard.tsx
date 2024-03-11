import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserCard = async ({userName}: { userName: string }) => {
    try {
        const user = await fetch(`https://api.github.com/users/${userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`,
            },

        }).then(res => res.json());
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
