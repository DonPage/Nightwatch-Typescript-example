interface it {
  should: string;
  //func: Function;
}

export interface Interface {
  selector: string;
  description: string;
  //it: [it];
  elements: { [key: string]: string };
  commands: any;
}


