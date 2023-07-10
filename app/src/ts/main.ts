//import PathConst from "./constant/path/pathConst";

function doGet(e:any) {
    console.log(e);
    const html:any = HtmlService.createTemplateFromFile(PathConst.HTML_MAIN);
    return html
        .evaluate()
        .setTitle('moneyrecorder')
        .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

// declare const global: {
//     [x: string]: unknown;
// };
global.doGet = doGet;