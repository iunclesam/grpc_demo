var PROTO_FILE_PATH = '/Users/agan/work/front_end/grpc_demo/proto/Student.proto';

var grpc = require('grpc');

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var client = new grpcService.StudentService('127.0.0.1:8899', grpc.credentials.createInsecure());

client.getRealNameByUserName({username: '李四'}, function (error, respData) {
    console.log(respData)
})