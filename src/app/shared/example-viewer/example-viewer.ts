import {Component, Input} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import { LiveExample, EXAMPLE_COMPONENTS } from '@angular/components-examples';

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss']
})
export class ExampleViewer {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;
  
  /** Data for the currently selected example. */
  exampleData: LiveExample;
  private _example: string;

  
  /** String key of the currently displayed example. */
  @Input()
  get example() { return this._example; }
  set example(exampleName: string) {
    if (exampleName && EXAMPLE_COMPONENTS[exampleName]) {
      console.log("1. exampleName " + exampleName)
      this._example = exampleName;
      console.log("2. _example " + this._example)
      this.exampleData = EXAMPLE_COMPONENTS[exampleName];
      console.log("3. this.exampleData " + this.exampleData)
      this.selectedPortal = new ComponentPortal(this.exampleData.component);
      console.log("4. this.exampleData.component " + this.exampleData.component)
    } else {
      console.error(`Could not find example: ${exampleName}`);
    }
  }

  constructor() {
    
  }

}
