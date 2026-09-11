# 블로그 미리보기

이 블로그는 Jekyll로 HTML을 생성합니다. `_includes/love-slot.html`은 편집용
템플릿입니다. 파일을 브라우저에서 직접 열면 Liquid 문법이 그대로 표시되고,
스타일과 JavaScript가 연결되지 않아 슬롯머신이 동작하지 않습니다.

## 컴퓨터에서 확인

Ruby와 Bundler가 준비된 환경에서 저장소 폴더로 이동한 뒤 실행합니다.

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4777 --livereload
```

브라우저에서 <http://127.0.0.1:4777/posts/777-days/>를 엽니다.
서버를 실행한 상태에서는 본문, 선물 문구, CSS, JavaScript를 저장하면
자동으로 다시 빌드하고 열린 페이지도 새로고침합니다.
`_config.yml`이나 `Gemfile`을 수정했다면 서버를 다시 시작합니다.

## 실제 휴대폰에서 확인

컴퓨터와 휴대폰을 같은 Wi-Fi에 연결한 뒤, 위 서버를 종료하고 실행합니다.

```sh
bundle exec jekyll serve --host 0.0.0.0 --port 4777 --livereload
```

휴대폰에서 `http://컴퓨터의-Wi-Fi-IP:4777/posts/777-days/`를 엽니다.
휴대폰의 `127.0.0.1`은 휴대폰 자신을 가리키므로 컴퓨터의 IP를 사용해야 합니다.
공유 네트워크용 서버는 테스트를 마친 뒤 종료합니다.

## 문구를 편집할 파일

- `_data/love_slot_gifts.yml`: 선물 이름, 당첨 확률, 선물별 메시지
- `_includes/love-slot.html`: 제목과 고정 문구
- `assets/js/love-slot.js`: 회전·축하·선물 선택 중에 바뀌는 문구
- `assets/css/love-slot.css`: 색상, 배경, 모바일 배치
- `_posts/2026-09-11-777-days.md`: 포스트 본문

파일 링크는 코드 확인용이며, 완성된 화면은 위 HTTP 미리보기 주소에서 확인합니다.
