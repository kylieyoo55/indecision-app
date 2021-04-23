"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let showDetail=true;
// const onToggleHandler=()=>{
//     showDetail =!showDetail
//     render();
// }
// const render=()=>{
//     const template=(
//         <div>
//             <h1>This is visuable Text</h1>
//             <button onClick={onToggleHandler}>
//             {showDetail?'Hide Detail':'Show Detail'}
//             </button>
//             {showDetail && <p >show this!!!</p>}
//         </div>
//     );
//     ReactDOM.render(template,app);
// };
// const app=document.getElementById('app')
// render();
//car classes
//make,model,vinNum
//getDescription(function,reuseable-code)
var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.fullName = name;
};

var me = new Person('Kylie');
console.log(me);
