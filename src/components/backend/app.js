
const methods = { // 추후 필요한 method를 추가하기 위해 Object로 선언
	isEmpty: () => { // 필요한 기능 작성
		alert('하이!!')
		// if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
		// 	alert('empty!!')
		// 	return true
		// }

		// else {
		// 	alert('not empty!')
		// 	return false
		// }
	},
}

export default { // main.js에서 사용하기 위한 export
	install(Vue) { // install 호출을 위한 함수 작성 (Vue.use() 에서)
		Vue.prototype.$isEmpty = methods.isEmpty // global method type으로 정의
	}
}