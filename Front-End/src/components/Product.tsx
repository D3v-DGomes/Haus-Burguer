import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { formatterPrice } from "../utils/formatterPrice";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Product = ({
  id,
  name,
  description,
  price,
  img,
  category,
  setProducts,
}: ProductType) => {
  const { user } = useContext(UserContext);

  const handleDeleteProduct = async (id: string) => {
    // Função para deletar um produto
    try {
      if (!id) {
        alert("ID não encontrado");
        return;
      }
      const response = await fetch(
        `http://localhost:3000/delete-product/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!response.ok) {
        alert("Erro ao realizar a requisição");
        return;
      }

      getProduct(); // Atualiza a lista de produtos após a exclusão
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getProduct = async () => {
    // Função para buscar os produtos atualizados após a exclusão
    try {
      const response = await fetch("http://localhost:3000/get-products");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <img src={`./${img}`} className="h-28 w-40 md:h-40 md:w-52" />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase md:text-lg">
              {name} <span className="text-xs opacity-70">({category})</span>
            </p>
            {user?.admin && (
              <div
                className="flex cursor-pointer items-center rounded-md border px-1 text-xs text-red-700 uppercase"
                onClick={() => handleDeleteProduct(id)}
              >
                Deletar
              </div>
            )}
          </div>
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
