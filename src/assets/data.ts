export const initialHtml = `<button class="showDate" type="button" onClick={showDate()}>Show Date and Time</button>

<button class="clearDate" type="button" onClick={hideDate()}>Clear Date and Time</button>

<p id="demo"></p>`;

export const initialCss = `.showDate{background-color: green; padding: 10px; border-radius: 8px; border: none; color: white; cursor:pointer}

.clearDate{background-color: red; padding: 10px; border-radius: 8px; border: none; color: white; margin-left: 10px; cursor:pointer}`;

export const initialJS = `function showDate (){
	document.getElementById('demo').innerHTML = Date();
}

function hideDate (){
	document.getElementById('demo').innerHTML = null;
}`;
