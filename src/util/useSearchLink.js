import { useEffect, useState } from "react";

export const useSearchLink = (links) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleCloseClick = () => {
    setSearchValue("");
  };

  useEffect(() => {
    if (links) {
      const searchValueLowerCase = searchValue?.toLowerCase();

      const filteredLinks = links.filter((link) => {
        const titleLowerCase = link?.title?.toLowerCase();
        const descriptionLowerCase = link?.description?.toLowerCase();
        const urlLowerCase = link?.url?.toLowerCase();

        return (
          titleLowerCase?.includes(searchValueLowerCase) ||
          descriptionLowerCase?.includes(searchValueLowerCase) ||
          urlLowerCase?.includes(searchValueLowerCase)
        );
      });

      setResult(filteredLinks);
    }
  }, [searchValue, links]);

  return { searchValue, handleChange, handleCloseClick, result };
};
