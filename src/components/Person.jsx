/* eslint-disable react/prop-types */
export function Person(props) {
    return (
        // <div>
        //     <h3>Ayush Shah</h3>
        //     <h4>Web developer</h4>
        //     <h5>20 Years old</h5>
        //     <p>Live in Mumbai</p>
        // </div>
        <div>
            <h3>{props.name}</h3>
            <h4>{props.profession}</h4>
            <h5>{props.age}</h5>
            <p>{props.city}</p>
        </div>
    )
}