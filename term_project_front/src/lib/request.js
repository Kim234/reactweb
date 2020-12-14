import axios from 'axios';

const API_DEFAULT = "http://localhost:8080/";
const instance = axios.create({ baseURL: API_DEFAULT });



/*메뉴 request */

/*reserve list 가져오기*/ 
export async function getReserve() {
    const result = await instance.get('/get');
    return result.data.list
}

/*reserve list 생성*/ 
export async function createReserve({movie_name, review_content,rate}) {
    const result = await instance.post('/', {movie_name, review_content,rate});
    return result.data
}

/*평가한 메뉴 list 가져오기*/ 
export async function getMenuwithRate() {
    const result = await instance.get('/menu/getMenuwithRate');
    return result.data.list
}

/*평가 필요 메뉴 list 가져오기*/ 
export async function getMenuforRate() {
    const result = await instance.get('/menu/getMenuforRate');
    return result.data.list
}

/*메뉴 평가하기*/
export async function updateMenuRate({_id,rating}) {
    const result = await instance.post('/menu/updateRate',{_id,rating});
    return result.data
}

/*메뉴 평가리스트 추가*/
export async function addMenuRate({id}) {
    const result = await instance.post('/menu/addRate',{id});
    return result.data
}


/*식당 request */

/*모든 cafeteria list 가져오기*/ 
export async function getAllCafeteria() {
    const result = await instance.get('/cafeteria/getAllCafeteria');
    return result.data.list
}

/*추천받은 cafeteria list 가져오기*/ 
export async function getRecomCafeteria({spicy,soup,price}) {
    const result = await instance.post('/cafeteria/getRecomCafeteria',{spicy,soup,price});
    return result.data.list
}

/*식당 예약하기*/ 
export async function ReserveCafeteria({name,time,people}) {
    const result = await instance.post('/cafeteria/ReserveCafeteria',{name,time,people});
    return result.data
}

/*식사 완료하기*/ 
export async function finishEat({_id}) {
    const result = await instance.post('/cafeteria/finishEat',{_id});
    return result.data
}

/*예약된 cafeteria list 가져오기*/ 
export async function getReserveCafeteria() {
    const result = await instance.get('/cafeteria/getReserveCafeteria');
    return result.data.list
}




/*메뉴,식당 db 추가용도 */
export async function createReview({menu_name, isRate,rating,url}) {
    const result = await instance.post('/menu/', {menu_name, isRate,rating,url});
    return result.data
}

export async function createCafeteria({cafeterianame, isSpicy,hasSoup,price,url,isReserve,people_come,time_come}) {
    const result = await instance.post('/cafeteria/', {cafeterianame, isSpicy,hasSoup,price,url,isReserve,people_come,time_come});
    return result.data
}

export default {
    getReserve,
    createReserve,
    getMenuforRate,
    getMenuwithRate,
    updateMenuRate,
    addMenuRate,
    createReview,
    createCafeteria,
    getAllCafeteria,
    getRecomCafeteria,
    ReserveCafeteria,
    getReserveCafeteria,
    finishEat
}