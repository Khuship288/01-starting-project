import { CORE_CONCEPTS } from "../../assets/data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(){
    return(
        // <section id="core-concepts">
        //     {/* <h2>Time to get started!</h2>
        //     <ul>
        //     {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}
        //     </ul> */}
        // </section>
        <Section tilte= "Time to gets tarted!">
         <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}
         </ul>
         </Section>
    )
}