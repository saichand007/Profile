import React, { Component } from 'react';
import {  Button, Grid,Header } from 'semantic-ui-react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Grid columns="equal" >
              <Grid.Row>
                 
                <Grid.Column >
                  <Header  style={{color: "#FFFFFF",fontSize:"16px"}}>INFO</Header>
                  <Button circular content="1" primary style={{ float: "left" }} ></Button>
                  <span style={{borderBottom: "1px solid rgb(255, 255, 255)", float:"right",padding:"10px 50px 5px 5px",width:"20%"}}></span>
                </Grid.Column>

                <Grid.Column >
                <Header style={{color: "#FFFFFF",fontFamily:"OpenSans-Regular",fontSize:"16px"}}>LINKS</Header>
                  <Button circular content="2" style={{ float: "left" }}></Button>
                  <span style={{borderBottom: "1px solid rgb(255, 255, 255)", float:"right",padding:"10px 50px 5px 5px",width:"20%"}}></span>
                </Grid.Column>

                <Grid.Column >
                <Header style={{color: "#FFFFFF",fontFamily:"OpenSans-Regular",fontSize:"16px"}}>USES</Header>
                  <Button circular content="3" style={{ float: "left" }}></Button>
                  <span style={{borderBottom: "1px solid rgb(255, 255, 255)", float:"right",padding:"10px 50px 5px 5px",width:"20%"}}></span>
                </Grid.Column>

                <Grid.Column >
                <Header style={{color: "#FFFFFF",fontFamily:"OpenSans-Regular",fontSize:"16px"}}>ICO</Header>
                  <Button circular content="4" style={{ float: "left" }}></Button>
                  <span style={{borderBottom: "1px solid rgb(255, 255, 255)", float:"right",padding:"10px 50px 5px 5px",width:"20%"}}></span>
                </Grid.Column>

                <Grid.Column >
                <Header style={{color: "#FFFFFF",fontFamily:"OpenSans-Regular",fontSize:"16px"}}>TEAM</Header>
                  <Button circular content="5" ></Button>
                </Grid.Column>

              </Grid.Row>
            </Grid>

      </div>
    )
  }
}
