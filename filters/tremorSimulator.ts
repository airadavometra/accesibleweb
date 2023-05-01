import { getRandomInt } from "./getRandomInt";

const TREMOR = 20;
const TREMOR_SPEED = 50;
const TREMOR_RANGE = 2;

const tremor = (cursor: HTMLElement) => {
  const adjustedX = getRandomInt(-TREMOR, TREMOR);
  const adjustedY = getRandomInt(-TREMOR * 2, TREMOR * 2);
  cursor.style.marginLeft = adjustedX + "px";
  cursor.style.marginTop = adjustedY + "px";
  setTimeout(
    () => tremor(cursor),
    getRandomInt(TREMOR_SPEED, TREMOR_SPEED * TREMOR_RANGE)
  );
};

const click = (e: Event) => {
  const targetId = (e.target as HTMLElement)?.id;
  if (!targetId.includes("service-")) {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    if (randomNum !== 5) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }
};

export const simulateTremor = () => {
  const cursor = document.querySelector(".cursor") as HTMLElement;
  if (cursor) {
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    };
    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("click", click, true);
    document.addEventListener("touchstart", click, true);

    tremor(cursor);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", click, true);
      document.removeEventListener("touchstart", click, true);
    };
  }
  return () => {};
};
