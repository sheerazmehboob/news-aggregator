import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import News from "./pages/News";
import NewsDetail from "./components/organisms/NewsDetail";
import { CategoryContext } from "./context/CategoryContext";
import { newsCategories } from "./constants/categories";

const categories = newsCategories;

function App() {
  const [category, setCategory] = useState("business");

  return (
    <div className="bg-[rgb(12,23,34)] min-h-screen max-w-screen text-white flex flex-col">
      <Header />
      <CategoryContext.Provider value={{ category, setCategory, categories }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/detail" element={<NewsDetail />} />
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
