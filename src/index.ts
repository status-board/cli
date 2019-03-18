export class C {
    private x = 10;

    public getX = () => this.x;

    public setX = (newVal: number) => { this.x = newVal; }
}

export const x = new C();
export const y = { ...{ some: 'value' } };
