import React, { useState } from "react";

export default function SearchForm({ searchTerms, handleChange }) {


  return (
    <section className='search-form'>
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="search"
          onChange={handleChange}
          value={searchTerms}
        />

      </form>
    </section>
  )
}

