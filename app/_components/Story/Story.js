import "./Story.css";

const StoryComponent = ({ obj, showDate }) => {
  const { title, author, image, date } = obj;

  return (
    <div className="story__component">
      <picture className="story__img">
        <source srcSet={image.mobile} media="(max-width: 23.5em)" />
        {/* <source srcSet={image.desktop} media="(max-width: 90em)" /> */}
        <source srcSet={image.desktop} media="(max-width: 90em)" />
        <img src={image.desktop} alt="image" />
      </picture>

      <div className="story__text-box">
        {showDate && <p className="story__date">{date}</p>}
        <h4 className="story__title">{title}</h4>
        <p className="story__author">by {author}</p>
        <span className="story--line"></span>
        <div className="link--box">
          <p className="story__read">Read story</p>
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
  );
};

export default StoryComponent;
