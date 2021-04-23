 import React from 'react';



    class AddOption extends React.Component {
        
    
           state={
                error: undefined
            }

        
        onHandleSubmit=(e)=> {
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
                {this.state.error &&<p className="add-option-error">{this.state.error}</p>}
            <form 
            onSubmit = {this.onHandleSubmit}
            className="add-option" >
                <input
                 name = 'option' 
                 type = 'text' 
                 className="add-option__input"
                 />
                <button className='button'>ADD OPTION</button>
            </form>
            </div>
            )
        }
    }
    
    export default AddOption;