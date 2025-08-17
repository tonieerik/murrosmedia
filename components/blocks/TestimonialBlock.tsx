import { client } from "@/lib/sanity";
import { Testimonial } from "@/interfaces/testimonial";
import Testimonials from "../testimonials";

const TestimonialBlock = async ({ value }: { value: string }) => {
  const testimonials = await client.fetch<Testimonial[]>(
    `*[_type == "testimonial"]`
  );

  return <Testimonials title={value} testimonials={testimonials} />;
};

export default TestimonialBlock;
