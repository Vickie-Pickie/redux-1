import {useDispatch, useSelector} from "react-redux";
import {removeService, setFormFields} from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = ({ id, name, price }) => {
    dispatch(setFormFields(id, name, price));
  };

  return (
    <ul>
      {
        items.map(item =>  {
          return (
            <li key={item.id}>
              <div className="item">
                <div className="item_name">{item.name}</div>
                <div className="item_price">{item.price}</div>
                </div>
              <span className="material-icons edit" onClick={() => handleEdit(item)}>edit</span>
              <span className="material-icons clear" onClick={() => handleRemove(item.id)}>clear</span>
            </li>
          )})
        }
    </ul>
  );
}

export default ServiceList;
