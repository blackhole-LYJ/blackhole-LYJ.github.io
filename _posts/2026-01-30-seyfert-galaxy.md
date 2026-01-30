---
layout: post
title: "AGN - 4. Seyfert Galaxy"
categories: [High Energy Astrophysics]
tags: [Seyfert, AGN, BLR, NLR, Spectroscopy]
math: true
toc: true
toc_sticky: true

---

# 1. Seyfert galaxy Characteristic
- 은하 중심에 핵이 있어 밝지만, 상대적으로 은하핵의 광도가 어두운 활동은하로 은하가 전체적으로 잘 보인다.
	- B필터 절대등급으로 -23보다 커서 밝은 퀸사보다 어둡게 보인다.
- 가까운 은하들 중에 많고, 중심핵의 스펙트럼 폭이 넓고 강한 방출선을 보인다.
	- 세이퍼트(Carl Seyfert, 1911~1960)에 의해 구분된 넓은 방출선을 가진 은하이다.
- 대부분이 나선은하에 해당한다. 그 이유는 다음과 같다:
	- $1.$ **가스 풍부**: 나선은하는 차가운 분자/원자 가스를 많이 보유한다. 이는 SMBH에 필요한 연료(대략 $10^{-3}\ \sim 10^{-1}\ M_\odot\,\mathrm{yr}^{-1}$)를 꾸준히 공급할 수 있다.
	- $2.$ **수송 메커니즘**: 막대, 비대칭 팔, 나선팔 등이 중력 토크로 가스의 각운동량을 빼앗아 중심 kpc→pc로 흘려보낸다(circular inflow).
	- $3.$ **적절한 BH 질량**: 나선은하의 bulge에는 $10^{6-8} M_\odot$급 SMBH가 흔해 Seyfert 광도($10^{42-44}\ \mathrm{erg\,s^{-1}}$)를 내기 적합하다. 다른 자료에서는 "보편적으로 $10^{43}$–$10^{45}$ $\mathrm{erg\ s^{-1}}$의 광도를 가진다"고 나오기도 한다.
- 밝기가 다양한 시간 규모(수분~수년)에서 수~수십 퍼센트 정도 변한다.
- 세이퍼트는 하나의 넓은 허용 천이선($H\beta$, 4861 $\mathring{A}$)과 두 개의 좁은 금지선([OIII], 4959 $\mathring{A}$, 5007 $\mathring{A}$)을 가진다.
	- 이러한 선은 세이퍼트은하 표준 모형의 은하핵 영역에서 나오는 광자가 밖으로 나갈 때 두 가지의 다른 가스 영역(BLR, NLR)과 만나기 때문이다.

---

# 2. Type of Seyfert galaxy
## Type 1
- 활동은하핵의 방출선폭에 따른 분류에서 방출선의 폭이 넓어 보이는(1,000 km/s) 세이퍼트은하다.
- 부착원반과 BLR이 시선 방향에서 보이며, 부착원반에서 나오는 연속복사와 BLR, NLR에서 나오는 방출선이 함께 나타난다.
	- 수소 발머선이 나타나며 도플러 효과로 추정한 속도는 5,000~10,000 km/s 정도로 나타난다.
	- 금지선([OII, OIII, NII, SII])이 나타난다. 금지선의 속도는 200~400 km/s에 해당한다.
- 활동은하핵 스펙트럼과 은하 별빛의 스펙트럼이 중첩되기도 한다.
- 넓은 방출선 폭을 기준으로 다시 분류할 수 있다:
- $1.$ **좁은폭제1형세이퍼트은하(Narrow-line Seyfert 1, NLSy1)**: 선폭이 1,000 ~ 2,000 km/s
- $2.$ **넓은폭제1형세이퍼트은하(Broad-line Seyfert 1, BLSy1)**: 선폭이 2,000 km/s 이상

## Type 1.5
- 허용 천이선이 넓고 좁은 것을 모두 가진다.
- 대부분의 Seyfert galaxy가 이 영역에 속한다.

## Type 2
- 부착원반과 BLR이 시선에 수직한 방향으로 있어 잘 보이지 않는다. 즉, 관측자가 보는 방향으로 먼지구름이 BLR을 가리고 있다.
	- 넓은 방출선이 보이지 않으며 주로 좁은 선만 나타나고, 200~1,000 km/s의 속도를 가진다.
- BLR에서 나온 빛이 가려지더라도 먼지구름에 의해 산란된 빛은 관측자 방향으로 향할 수 있다. 따라서 먼지구름에 의해 편광된 빛을 관측할 수 있다.
	- 편광 관측을 통해 넓은 방출선을 관측할 수 있다.
	- 편광 관측으로도 넓은 방출선이 보이지 않으면 활동은하핵의 낮은 활동성 때문에 넓은 방출선이 보이지 않는다고 설명하기도 한다.

