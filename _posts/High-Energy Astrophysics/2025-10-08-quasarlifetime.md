---
layout: single
title: "퀘이사 수명 측정(Quasar lifetime measurements)"
mathjax: true
render_with_liquid: true
categories:
  - High-Energy Astrophysics
  - AGN
---  


본 글은 퀘이사의 수명을 측정하는 방법에 대해서 다루는 글이다
<br>

# 퀘이사가 활동 상태로 존재하는 비율(Quasar duty cycles)
이는 전체 은하 집단 중 퀘이사로 관측 가능한 상태에 있는 시간 또는 확률로 다음과 같이 표현한다:

$$ \text{Duty Cycle} = \frac{t_{\text{on}}}{t_{\text{total}}}$$

- \\(t_{\text{on}}\\): 퀘이사가 활발히 활동 중인 시간 즉, 밝게 보이는 상태
- \\(t_{\text{total}}\\): 전체 우주 시간 또는 퀘이사를 포함하는 은하(Host galaxy)의 수명
- **값이 작다**: 대부분의 시간 동안 퀘이사는 비활성 상태에 있음을 의미한다. 즉, 짧은 수명을 의미한다.
- **값이 크다**: 퀘이사 자주 또는 오래 활성 상태로 존재한다. 즉, 긴 수명을 의미한다. 

## \\(t_Q\\) 측정하기
\\(t_Q\\)는 자외선에서 퀘이사가 활동 시작 이후 경과 시간을 의미한다. \\(t_Q\\)를 측정할 수 있는 방법은 다음과 같다.

- **퀘이사 근접 영역의 크기 분석**: [퀘이사 근접 영역]({% post_url 2025-10-11-proximityzo %})의 물리적 크기 \\(R_p\\)는 퀘이사의 이온화 복사가 얼마나 오랫동안 주변 은하간 매질(IGM)을 이온화 했는지 반영한다. \\(R_p\\)와 복사 세기, IGM 조건을 모델링하여 \\(t_Q\\)를 추정할 수 있다:

$$ t_Q \sim \frac{R_p}{c_{\text{eff}}} $$

- \\(c_{\text{eff}}\\): 이온화 전파 속도로, 순수 광속보다 느릴 수 있다. (재결합, 밀도 효과 포함).