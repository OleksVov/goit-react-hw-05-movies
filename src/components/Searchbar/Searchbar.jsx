import React from "react";
import css from './Searchbar.module.css'


export const Searchbar = ({value, onChange}) => {


  
    return (
     
          <form className={css.form}>
       <input
         className={css.input}
         type="text"
         value={value}
         onChange={(evt) => onChange(evt.target.value)}
         name="searchMovie"
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