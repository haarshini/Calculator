function insert(num){
  document.form.text.value = document.form.text.value + num
}
function equal(){
  var x = document.form.text.value;
  if(x){
    document.form.text.value = eval(x)
  }
}
function ac(){
  document.form.text.value = "";
}
function del(){
  var x = document.form.text.value;
  document.form.text.value = x.substring(0,x.length-1)
}