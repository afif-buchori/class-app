import { useState } from "react";
import ToggleThemes from "./ToggleTheme";
import ToggleDrawer from "./ToggleDrawer";
import MyDrawer from "./MyDrawer";
import { Link } from "react-router-dom";

function MyHeader() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="w-full bg-base-100 flex shadow-lg fixed top-0 left-0 z-30">
      <header className="w-full max-w-screen-lg px-2 flex items-center gap-4 mx-auto py-2">
        <Link to="/">
          <h1 className="font-black text-lg md:text-xl">Class Apps</h1>
        </Link>

        <div className="hidden md:flex flex-1 px-10">
          <Link to="/team">Kelompok</Link>
        </div>

        <ToggleThemes className="ml-auto" />
        <ToggleDrawer
          isDrawerOpen={isDrawerOpen}
          handleToggle={() => setDrawerOpen(!isDrawerOpen)}
        />
      </header>
      <MyDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawer={() => setDrawerOpen(!isDrawerOpen)}
      />
    </section>
  );
}

export default MyHeader;
