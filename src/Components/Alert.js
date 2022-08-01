import React from 'react';

export default function Alert(props) {
    const capitalize=()=>{
    let text=props.alert.type;
    return text.charAt(0).toUpperCase()+text.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize()}: </strong>{props.alert.msg}
        
    </div>
  );
}
