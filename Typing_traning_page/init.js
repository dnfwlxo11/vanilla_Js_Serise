function createSentence() {
    let sentence_arr = [
        '안녕하세요. 타자 연습 페이지 입니다.',
        '가나다라마바사아자차카타파하',
        'abcdefghijklmnopqrstuvwxyz',
        '빠른 속도로 정확하게 타이핑 해보세요.',
        '과연 완벽하게 끝마칠 수 있을 것인가.'
    ]

    for (let i=0;i<5; i++) {
        localStorage.setItem(`sentence_${i}`, sentence_arr[i])
    }
}

createSentence();