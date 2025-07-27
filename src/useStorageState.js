import { useState, useEffect } from "react";

export function useStorageState(initialstate, key) {
  const [value, setvaue] = useState(function () {
    const StoredValue = localStorage.getItem(key);
    return StoredValue ? JSON.parse(StoredValue) : initialstate;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setvaue];
}
