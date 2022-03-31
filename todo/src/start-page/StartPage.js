import './startPage.scss';
import bgVideo from '../video/background.mp4';


const StartPage = () => {
    return (
        <div className='starting__modal'>

            <video autoPlay loop muted className="background__video">
		  	    <source src={bgVideo} type="video/mp4"/>
		    </video>

            <h1>To Do List</h1>
            <h2>My portfolio project</h2>

            <h2 className='start'>Let's start</h2>
        </div>
    )
}

export default StartPage;