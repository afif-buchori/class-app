/* eslint-disable react/prop-types */
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function MyLayouts({ children }) {
  return (
    <main className="w-screen min-h-screen flex flex-col pt-14">
      <MyHeader />
      {children}
      <MyFooter />
    </main>
  );
}

export default MyLayouts;
