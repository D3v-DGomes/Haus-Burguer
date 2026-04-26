import { SquareX } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { CartItemContext } from "../contexts/CartItemsContext";

type CartProps = {
  // Define as props esperadas pelo componente Cart
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartProps) => {
  // const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { cartItems, setCartItems } = useContext(CartItemContext);

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Erro ao buscar os itens do carrinho");
        return;
      }

      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="absolute right-0 z-1 flex h-screen w-96.25 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <SquareX
          size={28}
          className="cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem
            title={item.product.name}
            price={item.product.price}
            img={item.product.img}
            id={item.product.id}
          />
        ))}
      </div>

      <Button title="Finalizar pedido" className="font-normal text-[#F2DAAC]" />
    </div>
  );
};

export default Cart;
