import { useNavigate } from "react-router";

export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold">NewsSphere</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <ul className="flex space-x-6 text-sm">
          <li><a onClick={()=> {
              navigate('/about')
            }} className="hover:text-white transition hover:cursor-pointer">About</a></li>
          <li><a onClick={()=> {
              navigate('/contact')
            }} className="hover:text-white transition hover:cursor-pointer">Contact</a></li>
          <li><a onClick={()=> {
              navigate('/privacy')
            }} className="hover:text-white transition hover:cursor-pointer">Privacy</a></li>
          <li><a href="#" className="hover:text-white transition">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}
