//
// Draw circular progress bar
//
function useProgressCircleRenderer() {
  function render(canvas: HTMLCanvasElement, color: string, percentageComplete: number) {
    if (canvas === null) {
      return;
    }
    var size = 80;
    var lineWidth = 8;
    var x = size / 2;
    var y = size / 2;
    var r = size / 2 - lineWidth / 2 - 2;

    var angleStart = 0 - (90 * Math.PI) / 180;
    var angleEnd = ((360 * (percentageComplete / 100) - 90) * Math.PI) / 180;

    var ctx = canvas.getContext("2d");
    if (ctx !== undefined) {
      ctx!.clearRect(0, 0, size, size);
      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = "high";
      ctx!.beginPath();
      ctx!.arc(x, y, r, angleStart, angleEnd);
      ctx!.strokeStyle = color;
      ctx!.lineWidth = lineWidth;
      ctx!.lineCap = "round";
      ctx!.stroke();
    }
  }

  return {
    render,
  };
}

export default useProgressCircleRenderer;
