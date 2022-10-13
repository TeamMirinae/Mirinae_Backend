## MySQL 테이블 초기화

SET foreign_key_checks = 0;

TRUNCATE users;
TRUNCATE emotions;
TRUNCATE atmospheres;
TRUNCATE markers;
TRUNCATE user_markers;
TRUNCATE stared_markers;

SET foreign_key_checks = 1;

ALTER TABLE users convert to charset UTF8;
ALTER TABLE emotions convert to charset UTF8;
ALTER TABLE atmospheres convert to charset UTF8;
ALTER TABLE markers convert to charset UTF8;
ALTER TABLE user_markers convert to charset UTF8;
ALTER TABLE stared_markers convert to charset UTF8;

## 사용자

INSERT INTO users (id, nickname, createdAt, updatedAt) VALUES
	(1, "성수", now(), now()),
	(2, "연호", now(), now()),
	(3, "은주", now(), now()),
	(4, "동수", now(), now()),
	(5, "준형", now(), now());

## 마커

INSERT INTO markers (id, latitude, longitude, count, createdAt, updatedAt) VALUES
	(1, 33.4650824, 126.9036130, 1, now(), now()),
	(2, 33.5037769, 126.7698123, 4, now(), now()),
	(3, 33.4167590, 126.6686849, 1, now(), now()),
	(4, 33.3372665, 126.7408476, 1, now(), now()),
	(5, 33.3240599, 126.6148054, 5, now(), now()),
	(6, 33.3402501, 126.5350838, 4, now(), now()),
	(7, 33.4284365, 126.4673892, 1, now(), now()),
	(8, 33.3838665, 126.4269576, 5, now(), now()),
	(9, 33.2997189, 126.3882486, 1, now(), now()),
	(10, 33.3241678, 126.2754035, 5, now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(1, 1, 1, 6, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image0", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(2, 2, 2, 6, 4, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image1", now(), now()),
	(3, 3, 2, 10, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image1", now(), now()),
	(4, 4, 2, 18, 4, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image1", now(), now()),
	(5, 5, 2, 34, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image1", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(6, 1, 3, 6, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image2", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(7, 1, 4, 6, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image3", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
    (8, 1, 5, 12, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image4", now(), now()),
	(9, 2, 5, 12, 1, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image4", now(), now()),
	(10, 3, 5, 72, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image4", now(), now()),
	(11, 4, 5, 260, 6, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image4", now(), now()),
	(12, 5, 5, 48, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image4", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(13, 2, 6, 130, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image5", now(), now()),
	(14, 3, 6, 132, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image5", now(), now()),
	(15, 4, 6, 132, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image5", now(), now()),
	(16, 5, 6, 132, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image5", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(17, 1, 7, 6, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image6", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
    (18, 1, 8, 16, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image7", now(), now()),
	(19, 2, 8, 16, 1, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image7", now(), now()),
	(20, 3, 8, 16, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image7", now(), now()),
	(21, 4, 8, 16, 6, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image7", now(), now()),
	(22, 5, 8, 16, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image7", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
	(23, 1, 9, 6, 3, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image8", now(), now());

INSERT INTO user_markers (id, userId, markerId, atmosphereBit, emotionBit, imageUrl, createdAt, updatedAt) VALUES
    (24, 1, 10, 256, 5, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image9", now(), now()),
    (25, 2, 10, 256, 1, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image9", now(), now()),
    (26, 3, 10, 256, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image9", now(), now()),
    (27, 4, 10, 260, 6, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image9", now(), now()),
    (28, 5, 10, 256, 2, "https://team-mirinae.s3.ap-northeast-2.amazonaws.com/test-image9", now(), now());

## 감정

INSERT INTO emotions (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (1, 0, "행복해요.", "행복하우다.", now(), now()),
    (2, 1, "설렙니다.", "설레우다.", now(), now()),
    (3, 2, "평온", "평온햄수다.", now(), now()),
    (4, 3, "신남", "지꺼지다.", now(), now()),
    (5, 4, "감동", "감동적이우다.", now(), now()),
    (6, 5, "덤덤", "덤덤햄수다.", now(), now());

## 분위기

# 1. 뷰가 좋아요 -> 꽃, 열매

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (1, 0, "진달래", "전기-꼿", now(), now()),
    (2, 0, "산수국", "도체비-고장", now(), now()),
    (3, 0, "똘배", "꽝-베", now(), now()),
    (4, 0, "복숭아", "복송개", now(), now()),
    (5, 0, "배룽나무꽃", "벡일홍", now(), now()),
    (6, 0, "가마귀머루", "고냉이-멀뤼", now(), now()),
    (7, 0, "접시꽃", "가지깽이-고장", now(), now()),
    (8, 0, "해바라기", "헤바래기", now(), now()),
    (9, 0, "딱지꽃", "해래비-꼿", now(), now()),
    (10, 0, "포도", "포두", now(), now()),
    (11, 0, "신선이 먹는 복숭아", "천도실", now(), now()),
    (12, 0, "얇은 유자", "쏠-댕유지", now(), now());

# 2. 특별한 날 가기 좋아요 -> 특별

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (13, 1, "생일", "셍일", now(), now()),
    (14, 1, "병아리 부리", "비애기-부리", now(), now()),
    (15, 1, "내 것", "이녁-거", now(), now()),
    (16, 1, "휘파람", "쇳-부름", now(), now()),
    (17, 1, "복주머니", "복-주멩기", now(), now()),
    (18, 1, "장난감", "방둥이", now(), now()),
    (19, 1, "샘물", "나는-물", now(), now()),
    (20, 1, "신자국", "신그뭇", now(), now()),
    (21, 1, "깊은 잠", "한-잠", now(), now()),
    (22, 1, "꽃다울방", "곶다울방", now(), now()),
    (23, 1, "숨바꼭질", "곱을-락", now(), now()),
    (24, 1, "기슭물", "가지-물", now(), now());

# 3. 조용히 쉬기 좋아요 -> 초목(나무)

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (25, 2, "산딸나무", "틀낭", now(), now()),
    (26, 2, "국수나무", "셍이독꾸리", now(), now()),
    (27, 2, "구실잣밤나무", "제밤낭", now(), now()),
    (28, 2, "고추나무", "쐐배낭", now(), now()),
    (29, 2, "겨울딸기", "저슬탈", now(), now()),
    (30, 2, "갯버들", "버들개지", now(), now()),
    (31, 2, "동백나무", "돔박낭", now(), now()),
    (32, 2, "산뽕나무", "드릇뽕낭", now(), now()),
    (33, 2, "유자나무", "유지-낭", now(), now()),
    (34, 2, "고구마 덩굴", "감제꿀", now(), now()),
    (35, 2, "파리풀", "가스새", now(), now()),
    (36, 2, "개살구낭", "개탕쉬-낭", now(), now());

# 4. 집중하기 좋아요 -> 집(가구)

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (37, 3, "초가집", "초-집", now(), now()),
    (38, 3, "기왓장", "지엣-장", now(), now()),
    (39, 3, "절", "접-담", now(), now()),
    (40, 3, "뒤채", "우녁-거리", now(), now()),
    (41, 3, "커다란 건물", "와그래", now(), now()),
    (42, 3, "집으로 들어가는 길", "올래", now(), now()),
    (43, 3, "앞채", "알녁-거리", now(), now()),
    (44, 3, "뒷골목집", "안-집", now(), now()),
    (45, 3, "방앗간", "벌름", now(), now()),
    (46, 3, "서까래", "서리", now(), now()),
    (47, 3, "마루", "널-마리", now(), now()),
    (48, 3, "모서까래", "모진-서리", now(), now());

## 공간

# 5. 사진이 잘 나와요 -> 짐승(동물)

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (49, 4, "삽살개", "몽근-도치", now(), now()),
    (50, 4, "흰 돼지", "벡돗", now(), now()),
    (51, 4, "고양이", "고냉이", now(), now()),
    (52, 4, "강아지", "강생이", now(), now()),
    (53, 4, "참새", "밥주리-생이", now(), now()),
    (54, 4, "종달새", "드릇-생이", now(), now()),
    (55, 4, "말미잘", "물미조리", now(), now()),
    (56, 4, "소라", "구제기", now(), now()),
    (57, 4, "해파리", "물-이실", now(), now()),
    (58, 4, "물소", "물-쇠", now(), now()),
    (59, 4, "돼지", "도새기", now(), now()),
    (60, 4, "작은 새", "돔박-생이", now(), now());

# 6. 휴식 공간이 많아요 -> 지리

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (61, 5, "평평한 들판", "벵듸", now(), now()),
    (62, 5, "잔디", "테역-번데기", now(), now()),
    (63, 5, "위쪽 동네", "우-카름", now(), now()),
    (64, 5, "아래쪽 동네", "알-가름", now(), now()),
    (65, 5, "남쪽바다", "앞-바르", now(), now()),
    (66, 5, "물결", "물-절", now(), now()),
    (67, 5, "고갯길", "동산-질", now(), now()),
    (68, 5, "구렁텅이", "굴헝", now(), now()),
    (69, 5, "골짜기", "골째기", now(), now()),
    (70, 5, "분화구", "굼부리", now(), now()),
    (71, 5, "봉우리", "봉오지", now(), now()),
    (72, 5, "바다언덕", "헤각", now(), now());

# 7. 특별한 공간이 있어요 -> 지명(특징있는 장소)

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (73, 6, "바윗굴 속 고인물", "엉덕-물", now(), now()),
    (74, 6, "둥그스름 큰 밭", "두련-밧", now(), now()),
    (75, 6, "숲 아래 있는 밭", "수덕-앞", now(), now()),
    (76, 6, "물이 고이는 늪지대", "올랭이-통", now(), now()),
    (77, 6, "용천수가 나는 갯가", "산물깍", now(), now()),
    (78, 6, "조그마한 암초들", "잰잰한여", now(), now()),
    (79, 6, "큰 모래가 많은 해변", "왕모살냇기", now(), now()),
    (80, 6, "풀이 울창한 밭", "복대기왓", now(), now()),
    (81, 6, "금붕어 모양 동산", "금붕애동산", now(), now()),
    (82, 6, "목초가 많았던 넓은 지역", "촘생이-케", now(), now()),
    (83, 6, "매가 날아와 앉았던 돌", "매-아진-돌", now(), now()),
    (84, 6, "검은색 돌무더기", "거믄-머들", now(), now()),
    (85, 6, "붉은 누런색", "노린-빌레", now(), now()),
    (86, 6, "콧구멍처럼 뚫린 지형", "콧-쿰", now(), now());

# 8. 넓은 공간이에요 -> 천문

INSERT INTO atmospheres (id, bitIndex, standard, dialect, createdAt, updatedAt) VALUES
    (87, 7, "햇무리", "헷-갓", now(), now()),
    (88, 7, "함박군", "험벅-눈", now(), now()),
    (89, 7, "북쪽에서 오는 바람", "하늬-바름", now(), now()),
    (90, 7, "가랑비", "줌벙이", now(), now()),
    (91, 7, "갑자기 내리는 눈", "눈-주제", now(), now()),
    (92, 7, "동북쪽 바람", "새-하늬", now(), now()),
    (93, 7, "샛별", "새-벨", now(), now()),
    (94, 7, "바람꽃", "바람-구름", now(), now()),
    (95, 7, "은하", "미릿내", now(), now()),
    (96, 7, "눈송이", "눈-방울", now(), now()),
    (97, 7, "아지랑이", "가맹이", now(), now()),
    (98, 7, "회오리바람", "도껭이", now(), now());

INSERT INTO stared_markers (id, markerId, atmosphereId, emotionId, createdAt, updatedAt) VALUES
	(1, 5, 74, 2, now(), now()),
	(2, 8, 63, 2, now(), now()),
	(3, 10, 8, 2, now(), now());