function mincost(arr)
{ 
	let minRope = 0;
	while (arr.length >= 2){
		arr.sort((a,b)=> a-b)

		let first  = arr.shift();
		let second = arr.shift();

		let sum = first + second
		minRope += sum

		arr.push(sum)
	}
	return minRope;
}

module.exports=mincost;
