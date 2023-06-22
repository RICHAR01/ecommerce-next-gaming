import { ENV } from "@/utils";
import { Image } from "semantic-ui-react";
import styles from "./HeaderWallpaper.module.scss";

export function HeaderWallpaper(props) {
  const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
      <Image src={`${ENV.SERVERHOST}${image}`} />
    </div>
  );
}
