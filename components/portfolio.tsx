import Image from "next/image";
import React from "react";
import { PortfolioText } from "@/interfaces/portfolioText";
import { client, urlFor } from "@/utils/sanity";

const Content = async () => {
  const portfolioTexts = await client.fetch<PortfolioText[]>(
    `*[_type == "portfolioText"]`
  );

  return (
    <div className="w-full bg-white flex pb-8 px-8 flex-row md:px-0 md:flex-col">
      <div className="bg-white p-8 md:p-16">
        <h2 className="text-xl text-teal">Tutustu teksteihini</h2>
        <div className="pb-8">
          Mandariinimedian portfolioon olen listannut muutamia esimerkkejä
          erityyppisistä teksteistä, jotka on julkaistu verkossa. Jos haluat
          lukea lisää erilaisia juttunäytteitäni, voin laittaa kirjoittamiani
          tekstejä sähköpostitse lukuun.
        </div>
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2">
          {portfolioTexts
            .sort((a, b) => a.order - b.order)
            .map((text, i) => (
              <div key={`portfolioText-${i}`} className="lg:mt-8 mb-4 lg:pl-8">
                <Image
                  src={urlFor(text.image)}
                  alt={text.altText}
                  width={1000}
                  height={484}
                  className="mb-4"
                />
                <p className="mb-2 text-md font-bold">
                  <a
                    className="underline"
                    href={text.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.title}
                  </a>
                </p>
                <p className="text-sm">{text.lead}</p>
              </div>
            ))}
        </div>
        {/* <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/Pohjoisen-polut-Saara-Atula.webp"
              alt="Saara Atula"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.pohjoisenpolut.fi/retkiruokabloggaaja-saara-atula-kertoo-millainen-e/6038635"
                target="_blank"
                rel="noreferrer"
              >
                Pohjoisen Polut: Talviretken herkkuja
              </a>
            </p>
            <p className="text-sm">
              Retkiruokabloggaaja Saara Atula kertoo, millainen eväs on talvella
              parhaimmillaan. Lisäksi hän paljastaa, mikä yllättävä herkku
              maistuu myös kovalla pakkasella.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/Duunitori-Dakota-Robin.webp"
              alt="Dakota Robin"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://duunitori.fi/tyoelama/dakota-robin-monimuotoisuus"
                target="_blank"
                rel="noreferrer"
              >
                Duunitori: Dakota Robin on kohdannut urallaan syrjintää ja
                naureskelua – nyt hän tekee töitä sen eteen, ettei kukaan kokisi
                samaa
              </a>
            </p>
            <p className="text-sm">
              Jokainen työyhteisö, jossa on ihmisiä, on automaattisesti
              monimuotoinen. Ihmisoikeuskouluttaja ja DEI-asiantuntija Dakota
              Robin tietää tämän paremmin kuin hyvin. Hän on itse oppinut
              luovimaan työelämässä suomalais-turkkilaisena transmiehenä, jolla
              on vaikea lukihäiriö.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/OP-Bertta-Hakkinen.webp"
              alt="Bertta Häkkinen"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://www.op-media.fi/yrittajyys/kiertotaloudesta-vaatebisneksen-uusi-musta2/"
                target="_blank"
                rel="noreferrer"
              >
                OP Media: Kiertotaloudesta vaatebisneksen uusi musta &ndash;
                Rekki kannustaa nyt vastuullisen kuluttamisen tielle
              </a>
            </p>
            <p className="text-sm">
              Kestävä kehitys, kiertotalous ja vastuullisuus ovat nykypäivän
              ilmiöitä, jotka näkyvät entistä vahvemmin vaatebisneksessä. Second
              hand -vaatteistaan tunnettu Rekki tahtoo luoda vastuullista
              kulutuskulttuuria myös ulkomailla.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/Kasvuopen-Nina-Rautiainen.webp"
              alt="Nina Rautiainen"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/vastuullisen-liiketoiminnan-maihinnousu-on-rytinalla-kaynnissa/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Vastuullisen liiketoiminnan maihinnousu on rytinällä
                käynnissä
              </a>
            </p>
            <p className="text-sm">
              Nyt yritys kuin yritys voi saavuttaa etulyöntiaseman markkinoilla,
              kun se huomioi elintärkeät vastuullisuuskysymykset
              liiketoiminnassaan.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mt-8 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/Kasvuopen-yrityskulttuuri.webp"
              alt="Yrityskulttuuri"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://kasvuopen.fi/blogi/kannustava-yrityskulttuuri-parantaa-tyontekijoiden-tyytyvaisyytta-ja-suorituskykya/"
                target="_blank"
                rel="noreferrer"
              >
                Kasvu Open: Kannustava yrityskulttuuri parantaa työntekijöiden
                tyytyväisyyttä ja suorituskykyä
              </a>
            </p>
            <p className="text-sm">
              Parhaimmillaan yrityskulttuuri on voima, joka auttaa sekä yritystä
              että yksilöä menestymään. Vaikka samantyyppiset toimintatavat
              toistuvat eri yrityksissä, jokaisen yrityksen kulttuuri on aina
              uniikki – onhan se työntekijöidensä summa.
            </p>
          </div>
          <div className="lg:mt-8 lg:ml-4 mb-4 lg:pl-8 lg:w-1/2">
            <Image
              src="/portfolio/Yritystehdas-Oona-Tarvainen-ja-Anna-Fagel.webp"
              alt="Oona Tarvainen ja Anna Fågel"
              width={1000}
              height={484}
              className="mb-4"
            />
            <p className="mb-2 text-md font-bold">
              <a
                className="underline"
                href="https://yritystehdas.fi/blogi/opiskelukavereista-bisneskumppaneiksi-valmennuksesta-oppia-yrittajyyteen "
                target="_blank"
                rel="noreferrer"
              >
                Yritystehdas: Opiskelukavereista bisneskumppaneiksi –
                valmennuksesta oppia yrittäjyyteen
              </a>
            </p>
            <p className="text-sm">
              Korkeakouluopinnot ja työnteon voi yhdistää saumattomasti, kun
              perustaa oman yrityksen jo opiskeluaikana. Valmistuttuaan Anna
              Fågel ja Oona Tarvainen hyppäsivät suoraan täysipäiväisiksi
              yrittäjiksi. Yrittäjävalmennus tuki kaksikkoa yrittäjyyden
              alkutaipaleella.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <Content />
  </section>
);

export default Portfolio;
