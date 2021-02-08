import React from 'react'

import './Card.css'

function CardList() {
    const cardInfo = 
        {
          title:"ABOUT",
          subtitle:"Here is the subtitle",
          text:"Ut non efficitur quam. Integer sollicitudin, odio non blandit tempor, metus nunc auctor nibh, vel porttitor nibh odio dignissim lacus. Suspendisse potenti. In rutrum sit amet lorem eleifend consectetur. Praesent eleifend, enim at auctor interdum, enim orci porta mauris, nec vehicula urna odio nec nunc. Cras nunc sem, rutrum et placerat et, aliquam a risus. Cras varius posuere metus, et mattis quam tempus fringilla. Quisque tristique hendrerit elit sed pharetra. Etiam ut suscipit justo. Proin efficitur faucibus libero, et molestie turpis semper vel. Curabitur ac orci tortor. Nam blandit quam ligula, nec sodales leo faucibus efficitur. Curabitur vestibulum, dui sagittis viverra sollicitudin, neque massa rutrum augue, quis tempor quam nisl et metus. Morbi nulla nunc, sagittis sit amet imperdiet eu, venenatis id mauris. Duis luctus tempus leo, quis rhoncus felis auctor quis. Proin quis volutpat nulla.",
          linkOne:"Link",
          linkTwo:"Link",
        }
       
    return (
        <div>
            <div className='card-main'>
                <div className="body">
                    <h1 className="title">{cardInfo.title}</h1>
                    <h3 className="sub-title">{cardInfo.subtitle}</h3>
                    <p>{cardInfo.text}</p>
                    <div className="about-links">
                    <a href="#" className="about-link">{cardInfo.linkOne}</a>
                    <a href="#" className="about-link">{cardInfo.linkTwo}</a>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default CardList
