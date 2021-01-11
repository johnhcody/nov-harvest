import React, { useState } from 'react'
import Link from 'next/link'
//import Modal from '../modal';
//import Modal from 'react-modal';
import Image from 'next/image'


interface Props {

}


const ParaOne = (props: Props) => {

    //const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className="text-wrapper">
            <h1>About Us</h1>
            <div className="para-image-wrapper">
                <div className="img-container">
                    <img src="https://novembers-harvest.s3.ap-northeast-2.amazonaws.com/farm_snow.jpg" alt="Snowy Farm"/>
                </div>
                <div className="text-container">
                    <p>Nestled on a hill in Limington, Maine overlooking an historic apple orchard, November’s Harvest is an 11 acre farm attached to a house and barn built in 1844. Using a holistic approach to food production with the earth and the well-being of the plants, animals, and the farmers in mind, Novembers harvest produces seed garlic, popcorn, mixed vegetables, lamb, chevon, and rabbit. Incorporating elements of permaculture design we strive to produce the most planet based products with the least amount of outside inputs. We never use synthetic chemicals in any of our food production and continuously explore ways to create a ‘closed system’ agriculture operation.</p>
                </div>
            </div>
            <div className="para-image-wrapper">
                <div className="text-container">
                    <p>After tinkering with homesteading and permaculture on a 1 acre holding on the Saco River, Kathryn, the director of ministry, community engagement, and social justice at a local liberal arts college, and Myke, a former farm manager decided to make a life out of agriculture and education. November’s Harvest is committed to growing quality food with equal focus on community engagement, teaching sustainability and resilience, and giving back to the community. We work with local schools, community groups, and civic organizations to make our community a stronger and more vibrant place to live.</p>
                </div>
                <div className="img-container-bottom">
                    <img src="https://novembers-harvest.s3.ap-northeast-2.amazonaws.com/table-view.jpg" alt="Novembers Harvest Backyard"/>
                </div>
            </div>
        </div>
    )
}

export default ParaOne;