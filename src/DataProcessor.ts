export interface Record {
  email: string;
  firstName: string;
  lastName: string;
  registered: string;
}

export abstract class DataProcessor<T extends Record | Record[]> {

  protected readonly data: Record[];

  public constructor(data: DataProcessor<T>['data']) {
    this.data = data;
  }

  public abstract process(): Promise<T | undefined>;

}
