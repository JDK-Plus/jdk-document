---
title: 使用说明
order: 10
icon: edit
date: 2022-01-07
category:
    - Grpc
    - springboot
tag:
    - Grpc
---



## 引入依赖

```xml
<dependency>
    <groupId>plus.jdk.grpc</groupId>
    <artifactId>spring-boot-starter-grpc</artifactId>
    <version>1.0.8</version>
</dependency>
```

## 需要添加的配置项

```
# 是否开启grpc server
plus.jdk.grpc.enabled=true

plus.jdk.grpc.client.enabled=true

# 指定端口
plus.jdk.grpc.port=10400

# 指定监听的服务地址
plus.jdk.grpc.address=*

# 是否支持长连接
plus.jdk.grpc.enable-keep-alive=true

# 长连接超时断开时间
plus.jdk.grpc.keep-alive-timeout=111

# NioEventLoopGroup master核心线程数
plus.jdk.grpc.master-thread-num=1

# NioEventLoopGroup worker线程数
plus.jdk.grpc.worker-thread-num=10

# 数据包最大多少字节
plus.jdk.grpc.max-inbound-message-size=100000

# 发送的请求头最大限制
plus.jdk.grpc.max-inbound-metadata-size=100000
```
## 引入后如何使用

### 添加Protobuf如下：

```proto3
syntax = "proto3";

package plus.jdk.grpc.protoc;

option java_multiple_files = true;
option java_package = "plus.jdk.grpc.broadcast.test.protoc";
option java_outer_classname = "GreeterService";
option optimize_for = CODE_SIZE;


// The greeting service definition.
service Greeter {
    // Sends a greeting
    rpc SayHello (HelloRequest) returns (HelloReply) {}

    rpc SayHelloAgain (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
    string name = 1;
}

// The response message containing the greetings
message HelloReply {
    string message = 1;
}
```

### 如何根据上述的Protobuf结构定义一个Grpc service

```java
package plus.jdk.grpc.test.grpc;

import io.grpc.stub.StreamObserver;
import plus.jdk.grpc.annotation.GrpcService;
import plus.jdk.grpc.test.grpc.interceptor.AuthServerInterceptor;
import plus.jdk.grpc.test.protoc.GreeterGrpc;
import plus.jdk.grpc.test.protoc.HelloReply;
import plus.jdk.grpc.test.protoc.HelloRequest;

@GrpcService(interceptors = {AuthServerInterceptor.class})
public class GreeterImplService extends GreeterGrpc.GreeterImplBase {

    @Override
    public void sayHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        HelloReply reply = HelloReply.newBuilder().setMessage("Hello " + request.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void sayHelloAgain(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        HelloReply reply = HelloReply.newBuilder().setMessage("Hello again " + request.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
```

### 如何调用上文中定义的GRPC服务


#### 定义声明一个远端的服务器集群

```bash

# 启动客户端的配置
plus.jdk.grpc.client.enabled=true

# 指定服务的scheme地址
plus.jdk.grpc.client.resolvers[0].scheme=MyGrpc

# 指定服务的host地址
plus.jdk.grpc.client.resolvers[0].service-name=grpc-service-prod

# 指定远端的GRPC服务列表
plus.jdk.grpc.client.resolvers[0].hosts[0]=192.168.1.108:10202
plus.jdk.grpc.client.resolvers[0].hosts[1]=192.168.1.107:10202
```

#### 编写代码执行远程调用：

```java
import org.springframework.stereotype.Component;
import plus.jdk.grpc.annotation.GrpcClient;

import javax.annotation.Resource;

@Component
public class GRpcRunner implements ApplicationRunner {
    
    @Resource
    private GrpcSubClientFactory grpcSubClientFactory;

    @GrpcClient("MyGrpc://grpc-service-prod")
    private GreeterGrpc.GreeterBlockingStub greeterBlockingStub;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        int port = Integer.parseInt(grpcPort);
//        ManagedChannel channel = ManagedChannelBuilder.forTarget("MyGrpc://grpc-service-prod")
//                .usePlaintext().build();
//        GreeterGrpc.GreeterBlockingStub blockingStub = grpcSubClientFactory.createStub(GreeterGrpc.GreeterBlockingStub.class, channel);
        HelloRequest request = HelloRequest.newBuilder().setName("jdk-plus").build();
        HelloReply reply = greeterBlockingStub.sayHello(request);
        log.info("sayHello data:{}, receive:{}", request, reply);
        reply = blockingStub.sayHelloAgain(request);
        log.info("sayHelloAgain data:{}, receive:{}", request, reply);
        TimeUnit.SECONDS.sleep(1);
    }
}
```