import { JSX } from "react";
import Login from "./Login";

export default async function Home(): Promise<JSX.Element> {
  return (
    <main>
      <Login />
    </main>
  );
}
