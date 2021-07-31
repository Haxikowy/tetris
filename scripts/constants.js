const gridRows = 20;
const gridCols = 10;
const blockLength = 30;
const fps = 1000 / 30;

const blockShapes = [{
  name: 'iShape',
  digit: 1,
  blocks: [0x0F00, 0x2222, 0x00F0, 0x4444],
  color: 'cyan'
}, {
  name: 'jShape',
  digit: 2,
  blocks: [0x8E00, 0x6440, 0x0E20, 0x44C0],
  color: 'blue'
}, {
  name: 'lShape',
  digit: 3,
  blocks: [0x2E00, 0x4460, 0x0E80, 0xC440],
  color: 'orange'
}, {
  name: 'oShape',
  digit: 4,
  blocks: [0x6600, 0x6600, 0x6600, 0x6600],
  color: 'yellow'
}, {
  name: 'sShape',
  digit: 5,
  blocks: [0x6C00, 0x4620, 0x06C0, 0x8C40],
  color: 'green'
}, {
  name: 'tShape',
  digit: 6,
  blocks: [0x4E00, 0x4640, 0x0E40, 0x4C40],
  color: 'purple'
}, {
  name: 'zShape',
  digit: 7,
  blocks: [0xC600, 0x2640, 0x0C60, 0x4C80],
  color: 'red'
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