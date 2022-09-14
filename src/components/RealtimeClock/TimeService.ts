export interface TimeService {
  getCurrentTime(): Promise<Date>;
}