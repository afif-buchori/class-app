import { Link } from "react-router-dom";
import MyLayouts from "../components/Layouts/MyLayouts";
import imgGroup from "../assets/img-group.png";

function App() {
  return (
    <MyLayouts>
      <div className="w-full max-w-screen-lg flex flex-col mx-auto px-4 my-10">
        <Link to="/team" className="w-60 flex flex-col">
          <img
            src={imgGroup}
            alt="image-group"
            className="w-full aspect-video object-cover"
          />
          <p>Pembagian Kelompok</p>
        </Link>
      </div>
    </MyLayouts>
  );
}

export default App;
