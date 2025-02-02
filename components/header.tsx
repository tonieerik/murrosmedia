import { Caveat } from "next/font/google";
import Image from "next/image";

const nameText = "Nelli Leppänen";
const headerText = <>Kuunteleva kumppanisi vastuullisuusviestintään</>;

const caveat = Caveat({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => (
  <div className="text-gray-100">
    <div className="lg:hidden">
      <div className="relative mobileHeaderImage">
        <Image
          src="/freelance-sisallontuottaja-mobile.webp"
          alt="Freelance Sisällöntuottaja"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="relative flex flex-col justify-end h-full">
          <div className="flex flex-row justify-end w-fit p-2 mx-2">
            <div className="w-full flex-col items-end bg-teal rounded">
              <div className="px-2 pt-2 pb-1 leading-none">
                <strong className={`${caveat.className} text-3xl`}>
                  {nameText}
                </strong>
              </div>
              <div className="px-2 pb-2 text-sm leading-snug">{headerText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:max-xl:block">
      <div className="bg-teal flex">
        <div className="w-2/5 h-[380px] relative">
          <Image
            src="/freelance-sisallontuottaja-tablet.webp"
            alt="Freelance Sisällöntuottaja"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col justify-end w-3/5 pb-12">
          <div className={`${caveat.className} text-6xl font-bold`}>
            {nameText}
          </div>
          <br />
          <div className="text-xl">
            <div>{headerText}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden xl:max-xxl:block">
      <div className="bg-teal flex">
        <div className="w-1/2 h-[530px] relative">
          <Image
            src="/freelance-sisallontuottaja-full.webp"
            alt="Freelance Sisällöntuottaja"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className={`${caveat.className} text-8xl`}>{nameText}</div>
          <br />
          <div className="text-2xl">
            <div>{headerText}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden xxl:block">
      <div className="bg-teal flex">
        <div className="w-1/2 h-[640px] relative">
          <Image
            src="/freelance-sisallontuottaja-full.webp"
            alt="Freelance Sisällöntuottaja"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className={`${caveat.className} text-4xl font-bold`}>
            {nameText}
          </div>
          <br />
          <div className="text-xl">
            <div>{headerText}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
