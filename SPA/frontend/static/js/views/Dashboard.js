import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, YoU</h1>
            <p> kjhkdjfhsdfkj </p>
            <p> 
                <a href="/posts" data-link>View recent posts</a>.
            </p>    
        `;
    }
}