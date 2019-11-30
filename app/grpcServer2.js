var service = require('../static_codegen/proto/Student_grpc_pb');
var message = require('../static_codegen/proto/Student_pb');

var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.StudentServiceService, {
    getRealNameByUserName: getRealNameByUserName,
    getStudentByAge: getStudentByAge,
    getStudentWrapperByAges: getStudentWrapperByAges,
    biTalk: biTalk
});

server.bind('127.0.0.1:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUserName(call, callback) {
    console.log('username：' + call.request.getUsername());

    var myResponse = new message.MyResponse();
    myResponse.setRealname('赵六');

    callback(null, myResponse);
}

function getStudentByAge() {
}

function getStudentWrapperByAges() {
}

function biTalk() {
}
