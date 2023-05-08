import { fetchCast } from "service/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = ()  => {
const [cast, setCast] = useState([]);
const {movieId} = useParams();


    useEffect(() => {
        async function getCast() {
            const result = await fetchCast(movieId);
            setCast(result);
           
        }
        getCast();
    },[movieId]);
console.log(cast);


    return (

        <div>
            <h2>Cast:</h2>
            <ul>
            {cast.map(item => (
                <li key={item.id}>
                  <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path
}`} alt={item.name} />
<p>{item.name}</p>
                </li>
            ))}
            </ul>
            
        </div>
    )
}