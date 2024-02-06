#### 프로젝트에서 공통으로 사용하는 독립 기능(파일)을 작성합니다.

---

아래는 프로젝트를 진행하면서, 필수로 필요했던 파일입니다.

1. fetcher

next.js 의 [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch) to allow each request on the server to set its own persistent caching semantics 하기 때문에 [axios](https://github.com/axios/axios) 와 같은 라이브러리를 쓸 수 없습니다. 인터셉터, 쿼리를 path 에 머지하는 기능을 탑재, fetcher 구현

2. isomorphic-cookie
