let lottoSet = {
	minNum: 1,
	maxNum: 45,
	cnt: 6
}

function chooseNum() {
	let lottoNum = new Set();
	let { minNum, maxNum, cnt } = lottoSet;

	while (lottoNum.size <= cnt) {
		lottoNum.add(Math.floor((Math.random() * maxNum + 1)))
	}

	return lottoNum
}

function changeTable(arr, divList) {
	divList[divList.length - 1].textContent = arr.pop()

	arr.sort(function (a, b) { return a - b; })
	for (let i = 0; i < arr.length; i++) {
		divList[i].textContent = arr[i];
		if (arr[i] < 10) divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_2.png");')
		else if (arr[i] < 20) divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_3.png");')
		else if (arr[i] < 30) divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_6.png");')
		else if (arr[i] < 40) divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_5.png");')
		else divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_4.png");')
	}
}

function resetTable(divList) {
	for (let i = 0; i < divList.length; i++) {
		divList[i].textContent = '?'
		divList[i].setAttribute('style', 'background-image: url("public/src/lottoBall_1.png");')
	}
}