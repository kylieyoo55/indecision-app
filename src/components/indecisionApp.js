import React from 'react';

import AddOption from './addOption';
import Options from './options';
import Header from './header';
import Action from './action';
import OptionModal from './optionModal';

class IndecisionApp extends React.Component {
    
    
     state={
        title: 'Indecision App',
        subTitle: 'Put your life in the hands of a computer',
        options: [],
        selectedOption: undefined
      }
    



          //handle Delete Option
    handleDeleteOptions=()=>{
        this.setState(()=>( {options:[]}));
    }
    
    //delete indivisual option
    handleDeleteOption=(option)=>{
    this.setState((prev)=>({
        options:prev.options.filter((word)=> word !== option)
    }))
    }
    //pick random option
    handleOnPick=()=>{
     const randomNum= Math.floor(Math.random()*this.state.options.length)
     const option=this.state.options[randomNum];
     //pick 0-1-2
     this.setState(()=>({selectedOption: option}));
    }
    
    //add option into Array->addOption class
    handleAddOption=(option)=>{
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

    //close ths modal sheet
    handleCloseModal=()=>{
        this.setState(()=>({selectedOption: undefined}))
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

     render() {
      const {title,subTitle,options} =this.state;
          
            return ( 
            <div>
            <Header 
                title = {title }
                subTitle = { subTitle}/>
                <div className='container'>
                <Action
                handleOnPick={this.handleOnPick}
                 hasOption={options.length > 0}  />

                 <div className='widget'>
                <Options 
                    options = {options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                /> 
                <AddOption
                    handleAddOption={this.handleAddOption}
                     />

</div>
                       </div>
                     <OptionModal 
                     selectedOption={this.state.selectedOption}
                     handleCloseModal={this.handleCloseModal} />
              


              
                 </div>
            )
        }
    }

    export default IndecisionApp;
    