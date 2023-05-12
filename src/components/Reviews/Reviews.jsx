import { fetchReviews } from "service/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews =() => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        async function getReviews() {
            const result = await fetchReviews(movieId);
            setReviews(result);
           
        }
        getReviews();
    },[movieId]);


    return (
        <div>
            <h2>Reviews:</h2>
{(!reviews.length && (
    <p>We don't have any reviews for this movie</p>
)) || (<ul>
    {reviews.map(item => (
        <li key={item.id}>
         <h2>{item.author}</h2>
<p>{item.content}</p>
        </li>
    ))}
    </ul>)}

        </div>
    )
}

export default Reviews;