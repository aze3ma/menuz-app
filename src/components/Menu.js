import React, { useState, useEffect } from 'react'
import { Accordion, Icon, Item } from 'semantic-ui-react'

import MenuItem from './MenuItem'

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const [menuCategories, setMenuCategories] = useState([])

    useEffect(() => {
        const fetchMenuData = async () => {
            const response = await fetch('http://localhost:3001/categories')
            const categories = await response.json()
            setMenuCategories(categories)
        }

        fetchMenuData()
    }, [])

    const handlePanelClick = (_event, accordionProps) => {
        const { index } = accordionProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    return (
        <Accordion fluid styled>
            {menuCategories.map((category) => {
                return (
                    <div key={category.id}>
                        <Accordion.Title
                            index={category.id}
                            active={activeIndex === category.id}
                            onClick={handlePanelClick}
                            style={{ fontSize: '1.2rem' }}
                        >
                            <span>{category.name}</span>
                            <Icon name="dropdown" />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === category.id}>
                            <Item.Group relaxed divided>
                                {category.items.map((item) => (
                                    <MenuItem key={item.id} item={item} />
                                ))}
                            </Item.Group>
                        </Accordion.Content>
                    </div>
                )
            })}
        </Accordion>
    )
}

export default Menu
