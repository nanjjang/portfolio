/* ─────────────────────────────────────────────────────────────
   프로젝트 데이터 — github.com/nanjjang 저장소에서 가져왔습니다.

   내용은 저장소의 코드 구조·설계 문서·커밋 기록에서 확인한 것만 적었습니다.
   성과 수치(metric)는 확인할 수 없어 비워뒀으니, 아는 값이 있으면 채워주세요.

   카드 하나 = 객체 하나. 복사/삭제로 개수를 조절합니다.
   ───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    idx: "01",
    name: "Digital Mental Care",
    ko: "디지털 정신건강 케어 웹 서비스",
    year: "2026",
    role: "풀스택",
    span: "2026.01 — 2026.06",
    team: "2인",
    blurb: "SvelteKit 프론트와 FastAPI 백엔드로 만든 정신건강 관리 서비스. 상담 채팅, 데일리 체크인, 저널, 목표 관리까지 20개가 넘는 화면을 구성했습니다.",
    tags: ["SvelteKit", "FastAPI", "Python", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/digital_mental_medicalAI" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "기록되지 않으면 남지 않는 것",
        body: "마음 상태는 그때그때 흘려보내면 흔적이 남지 않습니다. 체크인·저널·상담이 각각 따로 노는 게 아니라, 한 서비스 안에서 이어지도록 만들고 싶었습니다."
      },
      {
        kicker: "02 — approach",
        title: "프론트와 백엔드를 완전히 분리",
        body: "SvelteKit(5173)과 FastAPI(8000)를 따로 띄우고 개발 서버에서 /api 를 프록시로 연결했습니다. 백엔드는 api · core · db · models · schemas · services 로 레이어를 나눠, 화면이 늘어나도 서버 구조가 흔들리지 않게 했습니다.",
        metric: "",
        metricLabel: ""
      },
      {
        kicker: "03 — outcome",
        title: "온보딩부터 요약까지 하나의 흐름으로",
        body: "동의 · 온보딩 · 체크인 · 저널 · 목표 · 히스토리 · 요약 · 설정이 각각의 라우트로 구현되어 있습니다. 실행 방법은 README_RUN.md 에 정리해 두어 협업자가 바로 띄울 수 있게 했습니다.",
        metric: "20+",
        metricLabel: "구현한 화면 라우트"
      }
    ]
  },

  {
    idx: "02",
    name: "Study Agents",
    ko: "학습 도우미 에이전트 — iOS · Web",
    year: "2026",
    role: "개인 프로젝트",
    span: "2026.04",
    team: "솔로",
    blurb: "같은 서비스를 SwiftUI 네이티브 앱과 웹, 두 버전으로 만들었습니다. 백엔드는 Python, 웹 프론트는 TypeScript로 구성했습니다.",
    tags: ["Swift", "SwiftUI", "TypeScript", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/StudentsAgent" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "앱으로 쓸지, 웹으로 쓸지",
        body: "공부용 도구는 손에 잡히는 앱이 편하지만, 아무 기기에서나 열 수 있는 웹도 필요했습니다. 둘 중 하나를 고르는 대신 양쪽을 다 만들어 보기로 했습니다."
      },
      {
        kicker: "02 — approach",
        title: "appVersion / webVersion 으로 나눈 저장소",
        body: "하나의 저장소 안에 Xcode 프로젝트(StudyAgentsApp)와 웹 버전을 나란히 두고, 웹 쪽은 frontend 와 Python 백엔드를 dev.sh 한 번으로 함께 띄우도록 했습니다."
      },
      {
        kicker: "03 — outcome",
        title: "네이티브와 웹을 같이 다뤄본 경험",
        body: "SwiftUI의 화면 구성 방식과 웹 프론트의 방식이 어떻게 다른지, 같은 기능을 두 번 만들어 보며 비교할 수 있었습니다."
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
        title: "가장 많이 손댄 프로젝트",
        body: "튜토리얼부터 보스 스테이지까지 설계한 흐름대로 구현했고, 개인 저장소 중 커밋이 가장 많이 쌓인 프로젝트가 됐습니다.",
        metric: "17",
        metricLabel: "commits — 개인 저장소 중 최다"
      }
    ]
  },

  {
    idx: "05",
    name: "Unfollower Finder",
    ko: "인스타그램 언팔로워 확인 도구",
    year: "2026",
    role: "개인 프로젝트",
    span: "2026.02 — 2026.06",
    team: "솔로",
    blurb: "내가 팔로우하지만 상대는 나를 팔로우하지 않는 계정을 찾아주는 도구. Playwright가 브라우저를 조작해 목록을 모으고 FastAPI가 결과를 계산합니다.",
    tags: ["Python", "Playwright", "FastAPI"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/instagram_unfollower_finder" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "공개 API로는 알 수 없는 것",
        body: "팔로워 · 팔로잉 목록을 정식 API로 받아올 방법이 없어, 화면을 직접 스크롤해 모으는 수밖에 없었습니다."
      },
      {
        kicker: "02 — approach",
        title: "브라우저 매크로 + 백엔드 계산",
        body: "Playwright로 크로미움을 띄워 목록을 스크롤 수집하고, 수집한 두 집합의 차집합을 백엔드에서 계산합니다. 설치와 실행은 install.cmd · run_all.cmd 로 묶어 한 줄로 돌아가게 했습니다."
      },
      {
        kicker: "03 — outcome",
        title: "굳이 배포하지 않기로 한 이유",
        body: "로그인 정보를 받아야 하는 구조라 클라우드에 올리지 않고 로컬 전용으로 못 박았습니다. README 첫머리에 그 이유와 주의사항을 적어뒀습니다."
      }
    ]
  },

  {
    idx: "06",
    name: "Quarter View Action",
    ko: "3D 쿼터뷰 액션 게임",
    year: "2025",
    role: "개인 프로젝트",
    span: "2025.06",
    team: "솔로",
    blurb: "Unity로 만든 쿼터뷰 시점의 3D 액션 게임. 웹을 하기 전에 게임 엔진 쪽에서 먼저 개발을 시작했습니다.",
    tags: ["Unity", "C#"],
    links: [{ label: "GitHub", href: "https://github.com/nanjjang/ActionGame_3D_Unity_QuarterView" }],
    sections: [
      {
        kicker: "01 — problem",
        title: "코드가 화면으로 바로 보이는 일",
        body: "처음 개발을 시작할 때, 결과가 눈에 바로 보이는 게 게임이었습니다. 이동과 전투를 직접 손으로 만들어 보고 싶었습니다."
      },
      {
        kicker: "02 — approach",
        title: "Unity로 쿼터뷰 조작 구현",
        body: "쿼터뷰 시점에 맞춘 이동 · 카메라 · 전투 로직을 C# 스크립트로 작성했습니다."
      },
      {
        kicker: "03 — outcome",
        title: "여기서 시작해 웹으로",
        body: "이 프로젝트 이후 pygame, 그리고 웹 풀스택으로 관심이 옮겨갔습니다. 지금 백엔드를 보는 시각의 출발점이 된 작업입니다."
      }
    ]
  }
];
