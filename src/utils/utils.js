// function addBrackets(str){
//     var reg =/^[1-9]$/
//     var arr = str.split('');
//     console.log(arr)
//     for(var i=0;i<arr.length;i++){
//         if(reg.test(arr[i])){
//             arr[i] = `(${arr[i]})`
//         }
//     }
//     return arr.join('')
// }


// function addBrackets(str){
//     var arr = str.split('');
//     for(var i=0;i<arr.length;i++){
//         if(Number(arr[i]).toString() !=='NaN' && arr[i] !==' '){
//             arr[i] = `(${arr[i]})`
//         }
//     }
//     return arr.join('')
// }

function addBrackets(str){
    str.replace(/^[0-9]$/g,function(v){
        console.log(v);
    })
    // return arr.join('')
}
name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
    console.log(word);
  return word.substring(0,1).toUpperCase()+word.substring(1);}
  );
console.log(addBrackets('a4b2c 7d4xx8yy6'))