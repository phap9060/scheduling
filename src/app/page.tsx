import { Login } from "@/app/components/Login/login";

export default function Home() {
  return (
    <main className="flex w-screen h-screen">
      <aside className="h-screen w-3/5  bg-login-page bg-no-repeat bg-cover object-cover"></aside>
      <Login />
    </main>
  );
}
