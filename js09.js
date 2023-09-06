console.log("첫번째 줄\n두번째 줄");
//여러줄을 나타내는 템플릿
console.log(`첫번째 줄
두번째 줄`);

//템플릿의 중첩 사용
const class1 = `header ${isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;
