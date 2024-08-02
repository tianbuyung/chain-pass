import { ModeToggle } from "@/components/shared/mode-toggle";

export default function Home() {
  return (
    <main className="p-5 flex justify-between">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <ModeToggle />
    </main>
  );
}
