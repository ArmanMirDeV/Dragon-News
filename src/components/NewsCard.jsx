
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    author,
    total_view,
    rating,
    details,
  } = news;

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body">
        <div className="flex justify-between items-center mt-2">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-gray-500">
                {formatDate(author.published_date)}
              </p>
            </div>
          </div>

          {/* Bookmark & Share Icons */}
          <div className="flex items-center gap-2 text-gray-500 text-lg cursor-pointer">
            <FaRegBookmark className="hover:text-gray-900 transition" />
            <CiShare2 className="hover:text-gray-900 transition" />
          </div>
        </div>
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        {/* Image */}
        <figure>
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full h-52 object-cover p-2 rounded-2xl"
          />
        </figure>

        {/* Content */}

        {/* Description */}
        <p className="text-sm mt-3 text-gray-700">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>

        {/* Read more */}
        <div  className="mt-2">
          <Link to={`/news-Details/${id}`} className="text-orange-500 font-semibold text-sm hover:underline cursor-pointer">
            Read More
          </Link>
        </div>

        {/* Footer: Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <span key={i} className="text-sm">
                <FaStar/>
              </span>
            ))}
            <span className="ml-1 text-gray-700 text-sm">
              {rating.number}.0
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
