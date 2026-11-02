function UserData(){
    const user={
        first:"George",
        last:"salayaka",
        age: 41,
    };
    return(
        <div>
            <ul>
                User Data
                <li>First:{user.first}</li>
                <li>last:{user.last}</li>
                <li>age:{user.age}</li>
            </ul>
        </div>
    );
}
export default UserData;