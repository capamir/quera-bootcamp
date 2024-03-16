import { Link, Outlet } from "react-router-dom";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (): JSX.Element => {
  return (
    <>
      <nav className="w-full flex justify-around items-center text-xl text-white fixed z-10 py-3 bg-slate-700">
        <Link to="/">Home</Link>
        <Link to="basket">Basket</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
