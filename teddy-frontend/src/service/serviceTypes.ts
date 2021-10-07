export interface ServiceTypes<T> {
  onSuccess?: Function;
  onError?: Function;
  id?: string;
  data?: T;
  token?: string
}
