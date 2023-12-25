import CommonMock from '../../../MockAllow.json'  assert { type: 'json' };
import { ForExistence as ForExistenceCheckFile } from '../CheckJsonFolder.js';
import { JSONPreset } from 'lowdb/node';

let StartFunc = async () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalFromCheck = ForExistenceCheckFile();

    LocalReturnData = { ...LocalFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${LocalReturnData.JsonFolderPath}/316/Customers.json`;

    const defaultData = { error: "From KLowDb" }
    const db = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData)
    const ss = await JSONPreset(LocalReturnData.UserDataFilePath, defaultData);
    console.log("ss",ss);

    LocalReturnData.JsonData = db.data;
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === "K29") {
        StartFunc().then(PromiseData => {
            console.log("PromiseData : ", PromiseData);
        })

    };
};

export { StartFunc };