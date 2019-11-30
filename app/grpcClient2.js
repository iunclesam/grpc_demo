var service = require('../static_codegen/proto/Student_grpc_pb');
var message = require('../static_codegen/proto/Student_pb');

var grpc = require('grpc');

var client = new service.StudentServiceClient('127.0.0.1:8899', grpc.credentials.createInsecure());

var request =  new message.MyRequest();
request.setUsername('王五');


client.getRealNameByUserName(request, function (error, respData) {
    console.log(respData.getRealname());
})