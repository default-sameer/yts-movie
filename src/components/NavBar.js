import Link from "next/link"
import { useRouter } from "next/router"

const NavBar = () => {
    const router = useRouter()

     const back = () => {
        // router.push('/')
        router.reload()
    }
  return (
    <>
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                </li>
                <li><a>Movies</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href='/'>
            <a onClick={back} className="btn btn-ghost normal-case text-xl font-syne">Movie Box</a>
            </Link>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
            </button>
        </div>
    </div>
    </>
  )
}

export default NavBar