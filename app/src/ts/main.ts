function doGet(e:any): any {
    console.log(e);
    const html:any = HtmlService.createTemplateFromFile(PathConst.HTML_MAIN);
    return html
        .evaluate()
        .setTitle('moneyrecorder')
        .addMetaTag("viewport", "width=device-width, initial-scale=1");
}