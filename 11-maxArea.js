function maxArea(height) {
    let max = 0;
    let last = height.slice(-1)[0];

    for( let i = 0; i < height.length - 1; i++)  {
        if (max < height[i]) {
            max = height[i]
        };
    }

    let x = Math.abs(max - last);
    let y = Math.abs(max - x);

    let area = y * last;

    return area;
}


// height =  [1, 8, 6, 2, 5, 4, 8, 3, 7] //Output: 49
height = [1, 2]; //Output: 1

console.log(maxArea(height));