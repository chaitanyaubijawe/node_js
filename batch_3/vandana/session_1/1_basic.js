console.log("Injected from JS file :: Hello world.... in JS")

function changeContent() {


  console.log("called!!");

  document.getElementById("dynamicContent").innerHTML="<table border='1px'><th> header</th> <tr><td> data...</td></tr> </table><i>This is from JS..</i>";

}
