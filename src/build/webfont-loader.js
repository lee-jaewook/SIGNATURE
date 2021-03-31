const webfontsGenerator = require('webfonts-generator');
webfontsGenerator({
    // 폰트화 하고자하는 벡터 이미지들 경로 목록
    files: [
      'src/assets/icons/download.svg',
      'src/assets/icons/more.svg',
		],
    dest: 'src/my-icons/', // 아이콘 폰트 리소스들(my-icons.css, my-icons.eot, my-icons.ttf, ...)이 자동생성될 폴더경로
    fontName: 'my-icons', // 이 이름으로 폰트 리소스들이 만들어질것이다.
    html: true, // true이면 html 미리보기(my-icons.html)를 생성해줍ㅂ니다.
    templateOptions: {
      baseSelector: '.my-icon', // 기본으로 추가될 클래스 이름
      classPrefix: 'my-icon-' // 위 벡터 이미지 이름과 조합하여 추가될 클래스 이름(예: my-icon-download)
    }
}, function(error) {
    if (error) {
      console.log('> Webfont Generation Fail!', error);
    } else {
      console.log('> Webfont Generation Done!');
  }
});  