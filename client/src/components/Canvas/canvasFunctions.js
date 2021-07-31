export function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;
  var colorStar = color

  ctx.strokeSyle = "#000";
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step

  }
  ctx.lineTo(cx, cy - outerRadius)
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.fillStyle = colorStar;
  ctx.fill();
}
