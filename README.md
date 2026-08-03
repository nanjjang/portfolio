# 윤준서 — 개인 홈페이지

빌드 도구 없는 정적 사이트입니다. Claude Design의 "포트폴리오 홈페이지 다크톤 리디자인"
시안을 그대로 옮겼습니다.

```
index.html        내용 (이름 / 소개 / 경력 / 스택 / 링크)
assets/data.js    프로젝트 목록 + 케이스 스터디  ← 프로젝트는 여기서 편집
assets/style.css  디자인
assets/main.js    목록 렌더링, 케이스 스터디 오버레이, 스크롤 효과
```

## 수정할 곳

**프로젝트** → `assets/data.js`
객체 하나가 카드 하나입니다. 복사해서 늘리고, 지워서 줄이면 목록과 케이스 스터디가
함께 반영됩니다. `metric` / `metricLabel` 은 선택 항목이라 비워두면 표시되지 않습니다.

**그 외** → `index.html` 의 `✏️` 주석 자리
이름, 히어로 문구, 숫자 3개, about 문단, 경력 타임라인, 기술 스택, 아이콘 링크.

**색상** → `assets/style.css` 맨 위 `--accent`
민트색 포인트 컬러가 한 번에 바뀝니다.

**사진** → about 섹션의 `<div class="portrait-ph">` 를
`<img class="portrait" src="assets/me.jpg" alt="윤준서">` 로 교체.
케이스 스터디의 `.case-shot-ph` 도 같은 방식(`.case-shot`)으로 이미지를 넣을 수 있습니다.

## 로컬에서 보기

```bash
python3 -m http.server 4321
```

http://localhost:4321 접속. (`data.js` 를 `file://` 로 열어도 동작하지만 서버 쪽이 안전합니다.)

## GitHub Pages로 배포

`nanjjang.github.io` 저장소를 만들고 이 폴더를 푸시하면 `https://nanjjang.github.io` 로 열립니다.

```bash
git init && git add -A && git commit -m "init"
git branch -M main
git remote add origin https://github.com/nanjjang/nanjjang.github.io.git
git push -u origin main
```

다른 이름의 저장소를 쓴다면 푸시 후 Settings → Pages → Source 를 `main` 으로 지정하세요.
