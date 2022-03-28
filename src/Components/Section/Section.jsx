import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const { section } = useParams();

  const Main = styled.div`
    /* Same as Homepage */
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin: auto;
    .bookCard {
      width: 250px;
    }
    .bookCard > h2 {
      color: black;
    }
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>{section}</h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {books.map((el) => {
          if (el.section === section) {
            return (
              <BookCard
                id={el.id}
                imageUrl={el.imageUrl}
                title={el.title}
                price={el.price}
                key={el.id}
              />
            );
          }
        })}
      </Main>
    </>
  );
};