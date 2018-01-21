import {Message} from './message.model';

export class Unit {
  constructor(
    public unitImei: string,
    public unitName: string,
    public id?: number,
    public messages?: Message[]
  ) {
    }
}
