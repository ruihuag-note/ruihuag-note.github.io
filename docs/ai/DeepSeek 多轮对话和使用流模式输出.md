# DeepSeek 多轮对话和使用流模式输出

- 从官方文档得知 API 是一个“无状态” API，即服务端不记录用户请求的上下文，用户在每次请求时，需将之前所有对话历史拼接好后，传递给对话 API。

以两次会话为例：

第一次

```js
;[
  { role: 'system', content: '你是一个知识渊博的助手，请帮助用户解答问题' },
  { role: 'user', content: '1+1等于几' },
]
```

第二次，注意要把 assistant 的回复也加进去

```js
;[
  { role: 'system', content: '你是一个知识渊博的助手，请帮助用户解答问题' },
  { role: 'user', content: '1+1等于几' },
  { role: 'assistant', content: '1+1等于2。这是基本的数学加法运算。' },
  { role: 'user', content: '2+2等于几' },
]
```

- 如此重复循环就可以完成任意轮对话，并且模型可以“记住”前面的对话，附关键代码片段（使用流模式输出，提升用户体验）

````Python
messages = [ {"role": "system", "content": "你是一个知识渊博的助手，请帮助用户解答问题"}, ]
i = 0
print("请输入任意问题后开始对话，输入 exit 退出。")
while True:
  assistantOutput = ""
  i = i + 1
  userInput = input(f"{i}.问：")
  if userInput.lower() == "exit" :
   break;
  else:
    messages.append({"role": "user", "content": userInput})
    response = client.chat.completions.create(
      model="deepseek-chat",
      messages = messages,
      stream=True, # 流式
    )
    print(f"{i}.答：", end="",flush=True)
    for chunk in response:
      assistantOutput += chunk.choices[0].delta.content
      print(chunk.choices[0].delta.content,end='',flush=True) #输出实时刷新
    print("")
    messages.append({"role": "assistant", "content": assistantOutput})
```
````
