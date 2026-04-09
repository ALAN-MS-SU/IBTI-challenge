import type { CallSec, FreeSec, HighSec, ListSec, MetricSec, TextSec } from "./Sections/Sections"

export interface Data {
  title: string
  
  sections: (TextSec|ListSec|HighSec|CallSec|FreeSec|MetricSec|object)[]
}
