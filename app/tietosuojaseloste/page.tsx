import { Metadata } from "next";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Tietosuojaseloste | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
};

const Page = () => (
  <>
    <Menu currentPage="tietosuojaseloste" headerText="Tietosuojaseloste" />
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 text-sm">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-wide uppercase mt-1 font-extrabold text-orange sm:text-5xl sm:tracking-tight lg:text-6xl">
            Tietosuojaseloste
          </h1>
        </div>
        <div className="mt-12 text-gray-500">
          Tämä on Murrosmedian EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen
          rekisteri- ja tietosuojaseloste. Tietosuojaselosteessa kerromme,
          kuinka käsittelemme asiakkaidemme henkilötietoja. Asiakkaan on
          hyväksyttävä tietosuojaselosteen ehdot käyttääkseen Murrosmedian
          tarjoamia palveluita.
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">1. Rekisterinpitäjä</h2>
          <p className="mt-2">
            Murrosmedia
            <br />
            Y-tunnus: 3157377-6
            <br />
            Wilhelm Schildtin katu 28 A 13, 40740 Jyväskylä
            <br />
            nelli@murrosmedia.fi
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">2. Rekisteriasioita hoitava henkilö</h2>
          <p className="mt-2">
            Nimi: Nelli Leppänen
            <br />
            Yhteystiedot: nelli@murrosmedia.fi, 040 743 9782
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">3. Rekisterin nimi</h2>
          <p className="mt-2">Murrosmedian asiakasrekisteri</p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            4. Henkilötietojen käsittelyn tarkoitus
          </h2>
          <p className="mt-2">
            Henkilötietojen kerääminen auttaa meitä palvelemaan sinua paremmin.
            Käsittelemme tietojasi asiakas- tai yhteistyösuhteen hoitamiseen tai
            mahdollisesti palveluiden markkinoimiseen.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">5. Keiden tietoja käsittelemme?</h2>
          <p className="my-2">
            Käsittelemme tietojasi tämän tietosuojaselosteen mukaisesti, jos
            olet
          </p>
          <ul className="list-disc ml-6">
            <li className="leading-snug mb-0">asiakkaamme</li>
            <li className="leading-snug mb-0">potentiaalinen asiakkaamme</li>
            <li className="leading-snug mb-0">yhteistyökumppanimme.</li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">6. Mitä tietoja käsittelemme?</h2>
          <p className="my-2">
            Käsittelemme vain välttämättömiä henkilötietoja. Näitä tietoja ovat:
          </p>
          <ul className="list-disc ml-6">
            <li className="leading-snug mb-0">nimi</li>
            <li className="leading-snug mb-0">sähköpostiosoite</li>
            <li className="leading-snug mb-0">puhelinnumero</li>
            <li className="leading-snug mb-0">laskutustiedot.</li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">7. Mistä saamme tiedot?</h2>
          <p className="mt-2">
            Keräämme tietosi, kun laitat viestiä Murrosmedian verkkosivujen
            kautta. Tallennamme myös tietoja, joita olemme saaneet
            sähköpostitse, puhelimitse, sosiaalisen median kanavien kautta,
            sopimuksista, asiakastapaamisista ja muista tilanteista, joissa
            asiakas luovuttaa tietojaan. Jos olet potentiaalisen yrityksen
            edustaja, saatamme kerätä tietosi julkisesti verkossa, esimerkiksi
            yrityksesi verkkosivuilta.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">8. Kuka muu käsittelee tietojasi?</h2>
          <p className="mt-2">
            Murrosmedian ulkopuolisilla tahoilla ei ole oikeutta käyttää meiltä
            saamiaan tietoja. Emme luovuta tai jaa tietojasi kolmansille
            osapuolille. Emme koskaan myy tietojasi kenellekään.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">9. Tietojen käsittelyaika</h2>
          <p className="mt-2">
            Käsittelemme tietoja vain niin kauan kuin tarvitsemme niitä
            rekisterin tarkoituksen mukaisessa toiminnassa. Voit pyytää
            tietojesi poistamista rekisteristä lähettämällä pyynnön
            sähköpostitse osoitteeseen nelli@murrosmedia.fi.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">10. Tietojen suojaamisen periaate</h2>
          <p className="mt-2">
            Huolehdimme tarvittavista turvatoimista, etteivät henkilötietosi
            joudu vääriin käsiin. Käsittelemme henkilötietoja vain
            tietoturvallisiksi todetuilla tietojärjestelmillä, jotka vastaavat
            tyypillisimpiin tietoturvariskeihin. Rajaamme pääsyn tietoihin vain
            niille henkilöille, jotka ovat siihen oikeutettuja.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            11. Tietojen siirto EU:n tai ETA:n ulkopuolelle
          </h2>
          <p className="mt-2">
            Murrosmedia ei siirrä tietoja EU:n tai ETA:n ulkopuolelle.
          </p>
          <p className="mt-2">
            Poikkeus tietojen siirtoon on Googlen palveluissa, joissa
            rekisteritietoja (ei arkaluontoisia) säilytetään. Google Inc. voi
            tallentaa käyttöehtojensa mukaisesti tallennettuja tietoja EU:n
            ulkopuoliseen datakeskukseen. Google on sitoutunut noudattamaan
            EU-komission mallisopimuslausekkeita taatessaan riittävän
            tietosuojatason käsittelemilleen tiedoille (Data Processing and
            Security Terms 2.0). Palvelun käyttö perustuu asetus (EU) 2016/679,
            22 § mukaisesti palveluntoimittajan Privacy Shield- sertifikaattiin.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            12. Rekisteröityjen oikeudet henkilötietojen käsittelyssä
          </h2>

          <p className="my-2">
            Sinulla on seuraavat oikeudet, joiden käyttämistä koskevat pyynnöt
            tulee tehdä osoitteeseen nelli@murrosmedia.fi:
          </p>
          <ul className="list-disc ml-6">
            <li className="leading-snug mb-0">
              oikeus tarkastaa ja saada kopio, mitä sinua koskevia tietoja
              henkilörekisteriin on tallennettu
            </li>
            <li className="leading-snug mb-0">
              oikeus pyytää sinua koskevien henkilötietojen korjaamista
            </li>
            <li className="leading-snug mb-0">
              oikeus vaatia sinua koskevien henkilötietojen poistamista
            </li>
            <li className="leading-snug mb-0">
              oikeus kieltää sinuun kohdistuva suoramarkkinointi
            </li>
            <li className="leading-snug mb-0">
              oikeus tehdä valitus valvontaviranomaiselle
            </li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">13. Evästeet</h2>
          <p className="mt-2">
            Vieraillessasi verkkosivuillamme Murrosmedia voi kerätä tietoa
            palvelujen käyttöön, käyttömääriin ja muuhun tilastointiin liittyen
            sekä käsitellä ja analysoida kyseistä tietoa. Palvelujen sisällön
            käytön seuraamiseksi sekä niiden käytön helpottamiseksi ja
            nopeuttamiseksi Murrosmedia voi käyttää ns. evästeitä (cookies).
          </p>
          <p className="mt-2">
            Eväste on lyhyt tekstitiedosto, jonka verkkopalvelin tallentaa
            käyttäjän kiintolevylle. Tällä tavalla keräämme tietoja siitä, miten
            ja milloin palveluja käytetään, jotta voimme kehittää niitä edelleen
            käyttäjäystävällisemmiksi. Evästeiden avulla kerättävillä tiedoilla
            ei voida tunnistaa yksittäisiä käyttäjiä. Edellytämme, että hyväksyt
            evästeiden käytön voidaksesi käyttää Murrosmedian sähköisiä
            palveluja.
          </p>

          <p className="mt-2">
            Murrosmedian evästeiden käytön tarkoituksena on analysoida ja
            kehittää palveluita. Evästeitä voidaan käyttää myös mm. Murrosmedian
            internetsivujen kävijäseurantaan sekä mainonnan tehokkuuden
            mittaukseen. Käytämme evästeiden käsittelyyn analytiikkaohjelmia,
            eikä käyttäjästä kerätä minkäänlaisia henkilötietoja. Evästeiden
            avulla seuraamme mm. kuinka kauan sivujen latautuminen vie aikaa ja
            millaista tietoa kävijät etsivät sekä paikannamme sellaisia sivuston
            osia, jotka eivät välttämättä toimi niin kuin pitäisi, jotta virheet
            voidaan korjata.{" "}
          </p>
          <p className="mt-2">
            Murrosmedia voi käyttää sivustojen käytöstä kerättyä tietoa myös
            selaimelle kohdennetun mainonnan tai sisällön tuottamiseen.
            Murrosmedia voi luoda kohderyhmiä sen perusteella, millä
            internetsivustoilla tietyt selaimet ovat vierailleet. Näille
            kohderyhmille Murrosmedia voi esittää niitä todennäköisesti
            kiinnostavaa mainontaa tai sisältöä.
          </p>
          <p className="mt-2">
            Murrosmedia.fi-sivustolla käytämme Google Analytics
            -verkkoanalytiikkajärjestelmää.
          </p>
          <div className="mt-2">
            <p className="my-2">Analyyttisten evästeiden avulla voimme</p>
            <ul>
              <li className="leading-snug mb-0">
                saada tilastotietoja verkkosivustossa vierailuista, kuten
                käyttäjien lukumääristä, eri sivujen käytöstä, eri sivuilla
                vietetystä ajasta, käyttäjien selailutavoista
              </li>
              <li className="leading-snug mb-0">
                parantaa verkkosivustoa tarjoamalla räätälöityä sisältöä ja
                mukautettua tietoa
              </li>
              <li className="leading-snug mb-0">
                ymmärtää, miten ihmiset reagoivat esimerkiksi
                sähköpostikampanjoihimme (sähköpostin avaamisajankohta ja
                kestoaika jne.).
              </li>
            </ul>
          </div>
          <p className="mt-2">
            Evästeistä voi kieltäytyä. Huomaa, että evästeistä kieltäytyminen
            voi tietyissä tapauksissa johtaa toimintojen teknisiin rajoituksiin
            verkkosivuillamme.
          </p>
          <p className="mt-2">
            Useimpien selainohjelmien Ohje-valikosta saat tietoa siitä, miten
            selaintasi estetään hyväksymästä uusia evästeitä, miten saat
            selaimesi ilmoittamaan uuden evästeen vastaanottamisesta tai miten
            estät evästeiden käytön kokonaan. Lisäksi voit poistaa käytöstä tai
            tuhota vastaavanlaiset tiedot, joita selaimien lisäosat voivat
            käyttää, muuttamalla lisäosan asetuksia tai käymällä sen valmistajan
            verkkosivustossa. Voit myös estää seurannan asettamalla opt out
            -evästeen.
          </p>
        </div>

        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            14. Muilta sivustoilta upotettu sisältö
          </h2>
          <p className="mt-2">
            Tämän sivuston artikkelit voivat sisältää upotettua sisältöä
            (esimerkiksi artikkeleita). Toisilta sivustoilta tuodun upotetun
            sisällön avaaminen on verrattavissa siihen, että vierailija itse
            kävisi kolmannen osapuolen sivustolla. Nämä sivustot voivat kerätä
            tietoa sinusta, käyttää evästeitä, upottaa kolmannen osapuolen
            seurantaevästeitä ja monitoroida vuorovaikutustasi upotetun sisällön
            kanssa – mukaan lukien vuorovaikutuksen seuranta, jos olet
            kirjautunut käyttäjänä sivustolle.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Page;
