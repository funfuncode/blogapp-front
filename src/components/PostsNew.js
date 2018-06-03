import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  constructor(props){
    super(props);

    this.renderField = this.renderField.bind(this);
  }

  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className="form-control" placeholder={field.placeholder} {...field.input} />
      </div>
    );
  }

  render(){
    return (
      <div className="col-md-6 offset-md-3">
      <h3 className="text-center">Create a new post</h3>
      <form>
        <Field name="title" label="Title" placeholder="enter post's title" component={this.renderField}/>
        <Field name="cats" label="Category" placeholder="enter post's category" component={this.renderField}/>
        <Field name="content" label="Content" placeholder="enter post's content" component={this.renderField}/>
      </form>
      </div>
    );
  }
}

export default reduxForm({form: 'PostsNewForm'})(PostsNew);
