import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const handleSort = (V) => {
    if (V === 1) {
      let temp = books.sort((a, b) => {
        return a.title - b.title;
      });
      setBooks(temp);
    }
    if (V === 2) {
      let temp = books.sort((a, b) => {
        return b.title - a.title;
      });
      setBooks(temp);
    }
    if (V === 3) {
      setBooks(
        books.sort((a, b) => {
          return a.price + b.price;
        })
      );
    }
    if (V === 4) {
      let temp = books.sort((a, b) => {
        return b.price + a.price;
      });
      console.log(temp);
    }
  };

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin: auto;
    .bookCard {
      width: 250px;
    }
    .bookCard > h2 {
      color: black;
      text-decoration: none;
    }
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((el) => {
          return (
            <BookCard
              id={el.id}
              imageUrl={el.imageUrl}
              title={el.title}
              price={el.price}
              key={el.id}
            />
          );
        })}
      </Main>
    </div>
  );
};