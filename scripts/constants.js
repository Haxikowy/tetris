const gridRows = 20;
const gridCols = 10;
const blockLength = 30;

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