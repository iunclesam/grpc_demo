var PROTO_FILE_PATH = '/Users/agan/work/front_end/grpc_demo/proto/Student.proto';

var grpc = require('grpc');

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service, {
    getRealNameByUserName: getRealNameByUserName,
    getStudentByAge: getStudentByAge,
    getStudentWrapperByAges: getStudentWrapperByAges,
    biTalk: biTalk
});



server.bind('127.0.0.1:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUserName(call, callback) {
    console.log('username：' + call.request.username);
    callback(null, {realname: 'node-张三'});
}

function getStudentByAge() {
    
}

function getStudentWrapperByAges() {
    
}

function biTalk() {
    
}
