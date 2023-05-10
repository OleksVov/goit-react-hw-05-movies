import React from "react";
// import { useState } from "react";
import css from './Searchbar.module.css'



export const Searchbar = ({ onSubmit}) => {

  
    return (
     
          <form className={css.form} onSubmit={(e) => onSubmit(e.target.value)} >
       <input
         className={css.input}
         type="text"
        //  value={value}
        //  onChange={(e) => onChange(e.target.value)}
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