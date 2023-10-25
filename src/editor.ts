import { Container } from 'pcui';
import { ControlPanel } from './ui/control-panel';

class Editor {
    appContainer: Container;
    leftContainer: Container;
    controlPanel: ControlPanel;
    canvasContainer: Container;
    canvas: HTMLCanvasElement;

    constructor() {
        const appContainer = new Container({
            dom: document.getElementById('app-container')
        });

        const leftContainer = new Container({
            id: 'left-container',
            resizable: 'right',
            resizeMax: 1000,
            flex: true,
            flexDirection: 'column'
        });

        const controlPanel = new ControlPanel();
        leftContainer.append(controlPanel);

        const canvasContainer = new Container({
            id: 'canvas-container'
        })

        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';

        appContainer.append(leftContainer);
        appContainer.append(canvasContainer);
        canvasContainer.dom.appendChild(canvas);

        this.appContainer = appContainer;
        this.leftContainer = leftContainer;
        this.controlPanel = controlPanel;
        this.canvasContainer = canvasContainer;
        this.canvas = canvas;
    }
}

export { Editor };
