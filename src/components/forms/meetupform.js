import {useRef} from 'react'

import classes from './meetupform.module.css'
import Card from '../wrapper/Card';

function Meetupform(props)
{
    const titleref = useRef();
    const imageref = useRef();

    function submitHandler(event)
    {
        event.preventDefalut();
        const entertitle = titleref.current.value; 
        const enterimage = imageref.current.value; 

        const data = {
            title: entertitle,
            image: enterimage
        }

        props.update(data);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup title</label>
                <input id='title' required type='text' ref={titleref} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup image</label>
                <input id='image' required type='url' ref={imageref}/>
            </div>
            <div className={classes.actions}>
                <button> Add </button>
            </div>

        </form>
    </Card>
}

export default Meetupform;