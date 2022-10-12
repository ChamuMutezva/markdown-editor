import NavList from './NavList'

function AsideNav(props: { expand: boolean; data: any }) {
  return (
    <>
        <NavList expand={props.expand} data={props.data}/>       
    </>
  )
}

export default AsideNav