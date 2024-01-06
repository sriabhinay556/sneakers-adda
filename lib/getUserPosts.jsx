
async function getUserPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{next:{revalidate:60}})
    if(!res.ok) throw new Error('fetched failed posts data')
   return res.json()
}

export default getUserPosts