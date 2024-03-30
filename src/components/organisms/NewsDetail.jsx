import React from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../atoms/BackButton";

const NewsDetail = () => {
  const location = useLocation();
  const article = location.state.article;
  console.log(article);
  return (
    <div className="w-full flex flex-col items-center p-2 md:p-10">
      <BackButton />
      <div className="w-[95%] md:w-[70%] md:px-6 flex flex-col">
        <h1 className="text-2xl font-semibold text-gray-200">
          {" "}
          <span className=" animate-pulse text-change">#</span>{" "}
          <span className="text-gray-400">{article?.title || article?.headline?.main}</span>
        </h1>
        <div className="mt-3 flex flex-wrap flex-col xs:flex-row justify-between w-[90%] overflow-hidden">
          <p className="text-md md:text-lg text-gray-400 font-semibold">
            {article?.author || article?.byline?.original || "Unknown"}
          </p>
          <p>
            Published:{" "}
            <span className="text-gray-300 font-medium">
              {new Date(article.publishedAt || article.pub_date).toLocaleDateString()}
            </span>
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <img
            src={article.urlToImage ||  article.multimedia ? article.urlToImage || "https://static01.nyt.com/"+article.multimedia[0].url : ""}
            alt={article.title}
            className="max-h-[500px] object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="mt-10 self-start">
          <p className="text-blue-500 text-3xl font-bold">Introduction</p>
          <p className="text-gray-300 text-lg">{article?.description || article?.abstract}</p>
        </div>
        <div className="my-5">
          <p className="text-blue-500 text-3xl font-bold">Content</p>
          <p className="text-gray-300 text-lg text-justify">{article.content || article?.lead_paragraph}</p>
          <p className="text-gray-300 text-lg text-wrap overflow-hidden my-5">
            Read more at:{" "}
            <a
              href={article.url || article?.web_url || ""}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              {article.url || article?.web_url || "Unknown"}
            </a>
          </p>
        </div>
        <div className="mt-5 self-end">
          <p className="text-blue-500 text-lg">{article?.source?.name || article?.source || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
