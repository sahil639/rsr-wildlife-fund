import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <div>
            <li classsname = "card_items">
                <Link className="card_item_link">
                    <figure className="card_item_pic-wrap">
                        <img src = "/" alt="animal image" 
                        className="card_item_img"/>
                    </figure>
                    <div className="card_item_info">
                        <h5 className="card_item_item_text"/>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem
