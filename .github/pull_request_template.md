

<!--
  1: PR 提交规范：
    1. 【清晰】标题总结改动、描述补充细节、风险等
    2. 【Issue 标记】有 issue 关联的需要在标题中指定，如：fix: Change xxx #issue-xxx
  2: 别忘了加 Label（`1-Review`、`2-Change`、`3-Changed`, `4-Approved`），顺便 Assign 给一个人喔。
  3: XXXX 的内容如果不填就放着。
  4: 针对复杂的逻辑：
    1. 请保证代码注释良好
    2. 考虑写一篇 Wiki 或 README 并在下面贴上链接
    3. 自己先 Review 一遍补上一些 Review Comment 介绍你的思路
-->

## 描述
<!--
1. 要解决的具体问题或需求。
2. 列出最终的 API 实现和用法。
3. 涉及UI/交互变动需要有截图或 GIF。
-->
- XXXX

## Issues
- [XXXX](https://integration.vika.ltd/workbench/dst-xxx/view-xxx/rec-xxx)

## Wikis
- [XXXX](https://vikadata.feishu.cn/wiki/xxx)

<details>
  <summary>☑️ Self/Reviewer Checklist</summary>
  <p>

  ### 边界情况：
  - 边界问题
  - typescript 不要用 ! 强行指定
  - typescript 用 any、as 前思考清楚是否可以优化
  ### 产品逻辑：
  - 神奇关联注意事项
  - 协同注意事项
  - 权限注意事项
  ### 开发逻辑：
  - 新增国际化 -> 产品新增国际化记录后同步
  - 新增 icon -> 设计上传 icon 数据后脚本同步
  - 新增/修改 css 规则 -> `css module`
  - 使用语义化变量变量 [design tokens](https://vika.cn/developers/widget/design-tokens)
  - 新增/修改变量 -> 变量命名合理可读
  - 存在连续逻辑判断 -> 避免过长或复杂的逻辑判断，如多个&&/|| 连用。
  - 存在新增的工具方法 -> 尽量使用现有的抽象后方法。
  - 组件拥有 state -> state 中是否只存放改变后需要 render ui 的数据。
  - 组件 render 方法中存在计算 -> 计算是否复杂、能否缓存计算。
  - 存在定时器 -> 组件生命周期中引入的定时器是否在生命周期结束时清除。
  
  </p>
</details>
