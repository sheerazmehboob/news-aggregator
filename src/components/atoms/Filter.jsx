import React, { useState } from "react";
import filter from "../../assets/images/filter.png";
import useModal from "../../hooks/useModal";

const Filter = ({ filters,  onApplyFilter }) => {
  const { isShowing, toggle } = useModal();
  const [searchQuery, setSearchQuery] = useState(filters.q || "");
  const [selectedSources, setSelectedSources] = useState(filters.sources ||"");
  const [fromDate, setFromDate] = useState(filters.from || ""); 
  const [toDate, setToDate] = useState(filters.to ||  "");
  const [selectedLanguage, setSelectedLanguage] = useState(filters.language ||  "");
  const [sortBy, setSortBy] = useState(filters.sortBy ||  "");
  const languages = [ "ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh", ];

  console.log(toDate);

  const handleApplyFilter = () => {
    const filters = {
      q: searchQuery ? searchQuery : "",
      sources: selectedSources ? selectedSources : "",
      from: fromDate ? fromDate : "",
      to: toDate ? toDate : "",
      language: selectedLanguage ? selectedLanguage : "",
      sortBy: sortBy ? sortBy : "",
    };
    onApplyFilter(filters);
    toggle();
  };

  return (
    <div className="w-full flex flex-col bg-transparent border border-gray-700 rounded p-3 gap-10">
      <div className="flex justify-between cursor-pointer" onClick={toggle}>
        <p className="text-md md:text-xl font-bold">
          Find your perfect fit with our filter frenzy!
        </p>
        <img src={filter} alt="" width="20px md:30px" height="20px md:30px" className="cursor-pointer" />
      </div>
      {isShowing && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-evenly flex-col sm:flex-row">
            <input
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              type="text"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <input
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              type="text"
              name="sources"
              value={selectedSources}
              onChange={(e) => setSelectedSources(e.target.value)}
              placeholder="Sources"
            />
            <select
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              value={sortBy}
              name="sortBy"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option className="bg-gray-600 text-white" value="">
                Sort By
              </option>
              <option className="bg-gray-600 text-white" value="relevancy">
                Relevancy
              </option>
              <option className="bg-gray-600 text-white" value="popularity">
                Popularity
              </option>
              <option className="bg-gray-600 text-white" value="publishedAt">
                Published At
              </option>
            </select>
          </div>
          <div className="flex justify-evenly flex-col sm:flex-row">
            <input
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              type="date"
              name="from"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              placeholder="From"
            />
            <input
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              type="date"
              name="to"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              placeholder="To"
            />
            <select
              className="w-full sm:w-[30%] bg-transparent border rounded-md px-2 py-3 text-white "
              value={selectedLanguage}
              name="language"
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option className="bg-gray-600 text-white" value="">
                Language
              </option>
              {languages.map((language) => (
                <option key={language} className=" bg-gray-600 text-white" value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <button
            className="w-[150px] self-center p-3 outline outline-blue-600 hover:bg-blue-600 duration-300 ease-in-out py-3"
            onClick={handleApplyFilter}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
