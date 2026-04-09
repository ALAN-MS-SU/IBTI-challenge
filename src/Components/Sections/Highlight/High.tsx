import type { HighSec } from "../../../Types/Data/Sections/Sections";

export function HighComponent(props:Pick<HighSec,"content">) {
      return <strong>{props.content}</strong>;
}