# Apollo_movie_app

## Apollo Client는 GraphQLAPI를 사용하기 가장 좋은 방법

- React는 hooks를 제공
- Apollo는 자체적으로 캐싱기능을 제공
  - 만약 상태 관리 라이브러리를 사용했다면, 캐싱 처리를 다 해줬어야함. very cool~~

## useQuery의 loading ? error ? data ?

- loading : isLoading에 따른 boolean값을 return
- error : isError에 따른 boolean값을 return
- data : response의 data를 자동으로 json형태로 return

## Mutations

- 무엇인가 만들고 싶을 때 사용

## Local State

- API에서 받은 데이터를 바꿀 수 있음
- 예를 들어서 동적인 요소를 만들고 싶을 떄, 새로운 필드를 만들고 싶을 때

## Resolvers

- apollo client의 config option
- 원래는 백엔드나 api에서 resolve하는 역할을 담당
- client쪽에서 resolve할 수 있게 해주는 config option
- resolvers에는 apollo의 타입을 명시해야함
- telegraph ql을 통해 client에서 api를 등록할 수 있음

## Mutation

- apollo에 Mutation을 백엔드에서 만드는 것처럼 만들 수 있음
- mutation query를 만들어서 사용
- detail에서도 client에서 해당 field를 받아올 수 있음
- 이 때 detail에도 id를 받아와야 apollo가 같은 데이터라고 인식해서, cache가 확장된다.
