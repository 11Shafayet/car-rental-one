import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '/images/logo.png';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [hamActive, setHamActive] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setActiveNav(pathname);
    }
  }, [pathname, setActiveNav]);

  const navData = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Cars',
      link: '/cars',
    },
    {
      title: 'About Us',
      link: '/about-us',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <>
      {/* topbar */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-x-8">
            <p className="flex justify-center items-center tracking-widest gap-x-2">
              <FaPhoneAlt />
              +8801638-719578
            </p>
            <p className="flex justify-center items-center tracking-widest gap-x-2">
              <FaEnvelope />
              11shafayet@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-white shadow-light py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-x-4">
            <Link to="/">
              <img src={logo} alt="logo" className="max-w-[50px] h-auto" />
            </Link>
            <div
              className="block md:hidden group cursor-pointer  w-11 h-6 relative"
              onClick={() => setHamActive((prev) => !prev)}
            >
              <div className="w-11 h-0.5 bg-black block group-hover:-translate-x-3 duration-500 " />
              <div className="w-11 h-0.5 bg-black block translate-y-1.5 group-hover:translate-x-1 duration-500 " />
              <div className="w-11 h-0.5 bg-black block  translate-y-3 group-hover:-translate-x-3 duration-500 " />
            </div>
            <ul className="hidden md:flex justify-center items-center gap-x-4">
              {navData.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={item.link}
                      className={`font-semibold uppercase tracking-wider py-4 px-5 flex justify-center items-center rounded-md hover:bg-primary hover:text-white duration-500 ${
                        activeNav === item.link && 'bg-primary text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
