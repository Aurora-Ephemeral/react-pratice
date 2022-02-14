import Meetuplist from "../meetup/Meetuplist";

const dummy_data = [
    {
        id:'m1', 
        title:'first meetup',
        image:
        'https://static.wikia.nocookie.net/p__/images/6/65/Kitagawa_Marin-.png/revision/latest/top-crop/width/360/height/360?cb=20211229071735&path-prefix=protagonist',
        address:'japan', 
        description: 'marin saigo'

    },

    {
        id:'m2', 
        title:'second meetup',
        image:
        'https://64.media.tumblr.com/aba576b0ff653cfbfa06b1e60ac6cbe6/35febc78f4e49bf2-b5/s540x810/fea4a4afc370003e53312a46c5325e4e757c3826.jpg',
        address:'japan', 
        description: 'marin saigo'

    },

]


function Allmeetup(){

    return <section>
        <h1>Marin Kitagawa</h1>
        <Meetuplist meetup={dummy_data}/>
    </section>;
}

export default Allmeetup;