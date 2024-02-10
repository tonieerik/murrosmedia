const nameText = "NELLI LEPPÄNEN";
const headerText = (
  <>
    Viestinnän ammattilainen & freelancesisällöntuottaja,
    <br />
    jolla on kirjoittajan sydän ja ajattelijan mieli
  </>
);

const Header = () => (
  <div className="text-gray-100">
    <div className="md:hidden">
      <div className="bg-cover bg-[url('/freelance-sisallontuottaja-mobile.jpg')]">
        <div className="flex flex-col justify-end h-64 mobileHeaderImage">
          <div className="flex flex-row justify-end w-fit p-2 mx-2">
            <div className="w-full flex-col items-end bg-teal rounded">
              <div className="px-2 pt-2 pb-1 leading-none">
                <strong>{nameText}</strong>
              </div>
              <div className="px-2 pb-2 text-sm leading-snug">{headerText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:max-lg:block">
      <div className="bg-cover bg-[url('/freelance-sisallontuottaja-tablet.jpg')]">
        <div className="flex flex-col justify-end h-64 tabletHeaderImage">
          <div className="flex flex-row justify-end w-full p-2">
            <div className="w-3/5 flex-col items-end bg-teal rounded">
              <div className="px-2 pt-2 pb-1 leading-none">
                <strong>{nameText}</strong>
              </div>
              <div className="px-2 pb-2 text-sm leading-snug">
                <div>{headerText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">
      <div className="bg-teal flex">
        <div className="w-1/2 h-[640px] bg-cover bg-[url('/freelance-sisallontuottaja.png')]"></div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className="text-4xl font-bold">{nameText}</div>
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
