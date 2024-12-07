import React from "react";
import logo from "../../assets/images/logo.png";
import { truncate } from "../../utils/LengthTruncate";
import { useNavigate } from "react-router-dom";

const Card = ({ article }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/detail", { state: { article } });
  }
  return (
    <div className="border-2 w-[260px] sm:w-[300px] md:w-[320px] min-h-[420px] border-zinc-700 rounded-xl p-4 hover:scale-105 duration-300 ease-linear hover:shadow-md hover:shadow-blue-600 cursor-pointer" onClick={handleClick}>
     <p className="text-xl font-bold text-purple-600">{article.title || article.headline.main}</p>
      <div>
        <p className="font-bold text-lg">{article?.source?.name || article?.source || "Unknown"}</p>
        <p className="text-gray-400 font-semibold overflow-hidden">
          Author: <span className="text-gray-300">{article.author || article.byline?.original}</span>
        </p>
      </div>
      <div className="h-[150px] w-full flex justify-center items-center overflow-hidden my-5">
        <img alt="" src={article.urlToImage || article.multimedia ? article.urlToImage || "https://static01.nyt.com/"+article.multimedia[0]?.url : logo} className=" h-full object-contain border border-gray-800 p-2" />
      </div>
      <p className="w-full text-gray-500">
        {article.description || article.abstract ? truncate(article?.description?.toString() || article.abstract, 120) : ""}
      </p>
    </div>
  );
};

export default Card;
