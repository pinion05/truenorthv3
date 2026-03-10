# Beams Overlay Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** React Bits `Beams`를 사이트 공통 배경으로 유지하면서, 최상단 히어로 100vh 구간에는 영상 배경을 다시 배치한다.

**Architecture:** `src/app/layout.tsx`에서 `Beams`를 고정 배경 레이어로 유지하고, `src/components/hero-section.tsx`에서만 100vh 영상 레이어를 복원한다. 영상은 히어로 내부의 자체 오버레이와 섞고, 히어로 외 나머지 구간은 현재의 다크 실크 `Beams` 배경을 유지한다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS, Three.js, @react-three/fiber, @react-three/drei

---

### Task 1: 계획 문서 저장

**Files:**
- Create: `docs/plans/2026-03-10-beams-overlay-design.md`
- Create: `docs/plans/2026-03-10-beams-overlay-implementation.md`

**Step 1: 문서 추가**

설계와 구현 계획을 `docs/plans` 아래에 저장한다.

**Step 2: 저장 확인**

Run: `find docs/plans -maxdepth 1 -type f | sort`
Expected: 두 파일이 목록에 표시됨

**Step 3: Commit**

```bash
git add docs/plans/2026-03-10-beams-overlay-design.md docs/plans/2026-03-10-beams-overlay-implementation.md
git commit -m "docs: add beams overlay design and plan"
```

### Task 2: 전역 오버레이 레이어 구조 조정

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: 현재 실패 조건 확인**

Run: `sed -n '1,120p' src/app/layout.tsx`
Expected: `Beams` 레이어가 `-z-10` 배경 위치에 있음

**Step 2: 최소 구현**

- `Beams`를 고정 오버레이 레이어로 이동
- 콘텐츠와 분리된 stacking context 구성
- `pointer-events-none` 유지

**Step 3: 타입/빌드 확인**

Run: `bunx tsc --noEmit && bun run build`
Expected: 타입체크 및 빌드 성공

**Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: promote beams to global overlay"
```

### Task 3: 오버레이 시각 튜닝

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/ui/beams.tsx`

**Step 1: 시각 검증**

홈 히어로와 중간 섹션에서 빔이 충분히 보이는지 확인한다.

**Step 2: 최소 조정**

- 필요 시 `opacity`, `mix-blend-screen`, `mask-image`, 보조 gradient 추가
- 필요 시 `beamNumber`, `lightColor`, `rotation`, canvas wrapper class 조정

**Step 3: 검증**

Run: `bunx tsc --noEmit && bun run build`
Expected: 성공

**Step 4: Commit**

```bash
git add src/app/layout.tsx src/components/ui/beams.tsx
git commit -m "feat: tune beams overlay visibility"
```

### Task 4: 최종 검증 및 원격 푸시

**Files:**
- Modify: none required

**Step 1: 전체 검증**

Run: `bunx tsc --noEmit && bun run build`
Expected: 성공

**Step 2: 작업 트리 확인**

Run: `git status --short`
Expected: 커밋 대상이 없거나 의도한 산출물만 남음

**Step 3: 푸시**

```bash
git push
```

### Task 5: 히어로 영상 복원

**Files:**
- Modify: `src/components/hero-section.tsx`

**Step 1: 현재 구조 확인**

Run: `sed -n '1,220p' src/components/hero-section.tsx`
Expected: 영상 없이 gradient/div만 배경으로 사용 중

**Step 2: 최소 구현**

- `public/videos/hero-bg.mp4`를 다시 사용
- 히어로 내부에 `absolute inset-0` 100vh 비디오 레이어 추가
- 텍스트 가독성을 위한 dark overlay 유지
- 전역 `Beams`와 충돌하지 않도록 z-index를 히어로 내부에서만 정리

**Step 3: 검증**

Run: `bunx tsc --noEmit && bun run build`
Expected: 성공

**Step 4: Commit**

```bash
git add src/components/hero-section.tsx
git commit -m "feat: restore hero video over beams background"
```
