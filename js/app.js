console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth

	const middleEarthSection = document.createElement("section");
	middleEarthSection.setAttribute("id", "middle-earth");
	
	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
			const articleLand = document.createElement("article");
			//   2b. gives each land article an `id` tag of the corresponding land name
			articleLand.setAttribute('id', lands[i]);
			//   2c. includes an h1 with the name of the land inside each land article
			const landsH = document.createElement("h1");
			landsH.innerHTML = lands[i];
			//   2d. appends each land to the middle-earth section
			articleLand.appendChild(landsH);
			middleEarthSection.appendChild(articleLand);
	}

	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarthSection);
}

// console.log(makeMiddleEarth);


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	
	// display an `unordered list` of hobbits in the shire
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
	const shireId = document.getElementById('The-Shire');
	const hobbitUl = document.createElement('ul');
	hobbitUl.setAttribute('id','hobbit-id');

	for(let i = 0; i < hobbits.length; i++) {
		const hobbitsLi = document.createElement("li");
		// give each hobbit a class of `hobbit`
		hobbitsLi.classList.add('hobbit');
		//add the names of each hobbit into the list element
		hobbitsLi.innerHTML = hobbits[i];
		hobbitUl.appendChild(hobbitsLi);
	}
	shireId.appendChild(hobbitUl);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const ringDiv = document.createElement("div");
	ringDiv.setAttribute("id", "the-ring"); //had to change to set attribute because other way was not working so tried this way
	// give the div a class of `'magic-imbued-jewelry'`
	ringDiv.classList.add('magic-imbued-jewelry');

	// add the ring as a child of `Frodo`
	//console.log(document.getElementsByClassName('hobbit')[0]);
	const childFrodo = document.getElementsByClassName('hobbit')[0];
	childFrodo.appendChild(ringDiv);
	
}



// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordorId = document.getElementById('Mordor');
	const baddiesUl = document.createElement('ul');
	baddiesUl.setAttribute('id', 'baddies-id')

	for(let i = 0; i < baddies.length; i++) {
		const baddiesLi = document.createElement("li");
		// give each of the baddies a class of "baddy"
		baddiesLi.classList.add('baddy');
		baddiesLi.innerHTML = baddies[i];
		baddiesUl.appendChild(baddiesLi);
	}
	// remember to append them to Mordor
	mordorId.appendChild(baddiesUl);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const buddiesAside = document.createElement("aside");

	// put an `unordered list` of the `'buddies'` in the aside
		const rivendellId = document.getElementById('Rivendell');
		const buddiesUl = document.createElement('ul');
		buddiesUl.setAttribute('id', 'buddies-id');
	
		for(let i = 0; i < buddies.length; i++) {
			const buddiesLi = document.createElement("li");
			buddiesLi.classList.add('buddy');
			buddiesLi.innerHTML = buddies[i];
			buddiesUl.appendChild(buddiesLi);
		}
		
		buddiesAside.appendChild(buddiesUl);
		// insert your aside as a child element of `rivendell`
		rivendellId.appendChild(buddiesAside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`

	const hobbitUl = document.getElementById('hobbit-id');
	const rivendellId = document.getElementById('Rivendell');

	rivendellId.appendChild(hobbitUl);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const getBuddy = document.getElementsByClassName('buddy');
	getBuddy[3].innerHTML = 'Aragorn';

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const fellowshipDiv = document.createElement('div');
	fellowshipDiv.setAttribute('id', 'the-fellowship');
	const fellowUl = document.createElement('ul');
	fellowUl.setAttribute('id', 'the-fellowship');
	const rivendellId = document.getElementById('Rivendell');
	rivendellId.appendChild(fellowshipDiv);

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const buddiesAndHobb = rivendellId.querySelectorAll('li');

	for(let i = 0; i < buddiesAndHobb.length; i++) {
		// after each character is added make an alert that they // have joined your party
		alert(`${buddiesAndHobb[i].innerText} have joined your party`)
		fellowUl.appendChild(buddiesAndHobb[i]);
	}

	fellowshipDiv.append(fellowUl);

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')

	const fellowsId = document.getElementById('the-fellowship');
	const fellowsArr = fellowsId.querySelectorAll('li');
	//console.log(fellowsArr[0]); -> index of Gandalf!
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	fellowsArr[0].innerText = 'Gandalf the White';

	// apply the following style to the element, make the // background 'white', add a grey border
	fellowsArr[0].style.background = 'white';
	fellowsArr[0].style.border = '2px solid grey';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been Blown!!!');
	// Boromir's been killed by the Uruk-hai!
	alert('Oh no! Boromir has been killed by the Uruk-hai. He is no longer apart of your fellowship :(');
	// Remove `Boromir` from the Fellowship
	const fellowsId = document.getElementById('the-fellowship');
	const fellowsArr = fellowsId.querySelectorAll('li');
	fellowsArr[4].remove();

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const fellowsId = document.getElementById('the-fellowship');
	const fellowsArr = fellowsId.querySelectorAll('li');

	const frodo = fellowsArr[4];
	const sam = fellowsArr[5];

	const moveMordor = document.getElementById('baddies-id');
	moveMordor.appendChild(frodo);
	moveMordor.appendChild(sam);

	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoomDiv = document.createElement('div');
	mountDoomDiv.setAttribute('id', 'mount-doom');
	const mordorId = document.getElementById('Mordor');
	mordorId.appendChild(mountDoomDiv);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollumDiv = document.createElement('div');
	gollumDiv.setAttribute('id', 'gollum');
	const mordorId = document.getElementById('Mordor');
	mordorId.appendChild(gollumDiv);

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const ring = document.getElementById('the-ring');
	gollumDiv.appendChild(ring);
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom');
	mountDoom.appendChild(gollumDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const removeGollum = document.getElementById('gollum');
	removeGollum.remove();
	// Move all the `hobbits` back to `the shire`
	const mordorId = document.getElementById('Mordor');
	const rivendellId = document.getElementById('Rivendell');
	const shireId = document.getElementById('The-Shire');
	const mordorArr = mordorId.querySelectorAll('li')
	const rivendellArr = rivendellId.querySelectorAll('li');
	const newHobb = document.createElement('ul');

	const frodo = mordorArr[4];
	const sam = mordorArr[5];
	const merry = rivendellArr[4];
	const pippin = rivendellArr[5];

	newHobb.appendChild(frodo);
	newHobb.appendChild(sam);
	newHobb.appendChild(merry);
	newHobb.appendChild(pippin);

	shireId.appendChild(newHobb);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
