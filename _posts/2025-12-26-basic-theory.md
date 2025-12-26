---
layout: post
title: "1. 고에너지 천체물리학 기초 이론"
categories: [High-Energy Astrophysics]
math: true
toc: true
toc_sticky: true
---

# 1. Thermal vs Non-Thermal 
## 1.1. Thermal radiation
- $1.$ 전자, 이온, 원자 등의 물질 성분과 광자와의 상호작용을 기술한다. 
- $2.$ **물질이 열적 평형(thermal equilibrium)** 상태(온도가 급격히 증가하거나 감소하지 않는 기체, 두 개의 물체가 충분히 오랫동안 접촉한 상태)에서 방출되는 전자기 복사로, 복사 스펙트럼은 보통 **Planck 함수 또는 Maxwell-Boltzmann 분포**를 따른다. 
- $3.$ 예: 항성의 복사, 흑체 복사
### 1.1.1. The mechanisms of thermal radiation
- $1.$ **흡수(Absorption)**: 광자의 소멸로 인해 발생하는 기작이며, 광자의 방향, 에너지 변화가 모두 일어난다. 
	- $1.$ **Photoionization (Bound-free):** 광자가 전자의 결합 에너지를 넘어설 경우 → 이온화
	- $2.$ **Photoexcitation (Bound-bound):** 광자가 흡수되어 전자가 높은 에너지 준위로 이동
	- $3.$ **Free-free absorption (Bremsstrahlung absorption):** 자유 전자가 양이온 근처에서 광자를 흡수
- $2.$ **방출(Emission)**: 광자가 생성되는 기작이며, 광자의 방향, 에너지 변화가 모두 일어난다. 흡수 과정의 역과정이 방출 과정이다. 
	- $1.$ **Radiative recombination:** 이온화된 전자가 양이온과 재결합하며 광자 방출
	- $2.$ **Radiative de-excitation:** 들뜬 전자가 낮은 에너지 준위로 떨어지며 광자 방출
	- $3.$ **Bremsstrahlung radiation (자유-자유):** 전자가 이온 근처를 지나며 감속 → 연속 광자 방출
- $3.$ **산란(Scattering)**: 광자의 방향 변화는 있지만 에너지의 변화는 없다. 또한, 반응이 즉시 일어난다. 
	- $1.$ **Thomson scattering:** $h\nu \ll kT$일 때 발생. 에너지 변화 없이 방향만 바뀐다. (전자에 의한 선형 반응)
	- $2.$ **Rayleigh scattering:** 광자가 분자나 중성 원자와 상호작용하며 전자 분포를 일시적으로 왜곡시키는 현상이다. 하지만 이때 전자가 **실제 들뜬 에너지 준위(real excited state)** 로 가는 것이 아니라, **“가상 상태 (virtual state)”** 를 잠시 거쳐 **즉시 복원된다.**
	- $3.$ **Compton scattering:** 광자의 에너지가 충분히 클 때, 전자와 충돌하며 에너지 및 방향이 변한다.
## 1.2 Non-Thermal 
- $1.$ **복사원이 열적 평형에 있지 않으며**, **전자나 입자 분포가 비-맥스웰 분포(non-Maxwellian)** 를 따르는 경우 발생하는 복사이다. 즉, 스펙트럼이 Planck 분포를 따르지 않는다.
- $2.$ 예: **상대론적 입자, 유도 방출, 입자 가속 과정**
### 1.2.1. The mechanisms of non-thermal radiation
- $1.$ **Synchrotron radiation (싱크로트론 복사):** 고에너지 전자가 자기장 내에서 나선 운동하면서 방출되는 복사. - Radio, X-ray emission
- $2.$ **Inverse Compton scattering:** 상대론적 전자(고에너지 전자)가 저에너지 광자(예: CMB)를 산란시켜 고에너지(감마선)를 방출하는 산란 형태.
- $3.$ **Masers (microwave amplification by stimulated emission):** 들뜬 상태의 분자(예: H₂O, OH, SiO 등)가 유도방출을 일으켜 전파를 증폭하는 현상.
	- $1.$ **유도 방출(Stimulated Emission)**: 외부에서 들어온 광자가 들뜬 상태(excited state)에 있는 입자(보통 원자나 분자)를 자극하여, 동일한 에너지, 위상, 방향을 가진 또 다른 광자를 방출하게 만드는 양자역학적 현상
