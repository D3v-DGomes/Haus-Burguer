import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { formatterPrice } from "../utils/formatterPrice";

const Product = ({
  id,
  name,
  description,
  price,
  img,
  category,
}: ProductType) => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img src={`./${img}`} className="h-28 w-40 md:h-40 md:w-52" />
        <div className="flex w-full flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">
            {name} <span className="text-xs opacity-70">({category})</span>
          </p>
          <p className="text-xs1 flex-1 text-[#848484] md:text-lg">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Product };
