import { Link, useLocation } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      if (response.status !== 200) {
        console.log("Usuário não autenticado");
        return;
      }

      const data = await response.json();
      // console.log(data);
      setUser(data);

      // console.log(response);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        console.log("Erro ao fazer logout");
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, [location.pathname]);

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
    <header className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="Logo da Empresa" className="p-2" />
        </Link>

        {user ? (
          <nav className="flex items-center gap-8 text-white">
            {user.admin && (
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

                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border">
                  <Plus size={22} />
                </div>
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart size={22} />
              <span className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-xs text-[#161410]">
                1
              </span>
            </div>

            <div className="flex items-center gap-2">
              <p>Olá, {user.name.split(" ")[0]}</p>
              <LogOut
                size={22}
                className="cursor-pointer"
                onClick={() => handleLogout()}
              />
            </div>
          </nav>
        ) : (
          <Link to="/login">
            <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC] font-semibold">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
