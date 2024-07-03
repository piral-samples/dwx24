import { Component, Inject, VERSION } from "@angular/core";

@Component({
  template: `
    <div class="teaser">
      <h3>v16 (1): {{ counter }}</h3>
      <p>
        <button (click)="increment()">Increment</button>&nbsp;
        <button (click)="decrement()">Decrement</button>
      </p>
      <p>
        <small>{{version}}</small>
      </p>
    </div>
  `,
})
export class Tile {
  public counter = 0;
  public version = VERSION.full;

  constructor(@Inject('piral') piral: any) {
    console.log('Tile rendered', piral.meta);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
