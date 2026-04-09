import type { FreeSec, } from "../../../Types/Data/Sections/Sections";

export function FreeComponent(props:Pick<FreeSec,"payload">) {
      return <strong>{props.payload}</strong>;
}