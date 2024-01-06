
async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok) return new Error('not fetched')

  return res.json()
}

export default getAllUsers