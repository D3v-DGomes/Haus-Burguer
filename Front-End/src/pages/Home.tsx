import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburgueres");
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mx-auto w-full px-3 text-white md:w-184.25 md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Hamburgueres")}
          onClick={() => handleChangeCategory("Hamburgueres")}
        >
          Hamburgueres
        </div>
        <div
          className={getCategoryClass("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porções")}
          onClick={() => handleChangeCategory("Porções")}
        >
          Porções
        </div>
      </div>

      <p className="my-3 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-3 md:gap-4">
        {filteredProducts.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            img={product.img}
            price={product.price}
            category={product.category}
            key={product.id}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-sm text-[#848484] md:text-lg">
            Nenhum produto encontrado para esta categoria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
