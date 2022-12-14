## π₯ [Kakao x goorm] κ΅¬λ¦ν€ 2κΈ° λμ

![Frame 70](https://user-images.githubusercontent.com/74334399/197680081-7414f0bb-0056-4837-ba85-cf7af04853fa.png)

<br>

## π« ν μκ°  
#### νλͺ: λ―Έλ¦¬λ΄
> ###### κΈ°νμ: [μ΅μ°νΈ](https://github.com/yeoncpp)   
> ###### λμμ΄λ: κΉμμ£Ό   
> ###### λμμ΄λ: [κΉλμ](https://github.com/ehdtn)   
> ###### μλλ‘μ΄λ κ°λ°μ: [μ΄μ€ν](https://github.com/lijunhyeong)   
> ###### λ°±μλ κ°λ°μ: [κΉμ±μ](https://github.com/nfl1ryxditimo12)   

<br>

## π‘ νλ‘μ νΈ λ°°κ²½  
##### μ΄λ° κ²½ν νΉμμμΌμ¨λμ?
##### μ¬ν λμ€, μ°μ°ν λ§μ£ΌμΉ λ΄ λ§μ μλλ μ₯μλ₯Ό λ°κ²¬νμ λ,
##### κΈ°μ΅ν΄λκ³  μΆμ§λ§ λ±ν λͺμΉ­μ΄ μμ λ,
##### κ·Έ μμΉλ₯Ό μ’ λ νΉλ³νκ² κΈ°μ΅νκ³ , κΈ°λ‘νκΈ° !

<br>

## πββοΈ μλΉμ€ νλ¦

### π μ₯μ λ±λ‘
```mermaid
sequenceDiagram
participant m as Mobile
participant s as Server
participant d as Database

m->>s: GPS κΈ°λ° νμμΉ λ±λ‘
s->>d: λ°κ²½ 50m μ΄λ΄ κΈ°μ‘΄μ λ±λ‘ λμ΄μλ μ₯μμΈμ§ μ‘°ν
d-->>s: μλ, κ²½λ κΈ°λ° λ°κ²½ 50mμ΄λ΄ μ₯μ μλ΅
alt μ΅μ΄ λ±λ‘μΈ κ²½μ°
s->>d: ν΄λΉ μλ, κ²½λ κΈ°λ° μ₯μ μ μ₯
else μ΄λ―Έ λ±λ‘λ κ²½μ°
s->>d: κΈ°μ‘΄ μ₯μμ κΈ°μ¬μλ‘ λ±λ‘
end
alt λ³μ΄ λλ μ‘°κ±΄μ΄ λ κ²½μ° (μ΄ κΈ°μ¬μ μ 10λͺμ΄ λ κ²½μ°)
s->>s: μΉ΄νκ³ λ¦¬ λ³ μ μ£Ό λ°©μΈ λ¬Έμ₯ν λ‘μ§ μ€ν
s->>d: λ³μ΄ λ μ₯μ μ μ₯
end
s-->>m: μ μ₯λ μ₯μμ λν΄ μμΉ, μμΈ μ λ³΄ μλ΅
```

<br>
 
### β­οΈ λ³μ΄ λλ κ³Όμ 
> λ³μ΄ λλ©΄ Private μ₯μμμ Public μ₯μλ‘ λ³κ²½λμ΄, λκ΅¬λ λ³Ό μ μλ μ₯μκ° λ©λλ€.

![Mirinae_FlowChart](https://user-images.githubusercontent.com/74334399/197688694-96fadeb0-f2d3-4c03-adb1-03b4ef7fafa8.png)

<br>

### πΎ Database ERD

![Mirinae_Diagram (1)](https://user-images.githubusercontent.com/74334399/197976981-0fa81714-83bf-4800-bad8-a3e7d995a5a9.png)

<br>

## π  Backend κ°λ° νκ²½

<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/GoormIDE-232F3E?style=flat-square&logo=iCloud&logoColor=white">&nbsp
</p>

- [API λͺμΈ](https://choiyeonho.notion.site/API-bb42fdcc9b104b19b7cc73c2f6f41efa)
- [DB μ΄κΈ° λ°μ΄ν°](https://choiyeonho.notion.site/Static-Data-Set-6c9a6fc3bc1543798742eb66d23b8cd7)
