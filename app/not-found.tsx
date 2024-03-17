import Menu from "@/components/menu";

const NotFoundPage = () => (
  <>
    <Menu currentPage="ei-loydy" headerText="Sivua ei löydy" />

    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 text-sm">
        <h1>HUPS!</h1>
        <p className="text-xl">
          Sivustolta ei löydy tällaista sivua. Kokeiletko uudestaan
          ylänavigaation kautta löytää etsimäsi.
        </p>
      </div>
    </div>
  </>
);

export default NotFoundPage;
