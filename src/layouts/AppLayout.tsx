import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <main>
        <nav>
          <Navbar />
        </nav>

        <section className="h-full">
          <Outlet />
        </section>

      </main>
    </>
  );
}