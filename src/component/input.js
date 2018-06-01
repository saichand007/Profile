import Autosuggest from 'react-autosuggest';
import React from 'react';
import './new.css';
import { Input } from 'semantic-ui-react';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };

  }

  getSuggestions(value) {
    const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    const suggestions = this.props.data.filter(language => regex.test(language));

    if (suggestions.length === 0) {
      return [
        { isAddNew: true }
      ];
    }

    return suggestions;
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => {
    if (suggestion.isAddNew) {
      return this.state.value;
    }

    return suggestion;
  };

  renderInputComponent = inputProps => (
    <div >
      <label > {this.props.labelname} </label>
      <br />
        <Input type="text" transparent fluid    {...inputProps} icon='caret down' 
             style={{borderBottom:"1px solid #c9c9c9",fontSize:"16px"}}   name={this.props.name} />
    </div>
  );

  renderSuggestion = suggestion => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Add new: <strong>{this.state.value}</strong>
        </span>
      );
    }
    return suggestion;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.isAddNew) {
      this.props.getNewValue(this.state.value);
      console.log('Add new:', this.state.value);
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        renderInputComponent={this.renderInputComponent}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />

    );
  }
}


