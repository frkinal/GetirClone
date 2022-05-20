import React from "react";
import { Link } from "react-router-dom";

import { BiGlobe, BiUser, BiUserPlus } from "react-icons/bi";

export default function Header() {
  return (
    <div className="w-full bg-brand-color">
      <div className="w-fit mx-auto flex bg-brand-color">
        <div className="w-full justify-between flex">
          <nav className="h-12 flex items-end left-0 gap-x-1 text-lg font-semibold">
            <Link
              className="h-11 pl-4 pr-4 rounded-t-lg focus:bg-primary-brand-color focus:text-brand-yellow  text-white/80 transition-all block flex items-center hover:text-opacity-100 "
              to="/"
            >
              getir
            </Link>
            <Link
              className="h-11  pl-4 pr-4 rounded-t-lg focus:bg-primary-brand-color  focus:text-brand-yellow  text-white/80 transition-all flex items-center hover:text-opacity-100 "
              to="/yemek"
            >
              getir
              <span className=" text-white/80 transition-all flex items-center hover:text-opacity-100">
                yemek
              </span>
            </Link>
            <Link
              className="h-11  pl-4 pr-4 rounded-t-lg focus:bg-primary-brand-color focus:text-brand-yellow  text-white/80 transition-all flex items-center hover:text-opacity-100 "
              to="/buyuk"
            >
              getir
              <span className=" text-white/80 transition-all flex items-center hover:text-opacity-100">
                büyük
              </span>
            </Link>
            <Link
              className="h-11  pl-4 pr-4 rounded-t-lg focus:bg-primary-brand-color focus:text-brand-yellow  text-white/80 transition-all flex items-center hover:text-opacity-100 "
              to="/su"
            >
              getir
              <span className=" text-white/80 transition-all flex items-center hover:text-opacity-100">
                su
              </span>
            </Link>
            <Link
              className="h-11  pl-4 pr-4 rounded-t-lg focus:bg-primary-brand-color focus:text-brand-yellow  text-white/80 transition-all flex items-center hover:text-opacity-100 "
              to="/carsi"
            >
              getir
              <span className=" text-white/80 transition-all flex items-center hover:text-opacity-100">
                çarşı
              </span>
            </Link>
          </nav>
          <div className="h-12 flex mx-auto px-4 gap-x-3 text-sm font-semibold">
            <a
              className="h-11 rounded-t-lg text-white/80 transition-all flex items-center hover:text-opacity-100"
              href="#"
            >
              <BiGlobe />
              Türkçe (TR)
            </a>
            <a
              className="h-11 rounded-t-lg text-white/80 transition-all flex items-center hover:text-opacity-100"
              href="#"
            >
              <BiUser />
              Giriş Yap{" "}
            </a>
            <a
              className="h-11 rounded-t-lg text-white/80 transition-all flex items-center hover:text-opacity-100"
              href="#"
            >
              <BiUserPlus />
              Kayıt ol
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
