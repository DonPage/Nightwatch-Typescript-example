interface it {
  should: string;
  //func: Function;
}

interface element {
  [key: string]: string;
}

export interface Interface {
  selector: string;
  description: string;
  //it: [it];
  elements: element;
  commands: any;
}


