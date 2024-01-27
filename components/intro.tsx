const content = [
  "Hei, oletko vailla luovaa sisällöntuottajaa, pesunkestävää toimittajaa, tehokasta copywriteria tai tarkkasilmäistä kielenhuoltajaa? Mainiota, että löysit juuri minut!",
  "Olen Nelli, vastuullisen viestinnän puolestapuhuja. Kielen ja viestinnän asiantuntijana olen valjastanut ammattitaitoni siihen, että maailmasta tulisi ainakin piirun verran parempi paikka meille kaikille. Haluan, että luonnolla, ihmisillä ja eläimillä on mahdollisuus kukoistaa. ",
  "Vakuuttava, rehellinen ja läpinäkyvä vastuullisuusviestintä on yksi voimallinen työkalu tähän. Tavoitteeni on, että ennen pitkää vastuullisuusviestinnästä tulee jokaisessa organisaatiossa sellaista arkipäiväistä ja kaiken kattavaa viestintää, jota ilman pyörät eivät rullaa.",
  "Viestinnän ammattilaisena ja freelancesisällöntuottajana autan sinua kertomaan viestisi niin, että se iskostuu taatusti vastaanottajan mieleen. Oletpa sitten yrityksen, yhdistyksen tai median edustaja, satsaan aina siihen, että jokaisella tekstillä on merkitystä ja arvoa.",
  "Ota siis avuksesi kielenkäytön ja kirjoittamisen spesialisti, joka loihtii puolestasi tekstejä – sellaisia, jotka tekevät taatusti hyvää. Koska kirjoittaminen on leipälajini ja tarinankerronta intohimoni, osaan punoa vastuulliset tekosi vaikuttaviksi teksteiksi.",
  "Oletpa vasta vastuullisuustyön alkutaipaleella tai se on jo kiinteä osa bisnestäsi, rohkaisen ja innostan sinua eteenpäin. Voimme suunnitella viestintäkuvioita yhdessä lähtöruudusta alkaen tai voit tilata minulta suoraan kaikkea aina asiakastarinoista blogiartikkeleihin. ",
  "Kun haluat tekstien avulla ainutlaatuista näkyvyyttä, myönteistä mainetta tai lisää sitoutuvia asiakkaita, olen täällä sinua varten. Lähdetkö kanssani vastuullisen viestinnän polulle?",
];

const Intro = () => {
  return (
    <section className="mx-8 my-8 md:mx-48 md:my-16">
      {content.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default Intro;
