import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { GitHubUser } from '@/types/types';

const UserDetailCard = ({user}: { user: GitHubUser }) => {
    return (
        <Card className={"max-w-2xl w-max"}>
          <CardHeader className={"flex flex-row gap-4 items-center"}>
            <Avatar className={"size-24"}>
              <AvatarImage src={user.avatar_url} alt="Avatar"/>
              <AvatarFallback> {user?.name?.substring(0, 1) || user?.login?.substring(0, 1)} </AvatarFallback>
            </Avatar>
            <div className={"flex flex-col  w-full"}>
              <h1 className={'text-2xl font-semibold'}>{user.name || user.login}</h1>
              {user.twitter_username && <div>
                <Link target={'_blank'}
                      href={`https://twitter.com/${user.twitter_username}`}>@{user.twitter_username}</Link>
              </div>}
              {user.blog && <div><Link target={'_blank'} href={user.blog}>{user.blog}</Link></div>}
            </div>
          </CardHeader>
          <CardContent className={'flex flex-col gap-8'}>
            <div className={"flex flex-row w-full gap-8 justify-between"}>
              <div>Followers: {user.followers}</div>
              <div>Following: {user.following}</div>
            </div>
            <div className={"flex flex-row w-full gap-8 justify-between"}>
              <div>Public Repos: {user.public_repos}</div>
              <div>Public Gists: {user.public_gists}</div>
            </div>
            <div>Location: {user.location}</div>
          </CardContent>
        </Card>
    )
}

export default UserDetailCard
