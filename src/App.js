import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import News from "./pages/News";
import NewsDetail from "./components/organisms/NewsDetail";

function App() {
  return (
    <div className="bg-[rgb(12,23,34)] min-h-screen max-w-screen text-white flex flex-col">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News/>} />
          <Route path="/detail" element={<NewsDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
