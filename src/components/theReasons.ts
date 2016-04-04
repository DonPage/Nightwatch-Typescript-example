
export class $Reasons {
  constructor(public client: any) {}
  selector: string = 'section.the-reasons';
  button: string = 'i.icon-reload';


  clickButton() {
    this.client.click(this.button)
      .pause(1000)
  }

  getTitle(reason: number) {
    this.client.execute(() => {
        return $(`div.reason.reason-${reason} > h3`).html();
    }, [], title => {
      console.log('title.value ', title.value);
      return title.value;
    })
  }

  getParagraph(reason: number) {

  }

}
