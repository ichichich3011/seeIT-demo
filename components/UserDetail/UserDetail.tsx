import BackButton from '@/components/BackButton';
import { getUserData } from '@/lib/utils';
import UserDetailCard from '@/components/UserDetailCard';
import { GitHubUser } from '@/types/types';

const UserDetail = async ({userName}: any) => {

    const user = await getUserData(userName) as GitHubUser

    return (
        <div className={'py-4 px-8'}>
            <BackButton/>
            <div className={'w-full flex flex-col items-center p-32'}>
                <UserDetailCard user={user}/>
            </div>
        </div>

    )
}

export default UserDetail
