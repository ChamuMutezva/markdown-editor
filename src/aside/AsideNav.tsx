import NavList from './NavList'
import { DataTypes } from '../context/Types';

function AsideNav(props: {
  setExpand: any;
  handleAdd: any; expand: boolean; data: DataTypes[]; 
}) {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <NavList expand={props.expand} setExpand={props.setExpand} data={props.data} handleAdd={props.handleAdd} />
  )
}

export default AsideNav