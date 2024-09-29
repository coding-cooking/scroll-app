"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

const data = [
  {
    title: "Aged Care",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-1.svg",
    icon: "/Icon-1.svg",
  },
  {
    title: "Medical Centres",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-2.svg",
    icon: "/Icon-2.svg",
  },
  {
    title: "Health Clubs",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-3.svg",
    icon: "/Icon-3.svg",
  },
  {
    title: "Early Learning",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-4.svg",
    icon: "/Icon-4.svg",
  },
  {
    title: "Training",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-5.svg",
    icon: "/Icon-5.svg",
  },
  {
    title: "Supplies",
    description:
      "This is the short description text that runs over two lines like this lorem ipsum dolor sit amet. Maecenas lobortis elementum mauris.",
    image: "/Image-6.svg",
    icon: "/Icon-6.svg",
  },
];

const backgroundColors = [
  "bg-gradient-to-tr from-greenStart to-greenEnd",
  "bg-gradient-to-tr from-blueStart to-blueEnd",
  "bg-gradient-to-tr from-yellowStart to-yellowEnd",
  "bg-gradient-to-tr from-purpleStart to-purpleEnd",
  "bg-gradient-to-tr from-redStart to-redEnd",
  "bg-gradient-to-tr from-orangeStart to-orangeEnd",
];

export const Service = () => {
  const lenis = useLenis();
  const pageRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarContainerRef = useRef<HTMLDivElement>(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pageContainer = pageRef.current;
    const cardsContainer = cardsContainerRef.current;
    const titleContainer = titleContainerRef.current;
    const progressBarContainer = progressBarContainerRef.current;

    if (
      pageContainer &&
      cardsContainer &&
      titleContainer &&
      progressBarContainer
    ) {
      ScrollTrigger.create({
        trigger: pageContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self: { progress: number }) => {
          const progress = self.progress * 100;
          if (progressBarRef.current) {
            progressBarRef.current.style.height = `${progress}%`;
            const newColorIndex = Math.round(self.progress * 5);
            setCurrentColorIndex(newColorIndex);
          }
        },
      });

      ScrollTrigger.create({
        trigger: titleContainer,
        start: "top 150px",
        end: "bottom +=700",
        pin: true,
      });

      ScrollTrigger.create({
        trigger: ".card-container",
        start: "top 20%",
        end: () => "+=3000",
        pin: true,
        pinSpacing: false,
      });

      const sections = Array.from(document.querySelectorAll(".card"));
      sections.forEach((section, index) => {
        gsap.to(section, {
          yPercent: -100 * index,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: () => "+=400",
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) =>
          trigger.kill()
        );
      };
    }
  }, []);

  return (
    <div
      ref={pageRef}
      className={`w-full min-h-screen pt-[180px] pb-[120px] px-[40px] flex flex-col xl:flex-row gap-[78px] transition-all duration-300 bg-rotate-45 ${backgroundColors[currentColorIndex]}`}
    >
      <div ref={titleContainerRef}>
        <div className="flex-3 h-[252px] flex flex-col gap-y-[40px] justify-between items-start">
          <div>
            <h1 className="text-3xl lg:text-[56px] lg:leading-[60px] text-title">
              Our Services
            </h1>
            <p className="text-xl leading-8 text-text">
              We provide integrated healthcare services under a single provider
              to the healthcare category
            </p>
          </div>
          <div className="flex gap-x-[12px]">
            <button className="w-[174px] h-[64px] rounded-[100px] bg-button text-base font-medium text-white">
              Find a Service
            </button>
            <button
              className="w-[64px] h-[64px] rounded-[100px] bg-white"
              onClick={() => lenis?.scrollTo("#last")}
            >
              <Image
                src="/Arrow.svg"
                alt="next page"
                width={13}
                height={7}
                className="mx-auto"
                unoptimized
              />
            </button>
          </div>
        </div>
        <div
          ref={progressBarContainerRef}
          className="hidden xl:block mt-[80px] w-[4px] h-[234px] bg-slate-50 rounded-sm"
        >
          <div className="w-full bg-bar rounded-sm" ref={progressBarRef}></div>
        </div>
      </div>
      <div ref={cardsContainerRef}>
        <div className="card-container">
          {data.map((item, index) => (
            <div
              key={item.title}
              className={`card card-${index} sm:w-full lg:w-[834px] lg:h-[492px] mx-auto mb-8`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={834}
                height={280}
              />
              <div className="relative bg-white">
                <div className="absolute top-[-38px] left-[24px]">
                  <Image
                    src={item.icon}
                    alt={`img-${item.title}`}
                    width={76}
                    height={76}
                    unoptimized
                  />
                </div>
                <div className="pt-[52px] pb-[48px] px-[40px] flex flex-col md:flex-row justify-between items-start md:items-end sm: gap-4 ">
                  <div className="flex flex-col gap-4 md:max-w-[530px] md:h-[112px]">
                    <h1 className="text-4xl text-title">{item.title}</h1>
                    <p className="text-lg font-light text-text line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <button className="shrink-0 relative w-14 h-14 lg:w-[64px] lg:h-[64px]">
                    <Image src="/Button.svg" alt="button" fill unoptimized />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="last" className="xl:mt-[3000px]"></div>
    </div>
  );
};
