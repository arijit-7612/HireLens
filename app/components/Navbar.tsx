import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">HireLens</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
<<<<<<< HEAD
export default Navbar
=======
export default Navbar
>>>>>>> 7f46e4e85f4db0ce67c1f54a06753a3837b367fd
