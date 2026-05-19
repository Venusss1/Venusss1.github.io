<div class="research-page">
  <section class="home-section research-hero-v2">
    <span class="research-kicker">Research Experience</span>
    <h2 class="home-section__title">Research Experience</h2>
    <p>My research experience spans multimodal agents, data-centric AI, industrial intelligence, and video generation. Rather than listing every intermediate task, this page highlights the questions, engineering workflows, evaluation practices, and reusable research skills developed through these projects.</p>
    <div class="research-quick-stats">
      <div><strong>2025.04</strong><span>Research training began</span></div>
      <div><strong>4</strong><span>Main research stages</span></div>
      <div><strong>BrowseComp-V³</strong><span>Representative output</span></div>
      <div><strong>SFT / RL</strong><span>Current training focus</span></div>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Research Threads</h2>
    <div class="research-focus-grid">
      <article class="research-focus-card">
        <h3>Data-Centric AI</h3>
        <p>I work on high-quality data construction, evidence-chain verification, process evaluation, and automated quality checks, moving from benchmark design toward trainable data generation.</p>
      </article>
      <article class="research-focus-card">
        <h3>Multimodal Browsing Agents</h3>
        <p>I have been involved in evaluation and post-training for multimodal web-browsing agents, covering tool use, cross-page aggregation, multi-hop reasoning, and process supervision.</p>
      </article>
      <article class="research-focus-card">
        <h3>Industrial AI and Video Generation</h3>
        <p>Industrial defect detection, PHM, continual learning, and MotionRAG projects helped me build broader visual-model, reproduction, and cross-domain analysis skills.</p>
      </article>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Timeline Overview</h2>
    <div class="research-timeline-v2">
      <article>
        <time>2025.04 - 2025.09</time>
        <div>
          <h3>Ocean University of China · 3DGS and Deep Learning Foundations</h3>
          <p>I entered research through 3D Gaussian Splatting paper reading, environment setup, and code reproduction, then strengthened deep-learning fundamentals through the Chunya Training Camp.</p>
        </div>
      </article>
      <article>
        <time>2025.10 - Present</time>
        <div>
          <h3>Peking University · DCAI / OpenDCAI / AgentFlow</h3>
          <p>I work on multimodal browsing-agent benchmarks, data construction, human evaluation, automated QA, MMDeepSearch data synthesis, and agent post-training.</p>
        </div>
      </article>
      <article>
        <time>2026.01 - 2026.03</time>
        <div>
          <h3>Tsinghua University · TLLM Lab</h3>
          <p>I explored industrial LLMs, wafer defect detection, prognostics and health management, continual learning, and class-incremental methods.</p>
        </div>
      </article>
      <article>
        <time>2026.03 - 2026.05</time>
        <div>
          <h3>Harbin Institute of Technology, Shenzhen · Physics Video Generation</h3>
          <p>I studied video generation, MotionRAG, and physics alignment, including small-scale pipeline reproduction, result analysis, and improvement ideas.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Core Experiences</h2>
    <div class="research-experience-list">
      <details class="research-experience-card" open>
        <summary>
          <div>
            <span class="research-label">PKU · OpenDCAI / AgentFlow</span>
            <h3>Multimodal browsing agents: from benchmark construction to agent post-training</h3>
          </div>
          <span class="research-period">2025.10 - Present</span>
        </summary>
        <div class="research-card-body">
          <p>This is my central research thread. I started from manual data construction and quality checking for BrowseComp-V³, then gradually moved into multimodal long-horizon search data synthesis, model error attribution, and SFT/RL post-training workflows.</p>
          <div class="research-point-grid">
            <div>
              <strong>Data construction</strong>
              <p>Contributed to structured samples in Culture, Science & Tech, and related domains, checking consistency across questions, images, answers, subgoals, trajectories, and metadata.</p>
            </div>
            <div>
              <strong>Evaluation analysis</strong>
              <p>Participated in web-side testing, human evaluation, process scoring, hop-score analysis, and model error attribution for multimodal browsing tasks.</p>
            </div>
            <div>
              <strong>Engineering workflow</strong>
              <p>Integrated benchmarks into VLMEvalKit and wrote JSON checking scripts covering image paths, base64, MD5, tool-call formats, and data quality issues.</p>
            </div>
            <div>
              <strong>Post-training exploration</strong>
              <p>Worked on MMDeepSearch-related multi-hop QA synthesis, seed380 examples, Wikidata entity relations, and Verl / AgentLoop workflow understanding.</p>
            </div>
          </div>
          <div class="gain-tags">
            <span>Benchmark Construction</span><span>Human Evaluation</span><span>VLMEvalKit</span><span>SFT / RL</span><span>AgentLoop</span>
          </div>
        </div>
      </details>

      <details class="research-experience-card" open>
        <summary>
          <div>
            <span class="research-label">Tsinghua · TLLM Lab</span>
            <h3>Industrial LLMs, wafer defect detection, and continual learning</h3>
          </div>
          <span class="research-period">2026.01 - 2026.03</span>
        </summary>
        <div class="research-card-body">
          <p>This project exposed me to industrial visual inspection and reliability problems. It also trained me to question experimental credibility, migrate code across datasets, and document reproduction workflows.</p>
          <div class="research-point-grid">
            <div>
              <strong>Industrial visual data</strong>
              <p>Studied wafer-map representations, the MixedWM38 dataset, and multi-type wafer defects, learning how industrial inspection data differs from general vision data.</p>
            </div>
            <div>
              <strong>Experiments and migration</strong>
              <p>Compared DMGD / AdamW logs and adapted Nested Learning-related code to wafer datasets and the Paderborn bearing-fault dataset.</p>
            </div>
            <div>
              <strong>Wrap-up and delivery</strong>
              <p>Organized commands, data paths, training scripts, and documentation, supported remote reproduction, and surveyed distillation and continual learning materials.</p>
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
            <h3>MotionRAG, video-generation reproduction, and physics alignment</h3>
          </div>
          <span class="research-period">2026.03 - 2026.05</span>
        </summary>
        <div class="research-card-body">
          <p>This experience extended my work from multimodal understanding and search to video generation, focusing on whether retrieval-augmented generation can improve motion priors and physical consistency.</p>
          <div class="research-point-grid">
            <div>
              <strong>Foundation building</strong>
              <p>Reviewed VAE, UNet, DDPM/DDIM, Stable Diffusion, CLIP, ControlNet, DiT, and Flow Matching as core components of modern video generation.</p>
            </div>
            <div>
              <strong>MotionRAG reproduction</strong>
              <p>Studied LanceDB, gte-base-en-v1.5, DINO, VideoMAE, motion tokens, CAMA, and CogVideoX attention-processor replacement.</p>
            </div>
            <div>
              <strong>Result analysis</strong>
              <p>Ran a small OpenVid-subset pipeline and analyzed the effects of retrieval quality, data scale, base-model capability, and motion-prior coverage.</p>
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
            <h3>3DGS reproduction and deep-learning training</h3>
          </div>
          <span class="research-period">2025.04 - 2025.09</span>
        </summary>
        <div class="research-card-body">
          <p>My early research training began with 3D Gaussian Splatting paper reading, environment setup, and code reproduction. This taught me that research requires connecting methods, code, experiments, and debugging into a working chain. The Chunya Training Camp then helped me build foundations in neural networks, training workflows, and experimental evaluation.</p>
          <div class="gain-tags">
            <span>3DGS</span><span>Paper Reading</span><span>Environment Setup</span><span>Code Reproduction</span><span>Deep Learning Basics</span>
          </div>
        </div>
      </details>
    </div>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Representative Output</h2>
    <article class="research-output-card">
      <div class="research-output-main">
        <span class="research-label">Representative Output</span>
        <h3><a href="https://arxiv.org/abs/2602.12876">BrowseComp-V³: A Visual, Vertical, and Verifiable Benchmark for Multimodal Browsing Agents</a></h3>
        <p><strong>Core Contributor</strong>. This work builds a multimodal deep-browsing benchmark in realistic open-web environments, emphasizing visual evidence, multi-hop search, public traceability, and process-level verification. I contributed to data synthesis, annotation conversion, evidence checking, human evaluation, and experiment analysis.</p>
        <div class="pub-card__actions">
          <a class="pub-btn" href="https://arxiv.org/abs/2602.12876">Paper</a>
          <a class="pub-btn pub-btn--ghost" href="https://github.com/Halcyon-Zhang/BrowseComp-V3">GitHub</a>
        </div>
      </div>
      <div class="research-output-stats">
        <div><strong>300</strong><span>hand-crafted questions</span></div>
        <div><strong>383</strong><span>multimodal images</span></div>
        <div><strong>5 / 24</strong><span>primary / sub-domains</span></div>
        <div><strong>V³</strong><span>Visual · Vertical · Verifiable</span></div>
      </div>
    </article>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Research Skills</h2>
    <div class="research-skill-grid">
      <div><strong>Programming and ML</strong><span>Python</span><span>C/C++</span><span>PyTorch</span></div>
      <div><strong>LLM and Agent Training</strong><span>Verl</span><span>LlamaFactory</span><span>vLLM / SGLang</span><span>DeepSpeed</span></div>
      <div><strong>Evaluation and Data</strong><span>VLMEvalKit</span><span>LLM-as-Judge</span><span>Human Evaluation</span><span>Process Score</span></div>
      <div><strong>Systems and Engineering</strong><span>Linux</span><span>Git</span><span>Docker</span><span>Conda</span><span>tmux</span></div>
    </div>
  </section>
</div>
