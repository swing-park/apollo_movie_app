import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
      isLiked @client
    }
  }
`;

const LIKE_MOVIE = gql`
  mutation likeMovie($id:Int!){
    likeMovie(id:$id) @client
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <>
      {loading && <div>로딩중입니다...</div>}
      {error && null}
      {data?.movies?.map((v) => (
        <span key={v.id}>
          <Link to={`/${v.id}`}>
            <img src={v.medium_cover_image} alt={v.title} />
          </Link>
          <Button id={v.id} isLiked={v.isLiked} />
        </span>
      ))}
    </>
  );
};

const Button = ({ id, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: {
      id: parseInt(id)
    }
  });
  return <button onClick={likeMovie}>{isLiked ? "Unlike" : "Like"}</button>
}

export default Home;
