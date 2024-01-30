new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("邹雨婷同学")
    .pause(3000)
    .delete(null, {
        delay: 1500
    })
    .type("哦不对，现在叫小宝")
    .pause(3000)
    .delete(null, {
        delay: 1500
    })
    .type("真的很幸运很幸运能认识你")
    .pause(5000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 100,
    waitUntilVisible: true,
    speed: 100
}).go();