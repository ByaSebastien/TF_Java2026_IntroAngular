export {};

declare global {
  interface Date {
    addDays(days: number): Date;
  }
}

Date.prototype.addDays = function (days: number): Date {
  this.setDate(this.getDate() + days);
  return this;
};
