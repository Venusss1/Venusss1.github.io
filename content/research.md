<div class="research-hero">
  <span class="research-kicker">Research Journey</span>
  <h2>Research Experience</h2>
  <p>This is the core part of my homepage. The top section uses overlapping lanes to show concurrent research tracks, and each detailed section expands into a vertical timeline with time, event, and takeaways.</p>
</div>

## Overlapping Timeline

<div class="timeline-lanes">
  <div class="timeline-months">
    <span></span>
    <span>2025.04</span>
    <span>2025.09</span>
    <span>2025.10</span>
    <span>2025.11</span>
    <span>2025.12</span>
    <span>2026.01</span>
    <span>2026.02</span>
    <span>2026.03</span>
    <span>2026.04-05</span>
  </div>
  <div class="timeline-lane">
    <strong>OUC · Yong Du</strong>
    <div class="lane-bar bar-ouc-3dgs">3DGS entry and paper reproduction</div>
  </div>
  <div class="timeline-lane">
    <strong>OUC · Feng Gao</strong>
    <div class="lane-bar bar-ouc-camp">Chunya Training Camp · Deep learning basics</div>
  </div>
  <div class="timeline-lane">
    <strong>PKU · Wentao Zhang</strong>
    <div class="lane-bar bar-pku">OpenDCAI / AgentFlow: benchmark construction → automatic data synthesis → agent post-training</div>
  </div>
  <div class="timeline-lane">
    <strong>Tsinghua · TLLM</strong>
    <div class="lane-bar bar-tsinghua">Industrial LLMs · wafer defect detection · PHM · continual learning (completed)</div>
  </div>
  <div class="timeline-lane">
    <strong>HITSZ · Yangyang Xu</strong>
    <div class="lane-bar bar-hitsz">Physics video generation · MotionRAG · physics alignment (after Tsinghua)</div>
  </div>
</div>

## Detailed Experience