<div style="display:flex; gap:16px; justify-content:center; align-items:flex-start; flex-wrap:wrap;">
  <figure style="margin:0; width:48%;">
    <img src="{{ '/assets/img/type1sy.png' | relative_url }}" alt="Type 1 Seyfert Galaxy" style="width:100%; height:auto;">
    <figcaption>그림 1. Type 1 Seyfert Galaxy - 선폭이 좁은 방출선과 넓은 방출선이 함께 나타난다.</figcaption>
  </figure>
  <figure style="margin:0; width:48%;">
    <img src="{{ '/assets/img/type2sy.png' | relative_url }}" alt="Type 2 Seyfert Galaxy" style="width:100%; height:auto;">
    <figcaption>그림 2. Type 2 Seyfert Galaxy - 선폭이 넓은 방출선이 나타나지 않는다.</figcaption>
  </figure>
</div>

<br>

## 이온화 방출선의 세기에 따른 분류
- 고이온화 방출선이 잘 보이는 일반적인 세이퍼트은하와 저이온화 방출선이 잘 보이는 **라이너(low-ionization nuclear emission-line region, LINER)** 로 나뉜다.
	- 낮은 광도의 은하핵을 갖는 세이퍼트은하에서는 두 형태가 잘 구별되지 않는다.


## 분광학적 분류
- 세이퍼트은하를 분광학적으로 분류할 수 있다. 이때 기준이 되는 선은 $H\beta$, OIII의 선폭이다.
	- $H\beta$를 사용하는 이유는 $H\alpha$ 광자보다 $H\beta$의 광자 성분이 먼지에 더 잘 소광되기 때문이다.

---

# 3. Seyfert Galaxy Evolution
- 수년 사이 세이퍼트은하의 스펙트럼 모양이 변화하는 경우는 부착원반 주변의 광도 변화와 관련이 있으며, 선폭이 넓은 방출선의 광도도 이에 따라 변한다고 해석한다.
- 세이퍼트은하와 퀘이사는 질량 유입률에 따라 은하핵의 광도가 높을 때는 퀘이사, 낮을 때는 세이퍼트은하로 그 사이를 오갈 수 있다.
- 위와 같은 진화 기작으로 인해 세이퍼트은하는 제1형 및 제2형으로 나뉜다.

---

# 4. Seyfert Galaxy Observation Results
- 세이퍼트 은하를 관측한 결과, 대부분이 근접한 쌍은하계에 속한다. 이는 상호 간의 조석이 짧은 시간 동안 밝기 변화를 형성한다고 추측할 수 있다.
- 어떤 은하 표본에서 세이퍼트은하의 비율이 10~20%라면, 세이퍼트은하로 분류되는 기간이 은하의 나이 중 10~20%에 해당한다고 본다.
- BLR, NLR의 복잡성으로 인해 세이퍼트 은하가 Type 1.5 → Type 2로 1~4년의 시간에 변하는 것을 4개의 AGN에서 발견한 경우가 있다.
	- 이런 변화의 원인은 NLR 안쪽의 먼지구름이 우리의 시선 방향을 가로질러 BLR과 같은 방향에 놓여서 발생한 것으로 판단된다.

---

# 5. Seyfert Galaxy and Black Hole Mass Estimate
- **제1형 세이퍼트은하의 초대질량블랙홀 질량 측정**은 주로 두 가지 방법으로 이루어진다:
- $1.$ 넓은 방출선을 내는 구름과 블랙홀 간의 거리를 반향측량(reverberation mapping)이나 크기-광도 관계를 활용하여 측정하고, 넓은 방출선의 선폭으로부터 속도분산을 각각 구하여 비리얼 질량식을 사용하는 질량 측정 방식이다.
- $2.$ 모은하의 흡수선이 관측되는 경우, 흡수선폭으로부터 은하의 속도분산 값을 측정하고 기존에 알려진 속도분산 값과 블랙홀 질량 사이의 관계를 활용하여 질량을 추정한다.

- **제2형 세이퍼트은하의 초대질량블랙홀 질량 측정**은 흡수선의 선폭으로부터 구한 은하의 속도분산과 블랙홀 질량 사이의 관계를 통해 블랙홀의 질량을 추정할 수 있다.

---

# Reference
- 세이퍼트은하 네이버 천문학 백과: [세이퍼트은하](https://m.terms.naver.com/entry.naver?docId=6211611&cid=62801&categoryId=62801)
- 네이버 천문학 백과: [제1형세이퍼트은하](https://m.terms.naver.com/entry.naver?docId=6211581&ref=y), [제2형세이퍼트은하](https://m.terms.naver.com/entry.naver?docId=6211579&ref=y)
