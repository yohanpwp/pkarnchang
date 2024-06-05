import { FormGroup } from "@angular/forms";

export interface IApp {
    Items: ClassApp[];
    Form: FormGroup;
    Insert(value: ClassApp);
    Update(id: number, value: ClassApp);
    Delete(id: number);
}

export class ClassApp {
    image: string;
    category: string;
    name: string;
    detail: string;
    date: Date;
    id: number;

    static mapClass(model: ServerClassApp) {
        const item = new ClassApp();
        item.image = model.post_image;
        item.category = model.post_category;
        item.name = model.post_name;
        item.detail = model.post_detail;
        item.date = new Date(model.post_date);
        item.id = model.id;
        return item;
    }
}

export class ServerClassApp {
    post_image: string;
    post_category: string;
    post_name: string;
    post_detail: string;
    post_date: string;
    id: number;

    static mapClass(model: ClassApp) {
        const item = new ServerClassApp();
        item.post_image = model.image;
        item.post_category = model.category;
        item.post_name = model.name;
        item.post_detail = model.detail;
        return item;
    }
}