import { RefObject, useEffect } from "react";

export default function useHorizontalScroll(
  wrapper: RefObject<HTMLDivElement>
) {
  function wheelHandler(element: Element, event: WheelEvent) {
    const toLeft = event.deltaY < 0 && element.scrollLeft > 0;
    const toRight =
      event.deltaY > 0 &&
      element.scrollLeft < element.scrollWidth - element.clientWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      event.stopPropagation();

      element.scrollBy({ left: event.deltaY });
    }
  }

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.addEventListener("wheel", (event) => {
        if (wrapper.current) wheelHandler(wrapper.current, event as WheelEvent);
      });
    }
  }, [wrapper]);
}
