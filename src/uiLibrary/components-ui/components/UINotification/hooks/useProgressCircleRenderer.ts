//
// Draw circular progress bar
function useProgressCircleRenderer() {
  function render(canvas: HTMLCanvasElement, percentageComplete: number) {
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    var lineWidth = 14;
    var x = width / 2;
    var y = height / 2;
    var r = 32;

    var angleStart = 0 - (90 * Math.PI) / 180;
    var angleEnd = ((360 * (percentageComplete / 100) - 90) * Math.PI) / 180;

    ctx!.globalCompositeOperation = "multiply";
    ctx!.clearRect(0, 0, width, height);
    ctx!.imageSmoothingEnabled = true;
    ctx!.imageSmoothingQuality = "high";
    ctx!.beginPath();
    ctx!.arc(x, y, r, angleStart, angleEnd);
    ctx!.strokeStyle = "rgba(0, 0, 0, 0.2)";
    ctx!.lineWidth = lineWidth;
    ctx!.lineCap = "round";
    ctx!.stroke();
  }

  return {
    render,
  };
}

export default useProgressCircleRenderer;
