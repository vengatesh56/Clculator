let output1 = document.getElementById("output");
function display(num){
    output1.value += num;
}
function clculate(){
    try{
        output1.value = eval(output1.value);
    }
    catch(err){
        alert("don't be sabarish")
    }
}
function Clear(){
    output1.value="";
}
function del(){
    output1.value=output1.value.slice(0,-1);
}