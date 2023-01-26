import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(discount?: number): number {
        const cost = this._items.reduce((acc, item) => item.price + acc, 0);
        return discount ? (1 - discount / 100) * cost : cost;
    }

    delete(id: number): void {
        const index = this._items.findIndex((item) => item.id === id);
        if (index < 0) {
            return;
        }
        this._items.splice(index, 1);
    }
}