<div class="research-page">
  <section class="home-section research-hero-v2">
    <span class="research-kicker">Research Experience</span>
    <h2 class="home-section__title">科研经历</h2>
    <p>我的科研经历围绕多模态智能体、数据中心化 AI、工业智能与视频生成展开。相比罗列过程，这一页更强调每段经历中的问题意识、工程链路、实验分析和可沉淀的方法能力。</p>
    <div class="research-quick-stats">
      <div><strong>2025.04</strong><span>开始科研训练</span></div>
      <div><strong>4</strong><span>主要科研阶段</span></div>
      <div><strong>BrowseComp-V³</strong><span>代表成果</span></div>
      <div><strong>SFT / RL</strong><span>当前训练方向</span></div>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">科研主线</h2>
    <div class="research-focus-grid">
      <article class="research-focus-card">
        <h3>Data-Centric AI</h3>
        <p>关注高质量数据构造、证据链核查、过程评测与自动化质检，从 Benchmark 设计逐步延伸到可训练数据生成。</p>
      </article>
      <article class="research-focus-card">
        <h3>Multimodal Browsing Agents</h3>
        <p>参与多模态网页浏览智能体评测与后训练，理解工具调用、跨页面信息聚合、多跳推理和过程监督。</p>
      </article>
      <article class="research-focus-card">
        <h3>Industrial AI and Video Generation</h3>
        <p>通过工业缺陷检测、PHM、持续学习和 MotionRAG 相关经历补充视觉模型、复现分析与跨场景迁移能力。</p>
      </article>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">时间概览</h2>
    <div class="research-timeline-v2">
      <article>
        <time>2025.04 - 2025.09</time>
        <div>
          <h3>中国海洋大学 · 3DGS 与深度学习基础</h3>
          <p>从 3D Gaussian Splatting 论文阅读、环境配置和代码复现开始进入科研训练，并通过春芽训练营补齐深度学习实验基础。</p>
        </div>
      </article>
      <article>
        <time>2025.10 - 至今</time>
        <div>
          <h3>北京大学 · DCAI / OpenDCAI / AgentFlow</h3>
          <p>参与多模态浏览智能体 Benchmark、数据构造、Human Evaluation、自动化质检、MMDeepSearch 数据合成和 Agent 后训练。</p>
        </div>
      </article>
      <article>
        <time>2026.01 - 2026.03</time>
        <div>
          <h3>清华大学 · TLLM Lab</h3>
          <p>围绕工业大模型、晶圆缺陷检测、故障预测健康管理、持续学习和类增量方法开展调研、复现和实验迁移。</p>
        </div>
      </article>
      <article>
        <time>2026.03 - 2026.05</time>
        <div>
          <h3>哈尔滨工业大学（深圳） · Physics Video Generation</h3>
          <p>参与视频生成、MotionRAG 和物理一致性方向调研，完成小规模 pipeline 复现、结果分析和改进思路整理。</p>
        </div>
      </article>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">核心经历</h2>
    <div class="research-experience-list">
      <details class="research-experience-card" open>
        <summary>
          <div>
            <span class="research-label">PKU · OpenDCAI / AgentFlow</span>
            <h3>多模态浏览智能体：从 Benchmark 构造到 Agent 后训练</h3>
          </div>
          <span class="research-period">2025.10 - 至今</span>
        </summary>
        <div class="research-card-body">
          <p>这段经历是我当前最核心的科研主线。我从 BrowseComp-V³ 的人工数据构造与质量核查切入，逐步参与到多模态长程搜索数据自动合成、模型错误归因和 SFT/RL 后训练流程中。</p>
          <div class="research-point-grid">
            <div>
              <strong>数据构造</strong>
              <p>参与 Culture、Science & Tech 等领域样例的结构化整理，核查 question、image、answer、sub_goals、trajectory 和 metadata 的一致性。</p>
            </div>
            <div>
              <strong>评测分析</strong>
              <p>参与网页端测试、Human Evaluation、过程评分、Hop / Score 分析和模型错误原因整理，形成对多模态浏览任务难点的系统理解。</p>
            </div>
            <div>
              <strong>工程链路</strong>
              <p>接入 VLMEvalKit，编写 JSON 自动化检查脚本，处理图片路径、base64、MD5、工具调用格式和数据质量问题。</p>
            </div>
            <div>
              <strong>后训练探索</strong>
              <p>围绕 MMDeepSearch 参与图像驱动多跳 QA 合成、seed380 样例整理、Wikidata 实体关系抽取和 Verl / AgentLoop 相关流程理解。</p>
            </div>
          </div>
          <div class="gain-tags">
            <span>Benchmark 构造</span><span>Human Evaluation</span><span>VLMEvalKit</span><span>SFT / RL</span><span>AgentLoop</span>
          </div>
        </div>
      </details>

      <details class="research-experience-card" open>
        <summary>
          <div>
            <span class="research-label">Tsinghua · TLLM Lab</span>
            <h3>工业大模型、晶圆缺陷检测与持续学习</h3>
          </div>
          <span class="research-period">2026.01 - 2026.03</span>
        </summary>
        <div class="research-card-body">
          <p>清华 TLLM 相关经历让我接触到更偏工业场景的视觉检测和可靠性问题，也训练了我判断实验可信度、迁移代码和整理复现实验链路的能力。</p>
          <div class="research-point-grid">
            <div>
              <strong>工业视觉数据</strong>
              <p>调研 wafer map 表示、MixedWM38 数据集和多类型晶圆缺陷，理解工业检测数据与通用视觉数据的差异。</p>
            </div>
            <div>
              <strong>实验与迁移</strong>
              <p>比较 DMGD / AdamW 训练日志，将 Nested Learning 相关代码适配到晶圆和帕德博恩轴承故障数据集。</p>
            </div>
            <div>
              <strong>阶段收尾</strong>
              <p>整理运行命令、数据路径、训练脚本和说明文档，协助远程复现支持，并补充知识蒸馏与持续学习资料。</p>
            </div>
          </div>
          <div class="gain-tags">
            <span>Wafer Defect Detection</span><span>PHM</span><span>Continual Learning</span><span>Nested Learning</span>
          </div>
        </div>
      </details>

      <details class="research-experience-card" open>
        <summary>
          <div>
            <span class="research-label">HITSZ · Physics Video Generation</span>
            <h3>MotionRAG、视频生成复现与物理一致性分析</h3>
          </div>
          <span class="research-period">2026.03 - 2026.05</span>
        </summary>
        <div class="research-card-body">
          <p>这段经历使我从多模态理解和搜索扩展到视频生成方向，重点关注检索增强视频生成是否能够改善运动先验和物理一致性。</p>
          <div class="research-point-grid">
            <div>
              <strong>基础补齐</strong>
              <p>系统学习 VAE、UNet、DDPM/DDIM、Stable Diffusion、CLIP、ControlNet、DiT 和 Flow Matching 等基础模块。</p>
            </div>
            <div>
              <strong>MotionRAG 复现</strong>
              <p>拆解 LanceDB、gte-base-en-v1.5、DINO、VideoMAE、motion tokens、CAMA 和 CogVideoX attention processor 等关键模块。</p>
            </div>
            <div>
              <strong>结果分析</strong>
              <p>在小样本 OpenVid 子集上跑通 pipeline，并分析检索质量、数据规模、基座模型能力和 motion prior 覆盖度带来的差异。</p>
            </div>
          </div>
          <div class="gain-tags">
            <span>MotionRAG</span><span>Video Generation</span><span>DiT-Mem</span><span>Physics Alignment</span>
          </div>
        </div>
      </details>

      <details class="research-experience-card">
        <summary>
          <div>
            <span class="research-label">OUC · Research Foundation</span>
            <h3>3DGS 复现与深度学习基础训练</h3>
          </div>
          <span class="research-period">2025.04 - 2025.09</span>
        </summary>
        <div class="research-card-body">
          <p>早期科研训练从 3D Gaussian Splatting 论文阅读、环境搭建和代码复现开始，使我理解科研任务不是单纯读懂论文，而是要把方法、代码、实验结果和失败排查串成完整链路。随后通过春芽训练营补齐神经网络、训练流程和实验评估基础。</p>
          <div class="gain-tags">
            <span>3DGS</span><span>论文阅读</span><span>环境配置</span><span>代码复现</span><span>深度学习基础</span>
          </div>
        </div>
      </details>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">代表性成果</h2>
    <article class="research-output-card">
      <div class="research-output-main">
        <span class="research-label">Representative Output</span>
        <h3><a href="https://arxiv.org/abs/2602.12876">BrowseComp-V³: A Visual, Vertical, and Verifiable Benchmark for Multimodal Browsing Agents</a></h3>
        <p><strong>Core Contributor</strong>。该工作构建面向真实开放网页环境的多模态深度浏览 Benchmark，强调视觉线索、多跳检索、公开证据和过程可验证。我参与主要子领域的数据合成、标注转化、证据链核查、Human Evaluation 和实验分析。</p>
        <div class="pub-card__actions">
          <a class="pub-btn" href="https://arxiv.org/abs/2602.12876">Paper</a>
          <a class="pub-btn pub-btn--ghost" href="https://github.com/Halcyon-Zhang/BrowseComp-V3">GitHub</a>
        </div>
      </div>
      <div class="research-output-stats">
        <div><strong>300</strong><span>手工设计难题</span></div>
        <div><strong>383</strong><span>多模态图像</span></div>
        <div><strong>5 / 24</strong><span>一级 / 二级领域</span></div>
        <div><strong>V³</strong><span>Visual · Vertical · Verifiable</span></div>
      </div>
    </article>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">科研技能</h2>
    <div class="research-skill-grid">
      <div><strong>编程与机器学习</strong><span>Python</span><span>C/C++</span><span>PyTorch</span></div>
      <div><strong>大模型与智能体训练</strong><span>Verl</span><span>LlamaFactory</span><span>vLLM / SGLang</span><span>DeepSpeed</span></div>
      <div><strong>评测与数据构造</strong><span>VLMEvalKit</span><span>LLM-as-Judge</span><span>Human Evaluation</span><span>Process Score</span></div>
      <div><strong>系统与工程</strong><span>Linux</span><span>Git</span><span>Docker</span><span>Conda</span><span>tmux</span></div>
    </div>
  </section>
</div>
