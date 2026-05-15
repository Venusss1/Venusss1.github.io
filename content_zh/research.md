## 北京大学 - 国际机器学习研究中心

**研究实习生，张文涛教授课题组（OpenDCAI/AgentFlow）** | *2025.03 - 至今*

### AgentFlow - 核心开发者

[AgentFlow](https://github.com/OpenDCAI/AgentFlow) 是首个统一的 Agent 数据合成框架，能够跨异构 Agent 环境生成高质量的训练与评估数据——涵盖 RAG、MM-Doc、Deep Research、GUI、Text2SQL、Data Analysis、Embodied Agent 等。

### BrowseComp-V³ - Core Contributor

[BrowseComp-V³](https://arxiv.org/abs/2602.12876) 是面向多模态网页浏览智能体的 Benchmark，强调三个核心特征：**Visual**（视觉多模态信息理解）、**Vertical**（深度多跳推理）和 **Verifiable**（子过程可验证）。

- 独立负责一个主要子领域的数据合成、标注及检验全流程
- 参与实验结果错误原因分析
- 参与构建 [OmniSeeker](https://github.com/Halcyon-Zhang/BrowseComp-V3/tree/main/omniseeker) 通用智能体框架
- **状态：** 投稿 SIGIR 2026（CCF-A）

### MMDeepSearch - 多模态深度搜索智能体

负责面向多模态深度探索的多智能体框架的 SFT/RL 后训练设计与实现：

- **Search-R1 重构：** 原始项目魔改版 Verl 在 H20 上训练存在问题，利用最新 Verl 的 AgentLoop 和 Function Calling 方式重构 Search-R1
- **DeepEyesV2：** 利用 FVQA 数据集复现项目的 SFT 流程，并利用 BrowseComp-V³ 框架实现评测
- **Vision-DeepResearch：** 利用 FVQA 数据集和工具接口 API 复现 RL 全流程；利用该框架评测 BCV3 数据集在 Kimi2.5/Qwen3.6-Plus/Vision-DeepResearch-8B 的表现

---

## 清华大学 - TLLM Lab

**研究实习生** | *2024*

### 基于持续学习-类增方法的晶圆缺陷检测

基于 Google 的 Nested-Learning 工作，通过改进模型架构，实现 LLM 在 MixedWM-38 数据集上的效果改进。

- 负责注意力机制调研与改进
- Continuous-Learning 代码适配
- 数据集调研与处理
- 认识到真实工业场景中类别增量、分布变化、样本稀缺和标注成本高等问题

---

## 哈尔滨工业大学（深圳）

**研究实习生，徐洋洋老师课题组** | *2024*

### 基于 MotionRAG 的可控视频生成

通过检索真实视频数据集，获取与迁移相关知识并注入视频生成模型，提升生成视频的真实感和物理一致性。

- 项目复现与问题分析
- 数据集调研
- 拓展了对 RAG、多模态生成和物理一致性建模的理解
