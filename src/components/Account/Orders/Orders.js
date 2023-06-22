import { useState, useEffect } from "react";
import { map } from "lodash";
import { Order as OrderCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { Order } from "./Order";

const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const respose = await orderCtrl.getAll(user.id);
        console.log(respose);
        setOrders(respose.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!orders) return <NoResult text="No tienes ningun pedido" />;

  return (
    <div>
      {map(orders, (order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}
