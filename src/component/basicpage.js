import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrency, addCurrency } from "./action";
import { Container, Segment, Icon } from 'semantic-ui-react';
import moment from 'moment';

import HeaderComponent from './headcomponent';
import BasicForm from './form';
import FloatingLabel, {floatingStyles,focusStyles,inputStyles,labelStyles} from 'floating-label-react';

const inputStyle = {
  floating: {
    ...floatingStyles,
    color: '#FFFFFF'
  },
  focus: {
    ...focusStyles,
    borderColor: '#FFFFFF'
  },
  input: {
    ...inputStyles,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: '100%',
    background: 'transparent',
    color: '#c9c9c9',

  },
  label: {
    ...labelStyles,
    marginTop: '.5em',
    width: '100%',
    color: '#c9c9c9'
  }
}


class BasicInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onNewValue = this.onNewValue.bind(this);
    this.handleSource=this.handleSource.bind(this);
  }

  componentWillMount() {
    this.props.getCurrency();
  }

  onNewValue(value) {
    console.log("value=", value);
    this.props.addCurrency(value);
  }

  handleChange(date) {
    console.log("date=", date._d);
    this.setState({
      startDate: date
    });
  }

  handleSource(value)
  {
    console.log("value=",value);

    if(value==="Yes")
    {
      this.setState({opensource:"Yes"});
    }
    else{
      this.setState({opensource:"No"});
    }
     
  }


  handleSubmit(e) 
  {
    e.preventDefault();
    console.log([e.target.name])
    const field=e.target.elements;
    console.log("state=",this.state);
    this.setState({
      currency: field.currency.value,
      hashing:field.hashing.value,
      file: field.file.value,
      date: field.date.value,
      consensus: field.consensus.value,
      support:field.support.value,
      fork:field.fork.value,
      blockchain:field.blockchain.value    
    });
  }

  render() {
   
    return (
      <div>

        <Segment style={{backgroundColor:"#2C3E50"}} >

          <Container className="container">

            <Segment style={{backgroundColor:"#2C3E50"}}>

              <Icon name="remove" size="large" style={{ float: "right"}} />

              <br/>
              <HeaderComponent />
              <br/>
             
              <FloatingLabel
                id='email'
                name='email'
                placeholder='Your Currency Ticker'
                styles={inputStyle}
                type='text'
              />
            <br/><br/><br/>
              

              <BasicForm currency={this.props.currency} handleSubmit={this.handleSubmit}
                         startDate={this.state.startDate} handleSource={this.handleSource}
                         handleChange={this.handleChange} onNewValue={this.onNewValue} 
                       />

            </Segment>

          </Container>

        </Segment>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currency: state
  };
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({ getCurrency, addCurrency }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);