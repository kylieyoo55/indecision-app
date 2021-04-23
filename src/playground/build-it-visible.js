
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            visibility: false
        }
    
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(){
    this.setState((prev)=>{
        return{visibility: !prev.visibility}
    })
    }
    
    render(){
        const visibility =this.state.visibility;
        return (
            <div>
    <h1>This is Title</h1>
    <button onClick={this.handleClick}>{visibility?'Hide text':'Show text'}</button>
    {visibility && <h2>this is hidden text with information</h2>}
    
            </div>
        )
    }
    }
    
    ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
    
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



class Person{
    constructor(name='Anonymous',age=0){
        this.fullName=name ;
        this.age=age;
    }
    getGreeting(){
        return `Hi ${this.fullName} `;
    }

    getDescription(){
return `${this.fullName} is ${this.age} year(s) old`
    }
    }
    

    class Student extends Person{
        constructor(name,age,major){
            super(name,age);

            this.major=major;
        }

        hasMajor(){
            return  !!this.major;
        }

        getDescription(){
            let description =super.getDescription();
if(this.hasMajor()){
    description += `the major is ${this.major}. `;
}
return description;
        }
    }


    class Traveller extends Person{
constructor(name,age,location){
    super(name,age);

    this.location=location
}

hasGreeting(){
    return !!this.location;
}
getGreeting(){
    let getGreeting=super.getGreeting();

    if(this.hasGreeting()){
        getGreeting += ` I am visiting from ${this.location}`
    }

    return getGreeting;
}


    }
    const me= new Traveller('Kylie',24,'Auckland');
    console.log(me.getGreeting());

    const other=new Traveller('Andrew',21)
    console.log(other.getGreeting());