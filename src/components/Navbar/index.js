import { useState } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './style.css'

/* === Responsive, Themed, Scroll-Aware Navbar === */
const Navbar = () => {
  const [activeTab, setActive] = useState('Home');

  return (
    <ThemeContext.Consumer>
      {value => {
        const onToggleTheme = () => value.changeTheme();

        return (
          <nav className={`navbar navbar-expand-lg sticky-top ${value.theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
            <div className="container-fluid" style={{ padding: "10px 50px" }}>
              
              {/* === Theme Switch Toggle === */}
              <div className="theme-toggler">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={onToggleTheme}
                    checked={value.theme === 'dark'}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              {/* === Offcanvas Hamburger Button === */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* === Offcanvas Side Menu === */}
              <div
                className={`offcanvas offcanvas-start ${value.theme === 'light' ? 'text-bg-light' : 'text-bg-dark'}`}
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Sections</h5>
                  <button
                    type="button"
                    className={`btn-close ${value.theme === 'light' ? 'btn-close-dark' : 'btn-close-white'}`}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                {/* === Navigation Links === */}
                <div className="offcanvas-body" data-bs-dismiss="offcanvas">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

                    {/* === Home === */}
                    <li className={`nav-item ${value.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <button
                        className={`nav-link ${activeTab === "Home" ? 'active' : ''}`}
                        onClick={() => {
                          setActive("Home");
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Home
                      </button>
                    </li>

                    {/* === About === */}
                    <li className={`nav-item ${value.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <a
                        className={`nav-link ${activeTab === "About" ? 'active' : ''}`}
                        href="#about"
                        onClick={() => setActive("About")}
                      >
                        About
                      </a>
                    </li>

                    {/* === Projects === */}
                    <li className={`nav-item ${value.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <a
                        className={`nav-link ${activeTab === "Projects" ? 'active' : ''}`}
                        href="#projects"
                        onClick={() => setActive("Projects")}
                      >
                        Projects
                      </a>
                    </li>

                    {/* === Contact === */}
                    <li className={`nav-item ${value.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <a
                        className={`nav-link ${activeTab === "Contact" ? 'active' : ''}`}
                        href="#contact"
                        onClick={() => setActive("Contact")}
                      >
                        Contact
                      </a>
                    </li>

                    {/* === External CTA === */}
                    <li>
                      <a
                        href="https://www.linkedin.com/messaging/compose/?recipient=narasimhachitturi"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-button"
                      >
                        Hire Me
                      </a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar;
