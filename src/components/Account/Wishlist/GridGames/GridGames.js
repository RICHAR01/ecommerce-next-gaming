import { ENV } from "@/utils";
import Link from "next/link";
import { map } from "lodash";
import { Label, WishListIcon } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./GridGames.module.scss";
import { Item } from "semantic-ui-react";

export function GridGames(props) {
  const { wishlist, onReload } = props;

  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.attributes.game.data;
        const cover = game.attributes.cover.data;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.attributes.slug}`}>
              <div>
                <img src={`${ENV.SERVERHOST}${cover.attributes.url}`} />

                {game.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>

              <div>
                <span>{game.attributes.title}</span>
                <span className={styles.price}>
                  {fn.calcDiscountedPrice(
                    game.attributes.price,
                    game.attributes.discount
                  )}
                  €
                </span>
              </div>
            </Link>

            <WishListIcon
              gameId={game.id}
              className={styles.whislistIcon}
              removeCallBack={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
