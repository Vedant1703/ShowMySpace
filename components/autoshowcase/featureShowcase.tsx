import AutoShowcase from "../ui/autoshowcase/autoshowcase";
import { ShowcaseItem } from "../ui/autoshowcase/types";
import { DATA1 } from "../ui/autoshowcase/types";
export default function FeatureShowcase() {
    return (<> 
    <AutoShowcase items={DATA1} variant="dark" interval={4000} />
    
    </>
    );
}

