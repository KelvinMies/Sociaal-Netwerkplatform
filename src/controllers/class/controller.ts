export class Controller {
    constructor() {

    }
    public async get(id?: string): Promise<object[] | object> {
        return [] 
    }
    public async post(data:object | null): Promise<object> {
        return {}
    }
    public async update(id: string, data:object | null): Promise<object> {
        return {}
    }
    public async delete(id: string ): Promise<boolean> {
        return false
    }
}   