"use client";
import { infoComponentsData, storiesData, featuresData } from "./data";
import "./page.css";

import StoryComponent from "./_components/Story/Story";
import FeatureComponent from "./_components/Feature/Feature";
import { useLayoutEffect } from "react";
import Link from "next/link";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <InfoSection data={infoComponentsData} />
      <StoriesSection data={storiesData} />
      <FeaturesSection data={featuresData} />
    </>
  );
};

const InfoSection = ({ data }) => {
  return (
    <>
      <section className="info__section">
        {data.map((obj) => {
          return <InfoComponent obj={obj} key={obj.id} />;
        })}
      </section>
    </>
  );
};

const InfoComponent = ({ obj }) => {
  const { id, title, text, image, link } = obj;
  return (
    <div className={`info__component info__component--${id}`}>
      <div className="info__text-box">
        <h2 className="component__heading">{title}</h2>
        <p className="component__text">{text}</p>
        <div className="link__box">
          <p className="component__link" data-color={link.color}>
            <Link href={link.href}>{link.text}</Link>
          </p>
          <div className={`link-arrow--${id}`}>
            <svg
              width="42"
              height="14"
              viewBox="0 0 42 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7H41.864" stroke="red" />
              <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="red" />
            </svg>
          </div>
        </div>
      </div>

      <div className="info__component-img">
        <picture className="info__img">
          <source srcSet={image.mobile} media="(max-width: 23.4em)" />
          <source srcSet={image.tablet} media="(max-width: 47.8em)" />
          <source srcSet={image.desktop} media="(max-width: 90em)" />
          <img src={image.desktop} alt="image" />
        </picture>
      </div>
    </div>
  );
};

const StoriesSection = ({ data }) => {
  return (
    <section className="stories__section">
      {data.slice(0, 4).map((obj) => {
        return <StoryComponent obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

const FeaturesSection = ({ data }) => {
  return (
    <section className="features__section">
      {data.slice(0, 3).map((obj) => {
        return <FeatureComponent obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

export default Home;
