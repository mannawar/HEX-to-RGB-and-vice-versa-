function myFunction() {
    let input = prompt("Please enter the digit: ");
    debugger;
    const hex = '[0-9a-fA-F]';
    const re = new RegExp(`^(${hex}{4}|${hex}{7})$`);
    if(re.test(input)) {
       return alert(hexToRGB(input));
    }
    else {
       return alert(RGBToHex(input));
    }
}
myFunction();

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb("+ +r + "," + +g + "," + +b + ")";  //variables are prepended with + to convert string back to numbers
}
//hexToRGB('2222')
//hexToRGB('4616625')

//debugger;
function RGBToHex(r,g,b) {
    let x = r.split(',').map(Number);
    r = x[0].toString(16);
    g = x[1].toString(16);
    b = x[2].toString(16);

    if(r.length == 1) {
        r = "0" + r;
    }
    else if (g.length == 1) {
        g = "0" + g;
    }
    else {
        b = "0" + b;
    }    
    return "#" + r + g + b;
}