import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forEach, forEachRight } from "lodash";
import { fn } from "@/utils";
import styles from "./Resume.module.scss";

export function Resume(props) {
  const { games } = props;
  const router = useRouter();
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    let total = {
      original: 0,
      discount: 0,
      price: 0,
    };

    forEach(games, (game) => {
      const price = fn.calcDiscountedPrice(
        game.attributes.price,
        game.attributes.discount
      );

      total = {
        original: total.original + game.attributes.price * game.quantity,
        discount:
          total.discount + (game.attributes.price - price) * game.quantity,
        price: total.price + price * game.quantity,
      };
    });

    setTotals(total);
  }, [games]);

  const goToStepTwo = () => {
    router.replace({ query: { ...router.query, step: 2 } });
  };

  if (!totals) return null;

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Precio oficial</span>
            <span>{totals.original.toFixed(2)}$</span>
          </div>
          <div>
            <span>Descuento</span>
            <span>{totals.discount.toFixed(2)}$</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>{totals.price.toFixed(2)}$</span>
          </div>
        </div>
        <Button primary fluid onClick={goToStepTwo}>
          Proceder con el pago
        </Button>

        <Link href="">Continuar comprando</Link>
      </div>
    </div>
  );
}
