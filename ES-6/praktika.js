class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let cssStyleParam = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        div.style.cssText = cssStyleParam;
        div.textContent = 'Hello world!';
    }
}

const block = new Options(200, 300, 'pink', 50, 'center');

block.newDiv();

