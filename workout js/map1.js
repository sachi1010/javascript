let myMap=new Map();

myMap.set("name","alice");
myMap.set("age", 25);
myMap.set("city", "New York");

console.log(myMap.get("name"));
console.log(myMap.get("age"));


function mapobject(map){
    let obj={}
    map.forEach((value,key)=>{
        if(typeof key !=="object"){
          obj[key]=value;
        }
    });
    return obj;
}
let maptoobject=mapobject(myMap);
console.log(maptoobject);

myMap.clear();