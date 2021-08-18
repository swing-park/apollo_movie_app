import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <>
      {loading && <div>로딩중입니다...</div>}
      {error && null}
      {data &&
        data.movies &&
        data.movies.map((v) => (
          <Link key={v.id} to={`/${v.id}`}>
            <img src={v.medium_cover_image} alt={v.title} />
          </Link>
        ))}
    </>
  );
};

export default Home;
