import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AdressForm } from "../AdressForm";
import styles from "./AddAdress.module.scss";

export function AddAdress(props) {
  const { onReload } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <AdressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}
