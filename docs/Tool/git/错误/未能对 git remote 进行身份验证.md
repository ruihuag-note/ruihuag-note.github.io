# [`未能对 git remote 进行身份验证`](https://stackoverflow.com/questions/47860772/gitlab-remote-http-basic-access-denied-and-fatal-authentication)

- gitlab: 运维升级后
- 账号密码也无法生效
- 使用public key进行push,pull验证 会报
  ![](./.assets/未能对%20git%20remote%20进行身份验证-2024-03-12-10-44-48.png)

## 解决

### 使用 access token

- 不要使用您的 GitLab 密码，而是创建一个访问令牌并使用它代替您的密码

1. 在 GitLab 的右上角，转到个人资料 → 设置 → 访问令牌
   ![](./.assets/未能对%20git%20remote%20进行身份验证-2024-03-12-10-51-54.png)
2. 创建新的个人访问令牌（检查 api 选项）
   ![](./.assets/未能对%20git%20remote%20进行身份验证-2024-03-12-10-52-41.png)
3. 进行 git 操作(`git clone .../ git pull / git push`)
4. 当系统要求您输入密码时，复制并粘贴访问令牌而不是您的 GitLab 密码
