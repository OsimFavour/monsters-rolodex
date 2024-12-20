import React, { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component';
import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[]

}
const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return (
        <Card monster={monster}/>
      )
    })}
  </div>
)


// class CardList extends Component {
//   render() {

//     console.log('render from CarList');
//     const { monsters } = this.props;

//     return (
//         <div className='card-list'>
//             {monsters.map((monster) => {

//               return (
//                 <Card monster={monster}/>
//               )
//             })}
//         </div>
//     )
//   }
// }

export default CardList