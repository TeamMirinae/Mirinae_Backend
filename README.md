## 🥇 [Kakao x goorm] 구름톤 2기 대상

![Frame 70](https://user-images.githubusercontent.com/74334399/197680081-7414f0bb-0056-4837-ba85-cf7af04853fa.png)

<br>

## 👫 팀 소개  
#### 팀명: 미리내
> ###### 기획자: [최연호](https://github.com/yeoncpp)   
> ###### 디자이너: 김은주   
> ###### 디자이너: [김동수](https://github.com/ehdtn)   
> ###### 안드로이드 개발자: [이준형](https://github.com/lijunhyeong)   
> ###### 백엔드 개발자: [김성수](https://github.com/nfl1ryxditimo12)   

<br>

## 💡 프로젝트 배경  
##### 이런 경험 혹시없으셨나요?
##### 여행 도중, 우연히 마주친 내 맘에 쏙드는 장소를 발견했을 때,
##### 기억해두고 싶지만 딱히 명칭이 없을 때,
##### 그 위치를 좀 더 특별하게 기억하고, 기록하기 !

<br>

## 🏃‍♂️ 서비스 흐름

### 🏞 장소 등록
```mermaid
sequenceDiagram
participant m as Mobile
participant s as Server
participant d as Database

m->>s: GPS 기반 현위치 등록
s->>d: 반경 50m 이내 기존에 등록 되어있는 장소인지 조회
d-->>s: 위도, 경도 기반 반경 50m이내 장소 응답
alt 최초 등록인 경우
s->>d: 해당 위도, 경도 기반 장소 저장
else 이미 등록된 경우
s->>d: 기존 장소에 기여자로 등록
end
alt 별이 되는 조건이 된 경우 (총 기여자 수 10명이 된 경우)
s->>s: 카테고리 별 제주 방언 문장화 로직 실행
s->>d: 별이 된 장소 저장
end
s-->>m: 저장된 장소에 대해 위치, 상세 정보 응답
```

<br>
 
### ⭐️ 별이 되는 과정
> 별이 되면 Private 장소에서 Public 장소로 변경되어, 누구나 볼 수 있는 장소가 됩니다.

![Mirinae_FlowChart](https://user-images.githubusercontent.com/74334399/197688694-96fadeb0-f2d3-4c03-adb1-03b4ef7fafa8.png)

<br>

### 💾 Database ERD

![Mirinae_Diagram (1)](https://user-images.githubusercontent.com/74334399/197976981-0fa81714-83bf-4800-bad8-a3e7d995a5a9.png)

<br>

## 🛠 Backend 개발 환경

<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/GoormIDE-232F3E?style=flat-square&logo=iCloud&logoColor=white">&nbsp
</p>

- [API 명세](https://choiyeonho.notion.site/API-bb42fdcc9b104b19b7cc73c2f6f41efa)
- [DB 초기 데이터](https://choiyeonho.notion.site/Static-Data-Set-6c9a6fc3bc1543798742eb66d23b8cd7)
