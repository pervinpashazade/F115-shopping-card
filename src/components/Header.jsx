import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
    Alert,
    Badge,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap'
import { AppContext } from '../context/AppContext'


function Header() {

    const { card, count } = useContext(AppContext)

    const [isOpen, setIsOpen] = useState(false)
    const [total, setTotal] = useState(0)

    const toggle = () => {
        setIsOpen(prevState => !prevState)
    }

    const calculate = () => {
        const total_price = card.reduce((acc, item) => {

            console.log("item", item);
            console.log("currentValue", acc);

            return (item.price * item.count) + acc
        }, 0)

        console.log("total_price", total_price);

        setTotal(total_price)
    }

    useEffect(() => {
        calculate()
    }, [count])

    return (
        <div className='header'>
            <Container>
                <div className="text-end">
                    <Dropdown
                        isOpen={isOpen}
                        toggle={toggle}
                    >
                        <DropdownToggle
                            color="primary"
                        >
                            <AiOutlineShoppingCart />
                            {
                                count > 0 &&
                                <Badge color='danger'>{count}</Badge>
                            }
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                !card.length ?
                                    <DropdownItem>
                                        <Alert color='warning'>
                                            Your bag is empty!
                                        </Alert>
                                    </DropdownItem>
                                    :
                                    ""
                            }
                            {
                                card.map(item => (
                                    <DropdownItem
                                        key={item.id}
                                    >
                                        {item.title} x<b>{item.count}</b>
                                    </DropdownItem>
                                ))
                            }
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem>
                                <h5>Total: {total}</h5>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Container>
        </div>
    )
}

export default Header