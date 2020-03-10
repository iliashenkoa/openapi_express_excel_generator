const Controller = require('./Controller');

class CommonController {
  constructor(Service) {
    this.service = Service;
  }

  async dataGET(request, response) {
    await Controller.handleRequest(request, response, this.service.dataGET);
  }

}

module.exports = CommonController;
