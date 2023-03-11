export interface IDateProvider {
  compareInDays(start_date: Date, end_date: Date): number;
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  datenow(): Date;
  addDays(days: number): Date;
}
