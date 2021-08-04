const gridRows = 20;
const gridCols = 10;
const blockLength = 30;
const fps = 1000 / 30;

const blockShapes = [{
  name: 'iShape',
  digit: 1,
  blocks: [0x0F00, 0x2222, 0x00F0, 0x4444],
  color: ['hsl(180, 100%, 50%)', 'hsl(180, 100%, 20%)'] // cyan
}, {
  name: 'jShape',
  digit: 2,
  blocks: [0x8E00, 0x6440, 0x0E20, 0x44C0],
  color: ['hsl(240, 100%, 50%)', 'hsl(240, 100%, 20%)'] // blue
}, {
  name: 'lShape',
  digit: 3,
  blocks: [0x2E00, 0x4460, 0x0E80, 0xC440],
  color: ['hsl(39, 100%, 50%)', 'hsl(39, 100%, 20%)'] // orange
}, {
  name: 'oShape',
  digit: 4,
  blocks: [0x6600, 0x6600, 0x6600, 0x6600],
  color: ['hsl(60, 100%, 50%)', 'hsl(60, 100%, 20%)'] // yellow
}, {
  name: 'sShape',
  digit: 5,
  blocks: [0x6C00, 0x4620, 0x06C0, 0x8C40],
  color: ['hsl(120, 100%, 50%)', 'hsl(120, 100%, 20%)'] // green
}, {
  name: 'tShape',
  digit: 6,
  blocks: [0x4E00, 0x4640, 0x0E40, 0x4C40],
  color: ['hsl(300, 100%, 30%)', 'hsl(300, 100%, 15%)'] // purple
}, {
  name: 'zShape',
  digit: 7,
  blocks: [0xC600, 0x2640, 0x0C60, 0x4C80],
  color: ['hsl(0, 100%, 50%)', 'hsl(0, 100%, 20%)'] // red
}]

var levelArray = [
  720, // level 0
  640, // level 1
  580, // level 2
  500, // level 3
  440, // level 4
  360, // level 5
  300, // level 6
  220, // level 7
  140, // level 8
  100, // level 9
  80, // level 10
  80, // level 11
  80, // level 12
  60, // level 13
  60, // level 14
  60, // level 15
  40, // level 16
  40, // level 17
  40, // level 18
  20, // level 19+
];