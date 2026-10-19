function Header(){
    const description = reactDescriptions[getRandomInt(2)];
    return(
        <Header>
            <img src={reactImg} alt= "STlized atom" />
            <h1>React Essentials</h1>
            <p>
                {descriptio} React concepts you will need for almost any app ypu are going to build!

            </p>
        </Header>
    )
}
export default Header;