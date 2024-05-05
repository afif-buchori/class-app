import { Link } from "react-router-dom";
import MyLayouts from "../components/Layouts/MyLayouts";
import imgGroup from "../assets/img-group.png";

function App() {
  return (
    <MyLayouts>
      <div className="w-full max-w-screen-lg flex flex-col mx-auto px-4 my-10 gap-4">
        <Link to="/about" className="flex gap-4">
          <div className="avatar">
              <div className="w-28 mask mask-squircle">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>
          <div className="flex flex-col">
            <p className="sm:text-lg font-bold">Muchamad Afif Buchori</p>
            <a href="mailto:4fifbuchori@gmail.com">4fifbuchori@gmail.com</a>
            <a href="">+62 822 1133 8805</a>
            <p className="text-xs sm:text-sm opacity-60">Hello World..</p>
          </div>
        </Link>
        <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3">
        <Link to="/team" className="flex-1 flex flex-col">
          <img
            src={imgGroup}
            alt="image-group"
            className="w-full aspect-video object-cover"
          />
          <p className="sm:text-lg font-bold opacity-70 my-2">Pembagian Kelompok</p>
          <p className="text-xs sm:text-sm">Produk ini adalah sebuah aplikasi yang dirancang untuk melakukan pembagian kelompok secara acak. Dengan fitur-fitur yang disesuaikan, aplikasi ini memudahkan pengguna untuk mengelompokkan peserta atau anggota dengan cepat dan efisien, menghemat waktu dan upaya yang diperlukan untuk pembagian secara manual.</p>
        </Link>
        </div>
      </div>
    </MyLayouts>
  );
}

export default App;