<div class="research-details">
  <details class="research-card" open>
    <summary>
      <div>
        <span class="research-label">OUC · 3D Reconstruction</span>
        <h3>Yong Du: Getting Started with 3D Gaussian Splatting</h3>
      </div>
      <span class="research-period">2025.04 - 2025.09</span>
    </summary>
    <div class="research-body">
      <div class="detail-timeline">
        <article class="detail-step">
          <time>2025.04.16</time>
          <div>
            <h4>Entered the 3DGS research direction</h4>
            <p>After contacting Yong Du at OUC, I started my first formal research experience around 3D Gaussian Splatting. The initial goal was to understand the paper, rendering pipeline, method flow, and code organization before attempting any innovation.</p>
            <div class="gain-tags">
              <span>Research Entry✅️</span>
              <span>3DGS✅️</span>
              <span>Paper Reading✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2025.04.16 - 2025.04.23</time>
          <div>
            <h4>Finished the first round of paper reading, setup, and reproduction</h4>
            <p>I spent about one week reading the paper, configuring dependencies, identifying code entry points, resolving environment and path issues, and trying to run the basic reproduction pipeline. This experience taught me that research requires connecting method, code, environment, and results into a working chain.</p>
            <div class="gain-tags">
              <span>Environment Setup✅️</span>
              <span>Code Reproduction✅️</span>
              <span>Dependency Debugging✅️</span>
              <span>Engineering Chain✅️</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </details>

  <details class="research-card">
    <summary>
      <div>
        <span class="research-label">OUC · Deep Learning Training</span>
        <h3>Feng Gao: Chunya Training Camp</h3>
      </div>
      <span class="research-period">2025.09</span>
    </summary>
    <div class="research-body">
      <div class="detail-timeline">
        <article class="detail-step">
          <time>2025.09.09</time>
          <div>
            <h4>Systematically learned deep learning fundamentals</h4>
            <p>The Chunya Training Camp helped me build a clearer foundation in neural networks, model training, experimental evaluation, and basic engineering practice. It prepared me for later work in multimodal retrieval, browser agents, data construction, and evaluation frameworks.</p>
            <div class="gain-tags">
              <span>Deep Learning✅️</span>
              <span>Model Training✅️</span>
              <span>Evaluation✅️</span>
              <span>AI Research Basics✅️</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </details>

  <details class="research-card" open>
    <summary>
      <div>
        <span class="research-label">PKU · OpenDCAI / AgentFlow</span>
        <h3>Wentao Zhang Group: OpenDCAI, AgentFlow, and Multimodal Deep Search</h3>
      </div>
      <span class="research-period">2025.10 - Present</span>
    </summary>
    <div class="research-body">
      <div class="detail-timeline">
        <article class="detail-step">
          <time>2025.10.24 - 2025.10.25</time>
          <div>
            <h4>Joined the PKU research internship and aligned on the direction</h4>
            <p>I applied for an online research internship at the Center on Frontiers of Computing Studies, Peking University. Wentao Zhang introduced me to Huanyao Zhang, and after our first meeting I started reading DeepResearch, MMSearch-R1, and DeepMMSearch-R1 to understand multimodal retrieval, tool use, long-horizon search, and browser-agent evaluation.</p>
            <div class="gain-tags">
              <span>OpenDCAI✅️</span>
              <span>DCAI⬆️</span>
              <span>DeepResearch✅️</span>
              <span>Tool Use⬆️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2025.11.01 - 2025.11.23</time>
          <div>
            <h4>Entered the project group, learned remote research workflow, and integrated VLMEvalKit</h4>
            <p>I joined the MM-DeepSearch / DCAI collaboration group, started using research documents, meetings, remote servers, and shared data directories, and connected to a dual-4090 server through SSH for the first time. In November I integrated a new benchmark into VLMEvalKit: preparing TSV files, converting images to base64, uploading data with MD5 checks, registering the dataset, implementing evaluation logic, reusing inference results, and understanding the LLM-based verifier configuration. I later shared the process and pitfalls within the group.</p>
            <div class="gain-tags">
              <span>SSH✅️</span>
              <span>Remote Development✅️</span>
              <span>VLMEvalKit✅️</span>
              <span>Benchmark Integration✅️</span>
              <span>Group Sharing✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2025.12</time>
          <div>
            <h4>Participated in BrowseComp-V3 / MM-DeepResearch manual data synthesis</h4>
            <p>I learned that a high-quality multimodal browsing benchmark requires questions that cannot be solved by common knowledge, images that provide indispensable visual clues, textual evidence hidden behind web or multi-hop search, and tightly aligned sub_goals, key_info, answer, and trajectory fields. I worked on Culture-domain data, collaborated on game data conversion and checking, fixed unstable evidence chains, and supported music, film, game, and sports samples.</p>
            <div class="gain-tags">
              <span>BrowseComp-V3✅️</span>
              <span>Evidence Chain✅️</span>
              <span>TextSearch✅️</span>
              <span>WebVisit✅️</span>
              <span>ReverseImageSearch✅️</span>
              <span>Culture Data✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.01 - 2026.02</time>
          <div>
            <h4>Delivered datasets, ran web testing and human evaluation, and moved toward automated QA</h4>
            <p>I helped reorganize and deliver the Culture subset, checked image paths and JSON-image consistency, aligned Science & Tech fields, and participated in web-side testing with models such as GPT-5.2-Thinking and Gemini 3 Pro. I also joined Human Evaluation, recording key information, final answers, process scores, and subgoal vectors. In February I wrote JSON checking scripts covering URL leakage, timestamps, tool names, WebVisit inputs, ReverseImageSearch inputs, continuous steps, filename-id consistency, and tool-count consistency, then analyzed hop count versus final and process scores.</p>
            <div class="gain-tags">
              <span>JSON Structuring✅️</span>
              <span>Science Data Alignment✅️</span>
              <span>Web Testing✅️</span>
              <span>Human Evaluation✅️</span>
              <span>check.py✅️</span>
              <span>Hop/Score Analysis⬆️</span>
              <span>Error Attribution⬆️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.03 - 2026.05</time>
          <div>
            <h4>Extended from benchmark construction to automatic data synthesis and agent post-training</h4>
            <p>After March, my focus expanded from high-quality evaluation data to automatically synthesized training data. I organized Qwen2.5-VL LoRA SFT smoke configs, worked on H20 cluster Docker and GPU container setup under TencentOS constraints, handled proxy and dockerd issues, explored seed-image multi-hop QA synthesis, debugged Explore Chat Gateway streaming/non-streaming behavior, organized seed380 examples, processed Wikidata English entity relations, categorized model errors, and analyzed VDR-8B subgoal completion tables.</p>
            <div class="gain-tags">
              <span>Qwen2.5-VL SFT⬆️</span>
              <span>LoRA⬆️</span>
              <span>Docker✅️</span>
              <span>GPU Container✅️</span>
              <span>API Debugging✅️</span>
              <span>seed380✅️</span>
              <span>Wikidata✅️</span>
              <span>VDR Process Evaluation⬆️</span>
              <span>Agent Post-training⬆️</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </details>

  <details class="research-card" open>
    <summary>
      <div>
        <span class="research-label">Tsinghua · Industrial AI</span>
        <h3>Tsinghua TLLM Project Group: Industrial LLMs, Wafer Defect Detection, and PHM</h3>
      </div>
      <span class="research-period">2026.01 - 2026.03, completed</span>
    </summary>
    <div class="research-body">
      <div class="detail-timeline">
        <article class="detail-step">
          <time>2026.01.29 - 2026.02.02</time>
          <div>
            <h4>Started industrial AI research and studied wafer defect data</h4>
            <p>I joined the Tsinghua TIIM Lab / industrial AI collaboration and began with literature research on attention, gating, sparse attention, and long-context reasoning. I then studied wafer defect detection, wafer map representation, defect categories, 52×52-to-224×224 conversion, and the MixedWM38 dataset.</p>
            <div class="gain-tags">
              <span>Industrial AI✅️</span>
              <span>Attention✅️</span>
              <span>Gating✅️</span>
              <span>Wafer Map✅️</span>
              <span>MixedWM38⬆️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.02.04 - 2026.02.13</time>
          <div>
            <h4>Ran fault diagnosis experiments and prepared MixedWM38 presentation</h4>
            <p>I started running fault diagnosis code, noticed suspiciously high CWRU accuracy, and learned to question whether results were credible. I compared DMGD and AdamW, read training logs, and prepared a group presentation on MixedWM38, including dataset background, defect types, preprocessing, and visual model input adaptation.</p>
            <div class="gain-tags">
              <span>Training Debugging✅️</span>
              <span>CWRU✅️</span>
              <span>AdamW✅️</span>
              <span>DMGD✅️</span>
              <span>Training Log Analysis✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.02.23 - 2026.03.11</time>
          <div>
            <h4>Moved into continual learning and migrated code across datasets</h4>
            <p>After joining group meetings, I surveyed continual learning and class-incremental learning papers, then adapted Nested Learning to wafer datasets by modifying dataset registration, MixedWM38 interfaces, training scripts, and evaluation scripts. I handled GPU-memory constraints on a local 4060, organized runnable commands, and then migrated the pipeline to the Paderborn bearing fault dataset with preprocessing, tokens.npy, labels.npy, meta.json, checkpoints, evaluation metrics, and run.md documentation.</p>
            <div class="gain-tags">
              <span>Continual Learning✅️</span>
              <span>Class-Incremental Learning✅️</span>
              <span>Nested Learning✅️</span>
              <span>GPU Memory Debugging✅️</span>
              <span>Paderborn✅️</span>
              <span>run.md✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.03.11 - late 2026.03</time>
          <div>
            <h4>Wrapped up the Tsinghua track with remote reproduction support, project materials, and distillation research</h4>
            <p>I helped clarify preprocessing scripts, data paths, and training script usage for remote reproduction. I also touched industrial project proposal materials and learned to judge task scope and delivery boundaries. In late March I collected knowledge distillation papers; after that, this Tsinghua TLLM track was completed and my research focus moved on to the HITSZ physics video generation direction.</p>
            <div class="gain-tags">
              <span>Remote Reproduction⬆️</span>
              <span>Project Materials✅️</span>
              <span>Task Boundary✅️</span>
              <span>Knowledge Distillation✅️</span>
              <span>Track Completion✅️</span>
              <span>Direction Transition✅️</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </details>

  <details class="research-card" open>
    <summary>
      <div>
        <span class="research-label">HITSZ · Physics Video Generation</span>
        <h3>Yangyang Xu: Physics Video Generation, MotionRAG, and Physics Alignment</h3>
      </div>
      <span class="research-period">2026.03 - 2026.05</span>
    </summary>
    <div class="research-body">
      <div class="detail-timeline">
        <article class="detail-step">
          <time>2026.03.13 - 2026.03.20</time>
          <div>
            <h4>Entered the visual generation direction and built video-generation foundations</h4>
            <p>I joined discussions with Yangyang Xu and Yue Ma, and started studying image-to-video, text-to-video, Motion RAG, and physics consistency. I reviewed VAE, UNet, DDPM, DDIM, Stable Diffusion, CLIP, ControlNet, DiT, Flow Matching, and then expanded to VideoREPA, physical-engine feedback loops, Forcing Prompting, Test-Time Scaling, and multi-round editing.</p>
            <div class="gain-tags">
              <span>Video Generation✅️</span>
              <span>Diffusion✅️</span>
              <span>Stable Diffusion✅️</span>
              <span>DiT⬆️</span>
              <span>Physics Consistency⬆️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.03.23 - 2026.04.09</time>
          <div>
            <h4>Focused on MotionRAG, DiT-Mem, and staged reporting</h4>
            <p>After a meeting, MotionRAG became the main direction. I studied what the retrieval component retrieves, how motion representations are encoded, and how retrieved priors are injected into video-generation backbones. I prepared MotionRAG + DiT-Mem slides covering LanceDB, gte-base-en-v1.5, top-k retrieval, DINO and VideoMAE features, Action Transformer, CAMA, CogVideoX attention processor replacement, and training settings. Because of compute limits, we chose a strategy of code reading, small-scale pipeline reproduction, and result analysis.</p>
            <div class="gain-tags">
              <span>MotionRAG✅️</span>
              <span>DiT-Mem✅️</span>
              <span>LanceDB✅️</span>
              <span>DINO✅️</span>
              <span>VideoMAE✅️</span>
              <span>Research Presentation✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.04.12 - 2026.04.18</time>
          <div>
            <h4>Configured remote servers, ran a small MotionRAG pipeline, and analyzed reproduction gaps</h4>
            <p>I connected to the remote server through intranet tunneling, debugged SSH, port, local network, proxy, and Codex configuration issues, then prepared environments, weights, annotations, and a small OpenVid subset. I ran the MotionRAG pipeline and analyzed why generated results were weak: small subset retrieval quality, differences from paper settings, limits of the CogVideoX base model, and coverage of motion priors. I compared action_mae and DINO with paper-side expectations.</p>
            <div class="gain-tags">
              <span>SSH✅️</span>
              <span>Proxy Debugging✅️</span>
              <span>Pipeline Reproduction✅️</span>
              <span>action_mae✅️</span>
              <span>DINO✅️</span>
              <span>Experiment Analysis✅️</span>
            </div>
          </div>
        </article>
        <article class="detail-step">
          <time>2026.04.18 - 2026.05</time>
          <div>
            <h4>Shifted toward physics-consistency evaluation and improvement ideas</h4>
            <p>After MotionRAG reproduction analysis, I shifted from asking whether RAG improves visual quality to whether generated videos obey physical laws. I surveyed physical video datasets such as PhysInOne, latent world-model reward, and inference-time physics alignment. I formed the view that generic video data and generic text retrieval are not enough for physics-consistent generation; the retrieval library or training data should encode motion, contact, force, and physical state changes.</p>
            <div class="gain-tags">
              <span>Physics Alignment⬆️</span>
              <span>World Model Reward⬆️</span>
              <span>PhysInOne⬆️</span>
              <span>Physical Dataset Survey✅️</span>
              <span>Limitation Analysis✅️</span>
              <span>Improvement Ideas⬆️</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </details>
