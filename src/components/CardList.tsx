import { useState } from "react";
import { Container } from "react-bootstrap";

interface CardListProps {
    cardAmout: number;
    filter: string;
    search: string;
}

function CardList(cardListProps : CardListProps){
    const [cardList, setCardList] = useState([]);


    return(
        <Container>
            
        </Container>
    )
}

export default CardList;