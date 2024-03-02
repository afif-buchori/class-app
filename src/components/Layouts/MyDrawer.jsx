/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function MyDrawer({ isDrawerOpen, handleDrawer }) {
  return (
    <div className="drawer drawer-end absolute top-10 right-0 z-10">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={handleDrawer}
      />
      {/* <div className="drawer-content">
        Page content here
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary"
        >
          Open drawer
        </label>
      </div> */}
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/team">Pembagian Kelompok</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyDrawer;
