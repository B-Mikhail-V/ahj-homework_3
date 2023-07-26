const start = 0;
const finish = 15;

export default function getPosition(current) {
  let rand = start + Math.floor(Math.random() * (finish - start + 1));
  while (rand === current) {
    rand = start + Math.floor(Math.random() * (finish - start + 1));
  }
  return rand;
}
