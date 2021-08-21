import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
    suggestions(id: $id) {
      title
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  if (data) console.log(data);

  return (
    <>
      {loading && <div>영화를 로딩중입니다..</div>}
      {/* Instead (data && data.movie &&)*/}
      {data?.movie ? (
        <>
          <div>영화의 ID : {data.movie.id}</div>
          <div>영화제목 : {data.movie.title}</div>
          <div>영화설명 : {data.movie.description_intro}</div>
        </>
      ) : null}
    </>
  );
};

export default Detail;
