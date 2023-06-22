import { useState, useEffect } from "react";
import classNames from "classnames";
import { WishList } from "@/api";
import { useAuth } from "@/hooks";
import { Icon } from "semantic-ui-react";
import styles from "./WishListIcon.module.scss";

const wishlistCtrl = new WishList();

export function WishListIcon(props) {
  const { gameId, className, removeCallBack } = props;
  const [hasWishList, setHasWishList] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.check(user.id, gameId);
        setHasWishList(response);
      } catch (error) {
        setHasWishList(false);
        console.error(error);
      }
    })();
  }, [gameId]);

  const addWishList = async () => {
    const response = await wishlistCtrl.add(user.id, gameId);
    setHasWishList(response);
  };

  const deleteWishList = async () => {
    try {
      await wishlistCtrl.delete(hasWishList.id);
      setHasWishList(false);
      if (removeCallBack) removeCallBack();
    } catch (error) {
      console.error(error);
    }
  };

  if (hasWishList === null) return null;

  return (
    <Icon
      name={hasWishList ? "heart" : "heart outline"}
      onClick={hasWishList ? deleteWishList : addWishList}
      className={classNames(styles.wishlistIcon, {
        [className]: className,
      })}
    />
  );
}
