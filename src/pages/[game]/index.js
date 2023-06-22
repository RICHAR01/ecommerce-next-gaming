import { Game } from "@/api";

export { default } from "./game";

export async function getServerSideProps(context) {
  const {
    params: { game },
  } = context;

  const gameCtrl = new Game();
  const responseGame = await gameCtrl.getBySlug(game);

  return {
    props: {
      game: responseGame,
    },
  };
}
