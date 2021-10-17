import React from "react";
import "./tutor.css";

/* const tutor = {
    name: "First Tutor",
    price: 100,
}
<Tutor tutor={tutor} /> */

class Tutor extends React.Component{
    handleClick = () => {
        // call parent method selectTutor
        this.props.selectTutor(this.props.tutor);
    }

    render(){
        const title = this.props.tutor.subject + " - " + this.props.tutor.price + this.props.tutor.priceCurrency
        + " - " + this.props.tutor.name;

        const style = {
            backgroundImage: `url('${this.props.tutor.imageUrl}')`
        };

        return (
            <div className="tutor" onClick={this.handleClick}>
                <div className="tutor-picture" style={style}></div>
                <div className="tutor-title">
                    {title}
                </div>
            </div>
        );
    }
}

export default Tutor;