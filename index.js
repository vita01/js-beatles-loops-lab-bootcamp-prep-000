const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,instruments){
  let arr=[];
  for(let i=0;i<musicians.length;i++){
    arr.push(musicians[i]+" plays "+instruments[i]);
    console.log(arr);
  }
  return arr;
}
function johnLennonFacts(arr){
  var arr1=[];
  let len=arr.length-1;
   while(len>0){
  arr1.push(arr[len]+'!!!');
   len--;

   }
  return arr1;
}
function  iLoveTheBeatles(num){
let arr=[];

if(num<15){
let i=0;
  while(i<num){
 arr.push('I love the Beatles!');
i++;

  }

}
return arr;

}
