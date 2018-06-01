import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import InputField from './input';



export default class BasicForm extends Component {

    getNewValue(value) {
        console.log("value=", value);
        this.props.onNewValue(value);
    }


    render() {
        return (
            <div>

                <Form onSubmit={this.props.handleSubmit}>
                     
                    <Form.Field required>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Your CurrencyName"
                            name="currency" getNewValue={this.getNewValue.bind(this)}  />
                    </Form.Field>

                    <Form.Field>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Hashing Algorithm"
                            name="hashing" getNewValue={this.getNewValue.bind(this)} />
                    </Form.Field>

                    <Form.Field>
                        <label style={{color:"#dbd9d9"}}>WhitePaper Upload</label>
                        <Input icon="upload" type="file" name="file" transparent style={{  borderBottom: "1px solid white",paddingBottom:"5px"}} />
                    </Form.Field>

                    <Form.Field>
                       <span> <label style={{color:"#dbd9d9"}}>Date of Launch</label>
                        <Icon name="add to calendar" size="large" /></span><br/><br/>
                        <DatePicker name="date"  selected={this.props.startDate}  />     
                    </Form.Field>

                    <Form.Field>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Consensus Mechanism"
                            name="consensus" getNewValue={this.getNewValue.bind(this)} />
                    </Form.Field>

                    <Form.Field>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Supported Platforms"
                            name="support" getNewValue={this.getNewValue.bind(this)} />
                    </Form.Field>

                    <Form.Field>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Forked From"
                            name="fork" getNewValue={this.getNewValue.bind(this)} />
                    </Form.Field>

                    <Form.Field>
                        <InputField placeholder="eg. BitCoin" data={this.props.currency} labelname="Blockchain"
                            name="blockchain" getNewValue={this.getNewValue.bind(this)} />
                    </Form.Field>

                    <Form.Field>
                        <label style={{color:"#dbd9d9"}}>Open Source</label>
                        <br/>
                        <div className="card-white mn">
                            <Button.Group fluid >
                                <Button  name="yes"  onClick={()=>this.props.handleSource("Yes")}>Yes</Button>
                                 <hr align="right" />
                                <Button  value="No"   onClick={()=>this.props.handleSource("No")}>No</Button>
                            </Button.Group>
                        </div>
                    </Form.Field>
                    <br/>

                    <Form.Field>
                        <div style={{ float: "right" }}>
                            <Button size="large">Back <Icon name='left arrow' color="black" /></Button>
                            <Button size="large" primary type="submit">Next <Icon name='right arrow' color="black"/></Button>
                        </div>    
                    </Form.Field>
                    <br />
                </Form>

            </div>
        )
    }
}
