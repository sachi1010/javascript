let weakmap= new WeakMap();

let obj1={id:1}
let obj2={id:2}

weakmap.set(obj1,"user");
weakmap.set(obj2,"user1");

console.log(weakmap.get(obj1));

weakmap.delete(obj1);
console.log(weakmap.has(obj1))

obj2=null;
setTimeout(()=>{
    console.log(weakmap.has(obj2));
},1000);

let cache= new WeakMap();

function fetchData(user){
    if(cache.has(user)){
        console.log(user.name);
        return cache.get(user)
    }else{
        let data = { info: `Data for ${user.name}` };
        cache.set(user, data);
        console.log( user.name);
        return data;
    }
}

let userA = { name: "John" };
fetchData(userA);
fetchData(userA); 


let  activeUsers=new WeakSet();

function login(user){
    activeUsers.add(user);
    console.log(`${user.name} logged in.`);
}
function logout(user){
    activeUsers.delete(user);
    console.log(`${user.name} log out.`)
}

let usera={name:"sachi"};
login(usera);
console.log(activeUsers.has(usera));
logout(usera);
console.log(activeUsers.has(usera));

let userB={name:"aravind"};
login(userB);
console.log(activeUsers.has(userB));
logout(userB);
console.log(activeUsers.has(userB));


