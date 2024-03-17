import { Metadata } from "next";
import Testimonials from "@/components/testimonials";
import { Testimonial } from "@/interfaces/testimonial";
import { client } from "@/utils/sanity";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description:
    "Haluatko viestinnällä lisää näkyvyyttä, asiakkaita tai myyntiä? Ota avuksesi freelancesisällöntuottaja. Taion vaikuttavia tekstejä, joilla on merkitystä.",
};

const Page = async () => {
  const testimonials = await client.fetch<Testimonial[]>(
    `*[_type == "testimonial"]`
  );

  return (
    <>
      <Menu currentPage="freelance-sisallontuottaja" />
      <div className="my-16 mx-24">
        <Intro />
        <Content1 />
      </div>
      <Testimonials testimonials={testimonials} />
      <Content2 />
    </>
  );
};

const Intro = async () => {
  return (
    <>
      <h1 className="text-teal">
        Freelancesisällöntuottaja, joka saa viestisi erottumaan massasta
      </h1>
      <p className="mb-4">
        Moi, olen Nelli, luovuudesta ammentava freelancesisällöntuottaja!
        Nykypäivänä laadukasta sisällöntuotantoa ei voi sivuuttaa, jos haluaa
        pärjätä digitaalisessa markkinoinnissa. Niinpä autan yritystäsi
        saavuttamaan asettamasi tavoitteet sisältömarkkinoinnin keinoin.
      </p>
      <p className="mb-4">
        Freelancerina toimiva sisällöntuottaja on joustava ja näppärä valinta,
        kun tarvitset osaavaa viestinnän ammattilaista säännölliseksi
        kumppaniksi tai silloin tällöin apukäsiksi. Viestinnän ulkoistaminen
        freelancesisällöntuottajalle kannattaa, koska se helpottaa yrityksesi
        arkea – ja säästää aikaa ja rahaa.
      </p>
      <p className="mb-4">
        Freelancesisällöntuottajana ideoin, suunnittelen, tuotan ja julkaisen
        vaikuttavia tekstisisältöjä eri viestintäkanaviin – sinun tarpeitasi ja
        toiveitasi kuunnellen. Kynästäni syntyvät niin blogiartikkelit,
        asiakasreferenssit kuin somepostaukset. Sisällöntuottajana kirjoitan
        jokaisen tekstin pieteetillä, jotta se vakuuttaa paitsi sinut myös
        asiakkaasi.
      </p>
      <p className="mb-4">
        Nautin sisällöntuottajan monipuolisesta ja luovasta työstä, kun saan
        päästää näppäimistön laulamaan. Uskon, että intohimo kirjoittamiseen on
        parasta polttoainetta tekstille kuin tekstille. Kielenkäytön
        ammattilaisena pyrin siihen, että vakuuttava sisältö houkuttelee
        luoksesi uusia asiakkaita ja sitouttaa jo olemassa olevia.
      </p>
      <p className="mb-4">
        Laitetaanko yrityksesi sisällöt viimeisen päälle kuntoon? Valitse
        freelancesisällöntuottaja, joka taikoo puolestasi vaikuttavia tekstejä –
        sellaisia, joilla on merkitystä ja arvoa.
      </p>
    </>
  );
};

