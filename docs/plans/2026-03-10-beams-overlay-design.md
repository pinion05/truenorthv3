# Beams Overlay Design

**Date:** 2026-03-10

**Goal:** React Bits `Beams`를 사이트 전체에 걸친 전역 오버레이로 적용해, 각 페이지와 섹션 위에서도 존재감이 분명하게 보이도록 만든다.

## Current State

- `src/components/ui/beams.tsx`에는 React Bits 기반 `three/@react-three/fiber/@react-three/drei` 구현이 들어가 있다.
- `src/app/layout.tsx`에서는 `Beams`를 `fixed` 배경 레이어로 두고 있지만 `-z-10` 위치에 있어 불투명한 섹션 배경 뒤로 묻힌다.
- 홈과 서브 페이지의 다수 섹션이 `bg-[#121212]`, `bg-[#08080b]`, `bg-[#0d0d12]` 같은 진한 불투명 배경을 사용한다.

## Problem

현재 구조는 “전역 배경”으로는 technically 적용되어 있지만, 시각적으로는 대부분의 섹션에서 효과가 가려진다. 사용자 요구사항은 “사이트 전체에서 확실히 보이게”이므로, 레이어 우선순위를 올리고 텍스트 가독성을 해치지 않는 범위 안에서 오버레이로 재구성해야 한다.

## Options Considered

### Option 1: 특정 섹션에만 적용

- 장점: 가독성 관리가 쉽고 섹션별 연출을 정밀하게 조정할 수 있다.
- 단점: 사용자 요구인 “전역”과 맞지 않는다.

### Option 2: 전역 배경 유지 + 섹션 배경 투명화

- 장점: 현재 구조를 일부 유지할 수 있다.
- 단점: 수많은 섹션 스타일을 광범위하게 수정해야 하고, 기존 아트 디렉션이 흔들릴 수 있다.

### Option 3: 전역 오버레이 승격 + 블렌딩/마스킹 조정

- 장점: 요구사항에 가장 직접적이며, 섹션 컴포넌트를 대량 수정하지 않아도 된다.
- 단점: 과하면 콘텐츠 가독성을 해칠 수 있어 opacity, blend mode, mask tuning이 필요하다.

## Chosen Approach

Option 3을 채택한다.

- `Beams`를 `body` 하위의 고정 전역 오버레이 레이어로 올린다.
- 콘텐츠 컨테이너보다 위에 두되, `pointer-events-none`과 적절한 `z-index`를 사용해 상호작용은 막지 않는다.
- `mix-blend-screen`, 보조 그라디언트, mask를 조합해 어두운 배경 위에서도 빔이 살아나도록 한다.
- 헤더/본문/푸터는 오버레이보다 위에 유지해 사용성을 보호한다.

## Validation Plan

- `bunx tsc --noEmit`
- `bun run build`
- 로컬 개발 서버에서 홈 및 중간 섹션 스크린샷 확인
- 필요하면 opacity/beam count/light color를 미세 조정

## Commit Strategy

1. 체크포인트 브랜치 생성 및 baseline 푸시
2. 설계/계획 문서 커밋
3. 전역 오버레이 구조 변경 커밋
4. 시각 튜닝 커밋

