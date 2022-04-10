import NavBar from "./NavBar"



const Layout = ({children}) => {
  return (
    <>
      <div data-theme="lofi" >
      <NavBar />
      <main  className="font-syne">
            {children}
          </main>
      </div>
    </>
    
  )
}

export default Layout