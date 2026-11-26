import { Suspense } from "react";
import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default function Home() {
  return (
    <Suspense fallback={<p>読み込み中...</p>}>
      <RandomCat />
    </Suspense>
  );
}

// リクエストごとに猫画像を取得する（Suspense内でストリーミング表示）
async function RandomCat() {
  await connection();
  const image = await fetchImage();
  return <CatImage url={image.url} />;
}
