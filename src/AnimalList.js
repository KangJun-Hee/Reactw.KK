function Animal({animal}){
    return (
        <div>
            <h1>{animal.name}</h1>
            <h1>{animal.age}</h1>
            <h1>{animal.gender}</h1>
        </div>
    );
}
function AnimalsList(){
    const animals = [
        {
            id:1,
            name : "Lion",
            age:1,
            gender:"F"
        }
    ]
    return(
        <div>
            <Animal animal={animals[0]}/>
        </div>
    );
}
export default AnimalsList;