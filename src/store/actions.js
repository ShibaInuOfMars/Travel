import {CHANGE_CITY} from './mutations-type';

export default {
    changeCity(ctx, city) {
        ctx.commit(CHANGE_CITY, city);
    }
};