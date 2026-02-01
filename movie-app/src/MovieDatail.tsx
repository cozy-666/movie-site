import { useParams } from "react-router";

function MovieDetail() {
    const { movieId } = useParams();
    
    return (
        <>
        <h1>Movie Detail</h1>
        <div>{movieId}</div>
        </>
    )
};

export default MovieDetail;