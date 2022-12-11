const LEASTNUMBER = 4;

/**
 * 클리어에 성공했는지 판별하는 메서드
 */
function isMove(move) {
  return move > LEASTNUMBER;
}

module.exports = isMove;
