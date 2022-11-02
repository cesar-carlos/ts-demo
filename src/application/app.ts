export default class App {
  private static instance: App;

  private constructor() {}

  public static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  public async start(): Promise<void> {
    console.log("application started");
  }
}