</div>

## Project Thread and Representative Outcomes

<div class="research-narrative">
  <section class="research-line">
    <span class="research-label">OpenDCAI / AgentFlow</span>
    <h3>From benchmark construction to agent post-training</h3>
    <p>This thread centers on multimodal browsing agents: BrowseComp-V³ builds high-quality and verifiable evaluation data to analyze model capability boundaries, while MMDeepSearch further explores how search trajectories, tool interactions, and process-evaluation signals can become trainable data for agent post-training.</p>
  </section>

  <article class="research-paper">
    <div class="research-paper-main">
      <span class="research-label">Representative Outcome</span>
      <h3>BrowseComp-V³</h3>
      <p><strong>Core Contributor</strong> to <a href="https://arxiv.org/abs/2602.12876">BrowseComp-V3: A Visual, Vertical, and Verifiable Benchmark for Multimodal Browsing Agents</a> and its <a href="https://github.com/Halcyon-Zhang/BrowseComp-V3">open-source repository</a>. The work introduces a multimodal deep-browsing benchmark in realistic open-web environments, emphasizing visual evidence, multi-hop search, public traceability, and process-level verification.</p>
    </div>
    <div class="research-paper-stats">
      <div><strong>300</strong><span>hand-crafted questions</span></div>
      <div><strong>383</strong><span>multimodal images</span></div>
      <div><strong>5 / 24</strong><span>primary / sub-domains</span></div>
      <div><strong>V³</strong><span>Visual · Vertical · Verifiable</span></div>
    </div>
  </article>

  <div class="research-paper-columns">
    <section>
      <h4>Outcome</h4>
      <ul>
        <li>A multimodal deep-browsing benchmark in realistic open-web environments.</li>
        <li>Public-search evidence to avoid reliance on model memory or non-reproducible sources.</li>
        <li>Human-annotated trajectories, expert-validated subgoals, and Process Score for process-level evaluation.</li>
        <li>OmniSeeker, a unified multimodal browsing-agent framework for systematic capability analysis.</li>
      </ul>
    </section>
    <section>
      <h4>My Contribution</h4>
      <ul>
        <li>Independently handled data synthesis, annotation conversion, evidence-chain verification, and quality checks for a major subdomain.</li>
        <li>Participated in structured formatting and final validation for Culture, Science & Tech, and other domains.</li>
        <li>Contributed to Human Evaluation, subgoal-completion annotation, Hop / Score analysis, and model error taxonomy.</li>
        <li>Built end-to-end experience in benchmark research, from task definition and data production to quality control and experimental analysis.</li>
      </ul>
    </section>
  </div>

  <article class="research-paper research-paper-ongoing">
    <div class="research-paper-main">
      <span class="research-label">Ongoing</span>
      <h3>MMDeepSearch</h3>
      <p>MMDeepSearch is an ongoing multimodal long-horizon search-agent track within OpenDCAI / AgentFlow. It extends BrowseComp-V³ from complex open-web evaluation, verifiable evidence chains, and process-level analysis toward automatic data synthesis and agent post-training.</p>
    </div>
    <div class="research-paper-stats">
      <div><strong>Agent</strong><span>multimodal long-horizon search</span></div>
      <div><strong>Data</strong><span>automatic trajectory synthesis</span></div>
      <div><strong>SFT / RL</strong><span>post-training pipeline</span></div>
      <div><strong>Eval</strong><span>process evaluation and error analysis</span></div>
    </div>
  </article>

  <div class="research-paper-columns">
    <section>
      <h4>Research Goal</h4>
      <ul>
        <li>Move from high-quality benchmarks toward trainable search trajectories and tool-interaction data.</li>
        <li>Explore automatic data synthesis, quality filtering, and process supervision for multimodal long-horizon search.</li>
        <li>Use SFT / RL post-training to improve tool use and multi-step reasoning in realistic web-search scenarios.</li>
      </ul>
    </section>
    <section>
      <h4>Current Involvement</h4>
      <ul>
        <li>Organized image-driven multi-hop QA samples, seed380 data, and Wikidata entity-relation extraction workflows.</li>
        <li>Debugged streaming / non-streaming differences in Explore Chat Gateway to stabilize the data-synthesis pipeline.</li>
        <li>Studied and reconstructed Search-R1 with Verl AgentLoop and Function Calling, and reproduced related DeepEyes / Vision-DeepResearch SFT/RL workflows.</li>
      </ul>
    </section>
  </div>
</div>

## Research Skills

<div class="academic-skill-list">
  <div>
    <strong>Programming & ML</strong>
    <p>Python, C/C++, PyTorch</p>
  </div>
  <div>
    <strong>LLM / Agent Training</strong>
    <p>LlamaFactory, Verl, vLLM/SGLang, DeepSpeed, Ms-Swift, VLMEvalKit</p>
  </div>
  <div>
    <strong>Training & Evaluation</strong>
    <p>SFT/RL, AgentLoop, Function Calling, PPO/DPO/GRPO, LLM-as-Judge, RAG</p>
  </div>
  <div>
    <strong>Systems</strong>
    <p>Linux, Git, Docker, Conda, tmux, multi-GPU training on A100/H20/4090</p>
  </div>
  <div>
    <strong>Academic Writing</strong>
    <p>LaTeX, Overleaf, English paper reading and academic writing</p>
  </div>
</div>
