


// let count=0;
// const addNumber=()=>{
//    count ++;
//  renderCountApp();
// }

// const minusNumber=()=>{
// count --;
// renderCountApp();
// }

// const resetNumber=()=>{
//     count =0;
//     renderCountApp();
// }

// var appRoot= document.getElementById('app');



// const renderCountApp = ()=>{
//     var templateTwo=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button id='my-button' onClick={addNumber}>+1</button>
//             <button id='my-button' onClick={minusNumber}>-1</button>
//             <button onClick={resetNumber}>Reset</button>
    
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCountApp();




class Counter extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            count:props.count
        }
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handlereset=this.handlereset.bind(this);
    }
    
    handleAddOne(){
    // this.state.count++;
    this.setState(prev=>{
        return {count:prev.count+1}
    })
    
    }
    
    handleMinusOne(){
        this.setState(prev=>{
            return {count:prev.count-1}
        })
    
    }
    
    handlereset(){
    this.setState(()=>{
        return {count:0}});
    
    }
        render(){
            const num=this.state.count;
            return <div>
                <h1>Count:{num} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        }
    
    }

    Counter.defaultProps={
        count:1
    }
    
    ReactDOM.render(<Counter count={0}/>,document.getElementById("app"));
    
    
    