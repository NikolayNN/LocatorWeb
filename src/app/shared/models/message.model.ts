export class Message {
  constructor(
    public id: number,
    public protocol: string,
    public timeStamp: number,
    public latitude: number,
    public longitude: number,
    public altitude: number,
    public speed: number,
    public amountSatellite: number,
    public course: number,
    public params: string
  ) {
  }
}
