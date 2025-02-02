import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = (
  <>
    <div>
      <a
        className="text-orange hover:underline"
        target="_blank"
        href="/tietosuojaseloste"
        rel="noreferrer"
      >
        Tietosuojaseloste
      </a>
    </div>
    <div>
      Verkkosivut:{" "}
      <a
        className="text-orange hover:underline"
        target="_blank"
        href="https://linkedin.com/in/toni-leppanen"
        rel="noreferrer"
      >
        Toni Leppänen
      </a>
      ,{" "}
      <span className="whitespace-nowrap">
        valokuvat:{" "}
        <a
          className="text-orange hover:underline"
          target="_blank"
          href="https://www.lkarlin.com/"
          rel="noreferrer"
        >
          Laura Karlin / L. Karlin Creative
        </a>
      </span>
    </div>
  </>
);

const Mobile = ({ className }: { className: string }) => (
  <div className={className}>
    <div className="footer border-t border-white bg-teal text-gray-100 p-2 md:p-4 flex justify-evenly">
      <a
        href="tel:+358407439782"
        className="text-3xl"
        aria-label="Soita Nellille"
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="icon align-middle"
          style={{ height: "26px" }}
        />
      </a>
      <a
        href="mailto:nelli@murrosmedia.fi"
        className="text-3xl"
        aria-label="Lähetä sähköpostia"
      >
        <FontAwesomeIcon icon={faEnvelope} className="align-middle" />
      </a>
      <a
        href="https://www.linkedin.com/in/leppanen-nelli"
        target="_blank"
        rel="noreferrer"
        className="text-3xl"
        aria-label="LinkedIn-profiili"
      >
        <FontAwesomeIcon icon={faLinkedin} className="align-middle" />
      </a>
      <a
        href="https://www.instagram.com/murrosmedia"
        target="_blank"
        rel="noreferrer"
        className="text-3xl"
        aria-label="Instagram-profiili"
      >
        <FontAwesomeIcon icon={faInstagram} className="align-middle" />
      </a>
    </div>

    <div className="border-t border-white bg-white text-teal text-right px-4">
      {links}
    </div>
  </div>
);

const Desktop = ({ className }: { className: string }) => (
  <div className={className}>
    <div className="footer border-t border-white bg-teal text-gray-100 flex justify-between">
      <ul className="m-0 flex items-center">
        <li className="m-0">
          <a
            href="tel:+358407439782"
            className="flex justify-content items-center mt-1 text-3xl ml-4"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="icon"
              style={{ height: "28px" }}
            />
            <span className="text-lg mt-2 ml-2 mr-4">040 7439 782</span>
          </a>
        </li>
        <li className="m-0">
          <a
            href="mailto:nelli@murrosmedia.fi"
            className="flex justify-content items-center mt-1 text-3xl ml-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon ml-2" />
            <span className="text-lg mt-2 ml-2 mr-4">nelli@murrosmedia.fi</span>
          </a>
        </li>
        <li className="m-0">
          <a
            href="https://www.linkedin.com/in/leppanen-nelli"
            target="_blank"
            rel="noreferrer"
            className="flex justify-content items-center mt-1 text-3xl ml-2"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon ml-2" />
            <span className="text-lg mt-2 ml-2 mr-4">leppanen-nelli</span>
          </a>
        </li>
        <li className="m-0">
          <a
            href="https://www.instagram.com/murrosmedia"
            target="_blank"
            rel="noreferrer"
            className="flex justify-content items-center mt-1 text-3xl ml-2"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon ml-2"
              style={{ height: "35px", marginBottom: "-2px" }}
            />
            <span className="text-lg mb-2 ml-2 mr-4">murrosmedia</span>
          </a>
        </li>
      </ul>
      <Image
        src="/logo-placeholder.png"
        loading="lazy"
        alt="logo"
        width="447"
        height="228"
        className="w-[144px] h-[74px] m-2"
      />
    </div>

    <div className="flex justify-between border-t border-white bg-white text-teal text-right px-4">
      {links}
    </div>
  </div>
);

const Footer = () => (
  <>
    <Mobile className="md:hidden" />
    <Desktop className="hidden md:block" />
  </>
);

export default Footer;
