import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Aplikasi untuk belajar NextJS",
  icons: {
    icon: "/images/profile.png",
  },
  openGraph: {
    title: "Home",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
