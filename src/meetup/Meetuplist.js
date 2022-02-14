import classes from './Meetuplist.module.css'
import MeetupItem
 from './Meetupitem'
function Meetuplist(props){
    return <ul className={classes.list}>
                {
                    props.meetup.map(
                        (x) =>{
                            return <MeetupItem 
                                    key = {x.id}
                                    id = {x.id}
                                    image = {x.image}
                                    title = {x.title}
                            />
                        }
                    )
                }
            </ul>

}

export default Meetuplist