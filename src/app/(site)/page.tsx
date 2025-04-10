import { JSX } from "react";
import HomeFeed from "../home/HomeFeed";

export default async function Home(): Promise<JSX.Element> {
  return (
    <main className="w-full">
      <div className="dark">
        {/* <Login /> */}
        <HomeFeed />
      </div>
    </main>
  );
}
