import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

  constructor(props){
    super(props);

    this.renderField = this.renderField.bind(this);
  }

  renderField(field){
    let inputValidationClasses = ['form-control'];

    if(field.meta.touched && field.meta.error){
      inputValidationClasses.push('is-invalid');
    }

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className={inputValidationClasses.join(' ')} placeholder={field.placeholder} {...field.input} />
        { field.meta.touched ? <p className="text-danger">{field.meta.error}</p> : null }
      </div>
    );
  }

  onSubmit(values){
    this.props.submitHandler(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="col-md-6 offset-md-3">
      <h3 className="text-center">Create a new post</h3>
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field name="title" label="Title" placeholder="enter post's title" component={this.renderField}/>
        <Field name="categories" label="Categories" placeholder="enter post's category" component={this.renderField}/>
        <Field name="content" label="Content" placeholder="enter post's content" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if(!values.title){
    errors.title = "Please enter a title";
  }
  if(!values.categories){
    errors.categories = "Please enter categories";
  }
  if(!values.content){
    errors.content = "Please enter some content";
  }
  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (values, callback) => dispatch(createPost(values, callback))
  }
}



export default reduxForm({validate: validate, form: 'PostsNewForm'})(connect(null, mapDispatchToProps)(PostsNew));
