import NavList from './NavList'
import { DataTypes } from '../context/Types';

function AsideNav(props: { expand: boolean; data: DataTypes[] }) {
  return (
    <>
        <NavList expand={props.expand} data={props.data}/>       
    </>
  )
}

export default AsideNav