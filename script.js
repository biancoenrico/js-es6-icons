const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];



// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// const container = $('#icons-container');
// print(icons,container);

// ----------------------------------------------------------------------------

// Milestone 2
// Coloriamo le icone per tipo

// const coloredArray = addColor(icons,colors);
// print(coloredArray,container);

// ----------------------------------------------------------------------------

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const container = $('#icons-container');
const coloredArray = addColor(icons,colors);
const select = $('#type')
const iconsType = iconType(coloredArray);

filterOptions(iconsType,select);
print(coloredArray,container);

select.change(function(){
	const selectedType = select.val();

	const filtered = filteredIcon(coloredArray,selectedType);
	print(filtered,container)
})

// FUNCTIONS
// ----------------------------------------------------------------------------


// print function
// 
// stampa le icone nella pagina
// return:void
function print(icons,container){

	container.html('')

	icons.forEach(element =>{

		const {name,prefix,family,color} = element;
		console.log(color);
		let iconsImg = 

		`<div class="icon">
		<i class="${family} ${prefix}${name}" style = "color: ${color}"></i>
		<span>${name}</span>
		</div>
		`;

		container.append(iconsImg)

	})
}

// addcolor function
// 
// colora le icone del colore scelto
function addColor(icons,colors){

	const tipi = iconType(icons)

	const coloredIcon = icons.map((element) => {

		const iconCopy = {
			...element
		};

		const iconIndex = tipi.indexOf(iconCopy.type);
		console.log(iconCopy.type + ' - ' + iconIndex);

		iconCopy.color = colors[iconIndex];

		return iconCopy;
	})
	return coloredIcon;
}

// icontype function
// 
// seleziona tutte le icone in base al tipo
function iconType(icons){

	const arrayTipi = [];

	icons.forEach((element) =>{
		
		if(!arrayTipi.includes(element.type) ){
			arrayTipi.push(element.type);
		}
	});

	return arrayTipi;
}

// filteroptions function
// 
// filtra le option nel tag select
// return: void
function filterOptions(iconsType,select){
	iconsType.forEach((element) => {

		const option = `
		<option value="${element}">${element}</option>
		`;

		select.append(option);
	})
}

// filteredicon function
// 
// filtra le icone in base allópzione selezionata nella select
function filteredIcon(coloredArray,selectedType){
 	if(selectedType.length == 0){
		return coloredArray
	 }

	const filteredIconArray = coloredArray.filter((element) =>{
		return element.type == selectedType;
	})
	return filteredIconArray;
}