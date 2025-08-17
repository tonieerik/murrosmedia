"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header";
import HeaderSubPage from "./headerSubPage";

const SubmenuItem = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span
      style={{
        fontSize: "8px",
        marginRight: "6px",
        padding: "0",
      }}
    >
      ▶
    </span>
    {label}
  </div>
);

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

  const isCurrentPage = (page: string) =>
    currentPage === page ? "current-page" : "";

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
      <nav className="mainMenu pl-2 text-lg text-gray-100">
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
        <ul className="w-[90%] pt-12">
          <li onClick={toggleMenu}>
            <Link key="etusivu" href="/">
              ETUSIVU{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu" onClick={toggleMenu}>
            <Link key="vastuullisuusviestinta" href="/vastuullisuusviestinta">
              VASTUULLISUUSVIESTINTÄ{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="sisallontuotanto" href="/sisallontuotanto">
              Sisällöntuotanto{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="hakukoneoptimointi" href="/hakukoneoptimointi">
              Hakukoneoptimointi{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="copywriting" href="/copywriting">
              Copywriting{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="viestinnan-sparraus" href="/viestinnan-sparraus">
              Viestinnän sparraus{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="oikoluku" href="/oikoluku">
              Oikoluku{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li className="submenu-item" onClick={toggleMenu}>
            <Link key="toimittajan-tyo" href="/toimittajan-tyo">
              Toimittajan työ{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link key="vastuullisuus" href="/vastuullisuus">
              VASTUULLISUUS{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link key="portfolio" href="/portfolio">
              PORTFOLIO{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="icon align-middle -rotate-90 w-3"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link key="yhdeydenotto" href="/#yhteydenotto">
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
              src="/murrosmedia-logo.png"
              alt="logo"
              width="110"
              height="56"
              className="mx-2 my-1"
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
          <div className="flex flex-wrap items-center justify-evenly max-w-5xl mx-auto">
            <nav className={`block flex items-center w-auto h-32`}>
              <ul>
                <li>
                  <Link className={isCurrentPage("")} key="etusivu" href="/">
                    ETUSIVU
                  </Link>
                </li>
                <li>
                  <span>VIESTINTÄPALVELUT ▾</span>
                  <ul className="dropdown shadow-lg">
                    <li>
                      <Link
                        href="/vastuullisuusviestinta"
                        className={isCurrentPage("vastuullisuusviestinta")}
                      >
                        VASTUULLISUUSVIESTINTÄ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sisallontuotanto"
                        className={`sub-item ${isCurrentPage(
                          "sisallontuotanto"
                        )}`}
                      >
                        <SubmenuItem label="Sisällöntuotanto" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hakukoneoptimointi"
                        className={`sub-item ${isCurrentPage(
                          "hakukoneoptimointi"
                        )}`}
                      >
                        <SubmenuItem label="Hakukoneoptimointi" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/copywriting"
                        className={`sub-item ${isCurrentPage("copywriting")}`}
                      >
                        <SubmenuItem label="Copywriting" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/viestinnan-sparraus"
                        className={`sub-item ${isCurrentPage(
                          "viestinnan-sparraus"
                        )}`}
                      >
                        <SubmenuItem label="Viestinnän sparraus" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/oikoluku"
                        className={`sub-item ${isCurrentPage("oikoluku")}`}
                      >
                        <SubmenuItem label="Oikoluku" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/toimittajan-tyo"
                        className={`sub-item ${isCurrentPage(
                          "toimittajan-tyo"
                        )}`}
                      >
                        <SubmenuItem label="Toimittajan työ" />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className={isCurrentPage("vastuullisuus")}
                    key="vastuullisuus"
                    href="/vastuullisuus"
                  >
                    VASTUULLISUUS
                  </Link>
                </li>
                <li>
                  <Link
                    className={isCurrentPage("portfolio")}
                    key="portfolio"
                    href="/portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link key="ota-yhteytta" href="/#yhteydenotto">
                    OTA YHTEYTTÄ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Menu;
