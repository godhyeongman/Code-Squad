function solution(board, moves) {
  let answer = 0;
  const basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }

    if (
      basket.length > 1 &&
      basket[basket.length - 1] === basket[basket.length - 2]
    ) {
      basket.splice(basket.length - 2, 2);
      answer += 2;
    }
  }
  return answer;
}

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );

function solution(answers) {
  const bingBong = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    const num = answers[i];
    if (first[i % first.length] === num) result[0]++;
    if (second[i % second.length] === num) result[1]++;
    if (third[i % third.length] === num) result[2]++;
  }
  const winner = Math.max(...result);

  for (let j = 0; j < result.length; j++) {
    if (result[j] === winner) {
      bingBong.push(j + 1);
    }
  }

  return bingBong;
}

// console.log(solution([1, 3, 2, 4, 2]));
