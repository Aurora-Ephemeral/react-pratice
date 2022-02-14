import classes from './meetupform.module.css'
import Card from '../wrapper/Card';

function Meetupform()
{
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup title</label>
                <input id='title' required type='text' />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup image</label>
                <input id='image' required type='url' />
            </div>
            <div className={classes.actions}>
                <button> Add </button>
            </div>

        </form>
    </Card>
}

export default Meetupform;