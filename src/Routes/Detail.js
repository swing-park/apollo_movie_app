import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      isLiked @client
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
      {data?.movie ? (
        <>
          <div>영화의 ID : {data.movie.id}</div>
          <div>영화제목 : {data.movie.title}</div>
          <div>영화설명 : {data.movie.description_intro}</div>
          <div>좋아요를 눌렀나요 ? {data.movie.isLiked ? "👍" : "👎"}</div>
        </>
      ) : null}
      {data?.suggestions?.map((v, index) => (
        <span key={index}>
          <div>제안하는 영화 : {v.title}</div>
          <img src={v.medium_cover_image} alt={v.title} />
        </span>
      ))}
    </>
  );
};

export default Detail;
