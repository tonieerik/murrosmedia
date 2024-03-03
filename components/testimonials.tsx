"use client";

import { Testimonial } from "@/interfaces/testimonial";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonialHeading = "KOKEMUKSIA ASIAKKAILTANI";

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <section className="bg-orange flex flex-col justify-center items-center text-gray-100 font-bold text-md py-20">
    <div className="h-12 font-bold text-2xl mb-12">{testimonialHeading}</div>
    <Carousel
      autoPlay={true}
      interval={7000}
      infiniteLoop={true}
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
    >
      {testimonials.map((x, i) => (
        <div
          key={`testimonial-${i}`}
          className="text-lg font-normal pb-12 flex flex-col justify-center items-center md:px-12 lg:px-32 xl:px-64"
        >
          <i>&quot;{x.text}&quot;</i>
          <br />
          <br />
          <p className="font-semibold">
            {x.name}
            <br />
            {x.title}, {x.company}
          </p>
        </div>
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
