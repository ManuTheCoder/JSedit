var JSeditID = 0;
class JSedit {
	constructor (el, options = "") {
		this.el = el;
		this.options = options;

		el = document.querySelector(el);
		el.style.display = 'none'
		const d = `
		<div class="toolbar">
	${options.hideMenus === true ? "": `<select class="browser-default" onchange="formatDoc('formatBlock',this[this.selectedIndex].value);this.selectedIndex=0;">
		<option selected>Formatting</option>
		<option value="h1">Title 1</option>
		<option value="h2">Title 2</option>
		<option value="h3">Title 3</option>
		<option value="h4">Title 4</option>
		<option value="h5">Title 5</option>
		<option value="h6">Subtitle</option>
		<option value="p">Paragraph</option>
		<option value="pre">Preformatted</option>
		</select>
		<select class="browser-default" onchange="formatDoc('fontName',this[this.selectedIndex].value);this.selectedIndex=0;">
		<option class="heading">Font</option>
		<option selected>Arial</option>
		<option>Arial Black</option>
		<option>Courier New</option>
		<option>Times New Roman</option>
		</select>
		<select class="browser-default" onchange="formatDoc('fontSize',this[this.selectedIndex].value);this.selectedIndex=0;">
		<option class="heading" selected>Size</option>
		<option value="1px">1</option>
		<option value="2px">2</option>
		<option value="3px">3</option>
		<option value="4px">4</option>
		<option value="5px">5</option>
		<option value="6px">6</option>
		<option value="7px">7</option>
		</select>
		<select class="browser-default" onchange="formatDoc('forecolor',this[this.selectedIndex].value);this.selectedIndex=0;">

<option class="heading" selected>Color</option>
		<option style="background: #c62828" value="#c62828">Red</option>
		<option style="background: #fff" value="#fff">White</option>
		<option style="background: #ad1457" value="#ad1457">Pink</option>
		<option style="background: #6a1b9a" value="#6a1b9a">Purple</option>
		<option style="background: #4527a0" value="#4527a0">Deep Purple</option>
		<option style="background: #283593" value="#283593">Indigo</option>
		<option style="background: #1565c0" value="#1565c0">Blue</option>
		<option style="background: #0277bd" value="#0277bd">Light Blue</option>
		<option style="background: #00838f" value="#00838f">Cyan</option>
		<option style="background: #00695c" value="#00695c">Teal</option>
		<option style="background: #2e7d32" value="#2e7d32">Green</option>
		<option style="background: #558b2f" value="#558b2f">Light Green</option>
		<option style="background: #9e9d24" value="#9e9d24">Lime</option>
		<option style="background: #f9a825" value="#f9a825">Yellow</option>
		<option style="background: #ff8f00" value="#ff8f00">Amber</option>
		<option style="background: #ef6c00" value="#ef6c00">Orange</option>
		<option style="background: #d84315" value="#d84315">Orange</option>
		<option style="background: #6d4c41" value="#6d4c41">Brown</option>
		<option style="background: #607d8b" value="#607d8b">Blue-Gray</option>

		</select>
		<select class="browser-default" onchange="formatDoc('backcolor',this[this.selectedIndex].value);this.selectedIndex=0;">
		<option class="heading" selected>Background</option>
		<option style="background: #c62828" value="#c62828">Red</option>
		<option style="background: #fff" value="#fff">White</option>
		<option style="background: #ad1457" value="#ad1457">Pink</option>
		<option style="background: #6a1b9a" value="#6a1b9a">Purple</option>
		<option style="background: #4527a0" value="#4527a0">Deep Purple</option>
		<option style="background: #283593" value="#283593">Indigo</option>
		<option style="background: #1565c0" value="#1565c0">Blue</option>
		<option style="background: #0277bd" value="#0277bd">Light Blue</option>
		<option style="background: #00838f" value="#00838f">Cyan</option>
		<option style="background: #00695c" value="#00695c">Teal</option>
		<option style="background: #2e7d32" value="#2e7d32">Green</option>
		<option style="background: #558b2f" value="#558b2f">Light Green</option>
		<option style="background: #9e9d24" value="#9e9d24">Lime</option>
		<option style="background: #f9a825" value="#f9a825">Yellow</option>
		<option style="background: #ff8f00" value="#ff8f00">Amber</option>
		<option style="background: #ef6c00" value="#ef6c00">Orange</option>
		<option style="background: #d84315" value="#d84315">Orange</option>
		<option style="background: #6d4c41" value="#6d4c41">Brown</option>
		<option style="background: #607d8b" value="#607d8b">Blue-Gray</option>
		</select>
		<br>
		`}
			<button type="button" class="intLink" title="Bold" onclick="formatDoc('bold');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bold"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>
		</button>
		<button type="button" class="intLink" title="Italic" onclick="formatDoc('italic');">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-italic"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>
		</button>
		<button type="button" class="intLink" title="Underline" onclick="formatDoc('underline');">
			
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-underline"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg>
		</button>
		<button type="button" class="intLink" title="Redo" onclick="formatDoc('redo');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
		</button>
		<button type="button" class="intLink" title="Undo" onclick="formatDoc('undo');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
		</button>
			<button type="button" class="intLink" title="Left align" onclick="formatDoc('justifyLeft')">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
		</button>
		<button type="button" class="intLink" title="Center align" onclick="formatDoc('justifyCenter');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
		</button>
		<button type="button" class="intLink" title="Right align" onclick="formatDoc('justifyRight');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-right"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
		</button>
		<button type="button" class="intLink" title="Dotted list" onclick="formatDoc('insertUnorderedList');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
		</button>
		<button type="button" class="intLink" title="Remove formatting" onclick="formatDoc('removeFormat')">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-minus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>
		</button>
	
	
		<button type="button" class="intLink" title="Quote" onclick="formatDoc('formatBlock');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
		</button>
		<button type="button" class="intLink" title="Delete indentation" onclick="formatDoc('outdent');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
		</button>
		<button type="button" class="intLink" title="Add indentation" onclick="formatDoc('indent');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
		</button>
		<button type="button" class="intLink" title="Hyperlink" onclick="var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&&sLnk!=''&&sLnk!='http://'){formatDoc('createlink',sLnk)}" >

		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
		</button>

		<button type="button" class="intLink" title="Image" onclick="var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&&sLnk!=''&&sLnk!='http://'){formatDoc('insertImage',sLnk)}" >


<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>		</button>


		<button type="button" class="intLink" title="Cut" onclick="formatDoc('cut');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-scissors"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
		</button>
		<button type="button" class="intLink" title="Copy" onclick="formatDoc('copy');" >
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
		</button>
		<button type="button" class="intLink" title="Paste" onclick="formatDoc('paste');">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
		</button>
		</div>

		<div id="JSedit_${JSeditID}" contenteditable class="JSedit_textarea"></div>
		`;
		
		el.insertAdjacentHTML("beforebegin", d)
		document.getElementById(`JSedit_${JSeditID}`).onkeyup = function() {
			el.value = this.innerHTML
		}
		JSeditID++;
	}
}

function formatDoc(data, e="") {
	document.execCommand(data, false, e)
}
