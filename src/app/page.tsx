import CatGenerator from "@/components/cat-generator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <CatGenerator />
      <CatGenerator />
      <CatGenerator />
      <CatGenerator />
    </main>
  );
}
