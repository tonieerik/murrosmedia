import ServiceBlock from "./ServiceBlock";

const ServiceBlockWithSidebar = async ({
  value,
  sidebarHeader,
}: {
  value: string;
  sidebarHeader: string;
}) => (
  <section className="bg-orange flex mx-0" id="viestintapalvelut">
    <div className="hidden md:flex flex-col justify-center items-center w-32">
      <p className="transform -rotate-90 origin-center text-white text-xl text-center tracking-widest whitespace-nowrap">
        {sidebarHeader.toUpperCase()}
      </p>
    </div>
    <div className="flex-1 overflow-auto bg-white">
      <div className="mx-8 my-8 md:mx-16 md:my-16 lg:mx-32">
        <ServiceBlock value={value} />
      </div>
    </div>
  </section>
);

export default ServiceBlockWithSidebar;
