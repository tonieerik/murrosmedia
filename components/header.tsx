const nameText = "NELLI LEPPÄNEN";
const headerText = (
  <>
    Viestinnän ammattilainen ja freelancesisällöntuottaja,
    <br />
    joka kulkee rinnallasi vastuullisuusviestinnän polulla
  </>
);

const Header = () => (
  <div className="text-gray-100">
    <div className="lg:hidden">
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
    <div className="hidden lg:max-xl:block">
      <div className="bg-teal flex">
        <div className="w-2/5 h-[380px] bg-cover bg-[url('/freelance-sisallontuottaja-tablet.png')]"></div>
        <div className="flex flex-col justify-end w-3/5 pb-12">
          <div className="text-4xl font-bold">{nameText}</div>
          <br />
          <div className="text-xl">
            <div>{headerText}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden xl:max-xxl:block">
      <div className="bg-teal flex">
        <div className="w-1/2 h-[530px] bg-cover bg-[url('/freelance-sisallontuottaja-full.png')]"></div>
        <div className="flex flex-col justify-end w-1/2 pb-12">
          <div className="text-4xl font-bold">{nameText}</div>
          <br />
          <div className="text-xl">
            <div>{headerText}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden xxl:block">
      <div className="bg-teal flex">
        <div className="w-1/2 h-[640px] bg-cover bg-[url('/freelance-sisallontuottaja-full.png')]"></div>
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
