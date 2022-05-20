import { useState, useEffect } from "react";
import FooterMenus from "../api/FooterMenus.json";
import FooterMenusCard from "./ui/FooterMenusCard";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
  const [footerMenuData, setFooterMenuData] = useState([]);

  useEffect(() => {
    setFooterMenuData(FooterMenus);
  }, []);
  return (
    <div className="w-full bg-white mt-10">
      <div className="w-10/12 mx-auto grid grid-cols-4 pt-10">
        <section>
          <nav className="grid gap-y-4">
            <h6 className="text-lg text-primary-brand-color">
              Getir'i indirin!
            </h6>
            <a href="#" className="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </a>
            <a href="#" className="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </a>
            <a href="#" className="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </a>
          </nav>
        </section>
        {footerMenuData.map((footerMenu, index) => (
          <FooterMenusCard key={index} {...footerMenu} />
        ))}
      </div>
      <div className="w-10/12 h-20 mx-auto flex justify-between border-t border-gray-100 mt-6 pt-6">
        <div className="text-md text-gray-700 flex gap-x-8">
          &copy; 2022 Getir
          <a
            href="#"
            className="text-primary-brand-color hover:underline relative before:w-1 before:h-1 before:bg-black before:absolute before:-left-3 before:top-2 before:translate-y-1/2 before:rounded-full"
          >
            Bilgi Toplumu Hizmetleri
          </a>
        </div>
        <nav className="flex gap-x-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 transition-colors hover:bg-primary-brand-color/10 hover:text-primary-brand-color"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 transition-colors hover:bg-primary-brand-color/10 hover:text-primary-brand-color"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 transition-colors hover:bg-primary-brand-color/10 hover:text-primary-brand-color"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className=" h-8 rounded-lg px-4 flex items-center justify-center text-gray-500 transition-colors hover:bg-primary-brand-color/10 hover:text-primary-brand-color border border-gray-100"
          >
            <RiGlobalLine size={20} />
            Türkçe(TR)
          </a>
        </nav>
      </div>
    </div>
  );
}
