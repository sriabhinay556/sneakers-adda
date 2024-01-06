

async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!res.ok) throw new Error('fetched failed user data')
    
    return res.json()
}

export default getUser