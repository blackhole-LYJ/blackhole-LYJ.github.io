---
layout: post
title: "Corona - 3.1. X-ray Spectrum"
categories: [Compact Objects]
tags: [Corona, X-ray Spectrum, Comptonization, AGN, High-energy Cutoff]
math: true
toc: true
toc_sticky: true
---

# 3.1. X-ray Spectrum

- 코로나(corona)의 X선 방출은 보통 광자 지수(photon index, $\Gamma$)와 컷오프 에너지(cut-off energy, $E_C$)를 갖는 power-law 형태로 단순화해 기술할 수 있다.

$$
F(E) \propto E^{-\Gamma} e^{-E/E_C} \tag{1}
$$

- $\Gamma$: 스펙트럼 기울기(spectral slope)로, 콤프턴 산란 전자 온도($kT_e$)와 X선 방출 플라즈마의 optical depth($\tau$)와 관련된다(Rybicki & Lightman 1979).
- $E_C$: 고에너지 컷오프(high-energy cut-off)를 의미한다.

- **Spectral slope에 따른 에너지 분포 예시**
<figure style="text-align:center; margin: 1.2rem auto;">
  <img src="{{ '/assets/img/spectralxray.jpg' | relative_url }}" alt="Spectral slope에 따른 X-ray 스펙트럼 예시" style="width:500px; max-width:100%; height:auto;">
  <figcaption>그림 1. Spectral slope에 따른 X-ray 스펙트럼 예시</figcaption>
</figure>

- 위 그림은 코로나가 구형 기하(spherical geometry)를 가진다고 가정하고, 플라즈마 optical depth $\tau = 0.8$, 원반(UV) seed 광자 온도 10 eV를 사용한 예시다.
- 그림을 보면 전자 온도가 상승할수록 스펙트럼은 더 단단해지고(harder), 광자 지수는 감소하는 경향을 보인다.
- **Soft-when-bright behavior**는 천체가 더 밝아질수록(에너지가 높아질수록) 스펙트럼이 상대적으로 부드러워지는(에너지 분포가 낮은 쪽으로 치우치는) 관측적 특성을 의미한다.

## 3.1.1. 관측적 맥락
- 코로나 X-ray 스펙트럼은 대략 $0.3-100$ keV 에너지 구간에서 power-law 형태를 보인다(Vaiana & Rosner 1978; Haardt & Maraschi 1993; Merloni et al. 2003). 이 성분은 AGN bolometric luminosity의 약 5-10%를 기여하는 것으로 알려져 있다(Elvis et al. 1994; Marconi et al. 2004; Vasudevan & Fabian 2007; Fabian et al. 2017).
- 보편적인 X-ray 광도 논의 범위는 대체로 $L_{0.3-100\,\mathrm{keV}}$ 구간이다.