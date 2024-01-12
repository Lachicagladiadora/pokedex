import { useEffect, useState } from "react";

type ElementSize = {
  elementWidth: number;
  elementHeight: number;
};

export const useElementSize = (elementRef: HTMLElement | null): ElementSize => {
  const [elementSize, setElementSize] = useState<ElementSize>({
    elementWidth: 0,
    elementHeight: 0,
  });

  useEffect(() => {
    const updateElementSize = () => {
      if (elementRef) {
        const { offsetWidth, offsetHeight } = elementRef;
        setElementSize({
          elementWidth: offsetWidth,
          elementHeight: offsetHeight,
        });
      }
    };

    // Update size on mount
    updateElementSize();

    // Event listener for element size changes
    const resizeObserver = new ResizeObserver(updateElementSize);
    if (elementRef) {
      resizeObserver.observe(elementRef);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (elementRef) {
        resizeObserver.unobserve(elementRef);
      }
    };
  }, [elementRef]);

  return elementSize;
};
