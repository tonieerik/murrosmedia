"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <header className="w-full h-16 bg-orange drop-shadow-lg">
          <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
            <Image
              src={"/mandariinimedia_logo_vaaka_valkea.png"}
              alt="logo"
              width="144"
              height="74"
              className="m-2 w-32"
              priority
            />

            <div
              className={`${
                !isMenuVisible ? "hidden" : ""
              } border border-gray-200 rounded-lg list-none fixed top-0 right-0 pl-4 pr-10 pt-16 pb-4 bg-orange z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 list-none`}
            >
              <p className="md:hidden z-90 fixed top-2 right-5">
                <a
                  className="text-right text-white text-4xl"
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  &times;
                </a>
              </p>

              <p>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                  key="mitä teen"
                  href="/#mita-teen"
                >
                  Miten voin auttaa?
                </Link>
              </p>
              <p>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                  key="kuka olen"
                  href="/#kuka-olen"
                >
                  Tutustutaan!
                </Link>
              </p>
              <p>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                  key="portfolio"
                  href="/#portfolio"
                >
                  Portfolio
                </Link>
              </p>
              <p>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                  key="yhdeydenotto"
                  href="/#yhteydenotto"
                >
                  Otahan yhteyttä
                </Link>
              </p>
            </div>

            <div className="flex items-center md:hidden">
              <button
                className="-mt-2 text-white text-4xl font-bold opacity-90 hover:opacity-100 duration-300"
                onClick={() => setIsMenuVisible(!isMenuVisible)}
              >
                &#9776;
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="hidden md:block">
        <header className="bg-orange">
          <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
            <nav className={`block flex items-center w-auto h-32`}>
              <Link
                className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                key="mitä teen"
                href="/#mita-teen"
              >
                MITEN VOIN AUTTAA?
              </Link>
              <Link
                className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                key="kuka olen"
                href="/#kuka-olen"
              >
                TUTUSTUTAAN!
              </Link>
              <Link
                className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                key="portfolio"
                href="/#portfolio"
              >
                PORTFOLIO
              </Link>
              <Link
                className="lg:block text-gray-100 text-xl lg:text-2xl no-underline md:inline-block md:mt-0 px-4"
                key="yhdeydenotto"
                href="/#yhteydenotto"
              >
                OTAHAN YHTEYTTÄ
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Menu;
