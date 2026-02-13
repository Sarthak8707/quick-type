import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="text-black h-10 bg-amber-100 px-8 flex flex-row justify-between items-center">
      <div>
      <Link to="/"> Home </Link>
      
      <Link to="/practice">Practice</Link>
      </div>
      <div>
        <Link to="/auth"> Auth </Link>
      </div>
    </div>
  )
}

export default Navbar