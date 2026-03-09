import { User, CalendarDays, ClockAlert, ClockCheck } from "lucide-react";

type CardPedidoType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveredAt?: string;
  total: number;
};

const CardPedido = ({
  id,
  name,
  date,
  orderTime,
  deliveredAt,
  total,
}: CardPedidoType) => {
  return (
    <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
      <div className="flex justify-between font-bold">
        <p>#{id}</p>
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
          <p className="text-sm">{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={16} strokeWidth={3} />
          <p className="text-sm">{date}</p>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <ClockAlert size={16} strokeWidth={3} />
            <p className="text-sm">{orderTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockCheck size={16} strokeWidth={3} />
            <p className="text-sm">{deliveredAt ? deliveredAt : "--:--"}</p>
          </div>
        </div>

        <div className="h-px w-full bg-[#32343E]"></div>

        <p className="text-md text-right font-bold">R${total}</p>
      </div>
    </div>
  );
};

export default CardPedido;
