// 用户防止用户禁止本地存储或使用隐身模式浏览所产生的错误
let defaultCity = '东莞';
try {
    if(localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch(e) {
    console.log('获取位置失败');
}

export default {
    currentCity: defaultCity
};