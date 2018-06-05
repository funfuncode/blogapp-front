import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../actions';
import { Link } from 'react-router-dom';

class PostEdit extends Component {
  constructor(props){
    super(props);

    this.renderField = this.renderField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.onFetchPost(this.props.match.params.id);
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
    this.props.submitHandler(this.props.initialValues.id, values, () => {
      this.props.history.push(`/posts/${this.props.initialValues.id}`);
    });
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center">Edit a post</h3>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <Field name="title" label="Title" placeholder="enter post's title" component={this.renderField}/>
          <Field name="categories" label="Categories" placeholder="enter post's category" component={this.renderField}/>
          <Field name="content" label="Content" placeholder="enter post's content" component={this.renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={`/posts/${this.props.match.params.id}`} className="btn btn-secondary float-right">Cancel</Link>
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

const mapStateToProps = (state) => {
  return {
    initialValues: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPost: (id) => dispatch(fetchPost(id)),
    submitHandler: (id, values, callback) => dispatch(editPost(id, values, callback))
  }
}

const PostEditForm = reduxForm({validate: validate, form: 'PostEditForm', enableReinitialize: true})(PostEdit);

export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);
