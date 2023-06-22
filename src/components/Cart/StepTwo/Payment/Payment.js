import { CardElement } from "@stripe/react-stripe-js";
import styles from "./Payment.module.scss";

export function Payment() {
  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090",
          fontSize: "16px",
        },
      },
    },
  };

  return (
    <div className={styles.payment}>
      <h2>Metodo de Pago</h2>

      <div className={styles.block}>
        <CardElement options={cardStyle} />
      </div>
    </div>
  );
}
