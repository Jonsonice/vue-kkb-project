var app = {
  template:`
    <div>入口组件</div>
  `
};

export var num1 = 8;//作为一整个对象KEY导出
//声明再导出
var num2 = 4;
export{num2};

export function add(x,y) { 
  return console.log(x+y);
 };

export default app;
