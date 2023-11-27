const baseUrl = import.meta.env.VITE_APP_URL;

export default baseUrl;

const SERVER_API = baseUrl + '/api';

const API_LOGIN = SERVER_API + '/users/login';
const API_USER = SERVER_API + '/users/current';
const API_REALTIME_DASHBOARD = SERVER_API + '/trayek/sum';
const API_READER_DASHBOARD = SERVER_API + '/reader/count';
const API_TRANSACTION_DASHBOARD = SERVER_API + '/trayek/chart/line/transaksi';
const API_REVENUE_DASHBOARD = SERVER_API + '/trayek/chart/line/pendapatan';
const API_READER = SERVER_API + '/reader';
const API_INTERVAL_TABLE_FINANCE = SERVER_API + '/trayek';
const API_INTERVAL_TRANSACTION_FINANCE = SERVER_API + '/trayek/chart/line/transaksi';
const API_INTERVAL_REVENUE_FINANCE = SERVER_API + '/trayek/chart/line/pendapatan';
const API_SUMMARY_FINANCE = SERVER_API + '/trayek/summary';
const API_TRAYEK_TABLE = SERVER_API + '/trayek/table';
const API_DRIVER_MASTER = SERVER_API + '/driver';
const API_CHECK_DRIVER_ACTIVE = SERVER_API + '/driver/check';
const API_DRIVER_REGISTER = SERVER_API + '/driver/register';
const API_TRAYEK_MASTER = SERVER_API + '/trayek/master';
const API_TRAYEK_OPTION = SERVER_API + '/trayek/option';
const API_KENDARAAN_MASTER = SERVER_API + '/kendaraan/master';
const API_USERS_MASTER = SERVER_API + '/user/master';
const API_ROLE_OPTION = SERVER_API + '/role/option';
const API_READER_MASTER = SERVER_API + '/reader/master';
const API_KENDARAAN_OPTION = SERVER_API + '/kendaraan/option';


export const config = {
    login: API_LOGIN,
    users: API_USER,
    realtimeDashboard: API_REALTIME_DASHBOARD,
    readerDashboard: API_READER_DASHBOARD,
    chartTransactionDashboard: API_TRANSACTION_DASHBOARD,
    chartRevenueDashboard: API_REVENUE_DASHBOARD,
    readerTable: API_READER,
    intervalTable: API_INTERVAL_TABLE_FINANCE,
    intervalTransaction: API_INTERVAL_TRANSACTION_FINANCE,
    intervalRevenue: API_INTERVAL_REVENUE_FINANCE,
    summaryFinance: API_SUMMARY_FINANCE,
    trayekTable: API_TRAYEK_TABLE,
    driverMaster: API_DRIVER_MASTER,
    checkDriverActive: API_CHECK_DRIVER_ACTIVE,
    registerDriver: API_DRIVER_REGISTER,
    trayekMaster: API_TRAYEK_MASTER,
    kendaraanMaster: API_KENDARAAN_MASTER,
    trayekOption: API_TRAYEK_OPTION,
    usersMaster: API_USERS_MASTER,
    roleOption: API_ROLE_OPTION,
    readerMaster: API_READER_MASTER,
    kendaraanOption: API_KENDARAAN_OPTION
};
