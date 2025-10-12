
## 📁 Project Structure

이 프로젝트는 **Hugo + devfest-theme-hugo** 기반으로 구성되어 있으며,
각 페이지와 콘텐츠는 아래와 같이 관리됩니다.

## Run Locally
**Prerequisites:**

- Install [Hugo](https://gohugo.io/installation/)

**Cloning the Website:**

```bash
git clone https://github.com/{{your_username}}/conference.git
```

**Initializing Git Submodules**

```bash
git submodule update --init
```

**Running Dev Server**

```bash
hugo server
```

This starts a local server and opens the website in your web browser at http://localhost:1313.

### 🏠 `/content/_index.md`

* **사이트 루트 페이지 (메인 홈)**
* `hugo server` 실행 시 기본으로 표시되는 홈 화면의 콘텐츠를 정의합니다.
* 행사 소개나 주요 배너 등 첫 화면에 노출되는 내용을 작성합니다.

---

### 🗓 `/content/schedule/_index.md`

* **네비게이션의 “Schedule” 페이지**
* 행사 일정표(타임 테이블) 상단의 소개 문구나 섹션 구성을 정의합니다.
* **타임 테이블 본문 내용은 `/data/schedule.yml` 에서 설정**됩니다.

  * 시간별 세션 구성, 트랙 이름, 세션 연결 정보 등을 관리합니다.

---

### 🎤 `/content/sessions/`

* **각 세션별 상세 페이지를 담는 디렉터리**
* 예시: `/content/sessions/keynote.md`, `/content/sessions/ml101.md`
* 각 파일에는 다음과 같은 정보를 포함합니다:

  ```yaml
  ---
  title: "Keynote: The Future of Data"
  key: keynote
  speaker: "Jane Doe"
  ---
  ```
* 위의 `key` 값은 `/data/schedule.yml`에서 세션 연결 시 사용됩니다.

---

### 🧩 `/data/schedule.yml`

* **스케줄 구성 데이터 파일**
* 세션이 언제, 어떤 트랙에서 열리는지를 설정합니다.
* 각 slot, room, session의 key가 `/content/sessions/` 내 파일과 연결됩니다.

예시:

```yaml
days:
  - day: 2025-10-20
    rooms:
      - room: main
        slots:
          - slot: keynote
      - room: track-a
        slots:
          - slot: ml101
```

---

## 🧭 Navigation Summary

| 메뉴           | 경로                            | 설명            |
| ------------ | ----------------------------- | ------------- |
| **Home**     | `/content/_index.md`          | 홈페이지 첫 화면     |
| **Schedule** | `/content/schedule/_index.md` | 행사 일정표 페이지    |
| **Sessions** | `/content/sessions/`          | 개별 세션 상세 페이지들 |

---

### ref

[json-schema-org/conference](https://github.com/json-schema-org/conference)
