import NavList from './NavList'
import { DataTypes } from '../context/Types';

function AsideNav(props: {  
  handleAdd: any;  data: DataTypes[]; 
}) {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <NavList  data={props.data} handleAdd={props.handleAdd} />
  )
}

export default AsideNav