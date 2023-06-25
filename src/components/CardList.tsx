// // CardList component

// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import axios from 'axios';
// import HouseCard from './HouseCard';
// import '../styles/CardList.css';

// interface CardListProps {
//     cardAmount: number;
//     offset: number;
//     filter: string;
//     search: string;
// }

// function CardList(cardListProps: CardListProps) {
//     const [cardList, setCardList] = useState([]);

//     useEffect(() => {
//         axios
//             .get('http://localhost:3000/api/v1/houses')
//             .then((res) => {
//                 setCardList(res.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching house data:', error);
//             });
//     }, []);

//     return (
//         <Container className='card-list'>
//             <div className='row'>
//                 {cardList
//                     .slice(cardListProps.offset, cardListProps.offset + cardListProps.cardAmount)
//                     .map((house) => (
//                         <div className='col-md-4' key={house.houseid}>
//                             <HouseCard
//                                 housebanner={house.housebanner}
//                                 address={house.address}
//                                 price={house.houseprice}
//                                 description={house.housedesc}
//                                 id={house.houseid}
//                                 isRent={house.isrent}
//                             />
//                         </div>
//                     ))}
//             </div>
//         </Container>
//     );
// }

// export default CardList;
