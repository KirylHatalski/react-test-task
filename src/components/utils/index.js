export function buildSource(array) {
  let tmpArr = [];
  array.forEach((val) => {
    tmpArr.push({
      url: val,
      rating: 0
    })
  })
  return tmpArr;
}

export function sorter(array) {
  function compare(a, b) {
    return b.rating - a.rating;
  }
  try {
    return array.sort(compare)
  } catch (err) {
    console.log(err);
    return array;
  }
}

export function togglePopup(el) {
  document.querySelector('.add-image-popup').classList.toggle('visible');
  el.stopPropagation();
}
