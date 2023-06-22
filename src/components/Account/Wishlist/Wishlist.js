import { useState, useEffect } from "react";
import { size } from "lodash";
import { useAuth } from "@/hooks";
import { WishList as WishListCtrl } from "@/api";
import { NoResult } from "@/components/Shared";
import { GridGames } from "./GridGames";

const wishlistCtrl = new WishListCtrl();

export function Wishlist() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.getAll(user.id);
        setWishlist(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  return size(wishlist) === 0 ? (
    <NoResult text="No tiene ningun juego en la lista de deseos" />
  ) : (
    <GridGames wishlist={wishlist} onReload={onReload} />
  );
}
