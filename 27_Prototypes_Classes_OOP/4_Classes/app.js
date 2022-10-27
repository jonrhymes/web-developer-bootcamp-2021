// syntactic sugar = makes for cleaner code

// always capitalize Class name

class Color {
    constructor(r,g,b, name) { // constructors execute immediately whenever a new color is created. Must have when creating a new Class
        this.r = r;
        this.g = g;
        this.b = b;
        // this.whatever is the property we are adding to an object
        this.name = name;
        this.calcHSL();

        // console.log("INSIDE CONSTRUCTOR");
        // console.log(r,g,b);
        // console.log("THIS", this); // Color {}
    }
    innerRGB() { // helper method
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    greet() { // same thing as doing Color.prototype.greet. Added to prototype automatically
        return `HELLO FROM ${this.name}!`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a=1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this; // destructure
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r) 
        // red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
        // green is max
            g = (b - r) / delta + 2;
        else
        // blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 6);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color(255,67,89, "tomato") // arguments are passed through running automatically.
console.log(c1.greet()); 
console.log(c1.hex()); 
const c2 = new Color(67,255, 10, "green")
console.log(c2.greet()); 
console.log(c2.hex()); 
console.log(c1.hex === c2.hex); 
console.log(c1.rgb === c2.rgb); 
console.log(c1.rgba(.5)); 

const green = new Color(67,255, 10, "green")
console.log(green.hsl())
console.log(green.opposite())

"hsl(180, 20%, 52%)"

const orange = new Color(230, 126, 34, 'carrot');
console.log(orange.hsl()); // hsl(3, 79.7%, 51.8%);
console.log(orange.fullySaturated()) // hsl(3, 100%, 51.8%);
console.log(orange.opposite()) // hsl(183, 79.7%, 51.8%)
