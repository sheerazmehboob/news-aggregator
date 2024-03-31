import React, { useState } from "react";
import NewsApiOrg from "../components/organisms/NewsApiOrg";
import NewYorkTimes from "../components/organisms/NewYorkTimes";
import Filter from "../components/atoms/Filter";
import CategoryTab from '../components/atoms/CategoryTab';

const News = () => {
  const [filters, setFilters] = useState({});

  const handleApplyFilters = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <div className="md:p-10">
      <CategoryTab />
      <Filter filters={filters} onApplyFilter={handleApplyFilters} />
      <NewsApiOrg filters={filters} />
      <NewYorkTimes filters={filters} />
    </div>
  );
};

export default News;
