import getAllUsers from "../../../lib/getAllUsers"
import Link from 'next/link'
async function Userspage() {
    const res =  getAllUsers();
    const users = await res
    const content = (
        <section>
            {users.map(user => {
                return(
                    <>
                    <p key={user.id}>
                        <Link href={`users/${user.id}`}>
                        {user.name}
                        </Link>
                    </p>
                    </>
                )
            })}
        </section>
    )



  return content
}

export default Userspage