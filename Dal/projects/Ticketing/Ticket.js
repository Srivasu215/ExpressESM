import { StartFunc as StartFuncKLowDb } from '../../../KLowDb/KData/JSON/UserData/ReadFile.js';

let GetFuncDal = async () => {
    return await StartFuncKLowDb();
};

let PostFuncDal = () => {
    return "Post From Dal"
    return GetFuncRepo();
};

export { GetFuncDal, PostFuncDal };