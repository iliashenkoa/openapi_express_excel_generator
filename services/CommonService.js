/* eslint-disable no-unused-vars */
const Service = require('./Service');

class CommonService {

  /**
   * Get data in xlsx format
   *
   * returns File
   **/
  static dataGET() {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
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

module.exports = CommonService;
