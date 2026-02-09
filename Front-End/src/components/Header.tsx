import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-md border-1";

    if (location.pathname === path) {
      return `${baseClass} bg-[#F2DAAC] text-[#161410]`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="" className="p-2" />
        </Link>

        {user ? (
          <p className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[#F2DAAC]">
              <Link to="/">
                <div className={getNavItemClass("/")}>
                  <Box size={22} />
                </div>
              </Link>

              <Link to="/pedidos">
                <div className={getNavItemClass("/pedidos")}>
                  <LayoutDashboard size={22} />
                </div>
              </Link>

              <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-md border-1">
                <Plus size={22} />
              </div>
            </div>

            <div className="relative cursor-pointer">
              <ShoppingCart size={22} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-[#161410]">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>Olá, {user.name.split(" ")[0]}</p>
              <LogOut size={22} className="cursor-pointer" />
            </div>
          </p>
        ) : (
          <Link to="/login">
            <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC] font-semibold">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
