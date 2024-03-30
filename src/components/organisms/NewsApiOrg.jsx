import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../../utils/fetchData";
import CardContainer from "../molecules/CardContainer";
import Pagination from "../atoms/Pagination";
import Filter from "../atoms/Filter";
import CategoryTabs from "../atoms/CategoryTab";
import Loading from "../atoms/Loading";
import { CategoryContext } from "../../context/CategoryContext";

const NewsApiOrg = () => {
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
        const apiKey = process.env.REACT_APP_NEWS_API_ORG;
        const apiUrl = "https://newsapi.org/v2/everything";
        const queryParams = {
          apiKey: apiKey,
          page: currentPage,
          pageSize: pageSize,
          q: filters?.q || category,
          ...filters,
        };

        const data = await fetchData(apiUrl, {
          method: "GET",
          params: queryParams,
          headers: { "X-Api-Key": process.env.REACT_APP_NEWS_API },
        });

        if (data.articles && data.totalResults) {
          setArticles(data.articles);
          setTotalPages(Math.ceil(data.totalResults / pageSize));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [currentPage, pageSize, category, filters]);

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
      <CategoryTabs />
      <div className="flex flex-col p-3 my-10 md:my-0 md:p-10 gap-10 ">
        <Filter filters={filters} onApplyFilter={handleApplyFilters} />
      <h1 className="text-2xl font-bold bg-gray-700 w-fit border-l-8 border-blue-700 px-4 py-2">Source: News API.org</h1>
        {articles && !loading && <CardContainer articles={articles} />}
      </div>
      {!loading && articles  && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default NewsApiOrg;
