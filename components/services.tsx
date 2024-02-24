import React from "react";

const serviceTitle = "VASTUULLINEN SISÄLLÖNTUOTANTO";
const serviceDescription = [
  "Haluatko tuottaa asiakkaallesi lisäarvoa informatiivisilla, houkuttelevilla ja viihdyttävillä tekstisisällöillä? Sisällöntuottajana kerron yrityksesi vastuullisuusteemoista ymmärrettävästi ja vetävästi – hakukoneoptimoinnin ja kohderyhmän tarpeet huomioiden.",
];
const serviceListHeader = "Tutustu vastuullisuusviestinnän palveluihini:";
const serviceListItems = [
  "Vastuullisuusraportti helppolukuiseen kuntoon",
  "Sisällöntuotanto vastuullisuusraportin pohjalta",
  "Vastuullisuusviestinnän sparraus ja suunnittelu",
];
const serviceCta = "Tutustu palveluun";
const serviceUrl = "#";
const otherServicesTitle = "MUUT VIESTINNÄN PALVELUT";
const otherServices = [
  {
    heading: "Toimitustyö",
    text: "Kaipaatko sykähdyttävän henkilöjutun tai asiallisen artikkelin kirjoittajaa? Toimittajana etsin kiinnostavia näkökulmia ja tarkastelen maailmaa uteliaasti. Haluan lisätä ihmisten tietoisuutta tärkeistä vastuullisuuden teemoista faktatiedon ja tarinoiden avulla.",
    cta: "Tutustu palveluun",
    url: "#",
  },
  {
    heading: "Copywriting",
    text: "Oletko vailla ratkaisukeskeisiä tekstejä, joiden myötä asiakkaasi ryhtyy tekemään jotain, kuten ostaa tuotteesi tai palvelusi? Copywriterina toteutan tuloksellisia ja myyviä tekstejä, mutta vältän epäeettistä kikkailua ja perusteettomia markkinointiväittämiä.",
    cta: "Tutustu palveluun",
    url: "#",
  },
  {
    heading: "Kielenhuolto",
    text: "Tahdotko tekstistäsi ymmärrettävän ja helppolukuisen – sellaisen, joka saa vastaanottajan nyökyttelemään tyytyväisenä? Kielenhuoltajana pidän huolen siitä, ettei teksti vilise esimerkiksi turhan nokkelia ilmaisuja, vaikeita termejä tai epäloogista kerrontaa.",
    cta: "Tutustu palveluun",
    url: "#",
  },
];

const MainServices = () => (
  <div>
    <h1 className="text-teal text-2xl">{serviceTitle}</h1>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <p>{serviceDescription}</p>
      </div>
      <div className="w-full md:w-1/2 md:ml-8">
        <h2 className="text-teal text-xl font-bold">{serviceListHeader}</h2>
        <ul className="mt-3">
          {serviceListItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href={serviceUrl}
            className="bg-orange text-white rounded font-bold p-2"
          >
            {serviceCta}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const OtherServices = () => {
  return (
    <div className="mt-12 mb-8">
      <h1 className="text-teal text-2xl mt-12">{otherServicesTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherServices.map((service) => (
          <div key={service.heading} className="">
            <h2 className="text-teal text-xl font-bold">{service.heading}</h2>
            <p>{service.text}</p>
            <a
              href={service.url}
              className="bg-orange text-white rounded font-bold p-2"
            >
              {service.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full bg-white py-12 px-12">
      <MainServices />
      <hr className="mt-16" />
      <OtherServices />
    </div>
  );
};

const Mobile = ({ className }: { className: string }) => (
  <div className={className}>
    <Content />
  </div>
);

const Desktop = ({ className }: { className: string }) => (
  <div className={className}>
    <div className="self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
      MITEN&nbsp;VOIN&nbsp;AUTTAA?
    </div>
    <Content />
  </div>
);

const Services = () => {
  return (
    <section className="bg-orange flex mx-0" id="mita-teen">
      <Mobile className="md:hidden" />
      <Desktop className="hidden md:flex" />
    </section>
  );
};

export default Services;
