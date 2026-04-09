export interface Section{
  type: "text" | "list" | "highlight" | "callout" | "freetext" | "metric"
}
export interface Item{
  text: string
  meta?: string
}
export class TextSec implements Section {
  public type: "text" 
  public id?: string
  public content?: string
  public body?: string
  
}
export class FreeSec implements Section {
  public type: "freetext" 
  public payload: string

}
export class HighSec implements Section {
  public type:  "highlight"
  public content: string
  
}
export class CallSec implements Section {
  public type:  "callout"
  public content: string
  public severity?: string
  public icon?: string
}

export class ListSec implements Section {
  public type:   "list"
  public items: (string|Item)[]
}

export class MetricSec implements Section {
  public type:   "metric"
  public label: string
  public value: number
}