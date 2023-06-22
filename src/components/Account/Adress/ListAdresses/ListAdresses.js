import { useState, useEffect } from "react";
import { map } from "lodash";
import { Adress as AdressCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { Adress } from "./Adress";
import styles from "./ListAdresses.module.scss";

const adressCtrl = new AdressCtrl();

export function ListAdresses(props) {
  const { reload, onReload } = props;
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
  }, [reload]);

  if (!adresses) return null;

  return (
    <div className={styles.adresses}>
      {map(adresses, (adress) => (
        <Adress
          key={adress.id}
          adressId={adress.id}
          adress={adress.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
