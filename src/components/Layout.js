import NavBar from "./NavBar"
import { AnimateSharedLayout } from "framer-motion"


const Layout = ({children}) => {
  return (
    <>
      <div data-theme="lofi" >
      <NavBar />
        <AnimateSharedLayout>
          <main  className="font-syne">
            {children}
          </main>
        </AnimateSharedLayout>
      </div>
    </>
    
  )
}

export default Layout