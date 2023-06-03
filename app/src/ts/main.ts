function doGet() {
    return HtmlService.createTemplateFromFile("app/src/resources/html/main")
        .evaluate()
        .setTitle("main")
        .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

class Main {
    private className: string = 'Main';
    protected age: number;
    hello: Function = function() {
        console.log('hello '+this.className);
    }
}