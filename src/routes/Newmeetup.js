import Layout from "../components/layout/layout";
import Meetupform from "../components/forms/meetupform";
function Newmeetup(){

    function update(data)
    {
        fetch(
            'url should be set after',
            {
                method:'POST', 
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application-json'
                }
            }
        );
    }

    return <section>
                <h1>New Meetup</h1>
                <Meetupform update={update}/>
            </section>;
}

export default Newmeetup;