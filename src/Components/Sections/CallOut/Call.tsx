import type { CallSec, } from "../../../Types/Data/Sections/Sections";

export function CallComponent(props:Pick<CallSec,"content">) {
      return <strong>{props.content}</strong>;
}