- $4.$ **Non-thermal Bremsstrahlung:** 열적 분포가 아닌 고에너지 전자가 이온 또는 원자핵과 상호작용해 고에너지(Gamma-ray) 광자를 방출하는 복사.
## 1.3. Summary of the thermal and non-thermal radiation

| 항목              | **Thermal Radiation**                       | **Non-thermal Radiation**     |
| --------------- | ------------------------------------------- | ----------------------------- |
| **정의**          | 열적 평형 상태의 입자 분포에서 기인한 복사                    | 열적 평형이 아닌 상태에서 발생하는 복사        |
| **스펙트럼 형태**     | Planck 함수 또는 Maxwell-Boltzmann 분포           | 파워 법칙(power-law) 스펙트럼이 흔함     |
| **에너지 분포**      | 맥스웰 분포                                      | 비-맥스웰, power-law 등                |
| **주요 기작**       | 흑체복사, free-free, bound-bound, recombination | 싱크로트론, 역컴프턴, 메이저, 비열적 브렘스슈트랄룽 |
| **주요 발생 조건**    | 고밀도, 열적 평형, 충분한 상호작용                        | 고에너지 입자 존재, 상대론적 운동, 희박한 환경   |
| **밝기 온도 $T_B$** | $T_B \lesssim 10^5$ K                       | $T_B \gtrsim 10^7$ K 가능       |
| **예시**          | 항성 복사, 은하 내 HII 영역, 흑체                      | AGN 제트, 펄서, 감마선 폭발, 분자 메이저    |

---
# 2. Brightness temperature
- $1.$ "이 정도 복사 강도를 가지려면 흑체는 몇 K여야 하는가"를 계산하는 식이다. 
- $2.$ 실제 온도 ≠ 밝기 온도, $T_B$는 천체의 **복사 세기(intensity)** 를 흑체 복사와 비교하기 위한 **편의적 온도**이다.
- $3.$ 활동은하핵(AGN) 제트에서는 $T_B \sim 10^{10} \sim 10^{12} \, \text{K}$까지 나타날 수 있다. 이는 **상대론적 비열적 방출(non-thermal emission)** 때문이다. 
- $4.$ 너무 높은 $T_B$는 **도플러 비밍(Doppler beaming)** 효과를 나타내어 상대론적 제트의 속도와 방향성을 추정할 수 있다. 식은 다음과 같다:

$$T_B = \frac{S_\nu c^2}{2 k_B \nu^2 \Omega}$$

- $S_\nu$: 관측된 플럭스 밀도 (Jy 단위) ($1\text{Jy} = 10^{-26}W * m^{-2} * \text{Hz}^{-1}$)
- $\nu$: 주파수 (Hz)
- $\Omega$: 광원(소스)의 고유 각크기(steradian, 혹은 θ² 등으로 근사 가능)
- c: 빛의 속도
- $k_B$: 볼츠만 상수

---
# 3. Soft X-ray vs Hard X-ray

| 특성         | Soft X-ray               | Hard X-ray                    |
| ---------- | ------------------------ | ----------------------------- |
| **에너지 범위** | 0.1 ~ 2 keV                | 10 ~ 100 keV (2 ~ 10 keV 포함 가능)   |
| **투과성**    | 낮음: 밀도 낮은 물질에서 흡수        | 높음: 밀도 높은 물질도 관통 가능           |
| **방출 과정**  | 열적 방출 (Thermal emission) | 비열적 방출 (Non-thermal emission) |
| **관측 원천**  | X-선 이중성, 초신성 잔해 등        | 블랙홀 제트, 역컴프턴 산란 등             |
| **관측 방법**  | 위성 기반 망원경 필요             | 위성 또는 지상 기반 가능                |

## 3.1. Super-soft X-ray sources (SSSs)
$1.$ 방출되는 복사는 낮은 에너지를 가진다.(일반적으로 0.1–0.4 keV 범위)

$2.$ 온도: SSS의 표면 온도는 보통 수십만 켈빈 수준(100,000–1,000,000 K)으로, soft X-ray	 영역에서 방출이 일어날 만큼 충분히 높다.

$3.$ 광도: 이들은 X선에서 매우 높은 광도를 보이며, 종종 $10^{36}–10^{38} \, \text{erg/s}$ 수준으로, 백색왜성의 에딩턴 광도에 근접한다.

$4.$ 스펙트럼: X선 스펙트럼은 흑체에 가까운 방출 형태를 보이며, 고에너지(hard) X선 성분은 거의 나타나지 않는다.
