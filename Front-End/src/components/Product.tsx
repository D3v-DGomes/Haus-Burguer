import { ShoppingBag } from "lucide-react";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img src="./duplo-da-casa.png" className="h-28 w-40 md:h-40 md:w-52" />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">
            DUPLO DA CASA
          </p>
          <p className="text-xs1 flex-1 text-[#848484] md:text-lg">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$49,90</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Product2 = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src="./calabresa-especial.png"
          className="h-28 w-40 md:h-40 md:w-52"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">
            Calabresa Especial
          </p>
          <p className="text-xs1 flex-1 text-[#848484] md:text-lg">
            Hambúrguer de carne bovina coberto com linguiça calabresa fatiada,
            cebola caramelizada e muçarela derretida.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$47,90</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Product3 = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img src="./smash-triplo.png" className="h-28 w-40 md:h-40 md:w-52" />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">Smash Triplo</p>
          <p className="text-xs1 flex-1 text-[#848484] md:text-lg">
            Três finas e crostantes carnes amassadas na chapa, com queijo
            cheddar, cebola roxa e molho especial no pão de batata.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$52,90</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Product, Product2, Product3 };
