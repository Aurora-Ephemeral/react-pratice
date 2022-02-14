import classes from './Meetupitem.module.css'
import Card from '../components/wrapper/Card';

function MeetupItem(props){
    return <Card>
                <li className={classes.item} key={props.key}>
                    <div className={classes.image}> 
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={classes.actions}>
                        <button>To Favorite</button>
                    </div>
                </li>
            </Card>

}

export default MeetupItem;