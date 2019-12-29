function convert(s, numRows) {
  let arr = new Array();
  
  let row = 0;
  let step = 1;

  if (numRows === 1 || numRows >= s.length){
    return s
  };
  
  for ( let i = 0 ; i < s.length; i++){
    
    if (arr[row] === undefined){
      arr[row] = s[i]
    } else {
    arr[row] += s[i];
    }

    if (row === 0){
      step = 1;
    } else if ( row  === numRows - 1){
      step = -1;
    }
    row += step;
  }
  return arr.join('');
}; 


// s = "PAYPALISHIRING", numRows = 3 //PAHNAPLSIIGYIR
s = "PAYPALISHIRING", numRows = 4 //PINALSIGYAHRPI
console.log(convert(s , numRows));