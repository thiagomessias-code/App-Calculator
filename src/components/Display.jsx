import React from 'react'
import { Container } from './DisplayStyles'

export default function Display(props) {
  return (
    <Container>
        {props.value}
    </Container>
  )
}
