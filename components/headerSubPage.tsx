const HeaderSubPage = ({
  headerText,
  subHeader,
}: {
  headerText: string;
  subHeader?: string[];
}) => (
  <div className="text-gray-100">
    <div className="xxl:hidden">
      <div className="bg-cover bg-[url('/freelance-kirjoittaja-tablet.webp')]">
        <div className="flex justify-end items-end md:items-center h-[320px] md:h-[640px] lg:h-[800px] pb-3">
          <div className="bg-teal p-4 md:p-8 text-xl md:text-5xl leading-snug rounded-l-xl">
            {headerText}
            {subHeader && (
              <ul className="text-sm mt-2 ml-4 md:ml-12">
                {subHeader.map((item, i) => (
                  <li key={`subheader-${i}`}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="hidden xxl:block">
      <div className="bg-cover bg-[url('/freelance-kirjoittaja-full.webp')]">
        <div className="flex justify-end items-center h-[800px]">
          <div className="bg-teal p-8 text-4xl leading-snug rounded-l-xl">
            {headerText}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderSubPage;
