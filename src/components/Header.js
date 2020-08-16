import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Grid, Header as SHeader, Button } from 'semantic-ui-react'

import { logout } from '../libs/Auth'

const Header = (props) => {
    return (
        <Segment>
            <Grid verticalAlign="middle">
                <Grid.Column floated="left" width={5}>
                    <SHeader as="h1" size="small">
                        Menuz
                    </SHeader>
                </Grid.Column>
                <Grid.Column floated="right" width={2}>
                    <Button
                        color="brown"
                        as="a"
                        size="mini"
                        onClick={() => logout(props.history.push('/login'))}
                    >
                        Logout
                    </Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default withRouter(Header)
