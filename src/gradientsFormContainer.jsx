import React from 'react'
import { connect } from 'react-redux';
import { addGradientAC } from './gradientsReducer';
import { Field, reduxForm } from 'redux-form';
import { length, letters,  required, requiredSymbol } from './validators';
import { inputForm } from './inputFrom';

const GradientForm = props =>{
    return <form onSubmit = {props.handleSubmit}>
        <Field type={"text"}
        placeholder={"Enter Gradient"}
        component = {inputForm}
        name = {"color1"}
        validate = {[required,requiredSymbol,length,letters]}
        />
        <Field type={"text"}
        placeholder={"Enter Gradient"}
        component = {inputForm}
        name = {"color2"}
        validate = {[required,requiredSymbol,length,letters]}
        />
        <button>Add Gradient</button>
    </form>
  }
  const ReduxGradientForm = reduxForm(
    {form:"GradientForms"}
  )(GradientForm)
  
  
  const GradientInput = props=>{
    const submit = formData=>{
      props.addGradientAC(formData.color1)
      props.addGradientAC(formData.color2)
    }
    return <ReduxGradientForm onSubmit = {submit}/>
  }
  let mapStateToProps = (state) =>{
    return (
        {}
    )
  }
  const GradientFormContainer = connect(mapStateToProps,{addGradientAC})(GradientInput)

  export default GradientFormContainer