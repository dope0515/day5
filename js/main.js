const num = 200;

//반환된 이미지를 전역변수에 담음
const imgDOM = createImgs('figure', num);

window.addEventListener('mousemove', (e) => matchMove(imgDOM, num, e));

//동적으로 이미지 생성후 반환 함수
function createImgs(targetEl, num) {
	const frame = document.querySelector(targetEl);
	let tags = '';
	Array(num)
		.fill()
		.forEach((_, idx) => (tags += `<img src='img/pic${idx}.jpg' />`));
	frame.innerHTML = tags;
	return frame.querySelectorAll('img');
}

//마우스 포인터 위치에 따라 이미지 순서매칭
function matchMove(arrEl,num,e){
    const percent = parseInt((e.clientX / window.innerWidth) * num);
	console.log(percent);

	for (const img of arrEl) img.style.visibility = 'hidden';
	arrEl[percent].style.visibility = 'visible';
}