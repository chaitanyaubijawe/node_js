// {"key":"value"}
let  helper =
{
  helperFunction : function () {

      console.log("inside function a");
  },
  helperFunction2 : function () {

      console.log("inside function b");
  },
  helperFunction3 : function () {

      console.log("inside function a");
  }

}


module.exports.var_helper=helper;


// helper = {"key":function () {
//
//     console.log("inside function a");
// }}
// console.log(helper.key());
