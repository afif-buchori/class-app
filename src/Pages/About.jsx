import React from "react";
import MyLayouts from "../components/Layouts/MyLayouts";

function About() {
  return (
    <MyLayouts>
      <div className="w-full h-36 md:h-80 bg-slate-500"></div>
        <div className="w-full max-w-screen-lg px-2 mx-auto flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="avatar -mt-20">
                <div className="w-40 mask mask-squircle">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <p className="font-bold text-lg md:text-2xl mt-4">Muchamd Afif Buchori</p>
          </div>

          <div className="flex flex-col">
            <p>Web Developer | Node JS | Express JS | React JS</p>
          </div>
        </div>
    </MyLayouts>
  );
}

export default About;
