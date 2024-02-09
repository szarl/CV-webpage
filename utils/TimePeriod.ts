export class TimePeriod {
    startTime!: Date;
    endTime!: Date;
    constructor(data?: Partial<TimePeriod>) {
        Object.assign(this, data);
    }

    get yearDuration(): string {
        return `${this.startTime.getFullYear()} - ${this.endTime.getFullYear()}`;
    }

    get monthDuration(): string {
        return `${this.startTime.toLocaleString('default', { month: '2-digit' })}.${this.startTime.getFullYear()} - ${this.endTime.toLocaleString('default', { month: '2-digit' })}.${this.endTime.getFullYear()}`;
    }
}
