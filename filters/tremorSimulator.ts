const TREMOR = 20;
const TREMOR_SPEED = 50;
const TREMOR_RANGE = 2;

const rand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const tremor = (cursor: HTMLElement) => {
  const adjustedX = rand(-TREMOR, TREMOR);
  const adjustedY = rand(-TREMOR * 2, TREMOR * 2);
  if (cursor) {
    cursor.style.marginLeft = adjustedX + "px";
    cursor.style.marginTop = adjustedY + "px";
  }
  setTimeout(
    () => tremor(cursor),
    rand(TREMOR_SPEED, TREMOR_SPEED * TREMOR_RANGE)
  );
};

export const simulateTremor = () => {
  const cursor = document.querySelector(".cursor") as HTMLElement;
  if (cursor) {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    });

    document.addEventListener(
      "click",
      (e: MouseEvent) => {
        const randomNum = Math.floor(Math.random() * 5) + 1;
        if (randomNum !== 5) {
          e.stopPropagation();
          e.preventDefault();
          return false;
        }
      },
      true
    );

    tremor(cursor);
  }
};
