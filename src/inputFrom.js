import React from 'react'
import s from "./inputForm.module.css"

export const inputForm = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " 
        + (hasError ? s.error : "")}>
            <input className={s.red} type="text" {...input} {...props} />
            <div>
                { hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
