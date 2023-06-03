import { HtmlPathConst } from "./constant/path/pathConst";

function doGet() {
    return HtmlService.createTemplateFromFile(HtmlPathConst.MAIN)
        .evaluate()
        .setTitle("main")
        .addMetaTag("viewport", "width=device-width, initial-scale=1");
}