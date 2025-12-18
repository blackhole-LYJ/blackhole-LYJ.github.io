---
layout: post
categories: [Observational Astrophysics]
title: "점광원(Point-like sources)"
math: true
render_with_liquid: true
---  

**점광원(Point-like sources)**는 각크기가 망원경의 분해능보다 매우 작아서 관측 시에 점으로 보이는 천체를 의미한다. 대체로 지상 관측에서 천체의 각크기가 *1''이하* 라면 점광원으로 간주한다. 

점광원을 관측할 때, 주로 사용하는 물리량은 **스펙트럼 플럭스 밀도(Spectral flux density)**, **등급(Magnitude)**가 대표적이다. 

# 스펙트럼 플럭스 밀도(Spectral flux denstiy)

- 스펙트럼 플럭스 밀도는 다양한 용어로 혼용되어 사용된다. 영어 표현만 적으면 다음과 같다: 
**Spectral energy flux density**, **flux density** 
<br>
즉, 위 용어는 모두 같은 표현이다.

- **표기 방법**: \\(S\\)
- **단위**: \\([W m^{-2} Hz^{-1}]\\)
- 크기와 방향을 갖는 벡터량이지만 편의상 스칼라로 많이 사용한다. 
- **기타**
    - 관측자 입장에서 에너지 흐름이 흐름에 대해서 수직이라면 통과하는 플럭스가 최대가 된다.
    - *주의*: 광자 플럭스(photon flux)와는 다른 개념이다. 

# 등급(Magnitude)
등급은 두 별의 플럭스 비와 함께 로그로 표현할 수 있으며, 두 별의 등급 차는 다음과 같이 정의된다:

$$m_2 - m_1 = -\frac{5}{2} \log_{10} \left( \frac{\mathcal{F}_{p,2}}{\mathcal{F}_{p,1}} \right)$$

- 만약, 식에서 \\(m_2 - m_1 = 5\\)일 때, 별 1의 플럭스가 100배 더 크게 계산되는 것을 알 수 있다. 따라서 1등급 차이는 약 2.51의 플럭스 차이를 형성한다.

<br>

- 등급은 망원경에 부착되는 필터의 효율 함수(efficiency functions)에 영향을 받는다. 
- 다양한 스펙트럼 반응 때문에 같은 별에 대해서 등급을 측정해도 필터마다 값이 다르게 나올 수 있다.

## 영등급 정의(Zero Point Definition) {#zero-point-def}
광학 밴드에서 겉보기 밝기를 0으로 둘 수 있는 기준을 정할 수 있다. 즉, 위의 등급 식에서 \\(m_1\\)을 0으로 둔다고 생각하면 된다. <br>
그 방법에는 2가지가 존재한다.
1. **베가 등급계(Vega magnitude system)**: 유형 A0V, 거리는 26.4광년(LY)에 위치하고, 온도 10,000K의 조건을 만족하는 별인 *베가(Vega)*의 등급으로 0으로 두는 방법이다.
2. **AB 등급계(AB magnitude system)**: \\(3.631 \cdot 10^{-20} \text{ergs} \cdot s \cdot cm^{-2} \cdot Hz^{-1}\\)(3631Jy)을 0으로 두는 방법이다.
