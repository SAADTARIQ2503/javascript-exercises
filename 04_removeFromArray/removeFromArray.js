const removeFromArray = function (arr, ...toRemove) {
    let newArr = [];
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        let hasElem=isElem(toRemove,arr[i])
        if (!hasElem) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
const isElem=function(arr,tar) 
{
    for(let i=0; i<arr.length; i++)
        {
            if(arr[i]===tar)
                return true;
        }
        return false;
}
console.log(removeFromArray(["hey",2,3,"ho"],"hey",3));
    // Do not edit below this line
module.exports = removeFromArray;
