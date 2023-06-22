import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";

export default function signIn() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signUp}>
          <h3>Crear Cuenta</h3>
          {/* form */}
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
