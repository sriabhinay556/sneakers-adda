import Link from 'next/link'
function Homepage() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">

    <Link href='/sneakers' className="bg-green-300 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded ">
               Sneakers - Jordan Lows
    </Link>
    <br/>
    {/* <Link href='/users'>Users</Link> */}
    </div>
  </>
  
  )
}

export default Homepage