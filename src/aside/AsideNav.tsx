import NavList from './NavList'
import { DataTypes } from '../context/Types';

function AsideNav(props: {
  handleAdd: any; expand: boolean; data: DataTypes[]; 
}) {
  return (
    <>
      <NavList expand={props.expand} data={props.data} handleAdd={props.handleAdd} />
    </>
  )
}

export default AsideNav