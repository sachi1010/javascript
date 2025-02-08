
function downloadfile(jsonData, filename = "data.json") {
    let blob =  new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function submit(){
    let obj=document.querySelector("#root");
    obj.value;
    let data = {
        "name": document.querySelector("#name").value,
        "age": document.querySelector("#age").value,
        "password": document.querySelector("#password").value,
        "email": document.querySelector("#mail").value
        };
  console.log(data); 
  downloadfile(data);
}