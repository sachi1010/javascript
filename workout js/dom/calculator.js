function show(value) {
    let num = document.querySelector("#result");
    num.value+=value;
}
function clear() {
     document.querySelector("#result").value=" ";
}
function submit(){
    let result = document.querySelector("#result");
    result.value=Math(result.value);
}