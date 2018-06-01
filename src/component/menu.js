import React, { Component } from 'react'
import { Input, Label, Menu ,Button,Header} from 'semantic-ui-react'

export default class MenuComponent extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu  color={"red"} inverted stackable>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
            Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
        <Header  style={{color: "#FFFFFF",fontFamily:"OpenSans-Regular",fontSize:"16px"}}><span>INFO</span></Header>
                  <Button circular content="1" primary style={{ float: "left" }} ></Button>
                  <span style={{borderBottom: "1px solid rgb(255, 255, 255)", float:"right",padding:"10px 50px 5px 5px",width:"50%"}}></span>
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}
