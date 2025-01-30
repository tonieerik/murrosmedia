"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header";
import HeaderSubPage from "./headerSubPage";

const Menu = ({
  currentPage,
  headerText,
  subHeader,
}: {
  currentPage: string;
  headerText?: string;
  subHeader?: string[];
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isServicesMenuVisible, setIsServicesMenuVisible] = useState(false);
  const [isAboutMenuVisible, setIsAboutMenuVisible] = useState(false);

  const isCurrentPage = (page: string) =>
    currentPage === page ? "underline" : "no-underline";

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const MobileMenu = () => (
    <motion.div
      className="z-50 fixed top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMenuVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="mainMenu pl-6">
        <button
          className="absolute top-2 right-2 text-gray-100"
          onClick={toggleMenu}
          aria-label="Sulje valikko"
        >
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              fill="currentColor"
              d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
            />
          </svg>
        </button>
        <ul className="w-3/4 pt-24">
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-0"
              key="etusivu"
              href="/"
            >
              ETUSIVU{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-4 px-4">
            MITEN VOIN AUTTAA?
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-0 px-4"
              key="vastuullisuusviestinta"
              href="/vastuullisuusviestinta"
            >
              Vastuullisuusviestintä{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-0 px-4"
              key="viestinnan-palvelut"
              href="/viestinnan-palvelut"
            >
              Muut viestinnän palvelut{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li
            className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-4 px-4"
            key="portfolio"
          >
            TUTUSTUTAAN
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-0 px-4"
              key="vasuullisuus"
              href="/vastuullisuus"
            >
              Vastuullisuudesta{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-0 px-4"
              key="sananen-minusta"
              href="/minusta"
            >
              Sananen minusta{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-4"
              key="portfolio"
              href="/portfolio"
            >
              PORTFOLIO{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link
              className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block mt-4"
              key="yhdeydenotto"
              href="/#yhteydenotto"
            >
              OTA YHTEYTTÄ{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );

  return (
    <>
      {headerText ? (
        <HeaderSubPage headerText={headerText} subHeader={subHeader} />
      ) : (
        <Header />
      )}
      <div className="md:hidden ">
        <AnimatePresence>{isMenuVisible && <MobileMenu />}</AnimatePresence>
        <header className="w-full h-16 flex justify-between bg-orange drop-shadow-lg relative z-10">
          <a href="/">
            <Image
              src={"/logo-placeholder.png"}
              alt="logo"
              width="144"
              height="74"
              className="h-full"
              priority
            />
          </a>
          <button
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            aria-label="Avaa valikko"
          >
            <svg
              className="h-10 w-10 mr-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                fill="currentColor"
                d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
              />
            </svg>
          </button>
        </header>
      </div>
      <div className="hidden md:block">
        <header className="bg-orange">
          <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
            <nav className={`block flex items-center w-auto h-32`}>
              <Link
                className={`lg:block text-gray-100 text-lg lg:text-2xl md:inline-block md:mt-0 px-4 ${isCurrentPage(
                  ""
                )}`}
                key="etusivu"
                href="/"
              >
                ETUSIVU
              </Link>
              <div
                className={`lg:block text-gray-100 text-lg lg:text-2xl md:inline-block md:mt-0 px-4 no-underline select-menu ${
                  isServicesMenuVisible ? "active" : ""
                }`}
                onClick={() => {
                  setIsServicesMenuVisible(!isServicesMenuVisible);
                }}
              >
                <div className="text-gray-100">
                  <span className="cursor-pointer whitespace-nowrap">
                    MITEN VOIN AUTTAA?{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`icon align-middle ${
                        isServicesMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                    <i className="bx bx-chevron-down"></i>
                  </span>
                </div>

                <ul className="options hidden ">
                  <li className="option">
                    <Link
                      href="/vastuullisuusviestinta"
                      className={`option-text ${isCurrentPage(
                        "vastuullisuusviestinta"
                      )}`}
                    >
                      Vastuullisuusviestintä
                    </Link>
                  </li>
                  <li className="option">
                    <Link
                      href="/viestinnan-palvelut"
                      className={`option-text ${isCurrentPage(
                        "viestinnan-palvelut"
                      )}`}
                    >
                      Muut viestinnän palvelut
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`lg:block text-gray-100 text-lg lg:text-2xl md:inline-block md:mt-0 px-4 no-underline select-menu ${
                  isAboutMenuVisible ? "active" : ""
                }`}
                onClick={() => {
                  setIsAboutMenuVisible(!isAboutMenuVisible);
                }}
              >
                <div className="text-gray-100">
                  <span className="cursor-pointer whitespace-nowrap">
                    TUTUSTUTAAN{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`icon align-middle ${
                        isAboutMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  <i className="bx bx-chevron-down"></i>
                </div>

                <ul className="options hidden ">
                  <li className="option">
                    <Link href="/vastuullisuus" className="option-text">
                      Vastuullisuudesta
                    </Link>
                  </li>
                  <li className="option">
                    <Link href="/minusta" className="option-text">
                      Sananen minusta
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className={`lg:block text-gray-100 text-lg lg:text-2xl md:inline-block md:mt-0 px-4 ${isCurrentPage(
                  "portfolio"
                )}`}
                key="portfolio"
                href="/portfolio"
              >
                PORTFOLIO
              </Link>
              <Link
                className={`lg:block text-gray-100 text-lg lg:text-2xl md:inline-block md:mt-0 px-4 no-underline whitespace-nowrap`}
                key="yhdeydenotto"
                href="/#yhteydenotto"
              >
                OTA YHTEYTTÄ
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Menu;
