import React from "react";
import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";
function MainLayouts() {
  return (
    <>
      <main>
        <Novbar />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default MainLayouts;
