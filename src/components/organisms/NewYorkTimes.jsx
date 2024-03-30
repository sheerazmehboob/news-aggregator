import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../../utils/fetchData";
import CardContainer from "../molecules/CardContainer";
import Pagination from "../atoms/Pagination";
import Filter from "../atoms/Filter";
import Loading from "../atoms/Loading";
import { CategoryContext } from "../../context/CategoryContext";

const NewYorkTimes = () => {
  const { category } = useContext(CategoryContext);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_NYT_API_KEY;
        const apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const queryParams = {
          "api-key": apiKey,
          page: currentPage,
          "begin_date": "20220101", // Adjust begin date as needed
          "end_date": "20220131", // Adjust end date as needed
          "sort": "newest", // Sort by newest articles
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
  }, [currentPage, category]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleApplyFilters = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
    setFilters(selectedFilters);
    setCurrentPage(1);
  };

  return (
    <div className="w-full py-10 md:py-20">
      <div className="flex flex-col p-3 my-10 md:my-0 md:p-10 gap-10 ">
      <h1 className="text-3xl font-bold bg-gray-700 w-fit border-l-8 border-blue-700 px-4 py-2">Source: News York Times</h1>
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
