const PropsTest1 = () => {
    let name = "Kim"
    let user = {
        name: 'lee',
        age: 20
    }

    return (
        <>
            <h2>Props Test</h2>
            <Sub1 name={name} age = {user.age}/>
            <Sub2 user={user}/>
            <Sub3 name='park' addr='seoul' age='30' email='a@a.com'/>
            <Sub4 name='choi' addr='seoul' age='30' email='a@a.com'/>
        </>
    )
}


const Sub1 = (props) => {
    return <p> I am Sub1, {props.name}, {props.age}</p>
}

const Sub2 = (props) => {
    return <p> I am Sub2 {props.user.name}, {props.user.age}</p>
}

const Sub3 = ({name, age, addr, email}) => {
    return <p> I am Sub3, {name}, {age}, {addr}, {email}</p>
}

const Sub4 = ({name:name1, age:age1, addr:addr1, email:email1}) => {
    return <p> I am Sub4, {name1}, {age1}, {addr1}, {email1}</p>
}

export default PropsTest1