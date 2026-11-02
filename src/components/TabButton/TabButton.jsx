export default function TabButton({children, onSelect}){
    function handleClick(){
        console.log("Hello World");
        
    }
    
    return(
        <li>
            <button className= {isSelected ? 'active':''} onClick={onSelect}>
              {children},
            </button>
        </li>
    );
}


