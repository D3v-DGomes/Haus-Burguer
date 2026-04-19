import { SquareX } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";

type CartProps = {
  // Define as props esperadas pelo componente Cart
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartProps) => {
  // Recebe as props showCart e setShowCart do componente pai (Header)
  return (
    <div className="absolute right-0 flex h-screen w-96.25 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <SquareX
          size={28}
          className="cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <Button title="Finalizar pedido" className="font-normal text-[#F2DAAC]" />
    </div>
  );
};

export default Cart;
