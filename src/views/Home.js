import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <>
      <header>
        <SearchForm />
      </header>
      <main>
        <Card />
      </main>
      <footer></footer>
    </>
  );
}
