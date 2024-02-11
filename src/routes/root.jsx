import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export default function Root() {
  return (
    <main className="container">
      <Nav />
      <section className="wrapper">
        <Outlet />
      </section>
    </main>
  );
}
