import React from "react";
import css from './Searchbar.module.css'


export const Searchbar = () => {
    return (
        <form className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
    
        <input
          className={css.input}
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
    )
}