const Content1 = async () => {
  return (
    <div className="mt-16 bg-white flex flex-col md:flex-row">
      <div className="mt-8 mb-2 md:mr-8 md:mt-0 md:mb-8 md:w-1/2">
        <h2 className="mb-4 text-teal text-xl font-bold">
          Yritykselle freelancesisällöntuottaja
        </h2>
        <ul>
          <li className="leading-6 mb-2">
            Kaipaatko vaikuttavaa sisällöntuotantoa esimerkiksi sosiaalisen
            median kanaviin, verkkosivuille tai uutiskirjeeseen? Eikö yrittäjän
            aika riitä kaikkeen markkinointiviestintään, jota haluaisit tehdä?
            Keskity rauhassa ydinosaamiseesi ja ulkoista sisältömarkkinointi
            minulle, ammattilaisen osaaviin käsiin.
          </li>
          <li className="leading-6 mb-2">
            Freelancesisällöntuottajana olen kustannustehokas vaihtoehto, sillä
            maksat vain tehdystä työstä – joko tuntihinnoitteluna tai
            projektikohtaisesti. Samalla vältät ylimääräisen säädön ja turhat
            kulut, koska et joudu maksamaan ylimääräisiä rekrytointikustannuksia
            ja muita perinteisiä työntekijäkuluja.
          </li>
          <li className="leading-6 mb-2">
            Parhaimmillaan freelancerista tulee yrityksellesi pitkäaikainen
            luottokumppani, joka tuntee liiketoimintasi ytimen ja osaa viestiä
            siitä yhtä tuloksekkaasti kuin sinä itse tai omat työntekijäsi.
            Kokeneena sisällöntuottajana osaan loihtia tekstejä, jotka jättävät
            muistijäljen ja saavat vastaanottajan toimimaan.
          </li>
        </ul>
      </div>
      <div className="my-4 md:mt-0 md:mb-8 md:w-1/2">
        <h2 className="mb-4 text-teal text-xl font-bold">
          Viestintätoimistolle freelancesisällöntuottaja
        </h2>
        <ul>
          <li className="leading-6 mb-2">
            Meinaako jatkuva kiire painaa päälle? Eivätkö yrityksesi
            in-house-tiimin kädet riitä kaikkiin viestintäprojekteihin?
            Kokeneena freelancesisällöntuottajana hyppään sujuvasti minkä
            tahansa viestintätoimiston remmiin – vaikka suoraan lennosta. Teen
            säännöllistä yhteistyötä eri alojen organisaatioiden kanssa.
          </li>
          <li className="leading-6 mb-2">
            Viestintäyrittäjänä minulla on vankka kokemus sisällöntuottajan
            lisäksi myös toimittajana, copywriterina ja kielenhuoltajana. Niinpä
            tunnen eri tekstilajit, kielenkäytön tehokeinot ja viestintäkanavat
            kuin omat taskuni. Olen viestinnän asiantuntija, jonka syttyy
            kirjoittamisesta ja tarinankerronnasta.
          </li>
          <li className="leading-6 mb-2">
            Kouluttaudun ja kehitän itseäni jatkuvasti kirjoittajana ja
            viestinnän asiantuntijana. Freelancesisällöntuottajana haluan pysyä
            aallonharjalla siitä, mitä viestinnän kentällä tapahtuu ja mitkä
            asiat trendaavat juuri nyt. Ajantasaisesta osaamisestani on hyötyä
            kaikenlaisissa sisällöntuotantoprojekteissa.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Content2 = () => (
  <div className="mx-0 mb-12 md:mx-16 bg-white my-12 px-8 flex flex-col">
    <h2 className="text-teal text-xl font-bold">
      Ota avuksesi freelancer, joka tekee vaikuttavaa sisältöä
    </h2>
    <p>
      Tekstien maailmassa seikkailen tutulla ja rakkaalla maaperällä, sillä
      kirjoittaminen on leipälajini ja tarinankerronta intohimoni. Freelancerina
      solahdan sujuvasti niin sisällöntuottajan, toimittajan, copywriterin kuin
      kielenhuoltajan saappaisiin. Millaista freelanceria sitten tarvitsetkin,
      tartun aina hommiin ammattilaisen ottein.
    </p>
    <span className="mt-6 text-xl text-orange font-bold">
      Freelancerina teen muun muassa kaikkea tätä:
    </span>

    <div className="bg-white flex flex-col md:flex-row">
      <div className="mt-8 mb-2 md:mr-8 md:mt-8 md:w-1/4">
        <h3 className="text-teal text-xl font-bold">Sisällöntuotanto</h3>
        <ul>
          <li>blogiartikkelit</li>
          <li>somejulkaisut</li>
          <li>yritystarinat</li>
          <li>asiakasreferenssit</li>
          <li>tiedotteet</li>
          <li>uutiskirjeet</li>
          <li>verkkosivutekstit</li>
        </ul>
      </div>
      <div className="my-4 md:mt-8 md:w-1/4">
        <h3 className="text-teal text-xl font-bold">Toimitustyö</h3>
        <ul>
          <li>henkilöjutut</li>
          <li>artikkelit</li>
          <li>reportaasit</li>
          <li>uutiset</li>
          <li>kolumnit</li>
          <li>referaatit</li>
          <li>raportit</li>
        </ul>
      </div>
      <div className="my-4 md:mt-8 md:w-1/4">
        <h3 className="text-teal text-xl font-bold">Copywriting</h3>
        <ul>
          <li>mainokset</li>
          <li>myyntitekstit</li>
          <li>advertoriaalit</li>
          <li>laskeutumissivut</li>
          <li>markkinointimateriaalit</li>
          <li>tuote- ja palvelukuvaukset</li>
        </ul>
      </div>
      <div className="my-4 md:mt-8 md:w-1/4">
        <h3 className="text-teal text-xl font-bold">Kielenhuolto</h3>
        <ul>
          <li>tietokirjat</li>
          <li>väitöskirjat</li>
          <li>opinnäytetyöt</li>
          <li>julkaisut</li>
          <li>oppaat</li>
        </ul>
      </div>
    </div>

    <p className="mt-6">
      Oletpa sitten yrittäjä tai viestintätoimiston edustaja ja kaipaat osaavaa
      viestintäalan freelanceria, olen täällä sinua varten. Tutustu tarkemmin
      Mandariinimedian{" "}
      <a
        href="/viestinnan-palvelut"
        className="text-orange font-bold hover:underline"
      >
        viestintäpalveluihin
      </a>
      &nbsp; ja&nbsp;
      <a href="/#portfolio" className="text-orange font-bold hover:underline">
        portfolioon
      </a>
      . Ota reippaasti yhteyttä, niin jutellaan lisää.
    </p>
  </div>
);

export default Page;
