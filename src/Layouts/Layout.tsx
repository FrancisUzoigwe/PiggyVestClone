import React from 'react'
import Header from '../Components/Block/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


const Layout = () => {
  return (
    <Container>
      <Header/>
      <Outlet/>
    </Container>
  )
}

export default Layout

const Container = styled.div`
width: 100%;
height: 100vh;
background: white;
`;