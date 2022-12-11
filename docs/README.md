### 디렉토리 구조

```
📦src
 ┣ 📂Controller
 ┃ ┗ 📜GameController.js
 ┣ 📂Error
 ┃ ┗ 📜ValidationError.js
 ┣ 📂Model
 ┃ ┗ 📜Car.js
 ┣ 📂Util
 ┃ ┣ 📜RandomNumberGenerator.js
 ┃ ┣ 📜checkWinner.js
 ┃ ┣ 📜errorHandler.js
 ┃ ┗ 📜isMove.js
 ┣ 📂Validation
 ┃ ┣ 📜carName.js
 ┃ ┗ 📜tryCount.js
 ┣ 📂View
 ┃ ┗ 📜View.js
 ┗ 📜App.js
```

### 기능 목록

1. 자동차의 이름을 입력받는 기능

- 개수의 제한은 따로 없으며, split해서 나온 길이만큼 자동차 model 생성
- 유효성 검증을 진행한다

2. 시도할 횟수를 입력받는 기능

- 유효성 검증을 진행한다

3. 0 ~ 9의 무작위 값을 뽑는 기능

4. 이동 결과를 출력하는 기능

5. 우승자를 출력하는 기능

## 유효성 검사

1. 자동차의 이름을 입력받을 때

- 자동차 이름이 두개 이상인지 (혼자 경주하는건 안됨)
- 중복되는 이름은 없는지
- 자동차의 이름이 5자 이하인지
- 구분자는 콤마를 사용하였는지

2. 시도할 횟수를 입력받을 때

- 숫자인지
