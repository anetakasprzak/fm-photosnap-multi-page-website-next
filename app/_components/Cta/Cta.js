import Link from "next/link";
import "./Cta.css";

const CtaComponent = ({ data }) => {
  const { image } = data;

  return (
    <section className="cta">
      <div className="img__container">
        <picture className="cta__img">
          <source srcSet={image.mobile} media="(max-width: 23.4em)" />
          <source srcSet={image.tablet} media="(max-width: 47.8em)" />
          <source srcSet={image.desktop} media="(max-width: 90em)" />
          <img src={image.desktop} alt="image" />
        </picture>
      </div>

      <div className="cta__text--box">
        <h1 className="cta__heading">
          We&apos;re in beta. Get your invite today!
        </h1>
        <div className="link__box">
          <p className="cta__invite__link invite__link">
            <Link href="/invite">Get an invite</Link>
          </p>
          <div className="footer__link-arrow">
            <svg
              width="42"
              height="14"
              viewBox="0 0 42 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7H41.864" stroke="white" />
              <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaComponent;
