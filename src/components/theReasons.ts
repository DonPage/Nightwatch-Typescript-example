
export class $Reasons {
  constructor(public client: any) {}
  selector: string = 'section.the-reasons';
  button: string = 'i.icon-reload';


  refreshReason(cb: Function = () => {}) {
    this.client.click(this.button)
      .pause(1000)
      .perform((client, done) => {
        cb();
        done();
      })
  }

}
