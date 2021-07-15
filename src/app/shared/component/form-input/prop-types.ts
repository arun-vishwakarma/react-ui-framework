export type FormInpProps = {
    handleChange: (event: React.FormEvent<HTMLInputElement>)=> void;
    label:string,
    name:string,
    type:string,
    value:string | undefined,
    required:boolean
  }