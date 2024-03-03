
// 00 00 ff



let hexColor= [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let colorPart= [];



console.log();

for(let i=0; i<6; i++){
    colorPart.push(hexColor[Math.floor(Math.random()*hexColor.length)]);
}

let finalColor= `#${colorPart.join("")}`;

console.log(finalColor);

document.body.append(finalColor);


document.body.style.background= finalColor;