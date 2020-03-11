function insertionSort(list) {
  // for i from 1 to length(list) inclusive do:

  //   /* select value to be inserted */
  //   valueToInsert = list[i]
  //   holePosition = i

  //   /* locate hole position for the element to be inserted */

  //   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
  //     list[holePosition] = list[holePosition-1]
  //     holePosition = holePosition -1
  //   end while

  //   /* insert the number at hole position */
  //   list[holePosition] = valueToInsert

  // end for

  for (let i = 1; i < list.length; i++) {
    let valueToInsert = list[i];
    let position = i;

    while (position > 0 && list[position - 1] > valueToInsert) {
      list[position] = list[position - 1];
      position = position - 1;
    }

    list[position] = valueToInsert;
  }
}

module.exports = {
  insertionSort
};
