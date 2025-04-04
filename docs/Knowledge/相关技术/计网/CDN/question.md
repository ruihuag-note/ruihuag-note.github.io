# CDN-question

## 加速域名、CNAME域名、边缘节点、源站是什么意思？

> （1）加速域名：即您需要使用CDN加速的域名，也是您的客户访问时直接请求访问的域名。
>
> （2）CNAME域名：在美团云 CDN 控制台创建加速域名后，域名审核通过后系统会给域名分配一个“CNAME域名”。用户需要在域名服务商处，配置一条 CNAME 记录，将加速域名CNAME至CNAME域名，记录生效后，域名解析过程中会将解析请求正式转向美团云CDN，该域名所有的请求都将转向美团云CDN的节点。
>
> （3）边缘节点：边缘节点是离用户最近的节点，是直接响应用户请求，将请求内容缓存并返回给用户的节点，以此来快速响应用户请求。与边缘节点相对应的是中间层节点，中间层节点是源站和边缘节点的一个中间层的回源服务器，中间层节点可缓存边缘节点的回源访问，降低源站的访问压力。
>
> （4）源站：即您的业务服务器，当节点没有缓存用户请求的内容时，节点会返回源站获取数据并返回给用户。

## 接入CDN的域名有什么要求吗？

> 接入CDN进行加速的域名，需要在工信部完成备案，源站的业务内容必须合法。

## CDN加速域名是否支持泛域名？

> 美团云CDN当前已支持接入泛域名，您可在新建加速域名时以泛域名的形式（例如：\*.example.com）创建域名。

## CDN节点上的缓存内容是实时更新的吗？

> 不会实时更新，CDN节点上的缓存内容，是根据您在控制台配置的缓存过期时间来更新缓存，若您需要实时更新某个文件的缓存，您可以通过刷新或者预热的方式来进行。
