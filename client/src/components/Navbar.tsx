import { Link } from "react-router-dom"


const Navbar = () => {
  // get id from cookie or local storage
  const id = 78;
  return (
    <div className="text-black h-10 bg-amber-100 px-8 flex flex-row justify-between items-center">
      <div>
      <Link to="/"> Home </Link>
      
      <Link to="/practice">Practice</Link>
      <Link to={`user/${id}`}> Me</Link>
      </div>
      <div>
        <Link to="/auth"> Auth </Link>
      </div>
    </div>
  )
}

export default Navbar