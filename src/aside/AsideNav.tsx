import React from 'react'
import NavList from './NavList'

function AsideNav(props: { expand: boolean }) {
  return (
    <>
        <NavList expand={props.expand} />       
    </>
  )
}

export default AsideNav