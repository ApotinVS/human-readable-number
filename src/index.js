module.exports = function toReadable (number) {
	const numbers = new Map ([
		['1','one'], ['2', 'two'], ['3', 'three'] , ['4', 'four'], ['5', 'five'], 
		['6', 'six'], ['7', 'seven'], ['8', 'eight'], ['9', 'nine'], ['10', 'ten'],
		['11', 'eleven' ],  ['12', 'twelve'   ],    ['13', 'thirteen'], ['14', 'fourteen'], ['15', 'fifteen'],
        ['16', 'sixteen'],  ['17', 'seventeen'],    ['18', 'eighteen'], ['19', 'nineteen'], ['20', 'twenty' ],
    	['30', 'thirty' ],  ['40', 'forty'    ],    ['50', 'fifty'],    ['60', 'sixty'   ], ['70', 'seventy'],
        ['80', 'eighty' ],  ['90', 'ninety'   ], 	
	])
	
	const numberArray = number.toString().split('')
	let result = ''

	if (numberArray.length === 1 && numberArray[0] === '0')
		result += 'zero '
	else{
		if (numberArray.length === 1)
			result += numbers.get(number.toString()) + ' '

		if (numberArray.length === 2){
			if (Number(numberArray[1]) === 0){
				numberArray[0] = numberArray[0] + numberArray[1]
				result += numbers.get(numberArray[0].toString()) + ' '			
			}
			else if (Number(numberArray[0]) < 2){
				numberArray[0] = numberArray[0] + numberArray[1]
				result += numbers.get(numberArray[0].toString()) + ' '
			}
			else {
				numberArray[0] = Number(numberArray[0]) * 10
				for (let i = 0; i < numberArray.length; i++){
					result += numbers.get(numberArray[i].toString()) + ' '
				}
			}		 
		}

		if (numberArray.length === 3){
			result += numbers.get(numberArray[0].toString()) + ' ' + 'hundred' + ' '
			if (Number(numberArray[1]) === 0 && Number(numberArray[2]) === 0){
				result
			} 
				else if (Number(numberArray[1]) === 0){
					numberArray[1] = numberArray[2]
					for (let i = 1; i < numberArray.length-1; i++){
						result += numbers.get(numberArray[i].toString()) + ' '
					}
				} 
				else if (Number(numberArray[1]) < 2){
					numberArray[1] = numberArray[1] + numberArray[2]
					for (let i = 1; i < numberArray.length-1; i++){
						result += numbers.get(numberArray[i].toString()) + ' '
					}
				}
				else{
					numberArray[1] = Number(numberArray[1]) * 10
					if (numberArray[2] === '0')
					for (let i = 1; i < numberArray.length-1; i++){
						result += numbers.get(numberArray[i].toString()) + ' '
					}		
					else for (let i = 1; i < numberArray.length; i++){
						result += numbers.get(numberArray[i].toString()) + ' '
					}		 
				}
		}
	}
	return result.substring(0, result.length - 1)
}
