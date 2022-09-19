import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as o,a as n,b as c,e as s,d as a,r as p}from"./app.aec16a9d.js";const l={},u=s(`<h3 align="center">A Springboot extension that integrates Kafka dependencies</h3><p align="center"><a href="https://github.com/JDK-Plus/spring-boot-starter-kafka/blob/master/LICENSE"><img src="https://img.shields.io/github/license/JDK-Plus/spring-boot-starter-kafka.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-kafka/releases"><img src="https://img.shields.io/github/release/JDK-Plus/spring-boot-starter-kafka.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-kafka/stargazers"><img src="https://img.shields.io/github/stars/JDK-Plus/spring-boot-starter-kafka.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-kafka/network/members"><img src="https://img.shields.io/github/forks/JDK-Plus/spring-boot-starter-kafka.svg"></a></p><h2 id="import-dependencies" tabindex="-1"><a class="header-anchor" href="#import-dependencies" aria-hidden="true">#</a> Import Dependencies</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>plus.jdk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=a("For more import methods, see\uFF1A"),r={href:"https://search.maven.org/artifact/plus.jdk/spring-boot-starter-kafka/1.0.2/jar",target:"_blank",rel:"noopener noreferrer"},k=a("spring-boot-starter-kafka"),m=s(`<h2 id="configuration-items-that-need-to-be-added" tabindex="-1"><a class="header-anchor" href="#configuration-items-that-need-to-be-added" aria-hidden="true">#</a> Configuration items that need to be added</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># start the component
plus.jdk.kafka.client.enabled=true

# Specify the user name of kafka global
plus.jdk.kafka.client.user-name=root

# Specify kafka global password
plus.jdk.kafka.client.password=123456

# Specify global consumption configuration items
plus.jdk.kafka.client.consumer-global-config[0].key=sasl.mechanism
plus.jdk.kafka.client.consumer-global-config[0].value=PLAIN
plus.jdk.kafka.client.consumer-global-config[1].key=sasl.mechanism
plus.jdk.kafka.client.consumer-global-config[1].value=PLAIN

# Specify a global production configuration item
plus.jdk.kafka.client.producer-global-config[0].key=sasl.mechanism
plus.jdk.kafka.client.producer-global-config[0].value=PLAIN


# Define a set of kafka configurations
# Define the topic configuration name, a required option, this value should be unique and cannot be defined repeatedly.
# When starting consumption or pushing messages, the consumer and producer instances will be initialized according to this value
# Regarding the design here, some people may have questions: &quot;Why not directly use kafka&#39;s topic as the configuration name?&quot;.
# In fact, they are all possible, but the author considered the situation that the topic names of the online environment and 
# the test environment are not the same when writing, and this situation is very common
plus.jdk.kafka.client.topic-definitions[0].name=my_first_topic_conf_name
# Required, the name of the topic currently to be consumed or produced
plus.jdk.kafka.client.topic-definitions[0].topic=test_topic_name
# The list of production brokers, optional if no production message is required, otherwise required, if it is empty, the message cannot be pushed
plus.jdk.kafka.client.topic-definitions[0].producer-brokers=127.0.0.1:9090,10.11.1.102:9090
# The list of brokers to consume, optional if you do not need to consume messages, otherwise required, if it is empty, it will cause the consumption to fail to start.
plus.jdk.kafka.client.topic-definitions[0].consume-brokers=127.0.0.1:8888,127.0.0.1:8889
# The groupName of the consumption, optional if the message does not need to be consumed, otherwise required, if it is empty, the consumption cannot be started
plus.jdk.kafka.client.topic-definitions[0].group-name=groupName
# Optional configuration item, whether consumption is automatically submitted
plus.jdk.kafka.client.topic-definitions[0].auto-commit=false
# Optional configuration item to enable several consumers
plus.jdk.kafka.client.topic-definitions[0].consumer-num=1
# Optional configuration item, the maximum number of messages to be pulled per consumption
plus.jdk.kafka.client.topic-definitions[0].consumer-max-poll-record=1
# Optional configuration item, if you do not want to use the global user name, you can use this item to specify it separately
plus.jdk.kafka.client.topic-definitions[0].user-name=root
# Optional configuration item, if you don&#39;t want to use the global password, you can use this item to specify it separately
plus.jdk.kafka.client.topic-definitions[0].password=123456
# Optional configuration item, timeout for consuming pull messages
plus.jdk.kafka.client.topic-definitions[0].poll-timeout=2
# Optional configuration item, a bean instance. The plus.jdk.kafka.common.
# IConsumeDecider interface needs to be implemented to be responsible for judging whether the topic starts the consumption process, 
# which is not enabled by default
plus.jdk.kafka.client.topic-definitions[0].decider=plus.jdk.kafka.common.DefaultConsumeDecider

# Optional configuration item, if you want to override the global consumption configuration item, 
# you can specify it through the following configuration
plus.jdk.kafka.client.topic-definitions[0].consumer-configs[0].key=xxx
plus.jdk.kafka.client.topic-definitions[0].consumer-configs[0].value=xxx

# Optional configuration item. If you want to override the global production configuration item, 
# you can specify it through the following configuration
plus.jdk.kafka.client.topic-definitions[0].producer-configs[0].key=xxx
plus.jdk.kafka.client.topic-definitions[0].producer-configs[0].value=xxx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="define-a-kafka-queue-that-can-produce-and-consume-messages" tabindex="-1"><a class="header-anchor" href="#define-a-kafka-queue-that-can-produce-and-consume-messages" aria-hidden="true">#</a> Define a kafka queue that can produce and consume messages</h2><h3 id="the-consumption-and-production-of-the-kafka-queue-can-be-defined-as-follows" tabindex="-1"><a class="header-anchor" href="#the-consumption-and-production-of-the-kafka-queue-can-be-defined-as-follows" aria-hidden="true">#</a> The consumption and production of the kafka queue can be defined as follows:</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>kafka<span class="token punctuation">.</span>global<span class="token punctuation">.</span></span><span class="token class-name">IKafkaQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>kafka<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">KafkaClient</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@KafkaClient</span><span class="token punctuation">(</span><span class="token string">&quot;my_first_topic_conf_name&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFirstTopicQueue</span> <span class="token keyword">extends</span> <span class="token class-name">IKafkaQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Process the data in the message queue. 
     * If consumption is not required, this method may not be implemented
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">processMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Process consumption data based on incoming data</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>@KafkaClient</code> annotation in the above example declares the queue definition as a bean instance. If consumption-related content is configured, the consumption service will be started according to the configuration above.</p><h3 id="how-to-push-messages" tabindex="-1"><a class="header-anchor" href="#how-to-push-messages" aria-hidden="true">#</a> How to push messages</h3><p>When pushing a message, you can call the <code>pushMessage</code> method of the <code>MyFirstTopicQueue</code> queue defined above to complete the message push.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Future</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyKafkaTestService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">MyFirstTopicQueue</span> myFirstTopicQueue<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Future</span><span class="token punctuation">&lt;</span><span class="token class-name">RecordMetadata</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> futureList <span class="token operator">=</span> myFirstTopicQueue<span class="token punctuation">.</span><span class="token function">pushMessage</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;data1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;data2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>message<span class="token punctuation">,</span> recordMetadata<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;push message {} failed, message:{}&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;push message {} success&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(b,f){const e=p("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[d,n("a",r,[k,c(e)])]),m])}var y=t(l,[["render",v],["__file","index.html.vue"]]);export{y as default};
