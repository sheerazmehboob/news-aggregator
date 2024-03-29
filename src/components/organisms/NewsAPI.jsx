import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import CardContainer from "../molecules/CardContainer";
import Pagination from "../atoms/Pagination";
import Filter from "../atoms/Filter";
import CategoryTabs from "../atoms/CategoryTab";
import Loading from "../atoms/Loading";

const NewsAPI = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("business");
  const [filters, setFilters] = useState({});

  const categories = [ "business", "technology", "entertainment", "science", "health", "Sports", "Politics", "Economy", "Education", "Environment", ];

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_NEWS_API;
        const apiUrl = "https://newsapi.org/v2/everything";
        const queryParams = {
          apiKey: apiKey,
          q: selectedCategory,
          page: currentPage,
          pageSize: pageSize,
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
  }, [currentPage, pageSize, selectedCategory, filters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilters({});
    setCurrentPage(1);
  };

  const handleApplyFilters = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
    setFilters(selectedFilters);
    setCurrentPage(1);
  };

  return (
    <div className="w-full py-10 md:py-20">
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      <div className="flex flex-col p-3 my-10 md:my-0 md:p-10 gap-10 ">
        <Filter filters={filters} onApplyFilter={handleApplyFilters} />
        {articles && !loading && <CardContainer articles={articles} />}
      </div>
      {!loading && (
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

export default NewsAPI;
