import './Home.css'
import { Navbar } from '../Navbar'

const Home = () => {
    return (
        <div className='main-container'>
            <Navbar />
            <div className='top'>
                <h1>
                    LinkFree
                </h1>
                <h2>
                    100% Open Source
                </h2>
            </div>
            <hr />
            <div className='middle'>
                <div className='middle-text'>
                    <h3>
                        Connect to your audience
                        with a single link
                    </h3>
                    <p>
                        Showcase the content you create and your projects in one place.
                        Make it easier for people to find, follow and subscribe.
                    </p>
                </div>
                <img
                    src='https://linkfree.eddiehub.io/_next/image?url=%2Fmockup.png&w=640&q=75'
                    alt='' className='filerImg'
                />
            </div>

            <div className='middle-2'>
                <div className='mid-2-container'>
                    <h2>
                        Ready to dive in?
                        <br />
                        <span>
                            Add your free Profile today!
                        </span>
                    </h2>
                    <div className='buttons'>
                        <a className='get-started' href='https://github.com/himanshu1221/linkfree_clone#readme'>
                            <div className='b-one'>
                                Get Started
                            </div>
                        </a>
                        <a href='https://linkfree-clone.vercel.app/himanshu1221'>
                            <div className='b-two'>
                                Example
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home