import { call, put, takeEvery } from "redux-saga/effects";
import {getServiceSuccess} from "./serviceReducer";

function serviceFetch() {
    //do the data fetching and return the services
    return fetch("https://admin.naxa.com.np/api/services", {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
           return data.sort((a, b) => {
            return a.service_order - b.service_order;
          });
        });
}

function* workGetServiceFetch() {
  const data = yield call(serviceFetch);
  yield put(getServiceSuccess(data));
}

function* sagas() {
  yield takeEvery('services/getServiceFetch', workGetServiceFetch);
}

export default sagas;
