# Beams Overlay Design

**Date:** 2026-03-10

**Goal:** React Bits `Beams`를 사이트 전체 공통 배경 시스템으로 쓰되, 최상단 히어로 100vh 구간에는 영상 배경을 다시 배치해 첫 인상은 영상이 담당하고 그 아래부터는 다크 실크 `Beams`가 이어지도록 만든다.

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

Option 2와 3의 혼합형으로 정리한다.

- `Beams`를 `body` 하위의 고정 전역 배경 레이어로 유지한다.
- 최상단 `HeroSection` 100vh 구간에는 배경 영상을 다시 배치한다.
- 영상은 다크 오버레이/그라디언트 아래에 두어, 사이트 전체 색감은 여전히 어두운 실크 방향을 유지한다.
- 히어로 이후 섹션과 서브 페이지들은 불투명 배경을 최소화해 전역 `Beams`가 계속 보이게 한다.

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
