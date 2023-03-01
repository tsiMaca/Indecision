import { useState } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import AddOption from './components/AddOption';
import './styles/styles.scss';
import Action from './components/Action';

function App() {
const title= "Indecision";
const subtitle = "Put your life in the hands of a computer";
const [options,setOptions] = useState([])

const handleDeleteOptions = () => setOptions ([])

const handlePick = () => {
  const randomNum = Math.floor(Math.random() * options.length);
  const option = options[randomNum]
  alert(option)
};

const handleAddOption = (option) => { 
    if (!option) {
        return "Enter valid value to add item"
    }else if ( options.indexOf(option) > -1){
        return "This option already exists";
    } 
    return setOptions(options.concat(option)) 
}

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => optionToRemove !== option)
  ) }


return (
    <div className="App">
      <Header 
        title={title} 
        subtitle={subtitle}
        />
        <div className='container'>
          <Action 
            hasOptions={options.length > 0}
            handlePick={handlePick}
            />

            <div className='widget'>
                <Options 
                options ={options}
                handleDeleteOptions={handleDeleteOptions}
                handleDeleteOption={handleDeleteOption}
              />

                <AddOption
                  handleAddOption={handleAddOption}>
                </AddOption>
              
            </div>
          
        </div>
      
    </div>
  );
}

export default App;
