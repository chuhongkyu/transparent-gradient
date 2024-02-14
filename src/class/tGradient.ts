class TGradient {
    private validDirections = ['right', 'bottom', 'top', 'left'];

    constructor(private target: Element | string, private direction: string = 'right') {
        this.initialize();
    }

    private initialize(): void {
        let main: Element | null = null;

        if (typeof this.target === "string") {
            main = document.querySelector(this.target);
        } else {
            main = this.target;
        }

        if (!main) {
            throw new Error('Target is required or invalid.');
        }

        this.applyStyle(main);
    }

    private applyStyle(main: Element): void {
        const normalizedDirection = this.validDirections.includes(this.direction) ? this.direction : 'right';

        main.setAttribute('style', `
            -webkit-mask-size: cover;
            mask-size: cover;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: ${normalizedDirection};
            mask-repeat: no-repeat;
            -webkit-mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
            mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
        `);
    }
}

export { TGradient };
