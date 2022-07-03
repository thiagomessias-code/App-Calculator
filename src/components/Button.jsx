import React from 'react'
import {Container} from './ButtonStyles'



export default function Button(props) {
  return (
    <Container>
        <button>{props.label}</button>
    </Container>
  )
}
