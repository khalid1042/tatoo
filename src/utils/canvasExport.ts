/**
 * Canvas & Vector SVG rendering engine for Tattoo Font Generator
 */

export interface TextRenderOptions {
  text: string;
  fontFamily: string;
  fontSize: number;
  letterSpacing: number; // in px
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number; // degrees
  textColor: string;
  backgroundColor: string;
  strokeWidth: number;
  strokeColor?: string;
  isStencilMode?: boolean;
  scaleFactor?: number;
  isRtl?: boolean;
}

/**
 * Render text onto an HTML5 Canvas context safely with zero layout overflow
 */
export function drawTattooTextToCanvas(
  canvas: HTMLCanvasElement,
  options: TextRenderOptions
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const {
    fontFamily,
    fontSize,
    letterSpacing,
    lineHeight,
    textAlignment,
    textTransform,
    curvedOption,
    rotation,
    textColor,
    backgroundColor,
    strokeWidth,
    isStencilMode,
    scaleFactor = 1,
  } = options;

  let text = options.text || 'Your tattoo lettering will appear here';
  if (textTransform === 'uppercase') text = text.toUpperCase();
  if (textTransform === 'lowercase') text = text.toLowerCase();

  const baseFontSize = fontSize * scaleFactor;
  const baseLetterSpacing = letterSpacing * scaleFactor;
  const actualStrokeWidth = strokeWidth * scaleFactor;

  // Convert curved option to numerical curvature value
  let curvature = 0;
  if (curvedOption === 'slight') curvature = 20;
  if (curvedOption === 'medium') curvature = 45;
  if (curvedOption === 'strong') curvature = 75;

  const lines = text.split('\n');

  // Step 1: Measure raw text width using temporary font setting
  ctx.font = `${baseFontSize}px ${fontFamily}`;
  
  let maxLineMeasuredWidth = 0;
  const lineMetrics = lines.map((lineText) => {
    let w = 0;
    if (baseLetterSpacing !== 0) {
      for (let i = 0; i < lineText.length; i++) {
        w += ctx.measureText(lineText[i]).width + baseLetterSpacing;
      }
      if (lineText.length > 0) w -= baseLetterSpacing;
    } else {
      w = ctx.measureText(lineText).width;
    }
    if (w > maxLineMeasuredWidth) maxLineMeasuredWidth = w;
    return { text: lineText, width: w };
  });

  // Calculate raw text block height
  const lineSpacingHeight = baseFontSize * lineHeight;
  const rawTextHeight = lines.length * lineSpacingHeight + Math.abs(curvature) * 1.5;

  // Set canvas dimensions with safe limits
  const paddingX = 60 * scaleFactor;
  const paddingY = 50 * scaleFactor;
  
  const targetWidth = Math.min(1600, Math.max(700, maxLineMeasuredWidth + paddingX * 2));
  const targetHeight = Math.min(900, Math.max(260, rawTextHeight + paddingY * 2));

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  // Re-apply font after canvas resize (canvas resize resets context state)
  ctx.font = `${baseFontSize}px ${fontFamily}`;

  // Step 2: Auto-fit scale factor calculation to guarantee zero overflow
  const maxAllowedWidth = canvas.width - paddingX * 2;
  const maxAllowedHeight = canvas.height - paddingY * 2;

  let fitScale = 1;
  if (maxLineMeasuredWidth > maxAllowedWidth) {
    fitScale = Math.min(fitScale, maxAllowedWidth / maxLineMeasuredWidth);
  }
  if (rawTextHeight > maxAllowedHeight) {
    fitScale = Math.min(fitScale, maxAllowedHeight / rawTextHeight);
  }

  // Calculate final effective font size & letter spacing
  const actualFontSize = baseFontSize * fitScale;
  const actualLetterSpacing = baseLetterSpacing * fitScale;

  // Clear background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (backgroundColor !== 'transparent') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Set font properties with auto-fitted font size
  ctx.font = `${actualFontSize}px ${fontFamily}`;
  ctx.textAlign = textAlignment;
  ctx.textBaseline = 'middle';
  if (options.isRtl) {
    ctx.direction = 'rtl';
  } else {
    ctx.direction = 'ltr';
  }

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.save();
  ctx.translate(centerX, centerY);

  if (rotation !== 0) {
    ctx.rotate((rotation * Math.PI) / 180);
  }

  // Setup fill and stroke styles
  if (isStencilMode) {
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = Math.max(2 * scaleFactor, actualStrokeWidth || 2 * scaleFactor);
  } else {
    // Smart auto-contrast for dark background canvas
    const effectiveColor =
      textColor === '#0F172A' && (backgroundColor === 'transparent' || backgroundColor === '#090D16' || backgroundColor === '#0B0E14')
        ? '#F8FAFC'
        : textColor;
    ctx.fillStyle = effectiveColor;
    ctx.strokeStyle = options.strokeColor || '#000000';
    ctx.lineWidth = actualStrokeWidth;
  }

  const curveFactor = curvature / 100;

  // Draw lines of text safely
  lines.forEach((lineText, lineIdx) => {
    const lineY = (lineIdx - (lines.length - 1) / 2) * (actualFontSize * lineHeight);

    if (Math.abs(curveFactor) > 0.05 && lineText.length > 1) {
      // Curved Arc Text Rendering
      const radius = (canvas.width * 0.6) / (Math.abs(curveFactor) * 2);
      const anglePerChar = Math.min(Math.PI * 0.8, (lineText.length * (actualFontSize * 0.4 + actualLetterSpacing)) / radius);
      const startAngle = -anglePerChar / 2;

      ctx.save();
      ctx.translate(0, lineY - radius * 0.25);

      for (let i = 0; i < lineText.length; i++) {
        const char = lineText[i];
        const charAngle = startAngle + (i / (lineText.length - 1 || 1)) * anglePerChar;

        ctx.save();
        ctx.rotate(charAngle);
        ctx.translate(0, radius);

        if (actualStrokeWidth > 0 || isStencilMode) {
          ctx.strokeText(char, 0, 0);
        }
        ctx.fillText(char, 0, 0);
        ctx.restore();
      }
      ctx.restore();
    } else {
      // Flat Text Rendering
      let alignOffsetX = 0;
      if (textAlignment === 'left') alignOffsetX = -(canvas.width * 0.4) + paddingX;
      if (textAlignment === 'right') alignOffsetX = (canvas.width * 0.4) - paddingX;

      if (actualLetterSpacing !== 0) {
        // Calculate exact start position for centered/left/right aligned text
        const totalLineWidth = lineMetrics[lineIdx].width * fitScale;
        let currentX = alignOffsetX - totalLineWidth / 2;
        if (textAlignment === 'left') currentX = alignOffsetX;
        if (textAlignment === 'right') currentX = alignOffsetX - totalLineWidth;

        for (let i = 0; i < lineText.length; i++) {
          const char = lineText[i];
          const charWidth = ctx.measureText(char).width;

          if (actualStrokeWidth > 0 || isStencilMode) {
            ctx.strokeText(char, currentX + charWidth / 2, lineY);
          }
          ctx.fillText(char, currentX + charWidth / 2, lineY);
          currentX += charWidth + actualLetterSpacing;
        }
      } else {
        if (actualStrokeWidth > 0 || isStencilMode) {
          ctx.strokeText(lineText, alignOffsetX, lineY);
        }
        ctx.fillText(lineText, alignOffsetX, lineY);
      }
    }
  });

  ctx.restore();
}

