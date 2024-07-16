import { Theme } from '@prisma/client';
import { createCanvas, loadImage, CanvasRenderingContext2D, ImageData } from 'canvas';

function getAverageColor(ctx: CanvasRenderingContext2D, imageData: ImageData): { r: number, g: number, b: number } {
  const data = imageData.data;
  const length = data.length;
  let r = 0, g = 0, b = 0;

  for (let i = 0; i < length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
  }

  r = Math.floor(r / (length / 4));
  g = Math.floor(g / (length / 4));
  b = Math.floor(b / (length / 4));

  return { r, g, b };
}

function calculateBrightness(color: { r: number, g: number, b: number }): number {
  // Calculate brightness using a simple average of R, G, B values
  return (color.r + color.g + color.b) / 3;
}

function determineTheme(brightness: number): Theme {
  // Adjust this threshold based on your preference
  const brightnessThreshold = 128;
  return brightness > brightnessThreshold ? Theme.DARK : Theme.LIGHT;
}

export async function getBestBackgroundColor(imgSrc: string): Promise<Theme> {
  const image = await loadImage(imgSrc);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error('Failed to create canvas context');
  }

  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const avgColor = getAverageColor(ctx, imageData);
  const brightness = calculateBrightness(avgColor);
  const theme = determineTheme(brightness);

  return theme;
}
