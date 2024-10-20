
import MainToolbar from "./shared/components/MainToolbar";
import Landing from "./landing/page";
import "./sass/main.scss";

export default function Home() {
  return (
    <div>
      <main>
        <MainToolbar />
        <Landing />
      </main>
    </div>
  );
}
