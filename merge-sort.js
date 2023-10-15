arrayTest = [8,7,6,5,4,3,2,1]

function mergeSort(array){
    if(array.length < 2) return;
    let middle;
    if(array.length % 2 == 0){middle = array.length/2}
    else {middle = Math.round(array.length/2)};
    let arrayLeft = [];
    let arrayRight = [];
    for(let i = 0; i<array.length; i++){
        if(i<middle){
            arrayLeft.push(array[i]);
        } else {
            arrayRight.push(array[i]);
        }
    }
    mergeSort(arrayLeft);
    mergeSort(arrayRight);
    merge(arrayLeft,arrayRight, array)
}


function merge(arrayLeft, arrayRight, arrayResult){
    let i = 0; //initialize index for arrayLeft 
    let j = 0; //initialize index for arrayRight
    let k = 0; //initialize index for arrayResult
    while(i<arrayLeft.length && j<arrayRight.length){
        if(arrayLeft[i] < arrayRight[j]){
            arrayResult[k] = arrayLeft[i];
            i++;
            k++;
        } else {
            arrayResult[k] = arrayRight[j];
            j++;
            k++;
        }
    }
    while(i<arrayLeft.length){
        arrayResult[k] = arrayLeft[i];
        k++;
        i++;
    }
    while(j<arrayRight.length){
        arrayResult[k] = arrayRight[j];
        k++;
        j++;
    }
    return arrayResult;
}

mergeSort(arrayTest)

console.log(arrayTest)