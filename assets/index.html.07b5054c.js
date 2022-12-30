import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.26ca7fac.js";const t={},p=e(`<h3 align="center">A Springboot extension that integrates Zookeeper dependencies</h3><p align="center"><a href="https://github.com/JDK-Plus/spring-boot-starter-zookeeper/blob/master/LICENSE"><img src="https://img.shields.io/github/license/JDK-Plus/spring-boot-starter-zookeeper.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-zookeeper/releases"><img src="https://img.shields.io/github/release/JDK-Plus/spring-boot-starter-zookeeper.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-zookeeper/stargazers"><img src="https://img.shields.io/github/stars/JDK-Plus/spring-boot-starter-zookeeper.svg"></a><a href="https://github.com/JDK-Plus/spring-boot-starter-zookeeper/network/members"><img src="https://img.shields.io/github/forks/JDK-Plus/spring-boot-starter-zookeeper.svg"></a></p><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>plus.jdk.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-items-to-be-added" tabindex="-1"><a class="header-anchor" href="#configuration-items-to-be-added" aria-hidden="true">#</a> Configuration items to be added</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Whether to enable the component
plus.jdk.zookeeper.enabled=true
# Specifies the list of zookeeper clusters
plus.jdk.zookeeper.hosts=127.0.0.1:2181,127.0.0.2:2181
# Connection timeout
plus.jdk.zookeeper.conn-timeout=3000
# How often is the data of each node updated
plus.jdk.zookeeper.heart-rate=30
# Session timeout
plus.jdk.zookeeper.session-timeout=3000
# Number of core threads that process node data change events 
# (node deletion, node addition, node modification). Default number: 10
plus.jdk.zookeeper.watcher-thread-core-poll-size=10
# Specify an implementation class for data serialization
plus.jdk.zookeeper.data-adapter=plus.jdk.zookeeper.client.DefaultZKDataAdapter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-use-it-after-import" tabindex="-1"><a class="header-anchor" href="#how-to-use-it-after-import" aria-hidden="true">#</a> How to use it after import</h2><p>When the above configuration is complete, you only need to specify which node to get data from using the <code>@ZookeeperNode</code> annotation in the corresponding bean instance, as shown in the following example:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">INameResolverConfigurer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>grpc<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">GrpcNameResolverModel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">plus<span class="token punctuation">.</span>jdk<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ZookeeperNode</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URI</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GrpcGlobalNameResolverConfigurer</span> <span class="token keyword">implements</span> <span class="token class-name">INameResolverConfigurer</span> <span class="token punctuation">{</span>


    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RSACipherService</span> rsaCipherService<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@ZookeeperNode</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/brand/grpc/name/provider&quot;</span><span class="token punctuation">,</span> adapter <span class="token operator">=</span> <span class="token class-name">DefaultZKDataAdapter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GrpcNameResolverModel</span><span class="token punctuation">&gt;</span></span> grpcNameResolverModels<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function i(c,l){return n(),a("div",null,o)}var d=s(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
