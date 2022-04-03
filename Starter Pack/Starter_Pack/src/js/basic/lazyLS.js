"use strict"
import ibg from "./ibg";

const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;//? Висота екрана браузера без скролу
const loadMoreBlock = document.querySelector('._load-more');

let lazyImagesPositions = []; //! Масив з позиціями відносно верху сторінки усіх елементів з картинками
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();//! Відбудиться підгрузка елементів при перезагрузці сторінки на просткроленій частині сторінки
		}
	});
	ibg();
}

window.addEventListener("scroll", lazyScroll);
function lazyScroll() {
	if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) { //? Так як ми кастомін атребути видаляємо, то дана перевірка не спрацює при відобрежені усіх елементів
		lazyScrollCheck();
	}
	if (!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
	if (!loadMoreBlock.classList.contains('_loading')) {
		loadMore();
	}
	ibg();
}

//!  Методи реалізації lazyloading для усіх елементів сторінки
function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
	ibg();
}


function getMap() {
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapBlockPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		if (loadMapUrl) {
			loadMapBlock.insertAdjacentHTML(
				"beforeend",
				`<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
			);
			loadMapBlock.classList.add('_loaded');
		}
	}
}


function loadMore() {
	const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset;
	const loadMoreBlockHeight = loadMoreBlock.offsetHeight;//! Отримуємо висоту блока в який ми маємо підгружати контент

	if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
		getContent();
	}
}

async function getContent() {
	if (!document.querySelector('._loading-icon')) {
		//! Інтеграцію візуалізації загрузки через фон
		loadMoreBlock.insertAdjacentHTML(
			'beforeend',
			`<div class="_loading-icon"></div>`
		);
	}
	loadMoreBlock.classList.add('_loading');

	let response = await fetch('_more.html', {
		method: 'GET',
	});
	if (response.ok) {
		let result = await response.text();
		loadMoreBlock.insertAdjacentHTML('beforeend', result);
		loadMoreBlock.classList.remove('_loading');
		if (document.querySelector('._loading-icon')) {
			document.querySelector('._loading-icon').remove();
		}
	} else {
		alert("Ошибка");
	}
}

































