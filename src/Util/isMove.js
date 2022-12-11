const LEASTNUMBER = 4;

/**
 * 움직임 여부를 판단하는 함수
 */
function isMove(move) {
  return move >= LEASTNUMBER;
}

module.exports = isMove;
