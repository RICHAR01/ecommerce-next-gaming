import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";

const platformsId = {
  playStation: 1,
  xbox: 2,
  pc: 3,
  nintendo: 4,
};

export default function HomePage() {
  return (
    <>
      <BasicLayout relative>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>
        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />
        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playStation}
          />
        </Container>
        <Separator height={100} />
        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="Compara con otros juegos y elige el tuyo"
          btnTitle="Entra ahora"
          btnLink="/account"
          image="images/img01.png"
        />
        <Separator height={50} />
        <Container>
          <Home.LatestGames
            title="Xbox"
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
