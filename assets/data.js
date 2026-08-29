/* ─────────────────────────────────────────────────────────────
   프로젝트 데이터 — github.com/nanjjang 저장소에서 확인한 내용입니다.

   각 저장소의 README · 설계 문서 · 코드 구조 · 커밋 기록에서
   확인된 사실만 적었습니다. 추측한 성과는 넣지 않았습니다.

   카드 하나 = 객체 하나. 복사/삭제로 개수를 조절합니다.
   ───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    idx: "01",
    name: "devlog",
    ko: "여러 명이 같이 쓰는 블로그 — 직접 운영",
    year: "2026",
    role: "개발 · 서버 운영",
    span: "2026.08 — 진행 중",
    team: "솔로",
    blurb: "Astro로 만든 공동 블로그. 맥미니의 Docker 컨테이너에서 돌고 Caddy와 Cloudflare 터널을 거쳐 devlog.yoonjunseo.com 으로 열립니다.",
    tags: ["Astro", "TypeScript", "SQLite", "Docker", "Caddy"],
    links: [
      { label: "GitHub", href: "https://github.com/nanjjang/blog" },
      { label: "Live", href: "https://devlog.yoonjunseo.com" }
    ],
    sections: [
      {
        kicker: "01 — problem",
        title: "남의 서비스에 글을 맡기지 않기",
        body: "글은 쌓이는데 플랫폼은 언제든 바뀝니다. 데이터와 주소를 직접 쥐고 있는 블로그를 갖고 싶었고, 이왕이면 여러 명이 같이 쓸 수 있게 만들고 싶었습니다."
      },
      {
        kicker: "02 — approach",
        title: "SQLite 파일 하나 + 요청 시 렌더링",
        body: "글은 SQLite 파일 하나에 넣고 화면은 요청이 올 때 만듭니다. GitHub 로그인, 노션식 에디터, 태그, 개인 페이지(/@아이디), RSS와 sitemap까지 붙였습니다. 배포 전 설정을 점검하는 preflight 스크립트를 따로 뒀습니다."
      },
      {
        kicker: "03 — outcome",
        title: "내 집에서 돌아가는 서비스",
        body: "맥미니 Docker → Caddy → Cloudflare 터널 경로로 실제 도메인에 물려 운영 중입니다. 앞단을 쥐는 서버 설정은 별도 저장소로 관리합니다.",
        metric: "Live",
        metricLabel: "devlog.yoonjunseo.com"
      }
    ]
  },

  {
    idx: "02",
    name: "Digital Mental Care",
    ko: "디지털 정신건강 케어 웹 서비스",
    year: "2026",
    role: "풀스택",
    span: "2026.01 — 2026.06",
    team: "2인",
    blurb: "정신건강 관리 서비스와, 같은 주제를 다룬 연구. 텍스트로 우울·불안 상태를 판별하는 모델을 학술지에 논문으로 실었고 논문대회에서 은상을 받았습니다.",
    tags: ["SvelteKit", "FastAPI", "RoBERTa", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/nanjjang/digital_mental_medicalAI" },
      { label: "논문 (DBpia)", href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12579652" }
    ],
    sections: [
      {
        kicker: "01 — problem",
        title: "기록되지 않으면 남지 않는 것",
        body: "마음 상태는 그때그때 흘려보내면 흔적이 남지 않습니다. 체크인·저널·상담이 각각 따로 노는 게 아니라, 한 서비스 안에서 이어지도록 만들고 싶었습니다."
      },
      {
        kicker: "02 — approach",
        title: "프론트와 백엔드를 완전히 분리",
        body: "SvelteKit(5173)과 FastAPI(8000)를 따로 띄우고 개발 서버에서 /api 를 프록시로 연결했습니다. 백엔드는 api · core · db · models · schemas · services 로 레이어를 나눠, 화면이 늘어나도 서버 구조가 흔들리지 않게 했습니다."
      },
      {
        kicker: "03 — research",
        title: "자가 보고 대신, 평소에 쓰는 글로",
        body: "기존 진단은 본인이 스스로 답하는 방식이라 주관이 섞이고 병원 접근성도 걸림돌이었습니다. 온라인 커뮤니티 글을 정상 · 우울증 · 자살 · 불안 네 범주로 두고, 문맥 이해에 강한 RoBERTa-base 위에 문법 통계 같은 수치형 특징을 함께 넣은 하이브리드 구조를 설계했습니다. 고위험군 데이터가 적어 생기는 불균형은 손실 함수에 클래스 가중을 줘서 다뤘습니다."
      },
      {
        kicker: "04 — outcome",
        title: "서비스에서 논문까지",
        body: "화면은 동의 · 온보딩 · 체크인 · 저널 · 목표 · 히스토리 · 요약 · 설정이 각각의 라우트로 구현돼 있고, 연구는 「텍스트 데이터 기반 딥러닝을 활용한 우울증 및 정신 건강 상태 판별 연구」로 한국정보기술진흥원 학술지 제3권 제1호에 실렸습니다. 검증에서 높은 Macro F1-score를 기록했고 특히 자살 고위험군 탐지에서 좋은 결과가 나왔습니다.",
        metric: "은상",
        metricLabel: "논문대회 · 학술지 게재 (공저 2인)"
      }
    ]
  },

  {
    idx: "03",
    name: "우학 (Uhak)",
    ko: "우리학교 웹 서비스",
    year: "2026",
    role: "개인 프로젝트",
    span: "2026.03",
    team: "솔로",
    blurb: "Next.js 16 · React 19 기반의 학교 웹 서비스. Firebase 인증을 붙이고 Vercel로 배포해 실제로 접속할 수 있습니다.",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    links: [
      { label: "GitHub", href: "https://github.com/nanjjang/uhak-web" },
      { label: "Live", href: "https://uhak-web.vercel.app" }
    ],
    sections: [
      {
        kicker: "01 — problem",
        title: "만들었으면 남이 써봐야 한다",
        body: "로컬에서만 도는 프로젝트는 피드백을 받을 수 없습니다. 이번엔 로그인이 되는 서비스를 실제 주소로 띄우는 것까지를 목표로 잡았습니다."
      },
      {
        kicker: "02 — approach",
        title: "인증은 직접 만들지 않기",
        body: "세션과 비밀번호를 직접 관리하는 대신 Firebase Auth에 맡기고, 화면은 App Router와 Tailwind로 빠르게 붙였습니다. 로딩 · 로그인 · 랜딩 상태를 auth-context 하나로 갈라 관리합니다."
      },
      {
        kicker: "03 — outcome",
        title: "배포까지 끝낸 첫 서비스",
        body: "Vercel에 올려 uhak-web.vercel.app 으로 접속됩니다. 기획에서 배포까지의 과정을 한 바퀴 돌아봤습니다.",
        metric: "Live",
        metricLabel: "uhak-web.vercel.app"
      }
    ]
  },

  {
    idx: "04",
    name: "metroVoca",
    ko: "지하철 이동시간 단어 학습 앱",
    year: "2026",
    role: "기획 · 개발",
    span: "2026.08 — 진행 중",
    team: "솔로",
    blurb: "매일 지하철로 통학하는 사람이 이동 시간에 딱 맞는 분량만 학습하고 끊기지 않게 끝낼 수 있는 앱. React Native로 만들고 있습니다.",
    tags: ["React Native", "Expo", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/metroVoca" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "기존 학습 앱은 책상에 앉은 사람을 가정한다",
        body: "지하철에서는 언제 내릴지 계속 신경 써야 하고, 손은 하나만 자유롭고, 흔들리고, 구간에 따라 데이터도 끊깁니다. 그런데 대부분의 앱은 무한정 이어지는 학습과 정밀 터치를 전제합니다."
      },
      {
        kicker: "02 — approach",
        title: "판단 기준을 한 문장으로 고정",
        body: "PRD를 먼저 쓰고 '내릴 때 찝찝하게 끊기지 않는다'를 핵심 가치로 못 박았습니다. 이후 기능을 넣을지 말지는 전부 이 문장을 기준으로 판단합니다. Must / 그 외로 기능을 나눠 범위를 관리하고 있습니다."
      },
      {
        kicker: "03 — outcome",
        title: "아직 만드는 중",
        body: "기획서 v0.1을 쓰고 Expo로 개발을 시작한 단계입니다. 코드보다 '누구의 어떤 상황을 푸는가'를 먼저 적어둔 게 지금까지 가장 도움이 됐습니다."
      }
    ]
  },

  {
    idx: "05",
    name: "Ability Kirby",
    ko: "정보과학 프로젝트 — 2D 액션 게임",
    year: "2026",
    role: "기획 · 개발",
    span: "2026.05 — 2026.06",
    team: "솔로",
    blurb: "'능력이 저장되는 커비'를 주제로 만든 pygame 액션 게임. 코드보다 설계 문서를 먼저 쓰고 시작한 프로젝트입니다.",
    tags: ["Python", "Pygame"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/jungboguahak_pygameProject" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "설계 없이 시작한 게임은 끝나지 않는다",
        body: "게임은 만들다 보면 계속 아이디어가 붙습니다. 범위를 정해두지 않으면 마감까지 완성되지 않는다는 게 가장 큰 위험이었습니다."
      },
      {
        kicker: "02 — approach",
        title: "주제와 설계를 문서로 먼저 고정",
        body: "Docs 폴더에 주제와 설계를 먼저 정리했습니다. 시작 화면 → 튜토리얼(이동 · 점프 · 비행 · 공격 · 흡입 · 회피) → 난이도 선택 → 스테이지 → 보스까지 흐름을 글로 확정한 뒤 구현에 들어갔습니다."
      },
      {
        kicker: "03 — outcome",
        title: "게임에서 시작해 서버로",
        body: "Unity 3D 액션 게임에서 시작해 이 pygame 프로젝트를 거쳤고, 지금은 백엔드와 서버 운영 쪽을 주로 봅니다. 여기가 그 출발점이었습니다.",
        metric: "17",
        metricLabel: "commits — 개인 저장소 중 최다"
      }
    ]
  }
];
