import { Suspense } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";

import Homepage from ".//page/HomePage/Homepage.jsx";
import CatalogPage from "./page/CatalogPage/CatalogPage.jsx";
import DetailPage from "./page/DetailPage/DetailPage.jsx";
import NotFoundPage from "./page/NotFoundPage/NotFound.jsx";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route path="/catalog/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
