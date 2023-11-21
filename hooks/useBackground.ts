import { useEffect } from "react";

export const useBackground = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.background = "white";
    }
    return () => {
      body.style.background = "url(/dots.png)";
    };
  }, []);
};
