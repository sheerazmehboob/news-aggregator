import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../../utils/fetchData";
import CardContainer from "../molecules/CardContainer";
import Pagination from "../atoms/Pagination";
import Loading from "../atoms/Loading";
import { CategoryContext } from "../../context/CategoryContext";

const NewYorkTimes = ({ filters }) => {
  const { category } = useContext(CategoryContext);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_NYT_API_KEY;
        const apiUrl = process.env.REACT_APP_NYT_API_URL;
        const queryParams = {
          "api-key": apiKey,
          page: currentPage,
          "sort": "newest",
          q: filters.q || category,
          // apply filters only if they are present in the query params object otherwsie don't send them to the API call
          // this is to avoid sending empty query params to the API which may result in an error response from the API server
          ...(filters.from ? { "begin_date": filters.from } : {}),
          ...(filters.to ? { "end_date": filters.to } : {}),
          ...(filters.sources ? { "fq": `source:("${filters.sources}")` } : {}),
          ...(filters.language ? { "fq": `language:("${filters.language}")` } : {}),
        };

        const data = await fetchData(apiUrl, {
          method: "GET",
          params: queryParams,
        });
        console.log(data);

        if (data.response && data.response.docs && data.response.meta) {
          setArticles(data.response.docs);
          setTotalPages(data.response.meta.hits);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [currentPage, category, filters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="w-full">
      <div className="flex flex-col p-3 my-10 md:my-0 md:py-10 gap-10 ">
        <h1 className="text-2xl font-bold bg-gray-700 w-fit border-l-8 border-blue-700 px-4 py-2">Source: New York Times</h1>
        {articles && !loading && <CardContainer articles={articles} />}
      </div>
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalPages / pageSize)}
          onPageChange={handlePageChange}
        />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default NewYorkTimes;
