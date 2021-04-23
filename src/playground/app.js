
class IndecisionApp extends React.Component {
constructor(props){
  super(props)

this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
this.handleDeleteOption=this.handleDeleteOption.bind(this);

this.handleOnPick=this.handleOnPick.bind(this);
this.handleAddOption=this.handleAddOption.bind(this);

  this.state={
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: [],
  }

}

componentDidMount(){

try{
    const json=localStorage.getItem('options');
    const options=JSON.parse(json);

    if(options){
        this.setState(()=>({options: options}))
    }

}catch(e){
//do nothing
}



}

componentDidUpdate(prevProps,prevState){
if(prevState.options.length !== this.state.options){
const json=JSON.stringify(this.state.options);
localStorage.setItem('options',json);
}
}

componentWillUnmount(){

}
//handle Delete Option
handleDeleteOptions(){
    this.setState(()=>( {options:[]}));
}

//delete indivisual option
handleDeleteOption(option){
this.setState((prev)=>({
    options:prev.options.filter((word)=> word !== option)
}))
}
//pick random option
handleOnPick(){
 const randomNum= Math.floor(Math.random()*this.state.options.length)
 //pick 0-1-2
 alert (this.state.options[randomNum]);
}

//add option into Array->addOption class
handleAddOption(option){
//check if empty or already exist
if(!option){
    return "Enter valid value to add Item"
}else if(this.state.options.indexOf(option) > -1){
    return "already exist"
}

//this.state.options.push(option);
this.setState((prev)=>{
    return{options:prev.options.concat(option)}}
)

}
 render() {
  const {title,subTitle,options} =this.state;
      
        return ( 
        <div>
        <Header 
            title = {title }
            subTitle = { subTitle}/>
            <Action
            handleOnPick={this.handleOnPick}
             hasOption={options.length > 0}  />
            <Options 
                options = {options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            /> 
            <AddOption
                handleAddOption={this.handleAddOption}
                 />
            </div>
        )
    }
}

const Header=(props)=>(
    <div>
            <h1> {props.title } </h1> 
            <h2 >{props.subTitle} </h2>
        </div>
)



const Action=(props)=>(
    <div>
    <button 
    disabled={!props.hasOption}
   onClick={props.handleOnPick}
    >
     What Should I do ? 
     </button> 
    </div> 
)


const Options=(props)=>{
    const options = props.options;
    
    return ( <div >
        <button onClick = {props.handleDeleteOptions} > Remove All 
        </button> 
        {options.length == 0 && <p>Please add an option to get started!</p>}
        {
        options.map(option =>
         < Option 
            text = { option}
            key = {option}
            handleDeleteOption={(e)=>{props.handleDeleteOption(option)}}    
            />)
        }
        </div>  )
}

//Option component->goes in Options
const Option=(props)=>{
    const text = props.text;
    return (
<div >{ text } 
<button 
onClick={props.handleDeleteOption}
>Delete</button>
</div>
)}



class AddOption extends React.Component {
    constructor(props){
        super(props);

        this.state={
            error: undefined
        }

this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }
    
    onHandleSubmit(e) {
        e.preventDefault();
//trip ths sentence, in order to lef-out spaces
        const newValue=e.target.elements.option.value.trim();
       const error = this.props.handleAddOption(newValue);
        //if value is exist
        this.setState(()=> ({error}))

        if(!error){
            e.target.elements.option.value=' ';
        }
        
    }

    render() {
        return ( 
            <div>
            {this.state.error &&<p>{this.state.error}</p>}
        <form onSubmit = {this.onHandleSubmit} >
            <input
             name = 'option' 
             type = 'text' 
             />
            <button>Add Option</button>
        </form>
        </div>
        )
    }
}

///////////////////////////Counter/////////////////////////////////////////


class Counter extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            count:0
        }
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handlereset=this.handlereset.bind(this);
    }
    componentDidMount(){

        try{
            const stringCount=localStorage.getItem('count');
            const count=parseInt(stringCount,10);

            if(!isNaN(count)){
                this.setState(()=>({count}))
            }

            
        }catch(e){
            //do nothing
        }

    }

    componentDidUpdate(prevProps,prevState){
if(prevState.count !== this.state.count){
    
    localStorage.setItem('count',this.state.count)
    }
}

    componentWillUnmount(){

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

 


ReactDOM.render( <IndecisionApp /> , document.getElementById('app'));
