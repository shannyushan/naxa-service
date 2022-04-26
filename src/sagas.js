import { call, put, takeEvery } from "redux-saga/effects";
import { GET_SERVICE_FETCH, GET_SERVICE_SUCCESS } from "./actions";

function serviceFetch() {
    //do the data fetching and return the services
}

function* workGetServiceFetch() {
  const services = yield call(serviceFetch);
  yield put({ type: GET_SERVICE_SUCCESS, services });
}

function* sagas() {
  yield takeEvery(GET_SERVICE_FETCH, workGetServiceFetch);
}

export default sagas;