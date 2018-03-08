var burst = new mojs.Burst({
  radius: { 20 : 250 },
  count: 40,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: { 6: 0 },
    angle: { 360: 90 },
    radius: { 30: 5 }
}
});
var burst2 = new mojs.Burst({
  radius: { 1 : 400 },
  count: 12,
  children: {
    shape: 'circle',
    stroke: 'pink',
    strokeWidth: { .5: 0 },
    angle: { 360: 0 },
    radius: { 12: 1 }
}
});
var circ = new mojs.Shape({
  radius: {0: 200},
  fill: 'none',
  stroke: 'yellow',
  strokeWidth: { 7: 0 },
  opacity: { .7 : 0 }
});

// add the shapes to the timeline
// say how many times to repeat
// call the shapes

