import {Printer} from "./Printer";

export class Watcher {
    static watchThis(id) {
        document.getElementById(id).onclick = () => {
            new Printer().printHelloWord();
        };
    }
}
