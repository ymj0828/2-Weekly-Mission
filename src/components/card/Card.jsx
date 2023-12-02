import "./Card.css";
import noImage from "../../assets/folder-preview-no-image.svg";

const Card = ({ data }) => {
  const { createdAt, description, imageSource, url } = data;

  const createdDate = new Date(createdAt);

  const formatDate = `${createdDate.getFullYear()}. ${
    createdDate.getMonth() + 1
  }. ${createdDate.getDate()}`;

  const currentDate = new Date();

  const timeDifference = currentDate - createdDate;
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(monthsAgo / 12);

  let timeAgo;
  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo} minutes ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo} hours ago`;
  } else if (daysAgo < 30) {
    timeAgo = `${daysAgo} days ago`;
  } else if (monthsAgo < 12) {
    timeAgo = `${monthsAgo} months ago`;
  } else {
    timeAgo = `${yearsAgo} years ago`;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="image-wrap">
        <img src={imageSource || noImage} alt="링크 미리보기 이미지" />
      </div>
      <div className="link-information-wrap">
        <span className="link-created-ago">{timeAgo}</span>
        <span className="link-description">{description}</span>
        <span className="link-created-time">{formatDate}</span>
      </div>
    </a>
  );
};

export default Card;
