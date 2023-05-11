
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "service/api";

const Cast = ()  => {
const [cast, setCast] = useState([]);
const {movieId} = useParams();
// const location = useLocation();


    useEffect(() => {
        async function getCast() {
            const result = await fetchCast(movieId);
            setCast(result);
           
        }
        getCast();
    },[movieId]);



    return (

        <div>
            <h2>Cast:</h2>
            <ul>
            {cast.map(item => (
                <li key={item.id}>
                 {item.profile_path && ( <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path
}`} alt={item.name} />)}
<p>{item.name}</p>
                </li>
            ))}
            </ul>
            
        </div>
    )
}

export default Cast;