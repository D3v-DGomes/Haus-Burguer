import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";

type CartItemType = {
  title: string;
  price: number;
  img: string;
  id: string;
};

const CartItem = ({ title, price, img, id }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt={title} className="w-25 rounded-md" />

      <div className="flex-1">
        <p className="text-sm font-bold uppercase">{title}</p>
        <p className="text-sm font-bold text-[#848484]">
          {formatterPrice(price)}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <ChevronLeft className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white" />
          <p className="font-bold">1</p>
          <ChevronRight className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white" />
        </div>
      </div>
      <Trash2 size={20} className="cursor-pointer" onClick={() => alert(id)} />
    </div>
  );
};

export default CartItem;
