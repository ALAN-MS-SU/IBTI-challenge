import { MetricSec } from "../../../Types/Data/Sections/Sections";

export function MetricComponent( props: Pick<MetricSec,"label"|"value"> ) {

      return <div>
            <p >{props.label}</p>
            <p >{props.value}</p>
      </div>;
}