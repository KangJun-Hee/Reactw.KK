function Rest({rest}){
    return(
        <div>
            <h1>{rest.name}</h1>
            <h1>{rest.stars}</h1>
            <h1>{rest.loc}</h1>
        </div>
    );
}

function Restaurant(){
    const rests = [
        {
            name:"국밥디라랍",
            stars:"별 다섯 개",
            loc:"신촌"
        }
    ]
    return (
        <div>
            <Rest rest = {rests[0]}/>
        </div>
    );
}
export default Restaurant;