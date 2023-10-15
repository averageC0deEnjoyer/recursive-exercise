function mergeSort(array){
    if(array.length < 2) return;
    let middle = array.length/2;
    let arrayLeft = [];
    let arrayRight = [];
    for(let i = 0; i<array.length; i++){
        if(i<middle){
            arrayLeft.push(array[i]);
        } else {
            arrayRight.push(array[j]);
        }
    }

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
}