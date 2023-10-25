// const PropEx1 = () => {
//     return (
//         <h1>Full Name</h1>
//     );
// }

// export default PropEx1;

const Fullname=(props)=>{
    return(
        <>
        <h1>{props.name} Amsalu, Age: {props.age}</h1>
        <h1 style={{color:"Dodgerblue"}}>{props.wellCome}</h1>

        </>
        
    )
}

export default Fullname;