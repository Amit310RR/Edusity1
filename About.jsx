import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci qui ut tempore est
                    veniam in ipsa eius ab consequatur nisi quos, reprehenderit praesentium dicta ea explicabo 
                    ratione ex temporibus beatae pariatur rerum voluptatum neque laboriosam incidunt? Ea, 
                    vel perspiciatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui laudantium atque,
                     itaque veritatis aliquid, reiciendis corporis et blanditiis eum sequi. Deserunt alias ad
                      nihil dolore repellat dolores animi possimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab perspiciatis sit 
                    nulla nisi quis voluptate earum voluptas beatae tenetur neque, quaerat architecto optio 
                    ducimus expedita, nihil dolores eius impedit porro consectetur consequatur fuga velit! 
                    Quam quasi similique assumenda modi.</p>
            </div>
        </div>
    )
}

export default About
