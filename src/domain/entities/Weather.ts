export class Weather {
    constructor(
        public readonly city: string,
        public readonly description: string,
        public readonly icon: string,
        public readonly temperature: number,
        public readonly feels_like: number,
        public readonly humidity: number
    ) {}
}
