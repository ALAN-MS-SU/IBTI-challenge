import {data} from "../Constants/mockData"
import { HighSec, MetricSec, type CallSec, type FreeSec, type ListSec, type TextSec } from "../Types/Data/Sections/Sections";
import { CallComponent } from "./Sections/CallOut/Call";
import { FreeComponent } from "./Sections/FreeText/Free";
import { HighComponent } from "./Sections/Highlight/High";
import { ListComponent } from "./Sections/List/List";
import { MetricComponent } from "./Sections/Metric/Metric";
import { TextComponent } from "./Sections/Text/Text";

export default function ResultView() {
//  const Sections = [
//    { type: "text", component: TextComponent,  },
//    { type: "list", component: ListComponent,  },
//    { type: "highlight", component: HighComponent,  },
//    { type: "callout", component: CallComponent,  },
//    { type: "freetext", component: FreeComponent,  },
//    { type: "metric", component: MetricComponent,  }
// ]
  return (
    <div>
      <h1>{data.title}</h1>
      {data.sections.map((s: TextSec | ListSec | HighSec | CallSec | FreeSec | MetricSec, i: number) => {
        if(s.type == "text")
          return <TextComponent key={i} content={s.content} />
        if(s.type == "list")
          return <ListComponent key={i} items={s.items} />
        if (s.type == "callout")
          return <CallComponent key={i} content={s.content} />
        if (s.type == "highlight")
          return <HighComponent key={i} content={s.content} />
        if (s.type == "freetext")
          return <FreeComponent key={i} payload={s.payload} />
        if (s.type == "metric")
          return <MetricComponent key={i} value={s.value} label={s.label} />
      return <div key={i}>Unknown section</div>;
      })}
    </div>
  );
}
