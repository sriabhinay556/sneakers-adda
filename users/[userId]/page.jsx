import React from 'react'
import getUser from '../../../../lib/getUser'
import getAllUsers from '../../../../lib/getAllUsers'
import getUserPosts from '../../../../lib/getUserPosts'
import UserPosts from './components/UserPosts'
export default async function UserPage({params}) {
    const userData = await getUser(params.userId)
    const userPostsData = getUserPosts(params.userId)
    const [user,userPosts] = await Promise.all([userData,userPostsData])
  return (
    <>
    <h2>
        {user.name}
    </h2><br/>
    <UserPosts promise={userPosts}/>
    </>
  )
}
export async function generateStaticParams() {
    const usersData = getAllUsers();
    const users = await usersData;

    return users.map(user => {
        // Log the user ID
        console.log("User ID:", user.id);

        return {
            userId: user.id.toString()
        };
    });
}


