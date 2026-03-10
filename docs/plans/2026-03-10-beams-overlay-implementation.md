# Beams Overlay Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** React Bits `Beams`를 사이트 전체에서 확실히 보이는 전역 오버레이로 재구성한다.

**Architecture:** `src/app/layout.tsx`에서 `Beams`를 고정 오버레이 레이어로 승격하고, 콘텐츠 래퍼와 헤더/푸터의 stacking context를 조정한다. `src/components/ui/beams.tsx`는 React Bits 원본 구현을 유지하되 전역 오버레이 시나리오에 맞는 class/alpha 제어만 허용한다.

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
