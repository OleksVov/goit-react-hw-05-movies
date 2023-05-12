import React from "react";
// import { useState } from "react";
import css from './Searchbar.module.css'



export const Searchbar = ({ onSubmit, onChange, value}) => {

  
    return (
     
          <form className={css.form} onSubmit={onSubmit} >
       <input
         className={css.input}
         type="text"
         value={value}
         onChange={onChange}
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