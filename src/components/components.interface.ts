interface it {
  should: string;
  //func: Function;
}

export interface Interface {
  selector: string;
  description: string;
  //it: [it];
  elements: { [key: string]: string };
  commands: { [key: string]: (client: any, data?: any) => any };
}


