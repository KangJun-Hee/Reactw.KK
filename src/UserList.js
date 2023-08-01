function UserList(){
    const users = [
        {
            id : 1,
            username : "hee",
            email : "hee's@gmail.com"
        },
        {
            id : 2,
            username : "jumi",
            email : "jumi@kh.com"
        },
        {
            id : 3,
            username : "dkfjdks",
            email : "kang@kh.com"
        }
    ];

    return(
        <div>
            <User user={users[2]}/>
        </div>
    );
}
export default UserList;
function User({user}){
    return (
        <div>
            <b>{user.username}</b><br/>
            <b>{user.email}</b>
        </div>
    );
}