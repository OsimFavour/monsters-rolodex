import { Component, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  console.log('rendper');
  const [searchField, setSearchField] = useState('')  // [value, setValue]
  console.log(searchField)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (

    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'  
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
        {/* <CardList monsters={filteredMonsters}/> */}
    </div> 
  )
}

export default App

// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(
//         () => {
//           return {monsters: users}
//         }
//       ))
//   }


//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(
//     () => {
//       return { searchField }
//     })
//   }

//   render() {
//     console.log('render');

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox 
//           className='monsters-search-box'  
//           placeholder='search monsters'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div> 
//     );
//   }
// }

// export default App;
