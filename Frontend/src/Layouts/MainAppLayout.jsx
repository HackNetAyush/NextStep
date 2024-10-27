import { Outlet } from "react-router-dom";
import LeftNav from "../Components/LeftNav";
import NavBottom from "./NavBottom";
import { useState, useEffect } from "react";

const MainAppLayout = () => {
  const [name, Setname] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center">
      <div className="nav_container h-full min-w-[250px] hidden sm:flex">
        <LeftNav name={name} />
      </div>
      <main className="w-full h-full flex flex-col items-center justify-center overflow-y-auto">
        <Outlet />
      </main>
      <NavBottom />
    </div>
  );
};

export default MainAppLayout;
