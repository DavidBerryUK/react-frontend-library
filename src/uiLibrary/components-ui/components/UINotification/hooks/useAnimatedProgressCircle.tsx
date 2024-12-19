import { useEffect, useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import useProgressCircleRenderer from "./useProgressCircleRenderer";

function useAnimatedProgressCircle(canvas: HTMLCanvasElement, targetDuration: number, color: string, OnTimeComplete: () => void) {
  const [lastSnapshotTime] = useState<Date>(new Date());
  const [durationTarget] = useState<number>(targetDuration);
  const progressCircleRenderer = useProgressCircleRenderer();

  useEffect(() => {
    drawFrame();
    function drawFrame() {
      const now = new Date();
      const diffSinceSnapshot = differenceInMilliseconds(now, lastSnapshotTime) / 1000;
      let percentage = (diffSinceSnapshot / durationTarget) * 100;
      if (percentage > 100) {
        percentage = 100;
      }
      progressCircleRenderer.render(canvas, color, percentage);

      if (percentage < 100) {
        window.requestAnimationFrame(drawFrame);
      }
      if (percentage >= 100) {
        OnTimeComplete();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationTarget, lastSnapshotTime, progressCircleRenderer, canvas]);
}

export default useAnimatedProgressCircle;
