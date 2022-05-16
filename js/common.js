"use strict";

function newSize() {
	let outRes = document.querySelector('.outRes');
	let res = '';
	let newH, newW;
	let coef, err;

	let heightLogoS = +document.querySelector('.heightLogoS').value;
	let widthLogoS = +document.querySelector('.widthLogoS').value;

	let heightLogo = +document.querySelector('.heightLogo').value;
	let widthLogo = +document.querySelector('.widthLogo').value;

	let squareS = heightLogoS * widthLogoS;
	let square = heightLogo * widthLogo;

	if ( squareS == square ) {
		err = true;
	} else if ( squareS > square ) {
		coef = Math.sqrt(squareS/square);
		newH = heightLogo * coef;
		newW = widthLogo * coef;
	} else {
		coef = Math.sqrt(square/squareS);
		newH = heightLogo / coef;
		newW = widthLogo / coef;
	}

	if ( err ) {
		outRes.innerHTML = `Sizes are equal`;
	}
	else {
		outRes.innerHTML = `new Height = ${newH} <br> new width = ${newW}`; 
	}
}

document.querySelector('.form__button').onclick = newSize;