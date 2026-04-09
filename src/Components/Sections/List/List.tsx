import type { Item, ListSec } from "../../../Types/Data/Sections/Sections";

export function ListComponent(props: Pick<ListSec,"items">) {
      if (props.items)
      return <ul>
               {props.items.map((item: string|Item, idx: number) => {
                 if(typeof item === "string")
                   return <li key={idx}>{item}</li>
                 return <li key={idx}>{item.text}{item.meta ? ` || ${item.meta}`: ""}</li>
               })}
             </ul>
    return <div>void</div>
}