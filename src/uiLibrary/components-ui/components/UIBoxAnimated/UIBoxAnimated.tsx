import { useEffect, useRef } from "react";

/**
 * This animated box is just for testing layouts with different sized elements
 */
const UIBoxAnimated: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const heightFrequency = useRef<number>(0);
  const heightMax = useRef<number>(0);
  const heightMin = useRef<number>(0);
  const widthFrequency = useRef<number>(0);
  const widthMax = useRef<number>(0);
  const widthMin = useRef<number>(0);

  useEffect(() => {
    const colorPalette = [
      "bg-slate-500",
      "bg-neutral-500",
      "bg-red-400",
      "bg-orange-400",
      "bg-amber-400",
      "bg-yellow-400",
      "bg-lime-400",
      "bg-green-300",
      "bg-emerald-450",
      "bg-teal-400",
      "bg-cyan-400",
      "bg-sky-400",
      "bg-blue-400",
      "bg-indigo-400",
      "bg-violet-350",
      "bg-purple-400",
      "bg-fuchsia-350",
      "bg-pink-400",
      "bg-rose-400",
    ];

    const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    if (elementRef.current) {
      console.log(`Assigning Colour ${randomColor}`);
      elementRef.current.classList.add(randomColor);
      const radius = Math.floor(Math.random() * 16) + 1;
      elementRef.current.style.borderRadius = `${radius}px`;
    }
  }, [elementRef]);

  useEffect(() => {
    initialise();
    let animationFrameId: number;

    function initialise() {
      widthMin.current = Math.floor(Math.random() * 20 + 10);
      widthMax.current = Math.floor(Math.random() * 150 + 10);
      heightMin.current = Math.floor(Math.random() * 20 + 20);
      heightMax.current = Math.floor(Math.random() * 150 + 10);
      widthFrequency.current = Math.random() * 2.0 + 0.5;
      heightFrequency.current = Math.random() * 2.0 + 0.5;
    }

    function animate() {
      const time = performance.now() / 1000; // Convert to seconds

      if (elementRef.current) {
        const calcFreqX = time * widthFrequency.current;
        const calcFreqY = time * heightFrequency.current;
        const width = widthMin.current + Math.abs(Math.sin(calcFreqX) * (widthMax.current - widthMin.current));
        const height = heightMin.current + Math.abs(Math.sin(calcFreqY) * (heightMax.current - heightMin.current));

        elementRef.current.style.width = `${width}px`;
        elementRef.current.style.height = `${height}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={elementRef} />;
};

export default UIBoxAnimated;
