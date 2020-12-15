import React from 'react'
import { connect } from 'react-redux'
import s from './GStyle.module.css'
import cancelimg from '../img/cancel.svg'
import { addGradientAC, deleteGradientAC } from '../gradientsReducer';

export const GradientItem = (props)=>{

    return <div className={s.mainDiv} style = { {backgroundColor: props.color}} id={props.id} > 
    <img src={cancelimg}  alt="" 
        onClick= {e=>{
            let targetID = e.target.parentNode.id
           props.deleteGradient(targetID)
        }}
    />
    <h5>{props.color}</h5>
    </div>
}

let Gradient = (props)=>{
    let gradients = props.gradients
    .map(item=><GradientItem key = {item.id} color={item.color} id={item.id} deleteGradient = {props.deleteGradientAC}/>
    )
    
    return gradients
}

let mapStateToProps = (state) =>{
    return (
        {gradients:state.gradients.gradients}
    )
}
const GradientContainer = connect(mapStateToProps,{deleteGradientAC})(Gradient)
export default GradientContainer