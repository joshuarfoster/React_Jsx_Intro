const Person = (props) => {
    let voteString = props.age >= 18 ? "please go vote" : "you must be 18"
    let nameString
    if(props.name.length > 8) {
        nameString = props.name.slice(0,6)
    }else{
        nameString = props.name
    }
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
    return(
        <div>
            <p>Learn some more information about this person</p>
            <ul>
                <li>name: {nameString}</li>
                <li>age: {props.age}</li>
            </ul>
            <h3>Hobbies</h3>
            <ul>
                {hobbies}
            </ul>
            <h3>{voteString}</h3>
        </div>
    )
}