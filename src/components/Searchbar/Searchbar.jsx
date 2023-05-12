import React from "react";
import { useState } from "react";
import css from './Searchbar.module.css'



export const Searchbar = ({updateQueryString}) => {
 const[search, setSearch] = useState('')

const handleSubmit = evt => {
  updateQueryString(evt.target.value)
}

  const handleChange = evt => {
evt.preventDefault();
setSearch(evt.currentTarget.value);
}


    return (
     
          <form className={css.form} onSubmit={handleSubmit} >
       <input
         className={css.input}
         type="text"
         value={search}
         onChange={handleChange}
         name="query"
         autoComplete="off"
         autoFocus
         placeholder="Search movie"
       />
        <button type="submit" className={css.button}>
<span className={css.buttonLabel}>Search</span>
</button>
     </form>

    )
}