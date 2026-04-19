import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="./duplo-da-casa.png"
        alt="DUPLO DA CASA"
        className="w-25 rounded-md"
      />

      <div className="flex-1">
        <p className="font-bold uppercase">Duplo da casa</p>
        <p className="font-bold text-[#848484]">R$28,00</p>
        <div className="mt-2 flex gap-4">
          <ChevronLeft className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white" />
          <p className="font-bold">1</p>
          <ChevronRight className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white" />
        </div>
      </div>
      <Trash2 size={20} className="cursor-pointer" />
    </div>
  );
};

export default CartItem;
