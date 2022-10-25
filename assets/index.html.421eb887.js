import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.e1fdb64f.js";const t={},p=e(`<h3 align="center">A Springboot extension that integrates GRpc dependencies</h3><p align="center"><a href="https://github.com/JDK-Plus/spring-boot-starter-grpc/blob/master/LICENSE"><img src="https://img.shields.io/github/license/JDK-Plus/spring-boot-starter-grpc.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-grpc/releases"><img src="https://img.shields.io/github/release/JDK-Plus/spring-boot-starter-grpc.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-grpc/stargazers"><img src="https://img.shields.io/github/stars/JDK-Plus/spring-boot-starter-grpc.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-grpc/network/members"><img src="https://img.shields.io/github/forks/JDK-Plus/spring-boot-starter-grpc.svg"></a></p><h2 id="import-dependencies" tabindex="-1"><a class="header-anchor" href="#import-dependencies" aria-hidden="true">#</a> Import dependencies</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>plus.jdk.grpc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-grpc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-items-that-need-to-be-added" tabindex="-1"><a class="header-anchor" href="#configuration-items-that-need-to-be-added" aria-hidden="true">#</a> Configuration items that need to be added</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Whether to open grpc server
plus.jdk.grpc.enabled=true

plus.jdk.grpc.client.enabled=true

# designated port
plus.jdk.grpc.port=10400

# Specifies the listening service address
plus.jdk.grpc.address=*

# Whether to support long connection
plus.jdk.grpc.enable-keep-alive=true

# long connection timeout disconnection time
plus.jdk.grpc.keep-alive-timeout=111

# NioEventLoopGroup master number of core threads
plus.jdk.grpc.master-thread-num=1

# NioEventLoopGroup worker number of core threads
plus.jdk.grpc.worker-thread-num=10

# The maximum number of bytes in a packet
plus.jdk.grpc.max-inbound-message-size=100000

# Maximum limit of request headers sent
plus.jdk.grpc.max-inbound-metadata-size=100000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-use-after-introduction" tabindex="-1"><a class="header-anchor" href="#how-to-use-after-introduction" aria-hidden="true">#</a> How to use after introduction</h2><h3 id="add-protobuf-as-follows" tabindex="-1"><a class="header-anchor" href="#add-protobuf-as-follows" aria-hidden="true">#</a> Add Protobuf as follows\uFF1A</h3><div class="language-proto3 ext-proto3 line-numbers-mode"><pre class="language-proto3"><code>syntax = &quot;proto3&quot;;

package plus.jdk.websocket.protoc;

option java_multiple_files = true;
option java_package = &quot;plus.jdk.websocket.broadcast.test.protoc&quot;;
option java_outer_classname = &quot;GreeterService&quot;;
option optimize_for = CODE_SIZE;


// The greeting service definition.
service Greeter {
    // Sends a greeting
    rpc SayHello (HelloRequest) returns (HelloReply) {}

    rpc SayHelloAgain (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user&#39;s name.
message HelloRequest {
    string name = 1;
}

// The response message containing the greetings
message HelloReply {
    string message = 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-define-a-grpc-service-according-to-the-above-protobuf-structure" tabindex="-1"><a class="header-anchor" href="#how-to-define-a-grpc-service-according-to-the-above-protobuf-structure" aria-hidden="true">#</a> How to define a Grpc service according to the above Protobuf structure</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>test<span class="token punctuation">.</span>grpc</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>stub<span class="token punctuation">.</span></span><span class="token class-name">StreamObserver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GrpcService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>test<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>interceptor<span class="token punctuation">.</span></span><span class="token class-name">AuthServerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>test<span class="token punctuation">.</span>protoc<span class="token punctuation">.</span></span><span class="token class-name">GreeterGrpc</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>test<span class="token punctuation">.</span>protoc<span class="token punctuation">.</span></span><span class="token class-name">HelloReply</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>test<span class="token punctuation">.</span>protoc<span class="token punctuation">.</span></span><span class="token class-name">HelloRequest</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@GrpcService</span><span class="token punctuation">(</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">AuthServerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GreeterImplService</span> <span class="token keyword">extends</span> <span class="token class-name">GreeterGrpc<span class="token punctuation">.</span>GreeterImplBase</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HelloReply</span><span class="token punctuation">&gt;</span></span> responseObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HelloReply</span> reply <span class="token operator">=</span> <span class="token class-name">HelloReply</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        responseObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        responseObserver<span class="token punctuation">.</span><span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHelloAgain</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HelloReply</span><span class="token punctuation">&gt;</span></span> responseObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HelloReply</span> reply <span class="token operator">=</span> <span class="token class-name">HelloReply</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hello again &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        responseObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        responseObserver<span class="token punctuation">.</span><span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-call-the-grpc-service-just-defined" tabindex="-1"><a class="header-anchor" href="#how-to-call-the-grpc-service-just-defined" aria-hidden="true">#</a> How to call the Grpc service just defined</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GRpcRunner</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationRunner</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${plus.jdk.grpc.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> grpcPort<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">GrpcSubClientFactory</span> grpcSubClientFactory<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ApplicationArguments</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>grpcPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ManagedChannel</span> channel <span class="token operator">=</span> <span class="token class-name">ManagedChannelBuilder</span><span class="token punctuation">.</span><span class="token function">forAddress</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">usePlaintext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">GreeterGrpc<span class="token punctuation">.</span>GreeterBlockingStub</span> blockingStub <span class="token operator">=</span> grpcSubClientFactory<span class="token punctuation">.</span><span class="token function">createStub</span><span class="token punctuation">(</span><span class="token class-name">GreeterGrpc<span class="token punctuation">.</span>GreeterBlockingStub</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> channel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HelloRequest</span> request <span class="token operator">=</span> <span class="token class-name">HelloRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;jdk-plus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HelloReply</span> reply <span class="token operator">=</span> blockingStub<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;sayHello data:{}, receive:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        reply <span class="token operator">=</span> blockingStub<span class="token punctuation">.</span><span class="token function">sayHelloAgain</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;sayHelloAgain data:{}, receive:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};