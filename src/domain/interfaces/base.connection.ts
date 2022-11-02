export default interface IBaseConnection {
  connect(): Promise<any>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
}
