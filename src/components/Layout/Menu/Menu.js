import { useState, useEffect } from "react";
import { ENV } from "@/utils";
import { Image, Icon, Input } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "lodash";
import classNames from "classnames";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";

const platformsCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setpPlatforms] = useState(null);
  const [showSearch, setshowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const openCloseSearch = () => setshowSearch((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const respose = await platformsCtrl.getAll();
        setpPlatforms(respose.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setSearchText(router.query.s || "");
  }, []);

  const onSearch = (text) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className={styles.platforms}>
      {map(platforms, (platform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={`${ENV.SERVERHOST}${platform.attributes.icon.data.attributes.url}`}
          />
          {platform.attributes.title}
        </Link>
      ))}
      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
