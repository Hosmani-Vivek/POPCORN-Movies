import { useState, useEffect } from "react";
const key = "1d020aac";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  useEffect(
    function () {
      //Callback?.();
      const controller = new AbortController();
      async function FetchMovies() {
        try {
          setloading(true);
          seterror("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something went Wrong");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          console.log(data);
        } catch (err) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            seterror(err.message);
          }
        } finally {
          setloading(false);
        }
        if (query.length < 3) {
          setMovies([]);
          seterror("");
          return;
        }
        return function () {
          controller.abort();
        };
      }

      FetchMovies();
    },
    [query]
  );

  return { movies, error, loading };
}
