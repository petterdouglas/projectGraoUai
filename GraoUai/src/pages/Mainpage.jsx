// components
import About from "../components/About"
import Comments from "../components/Comments"
import Contacts from "../components/Contacts"
import Home from "../components/Home"
import Impacts from "../components/Impacts"
import Process from "../components/Process"

const Mainpage = () => {

    return (
        <div>
            <Home />
            <Impacts />
            <About />
            <Process />
            <Comments />
            <Contacts />
        </div>
    )
}

export default Mainpage