import { TextSec } from "../../../Types/Data/Sections/Sections";

export function TextComponent( props: Pick<TextSec,"content"> ) {

      return  <p >{props.content}</p>;
}