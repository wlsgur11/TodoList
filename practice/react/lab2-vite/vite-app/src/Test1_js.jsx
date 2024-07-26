const Test1 = () =>{
    let msg1 = <b>world</b>
    let msg2 = '<b>world</b>'

    return (
        <>
        <h2>JSX TEST</h2>
        <p>Hello {msg1}</p>
        <p>Hello {msg2}</p>
        <p>Hello <span dangerouslySetInnerHTML={{__html:msg2}}></span></p>
        </>
    )
}
export default Test1