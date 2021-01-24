function win() {
    // Using this function will make you win at life
    var elements = document.querySelectorAll('input');
    var colors = ["red", "yellow", "salmon", "deepink", "moccasin", "papayawhip", "fuchsia", "rebeccapurple", "darkslateblue", "lime", "springgreen", "seagreen", "olive", "darkturquoise", "powderblue", "royalblue", "navy", "wheat", "saddlebrown", "seashell", "mistyrose", "slategray", "silver"];
    Array.prototype.forEach.call(elements, function(el, i){
        var color = colors[Math.floor(Math.random()*colors.length)];
        el.style.backgroundColor = color;
    });
}