import React from 'react';


export default function Item({ item, addItemCart }) {
    return (
        <div className="col-sm-3 mt-3 mb-3 movimg">
            <div className="card">
                <img src={item.images[0].src} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p  className="card-img-top"> Valor R$ {item.price}</p>
                    <button className="btn btn-primary" onClick={ () => addItemCart(item)} >
                        <i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
                        
                    </button>
                </div>

            </div>
        </div>

    );
}
