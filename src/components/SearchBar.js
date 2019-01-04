import React from 'react';
import { Input, Segment, Form } from 'semantic-ui-react'

class SearchBar extends React.Component {

  state = { term:''}

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = event => {
    this.setState({ term: event.target.value})
  }

  render(){
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Search Videos</label>
            <Input
              icon='search'
              placeholder='Search...'
              value={this.state.term}
              onChange={this.onInputChange}
            />
            </Form.Field>
          </Form>
      </Segment>
    )
  }
}

export default SearchBar;
