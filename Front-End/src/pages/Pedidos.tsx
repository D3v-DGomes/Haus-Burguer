import { useState } from "react";
import { User, CalendarDays, ClockAlert, ClockCheck } from "lucide-react";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");
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

  return (
    <div className="mx-auto w-full px-3 text-white md:w-184.25 md:px-0">
      {/* {Categorias} */}
      <div className="mt-1 mb-3 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleChangeCategory("Pendente")}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
          <div className="flex justify-between font-bold">
            <p>#1</p>
            <select name="" id="">
              <option value="" defaultChecked disabled>
                Pendente
              </option>
              <option value="">Retirado</option>
              <option value="">Cancelado</option>
            </select>
          </div>

          <div className="mt-2 flex flex-col gap-2 text-[#32343E]">
            <div className="flex items-center gap-2">
              <User size={16} strokeWidth={3} />
              <p className="text-sm">David Gomes</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} strokeWidth={3} />
              <p className="text-sm">09/03/2026</p>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ClockAlert size={16} strokeWidth={3} />
                <p className="text-sm">18:00</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockCheck size={16} strokeWidth={3} />
                <p className="text-sm">18:32</p>
              </div>
            </div>

            <div className="h-px w-full bg-[#32343E]"></div>

            <p className="text-md text-right font-bold">R$133,90</p>
          </div>
        </div>
        <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
          <div className="flex justify-between font-bold">
            <p>#1</p>
            <select name="" id="">
              <option value="" defaultChecked disabled>
                Pendente
              </option>
              <option value="">Retirado</option>
              <option value="">Cancelado</option>
            </select>
          </div>

          <div className="mt-2 flex flex-col gap-2 text-[#32343E]">
            <div className="flex items-center gap-2">
              <User size={16} strokeWidth={3} />
              <p className="text-sm">David Gomes</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} strokeWidth={3} />
              <p className="text-sm">09/03/2026</p>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ClockAlert size={16} strokeWidth={3} />
                <p className="text-sm">18:00</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockCheck size={16} strokeWidth={3} />
                <p className="text-sm">18:32</p>
              </div>
            </div>

            <div className="h-px w-full bg-[#32343E]"></div>

            <p className="text-md text-right font-bold">R$133,90</p>
          </div>
        </div>
        <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
          <div className="flex justify-between font-bold">
            <p>#1</p>
            <select name="" id="">
              <option value="" defaultChecked disabled>
                Pendente
              </option>
              <option value="">Retirado</option>
              <option value="">Cancelado</option>
            </select>
          </div>

          <div className="mt-2 flex flex-col gap-2 text-[#32343E]">
            <div className="flex items-center gap-2">
              <User size={16} strokeWidth={3} />
              <p className="text-sm">David Gomes</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} strokeWidth={3} />
              <p className="text-sm">09/03/2026</p>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ClockAlert size={16} strokeWidth={3} />
                <p className="text-sm">18:00</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockCheck size={16} strokeWidth={3} />
                <p className="text-sm">18:32</p>
              </div>
            </div>

            <div className="h-px w-full bg-[#32343E]"></div>

            <p className="text-md text-right font-bold">R$133,90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
