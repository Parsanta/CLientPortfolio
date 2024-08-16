export default function SideBar() {
  return (
    <aside className="fixed inset-0  p-12 w-36 max-h-screen flex flex-col justify-between z-10">
      <a href="#home" className="home">
        <img src="{Logo}" alt="logo" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="flex flex-col gap-y-6">
            <li className="nav_item">
              <a href="#home" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-user-follow"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#Project" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-energy"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#resume" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#certifications" className="text-2xl transition duration-300  text-blue-500 hover:text-blue-900">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="text-2xl transition duration-300 text-blue-500 hover:text-blue-900">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
