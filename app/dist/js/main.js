"use strict";
function doGet(e) {
    console.log(e);
    const html = HtmlService.createTemplateFromFile(PathConst.HTML_MAIN);
    return html
        .evaluate()
        .setTitle('moneyrecorder')
        .addMetaTag("viewport", "width=device-width, initial-scale=1");
}
//# sourceMappingURL=main.js.map