/* eslint-disable no-unused-vars */
const Service = require('./Service');
const CommonService = require('./CommonService');
const ExportData = require('../middle/exportData');

class CommonServiceImpl extends CommonService {

    /**
     * Get data in xlsx format
     *
     * returns File
     **/
    static dataGET() {
        return new Promise(
            async (resolve) => {
                try {
                    resolve(Service.successResponse(await ExportData.getReport()));
                } catch (e) {
                    resolve(Service.rejectResponse(
                        e.message || 'Invalid input',
                        e.status || 405,
                    ));
                }
            },
        );
    }

}

module.exports = CommonServiceImpl;
