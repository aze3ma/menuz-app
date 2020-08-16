import React, { useState } from 'react'
import { Item, Label, Button, Form, Input, TextArea } from 'semantic-ui-react'

import { isAdmin } from '../libs/Auth'

const MenuItem = (props) => {
    const [isEditable, setIsEditable] = useState(false)

    const makeItEditable = () => {
        setIsEditable(true)
    }

    const saveItem = () => {
        setIsEditable(false)
    }

    return (
        <>
            {isEditable ? (
                <Item>
                    <Form>
                        <Item.Content verticalAlign="middle">
                            <Item.Header className="menu-item-header">
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={props.item.name}
                                />

                                <Input
                                    type="text"
                                    name="price"
                                    id="price"
                                    value={props.item.price}
                                />
                            </Item.Header>

                            <Item.Description>
                                <TextArea
                                    name="description"
                                    id="description"
                                    value={props.item.description}
                                />
                            </Item.Description>
                            <Item.Extra>
                                <Button size="tiny" color="red" floated="right">
                                    Delete
                                </Button>

                                <Button
                                    size="tiny"
                                    color="blue"
                                    floated="right"
                                    onClick={saveItem}
                                >
                                    Save
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Form>
                </Item>
            ) : (
                <Item>
                    <Item.Content verticalAlign="middle">
                        <Item.Header className="menu-item-header">
                            {props.item.name}
                            <Label tag size="tiny" color="green">
                                {props.item.price}
                            </Label>
                        </Item.Header>

                        <Item.Description>
                            {props.item.description}
                        </Item.Description>
                        {isAdmin() && (
                            <Item.Extra>
                                <Button size="tiny" color="red" floated="right">
                                    Delete
                                </Button>
                                <Button
                                    size="tiny"
                                    color="blue"
                                    floated="right"
                                    onClick={makeItEditable}
                                >
                                    Edit
                                </Button>
                            </Item.Extra>
                        )}
                    </Item.Content>
                </Item>
            )}
        </>
    )
}

export default MenuItem
