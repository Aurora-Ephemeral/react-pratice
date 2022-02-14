import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  const [modaIsopen, setModalIsopen] = useState(false);
  function delete_handler(){
    setModalIsopen(true);
  }
  function close_handler(){
    setModalIsopen(false);
  }
    return(
      <div className="card">
        <h2>{props.text}</h2>
        <div>
          <button className="btn" onClick={delete_handler}>Delete</button>
        </div>
        { modaIsopen ? <Modal on_cancel={close_handler} on_confirm={close_handler} /> : null }
        { modaIsopen &&  <Backdrop onCancel={close_handler} />}
      </div>
    )
}

export default Todo;