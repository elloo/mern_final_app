import React, {Component} from "react";
import { Grid, Header, Container, Image, Divider, List } from 'semantic-ui-react';

export default class MyProfileView extends Component {
    constructor(props){
      super(props)
      this.state = {
          firstName: "",
          lastName: "",
          email: ""
      }
    }

    render(){
        return(
          <div>
          <Container textAlign='justified'>
            <Header as='h2'>
              <Image circular verticalAlign='middle' size='medium' src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
              Patrick Starr
            </Header>
            <Divider />
          </Container>
           <Container textAlign='justified'>
            <Grid celled divided>
              <Grid.Row>
                <Grid.Column verticalAlign='middle' width={4}>
                <List animated>
                  <List.Item icon='idea' content='My Listings' />
                  <List.Item icon='mail outline' content='Messages' />
                  <List.Item icon='talk' content='Notifications'/>
                  <List.Item icon='cog' content='Settings'/>
                </List>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
           </Container>
          </div>
        )
    }
}