/**
 * Download PNG
 */
export function downloadCanvasAsPng(
  canvas: HTMLCanvasElement,
  filename: string = 'tattoo-lettering.png'
): void {
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = filename.endsWith('.png') ? filename : `${filename}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Export Vector SVG
 */
export function exportAsSvg(
  options: TextRenderOptions,
  filename: string = 'tattoo-lettering.svg'
): void {
  const { fontFamily, fontSize, letterSpacing, textColor, textAlignment, textTransform } = options;

  let text = options.text || 'Tattoo Lettering';
  if (textTransform === 'uppercase') text = text.toUpperCase();
  if (textTransform === 'lowercase') text = text.toLowerCase();

  const sanitizedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fill = textColor === '#0F172A' ? '#000000' : textColor;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%" height="100%">
  <style>
    .tattoo-text {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      letter-spacing: ${letterSpacing}px;
      fill: ${fill};
      text-anchor: ${textAlignment === 'center' ? 'middle' : textAlignment};
      dominant-baseline: central;
    }
  </style>
  <rect width="100%" height="100%" fill="${options.backgroundColor === 'transparent' ? 'none' : options.backgroundColor}" />
  <text x="50%" y="50%" class="tattoo-text">${sanitizedText}</text>
</svg>`;

  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename.endsWith('.svg') ? filename : `${filename}.svg`;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copy Canvas Image to OS Clipboard
 */
export async function copyCanvasToClipboard(canvas: HTMLCanvasElement): Promise<boolean> {
  try {
    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob }),
          ]);
          resolve(true);
        } catch {
          resolve(false);
        }
      }, 'image/png');
    });
  } catch {
    return false;
  }
}
