import React, { useState, useEffect } from "react";

const defaultSearchTerms = ["abcdefghijklmnopqrstuvwxyz0123456789"];

const people = [
  "Adam",
  "Margaret",
  "Jacob",
  "Henry",
  "Joseph",
  "Marcy",
  "Alex",
  "Abraham",
  "David",
  "Dorothy",
  "Mufasa",
  "Charles",
];

const itemDetails = [
  {
    name: "Adam",
    type: "Image",
    format: "jpeg",
    location: "http://www.images.com",
  },
  {
    name: "Henry",
    type: "model",
    format: "fbx",
    location: "http://www.images.com",
  },
  {
    name: "Joseph",
    type: "Sound",
    format: "mp3",
    location: "http://www.images.com",
  },
  {
    name: "Charles",
    type: "Image",
    format: "jpeg",
    location: "http://www.images.com",
  },
];

// Find the index of array containing object matching the "string" via item input
const checkLink = (item) => {
  //   const checkItem = itemDetails.some((person) => person.name === item);
  if (item === undefined || item === null) {
    return [];
  } else {
    const getIndex = itemDetails.findIndex((person) => person.name === item);
    return `${itemDetails[getIndex].name} ${itemDetails[getIndex].type}`;
  }
};

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input
          className="form-searchfield"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <ul className="form-search-display">
          {searchResults.map((item) => (
            <li className="list-item">
              {item}, - {checkLink("Charles")}
            </li>
          ))}
          ;
        </ul>
      </form>
    </div>
  );
}

export default SearchForm;
