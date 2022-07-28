import React from 'react'

const ItemsBox = ({dataFaking}) => {
  return (
    <div className="row">
        {
            dataFaking.length >= 1 ? ( dataFaking.map( item => {
                return (
                    <div className="col-md-6 col-lg-4" key={item.id}>
                        <div className="projects-item">
                            <span></span>
                            <div className="img-box">
                                <img className="img-fluid projects-item-img" src={item.image} alt={item.title} />
                            </div>
                            <div className="hover-box">
                                <div className="text-box">
                                    <div className="tags"><a href="#">{item.category}</a></div>
                                    <h4><a href="#">{item.title}</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } ) ) : <h3>No Items</h3>
        }
    </div>
  )
}

export default ItemsBox