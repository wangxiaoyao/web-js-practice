var obj2 = {
  name:"xiaoyao",
  sorts: [1,2,3],
  objItem:{
    age:5
  }
}
var obj1 = {}
// obj2 拷贝进 obj1
function deepCopy(obj1,obj2){
  for(var key in obj2){
    var item = obj2[key]
    if(item instanceof Array){
      var arr = [];
      deepCopy(arr,item);
      obj1[key]= arr;
    }else if(item instanceof Object){
      var obj = {};
      deepCopy(obj,item);
      obj1[key]= obj;
    }else{
      obj1[key]=obj2[key]
    }
  }
}

deepCopy(obj1,obj2);
console.log(obj1);
console.log(obj1.objItem.age);
console.log(obj1.sorts);
