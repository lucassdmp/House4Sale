import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

interface ReviewCardProps {
    firstname: string;
    lastname: string;
    review: string;
    rating: number;
    date: string;
}

function ReviewCard({firstname, lastname, review, rating, date}: ReviewCardProps) {
    // firstname: string, lastname: string, review: string, rating: number, date: string
    let name = firstname + " " + lastname;
    let reviewText = review;
    let stars = "★".repeat(rating);
    let dateReview = new Date(date);

    let todayDate = new Date();
    let daysAgo = Math.floor((todayDate.getTime() - dateReview.getTime()) / (1000 * 3600 * 24));

    return (
        <>
            <Container className="text-center mt-5 mb-5">
                <Card className="text-center">
                    <Card.Header className='bg-dark text-light'>{name}</Card.Header>
                    <Card.Body>
                        <Card.Title>ABOUT</Card.Title>
                        <Card.Text className='text-dark'>
                            {reviewText}
                        </Card.Text>
                        {/* 5 stars */}
                        <Card.Text className='text-dark'>
                            {stars}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-light bg-dark">{daysAgo} days ago</Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default ReviewCard;