import { readFile } from "fs/promises";
import RevealButton from "./reveal-button";

export default async function CatGenerator() {
  const allCatsNames = await readFile("src/api/cats.txt", "utf8");
  const cats = allCatsNames.split("\n");

  const randomCat = cats[Math.floor(Math.random() * cats.length)];

  return (
    <>
      <RevealButton catName={randomCat}>
        <div>Child Component</div>
      </RevealButton>
    </>
  );
}
