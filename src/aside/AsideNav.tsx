import NavList from './NavList'
import { DataTypes } from '../context/Types';

function AsideNav(props: { expand: boolean; data: DataTypes[], handleAdd: any }) {
  return (
    <>
        <NavList expand={props.expand} data={props.data} handleAdd={props.handleAdd}/>       
    </>
  )
}

export default AsideNav