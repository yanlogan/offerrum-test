import PropTypes from "prop-types";
import "./InfoCard.scss";

const InfoCard = ({ image, imageBlurred, text }) => {
  return (
    <div className="InfoCard">
      <div className="InfoCard__wrapper">
        <div className="InfoCard__top">
          {image && (
            <div className="InfoCard__image">
              <img
                src={image}
                alt="card image"
                className="InfoCard__imageFront"
              />
              <img
                src={imageBlurred}
                alt="card image blurred"
                className="InfoCard__imageBack"
              />
            </div>
          )}
          <p className="InfoCard__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  image: PropTypes.node.isRequired,
  imageBlurred: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoCard;
