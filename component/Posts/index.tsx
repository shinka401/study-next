import { useCallback, useEffect, useReducer } from "react";
import useSWR from "swr";

const Posts = () => {
  const fetcher = async (url: string) =>
    await fetch(url).then((res) => {
      if (!res.ok) throw new Error("データの取得に失敗");
      return res.json();
    });
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ol>
      {data.map((post: any) => {
        return (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        );
      })}
    </ol>
  );
};

export default Posts;
