import {CHANGE_CITY} from './mutations-type';

export default {
    [CHANGE_CITY](state, city) {
        state.currentCity = city;
        try {
            localStorage.city = city;
        } catch(e) {
            console.log('获取位置失败');
        }
    }
};