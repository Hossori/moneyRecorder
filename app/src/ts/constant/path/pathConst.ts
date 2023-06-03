class PathConst {
    protected static readonly SRC_ROOT = "app/src/";
    protected constructor() { }
}

/*
 * これをhtmlPathConst.tsとして分離するとアルファベット順でこのファイルより先に初期化されてしまう。
 * tsじゃない別ファイルでメッセージ定義する方法ないかな
 */
export class HtmlPathConst extends PathConst {
    static readonly ROOT = PathConst.SRC_ROOT + "resources/html/";

    static readonly MAIN = HtmlPathConst.ROOT + "main";
    static readonly TAB = HtmlPathConst.ROOT + "tab";

    private constructor() {
        super();
    }
}