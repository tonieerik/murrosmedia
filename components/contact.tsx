"use client";

import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";
import SanityImage from "./SanityImage";

const Content = ({
  content,
  image,
  imageAlt,
}: {
  content: PortableTextBlock;
  image?: any;
  imageAlt?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const clearForm = () => {
    reset();
    setSent(false);
  };

  const onSubmit = (data: any) => {
    setLoading(true);
    setSent(false);

    fetch(`/api/sendform`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    })
      .then((res) => {
        setLoading(false);

        if (res.ok) {
          setSent(true);
          setTimeout(clearForm, 3000);
        } else {
          throw new Error(`Failed to send email: ${res.statusText}`);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  const portableTextComponents = {
    marks: {
      link: ({ children, value }: { children: any; value?: any }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        const target = !value.href.startsWith("/") ? "_blank" : undefined;

        return (
          <a
            className="font-bold text-orange hover:underline"
            href={value.href}
            target={target}
            rel={rel}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="bg-white w-full px-8 py-8 md:px-24 md:py-16">
      <div className="flex">
        <div className="w-full md:w-2/3">
          <PortableText value={content} components={portableTextComponents} />
          <hr className="mt-4 mb-10 ml-2 mr-8" />
          <form className="block">
            <div className="w-full sm:flex">
              <div className="sm:flex-grow sm:mr-6">
                <label htmlFor="name">Nimi</label>
                <input
                  id="name"
                  type="text"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("name")}
                />

                <label htmlFor="email">Sähköpostiosoite *</label>
                <input
                  id="email"
                  type="text"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />

                <label htmlFor="phone">Puhelinnumero</label>
                <input
                  id="phone"
                  type="tel"
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("phone")}
                />
              </div>
              <div className="sm:flex-grow mr-6">
                <label htmlFor="message">Viesti *</label>
                <textarea
                  id="message"
                  rows={8}
                  cols={30}
                  className="block mb-4 p-2 w-full border border-gray-300 rounded focus:outline-0 focus:border-gray-800"
                  disabled={loading || sent}
                  {...register("message", {
                    required: true,
                    minLength: 1,
                  })}
                />

                <button
                  className={`${
                    error ? "bg-error" : sent ? "bg-teal" : "bg-orange"
                  } text-white px-4 py-2 rounded opacity-80 hover:opacity-100 hover:cursor-pointer`}
                  onClick={handleSubmit(onSubmit)}
                  disabled={error || loading || sent}
                >
                  {error
                    ? "Virhe lähettäessä viestiä. Laitatko sähköpostia, kiitos."
                    : sent
                    ? "Viesti lähetetty"
                    : loading
                    ? "Lähetetään "
                    : "Lähetä viesti"}{" "}
                  <PulseLoader loading={loading} color="white" size="5px" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/3 ml-8 xs:max-md:hidden">
          <SanityImage
            src={image}
            alt={imageAlt || ""}
            width={1334}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
};

const Contact = ({
  title,
  content,
  image,
  imageAlt,
}: {
  title: string;
  content: any;
  image?: any;
  imageAlt?: string;
}) => {
  return (
    <section className="bg-orange flex mx-0" id="yhteydenotto">
      <div className="hidden md:flex flex-col justify-center items-center w-32">
        <p className="transform -rotate-90 origin-center text-white text-xl text-center tracking-widest whitespace-nowrap">
          {title.toUpperCase()}
        </p>
      </div>
      <div className="flex-1 overflow-auto bg-white py-12 px-12">
        <Content content={content} image={image} imageAlt={imageAlt} />
      </div>
    </section>
  );
};

export default Contact;
