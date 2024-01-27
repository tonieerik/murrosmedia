const Quotation = ({ content }: { content: string[] }) => (
  <section className="bg-teal flex justify-center items-center text-gray-100 font-bold tracking-wider leading-10 h-64 text-2xl md:h-56 md:text-xl md:px-10">
    <center>
      <i className="w-1/2">
        {content.map((paragraph, i) => (
          <p key={`quotation-${i}`}>{paragraph}</p>
        ))}
      </i>
    </center>
  </section>
);

export default Quotation;
