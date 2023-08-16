import React, { useContext } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container, Row } from 'reactstrap'
import { product_list } from '../constants/products'
import { AppContext } from '../context/AppContext'

function Products() {

    const { addToCard } = useContext(AppContext)

    return (
        <Container>
            <Row>
                {
                    product_list.map(item => (
                        <div
                            key={item.id}
                            className='col-md-3 mb-4'
                        >
                            <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.title}
                                    </CardTitle>
                                    <CardText>
                                        {
                                            item.old_price &&
                                            <del className='text-danger'>{item.old_price}</del>
                                        }
                                        {" "}
                                        {
                                            <strong>{item.price}</strong>
                                        }
                                    </CardText>
                                    <Button
                                        onClick={() => addToCard(item)}
                                    >
                                        Add to card
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }

            </Row>
        </Container>
    )
}

export default Products