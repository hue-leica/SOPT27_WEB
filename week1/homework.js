let web =[
    {
        "이름" : "김정욱",
        "나이" : 25,
        "학교" : "인천대학교",
        "MBTI" : "ESFJ",
        "좋아하는음식" : "피자"
    },
    {
        "이름" : "권소희",
        "나이" : 23,
        "학교" : "한국외대학교",
        "MBTI" : "INTP",
        "좋아하는음식" : "초밥"
    },
    {
        "이름" : "김민지",
        "나이" : 22,
        "학교" : "가천대학교",
        "MBTI" : "ISFJ",
        "좋아하는음식" : "연어"
    },
    {
        "이름" : "이동훈",
        "나이" : 28,
        "학교" : "경희대학교",
        "MBTI" : "ENFP",
        "좋아하는음식" : "돈까스"
    }
]
 /* 기본 for문 */
for(i=0;i<web.length;i++){
    console.log(web[i]);
}
 /* for in */
 for(i in web)
 {
     console.log(web[i]);
 }
 /* for of */
 for(i of web)
 {
     console.log(i);
 }
 /* for Each */
 web.forEach(i => console.log(i))