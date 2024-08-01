"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import { TextGenerateEffect } from "./TextGenerateEffect";


interface BlogpageProps {
  title: string;
  image: string;
  description: string;
  date: string;
  title1: string;
  image1: string;
  description1: string;
  date1: string;
  title2: string;
  image2: string;
  description2: string;
  date2: string;
  title3: string;
  image3: string;
  description3: string;
  date3: string;
 
}

export const Blogpage: React.FC<BlogpageProps> = ({
  title,
  image,
  description,
  date,
  title1,
  image1,
  description1,
  date1,
  title2,
  image2,
  description2,
  date2,
  title3,
  image3,
  description3,
  date3,
}) => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={`${image}`}
            alt="main"
            className="object-cover w-full h-64 rounded-xl sm:h-96 lg:col-span-7 dark:bg-gray-500 shadow-xl"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3>
              <TextGenerateEffect
                words={title}
                className="text-md font-semibold sm:text-4xl group-hover:underline group-focus:underline"
              />
            </h3>
            <span className="text-xs dark:text-gray-600">{date}</span>
            <p>{description}</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
              src={`${image1}`}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
                {title1}
              </h3>
              <span className="text-xs dark:text-gray-600">{date1}</span>
              <p>{description1}</p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
              src={`${image2}`}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
                {title2}
              </h3>
              <span className="text-xs dark:text-gray-600">{date2}</span>
              <p>{description2}</p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
              src={`${image3}`}
              alt="Second"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
                {title3}
              </h3>
              <span className="text-xs dark:text-gray-600">{date3}</span>
              <p>{description3}</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="#about">
            <MagicButton
              title="Load more..."
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
