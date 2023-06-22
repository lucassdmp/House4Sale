import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function ReviewCard() {
    // firstname: string, lastname: string, review: string, rating: number, date: string
    return (
        <>
            <Container className="text-center">
                <h1 className="text-center text-dark">Reviews</h1>
                <Row className='mb-5 mt-5'>
                    <Col>
                        <Card className="text-center">
                            <Card.Header className='bg-dark text-light'>NAME</Card.Header>
                            <Card.Body>
                                <Card.Title>ABOUT</Card.Title>
                                <Card.Text className='text-dark'>
                                    This is a review for the service
                                </Card.Text>
                                {/* 5 stars */}
                                <Card.Text className='text-dark'>
                                    ★★★★★
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-light bg-dark">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default ReviewCard;