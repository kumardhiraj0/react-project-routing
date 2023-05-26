import React from "react";
//import service from "../../images/service.avif";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                  <div className="card-body">
                    <h3 className="card-title" style={{fontWeight:"bold"}}>{props.title}</h3>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    
                    <NavLink to="#" className="btn btn-primary" style={{color:"white"}}>
                      Go somewhere
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            
    </>
  );
};
export default Card;
