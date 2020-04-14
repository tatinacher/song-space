export const getTextWidth = (text: string, font: string) => {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.font = font;
    const metrics = context.measureText(text);
    return Math.round(metrics.width);
  }
};
