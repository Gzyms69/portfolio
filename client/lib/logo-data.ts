export function generateCogLogoPoints(): Array<{x: number, y: number}> {
  const points: Array<{x: number, y: number}> = [];
  const centerX = 0.5;
  const centerY = 0.5;
  
  const outerRadius = 0.35;
  const innerRadius = 0.25;
  const teethCount = 12;
  const toothWidth = Math.PI / 24;
  
  for (let i = 0; i < teethCount; i++) {
    const angle = (i * 2 * Math.PI) / teethCount;
    for (let j = 0; j < 6; j++) {
      const toothAngle = angle + (j - 2.5) * toothWidth / 5;
      const radius = outerRadius + 0.03 * Math.sin(j * Math.PI / 2);
      points.push({
        x: centerX + radius * Math.cos(toothAngle),
        y: centerY + radius * Math.sin(toothAngle)
      });
    }
  }
  
  for (let i = 0; i < 32; i++) {
    const angle = (i * 2 * Math.PI) / 32;
    points.push({
      x: centerX + innerRadius * 0.7 * Math.cos(angle),
      y: centerY + innerRadius * 0.7 * Math.sin(angle)
    });
  }
  
  for (let i = 0; i < 8; i++) {
    const angle = (i * 2 * Math.PI) / 8;
    for (let j = 0; j < 5; j++) {
      const t = j / 4;
      const radius = innerRadius + t * (outerRadius - innerRadius) * 0.7;
      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    }
  }
  
  points.push({ x: centerX, y: centerY });
  
  const additionalPoints: Array<{x: number, y: number}> = [];
  for (let i = 0; i < teethCount; i++) {
    const angle = (i * 2 * Math.PI) / teethCount;
    for (let j = 0; j < 3; j++) {
      const toothAngle = angle + (j - 1) * toothWidth / 3;
      const radius = outerRadius + 0.02 * Math.sin(j * Math.PI);
      additionalPoints.push({
        x: centerX + radius * Math.cos(toothAngle),
        y: centerY + radius * Math.sin(toothAngle)
      });
    }
  }
  
  const allPoints = [...points, ...additionalPoints];
  
  if (allPoints.length > 150) {
    const step = Math.ceil(allPoints.length / 150);
    return allPoints.filter((_, index) => index % step === 0).slice(0, 150);
  } else if (allPoints.length < 100) {
    while (allPoints.length < 100) {
      for (let i = 0; i < allPoints.length - 1 && allPoints.length < 100; i++) {
        const p1 = allPoints[i];
        const p2 = allPoints[i + 1];
        allPoints.push({
          x: (p1.x + p2.x) / 2,
          y: (p1.y + p2.y) / 2
        });
      }
    }
  }
  
  return allPoints.slice(0, 150);
}

export const COG_LOGO_POINTS = generateCogLogoPoints();
