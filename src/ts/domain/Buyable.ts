export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly model?: string,
    readonly price: number,
}