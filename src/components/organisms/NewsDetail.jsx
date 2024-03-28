import React from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../atoms/BackButton";

const NewsDetail = () => {
  const location = useLocation();
  const article = location.state.article;
  console.log(article);
  return (
    <div className="w-full p-7 flex flex-col">
        <BackButton />
        <h1 className="text-2xl font-semibold text-gray-200"> <span className=" animate-pulse text-change">#</span> News Detail | <span className="text-gray-400">{article.title}</span></h1>
        <div className="mt-3 flex flex-wrap flex-col xs:flex-row justify-between w-[90%]">
            <p className="text-lg text-gray-400 font-semibold">{article?.author}</p>
            <p>Published: <span className="text-gray-300 font-medium">{new Date(article.publishedAt).toLocaleDateString()}</span></p>
        </div>
        <div className="self-center mt-10 w-[90%] flex items-center justify-center">
            <img src={article.urlToImage ? article.urlToImage : ""} alt={article.title} className="max-h-[500px] object-contain rounded-lg shadow-md" />
        </div>
        <div className="mt-10">
            <p className="text-blue-500 text-3xl font-bold">Introduction</p>
            <p className="text-gray-300 text-lg">{article.description}</p>
        </div>
        <div className="my-5">
            <p className="text-blue-500 text-3xl font-bold">Content</p>
            <p className="text-gray-300 text-lg">{article.content}</p>
            <p className="text-gray-300 text-lg">Read more at: <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-500">{article.url}</a></p>
        </div>
        <div className="mt-5 self-end">
            <p className="text-blue-500 text-lg">{article?.source?.name}</p>
        </div>
    </div>
  );
};

export default NewsDetail;
