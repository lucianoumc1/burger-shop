import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/shop">
        <PrimaryButton text="Go to shop" />
      </Link>
    </main>
  );
}
