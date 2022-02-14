function Modal(props){
    function cancel_handler() {
        props.on_cancel();
    }

    function confirm_handler() {
        props.on_confirm();
    }
    return<div className="modal">
        <p>Are You Sure to delete?</p>
        <button className="btn btn--alt" onClick={cancel_handler}>Cancel</button>
        <button className="btn" onClick={confirm_handler}>Confirm</button>
    </div>
}

export default Modal;