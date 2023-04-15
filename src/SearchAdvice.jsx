import { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
const LazyResult = lazy(() => import("./AdviceResult"));

export default function SearchAdvice() {
  const [search, setSearch] = useState("");
  const [advice, setAdvice] = useState([]);
  const [err, setError] = useState();

  const fetchSearchAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice/search/${search}`)
      .then((response) => {
        if (response.data.slips.length > 0) {
          setAdvice(response.data.slips);
        }
        if (response.data.slips === undefined) {
          setError("No match");
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError("Nothing to display. Search something...");
        }
        else{
          setError(error.message)
        }
      });
  };

  useEffect(() => {
    fetchSearchAdvice();
  }, [fetchSearchAdvice, LazyResult]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div
        className="position-sticky top-0 text-light input-group"
        style={{ zIndex: 99 }}
      >
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search Advice"
          className="form-control form-control-sm bg-secondary text-light border-0"
        />
        <i className="bi-search input-group-text border-0"></i>
      </div>
      <Suspense fallback={<div className="text-light">Loading</div>}>
      <LazyResult result={advice} err={err} />
   </Suspense>
    </>
  );
}
