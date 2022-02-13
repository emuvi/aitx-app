import { QinColumn, QinLabel } from "qinpel-cps"

class AitxApp extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, world!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new AitxApp().putAsBody();