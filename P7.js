function format_name(name) {
	let arr = name.split(' ');
	let p = [];
	for (let i = 0; i < arr.length; i++) {
		p.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
	}
	console.log(p.join(' '));
}

// format_name('brit hasE');

function initials(name) {
	let arr = name.split(' ');
	let initial = [];
	arr.forEach((word) => {
		initial.push(word[0]).toUpperCase;
	});
	console.log(initial.join(''));
}

// initials('Brittney Haselmayer');

function reverseWords(word) {
	let arr = word.split(' ');
	let reversed = [];
	arr.forEach((word) => {
		reversed.push(reverseword(word));
	});
	console.log(reversed.join(' '));
}

function reverseword(word) {
	let arr = word.split('').reverse();
	return arr.join('');
}

// reverseword('devon');

function combinations(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (j > i) {
				result.push([arr[i], arr[j]]);
			}
		}
	}
	console.log(result);
}

// combinations([1, 2, 3]);

function arradd(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			sum += arr[i][j];
		}
	}
	console.log(sum);
}

// arradd([
// 	[1, 2],
// 	[3, 5, 7],
// ]);

function twodimention(arr) {
	let newarr = [];
	for (let i = 0; i < arr.length; i++) {
		let word = arr[i][0];
		let num = arr[i][1];
		// console.log(word, num);
		for (let i = num; i > 0; i--) {
			newarr.push(word);
		}
	}
	console.log(newarr);
}

// twodimention([
// 	['maybe', 2],
// 	['yea', 1],
// 	['no', 0],
// ]);

function transarr(arr) {
	let newstr = '';
	for (let i = 0; i < arr.length; i += 2) {
		let word = arr[i];
		let num = arr[i + 1];
		for (num; num > 0; num--) {
			newstr += word;
		}
	}

	console.log(newstr);
}

// transarr(['britt', 1, 'devon', 2, 'mike', 1]);

function elementcount(arr) {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		if (![arr[i]] in obj) {
			obj.arr[i] = 1;
		}
	}

	console.log(obj);
}

elementcount(['a', 'a', 'a', 'b', 'b', 'c']);
