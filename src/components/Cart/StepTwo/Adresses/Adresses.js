import { useState, useEffect } from "react";
import { map } from "lodash";
import classNames from "classnames";
import { Adress } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./Adresses.module.scss";

const adressCtrl = new Adress();

export function Adresses(props) {
  const { addressSelected, setAddressSelected } = props;
  const [adresses, setAdresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await adressCtrl.getAll(user.id);
        setAdresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.adresses}>
      <h2>Dirección</h2>
      {map(adresses, (adress) => (
        <div
          key={adress.id}
          onClick={() => setAddressSelected(adress)}
          className={classNames(styles.adress, {
            [styles.active]: adress.id === addressSelected?.id,
          })}
        >
          <p>
            {adress.attributes.name} ({adress.attributes.title})
          </p>
          <p>
            {adress.attributes.adress}, {adress.attributes.postal_code},{" "}
            {adress.attributes.state}, {adress.attributes.city}
          </p>
        </div>
      ))}
    </div>
  );
}
