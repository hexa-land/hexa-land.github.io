webpackJsonp([1],{

/***/ "++LV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+D9K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_win.583c0bf.png";

/***/ }),

/***/ "+Udk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_token_json__ = __webpack_require__("B1zG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_token_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_libs_token_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib__);








function loadTokenList(network) {
  var tokenList = __WEBPACK_IMPORTED_MODULE_2_libs_token_json___default.a[network].concat(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].get('tokenList_' + network, []));
  tokenList.sort(function (a, b) {
    return a.symbol > b.symbol ? 1 : -1;
  });
  return tokenList;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getTokenList: function getTokenList() {
    return loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
  },
  addCustomToken: function addCustomToken(address, name, symbol, decimals) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    var has = tokenList.find(function (item) {
      return address === item.address;
    });
    if (has) return true;
    var network = __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork();
    var savedTokenList = __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].get('tokenList_' + network, []);
    savedTokenList[savedTokenList.length] = {
      name: name,
      symbol: symbol,
      address: address,
      decimals: decimals
    };
    __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].set('tokenList_' + network, savedTokenList, 365 * 86400);
  },
  fetchTokenInfo: function fetchTokenInfo(contractAddress) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTokenInfo(contractAddress);

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  checkSymbol: function checkSymbol(symbol) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    return tokenList.filter(function (token) {
      return token.symbol === symbol;
    }).length > 0;
  },
  getTokenBySymbol: function getTokenBySymbol(symbol) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    return tokenList.filter(function (token) {
      return token.symbol === symbol;
    })[0];
  },
  encodeSendData: function encodeSendData(token, address, amount) {
    return 'a9059cbb' + __WEBPACK_IMPORTED_MODULE_5_ethjs_abi___default.a.encodeParams(['address', 'uint256'], ['0x' + __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib___default.a.address.fromBase58Check(address)['hash'].toString('hex'), amount * Math.pow(10, token.decimals)]).substr(2);
  },


  /* added encodeSendDataHex(token, addressHex, amount) { for the case the available address string is already an HEX, since its hard to reverse encode HEX to Base58 */
  encodeSendDataHex: function encodeSendDataHex(token, addressHex, amount) {
    return 'a9059cbb' + __WEBPACK_IMPORTED_MODULE_5_ethjs_abi___default.a.encodeParams(['address', 'uint256'], ['0x' + addressHex, amount * Math.pow(10, token.decimals)]).substr(2);
  }
});

/***/ }),

/***/ "/kv9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Config_vue__ = __webpack_require__("KJOx");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a3c861c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__ = __webpack_require__("NE1V");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Config_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a3c861c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "05Ij":
/***/ (function(module, exports) {

module.exports = {"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1QQ/":
/***/ (function(module, exports) {

module.exports = {"_args":[["bigi@1.4.2","D:\\Usuarios\\cibrid\\devArea\\htmlCoin\\vue\\hexLand"]],"_development":true,"_from":"bigi@1.4.2","_id":"bigi@1.4.2","_inBundle":false,"_integrity":"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=","_location":"/bigi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"bigi@1.4.2","name":"bigi","escapedName":"bigi","rawSpec":"1.4.2","saveSpec":null,"fetchSpec":"1.4.2"},"_requiredBy":["/bitcoinjs-lib","/ecurve","/htmlcoinjs-lib/bitcoinjs-lib"],"_resolved":"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz","_spec":"1.4.2","_where":"D:\\Usuarios\\cibrid\\devArea\\htmlCoin\\vue\\hexLand","bugs":{"url":"https://github.com/cryptocoinjs/bigi/issues"},"dependencies":{},"description":"Big integers.","devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"homepage":"https://github.com/cryptocoinjs/bigi#readme","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"main":"./lib/index.js","name":"bigi","repository":{"url":"git+https://github.com/cryptocoinjs/bigi.git","type":"git"},"scripts":{"browser-test":"mochify --wd -R spec","coverage":"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info","jshint":"jshint --config jshint.json lib/*.js ; true","test":"_mocha -- test/*.js","unit":"mocha"},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},"version":"1.4.2"}

/***/ }),

/***/ "2Gzf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "2aRy":
/***/ (function(module, exports) {

module.exports = ["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]

/***/ }),

/***/ "3QFr":
/***/ (function(module, exports) {

module.exports = ["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]

/***/ }),

/***/ "3TvT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// aperez 08Nov2022 TO-DO: finish return
function walletAddr_dappEncode(b) {
  var bytes = bs58.decode(addr);
  hexAddr = bytes.toString('hex');
  hexAddr = hexAddr.slice(2, 42); // Removes first byte (version) & last 4 bytes (checksum)
  // pendiente return, return luego de agregar prefijo '0x'
}

// aperez 08Nov2022
var contractAddress = "f24f7456aa7ee076db4339a00d5c523a3360b30e"; // test Actor Dapp contract
var abiJson = JSON.parse('[{"constant": false,"inputs": [{"name": "unit_Id","type": "uint32"},{"name": "_quadrant","type": "uint256"}],"name": "changeLocation_mod","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"}]');
// the above is a "send to contract" ABI

// aperez 08Nov2022 - ABI parsing
var parsedAbi = [];
for (var i = 0; i < abiJson.length; i++) {
  parsedAbi[i] = { text: abiJson[i]['name'], value: i, info: abiJson[i] };
} // en of aperez code segment 08Nov2022

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: contractAddress, // modified from inlined default to passing param from above - aperez 08Nov2022
      abi: __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a, // modified from inlined default to passing param from above - aperez 08Nov2022
      parsedAbi: parsedAbi, // modified from inlined default to passing param from above - aperez 08Nov2022
      method: null,
      inputParams: [],
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      amount: 0,
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    params: function params() {
      if (this.method === null) {
        return null;
      }
      var inputs = this.parsedAbi[this.method].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    payable: function payable() {
      if (this.method === null) {
        return null;
      } else {
        return this.parsedAbi[this.method].info.payable;
      }
    },
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(gasPriceCheck && gasLimitCheck && feeCheck && this.method !== null);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    decodeAbi: function decodeAbi() {
      // this function is ommited ... not called by commented @input="decodeAbi" in page form - aperez 08Nov2022
      try {
        var _abiJson = JSON.parse(this.abi);
        this.parsedAbi = [];
        for (var _i = 0; _i < _abiJson.length; _i++) {
          this.parsedAbi[_i] = { text: _abiJson[_i]['name'], value: _i, info: _abiJson[_i] };
        }
      } catch (e) {
        this.$root.log.error('send_to_contract_decode_abi_error', e.stack || e.toString() || e);
        return true;
      }
    },
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(_this.parsedAbi[_this.method].info, _this.inputParams).substr(2);

                _this.confirmSendDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this.contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee, _this.amount);

              case 6:
                _this.rawTx = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.$root.log.error('send_to_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 15:
                _this.canSend = true;
                _context.next = 25;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                alert(_context.t1.message || _context.t1);
                _this.$root.log.error('send_to_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 18], [3, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this2.$emit('send');
                _context2.next = 17;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "3ZG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Warning_vue__ = __webpack_require__("v3+l");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_450beb4e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Warning_vue__ = __webpack_require__("ip/n");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Warning_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_450beb4e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Warning_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4quz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_BIFP_150.2242100.png";

/***/ }),

/***/ "4tbZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__ = __webpack_require__("cDYc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Password__ = __webpack_require__("G+K8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      passwordRequired: false,
      inputMnemonic: []
    };
  },

  components: {
    password: __WEBPACK_IMPORTED_MODULE_1_components_Password__["a" /* default */],
    mnemonic: __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__["a" /* default */]
  },
  methods: {
    restore: function restore(mnemonic) {
      this.inputMnemonic = mnemonic;
      if (!__WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].validateBip39Mnemonic(this.inputMnemonic)) {
        if (!confirm(this.$t('restore.mnemonic_warning'))) return false;
      }
      this.passwordRequired = true;
    },
    setPassword: function setPassword(password) {
      this.passwordRequired = false;
      if (!__WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreFromMnemonic(this.inputMnemonic, password)) {
        this.$root.error('mnemonics_can_not_restore');
        return false;
      }
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "5NZv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6+u4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__("Y4FN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_locales__ = __webpack_require__("qoVm");



/* harmony default export */ __webpack_exports__["a"] = ({
  set: function set(key, value) {
    var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 86400;

    __WEBPACK_IMPORTED_MODULE_0_store___default.a.set(key, {
      value: value,
      expired_at: +new Date() + expires * 1000
    });
  },
  get: function get(key, defaultValue) {
    var temp = __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(key);
    try {
      var value = temp.value;
      if (value === undefined || temp.expired_at < +new Date()) {
        return defaultValue;
      }
      return value;
    } catch (e) {
      return defaultValue;
    }
  },
  getLan: function getLan() {
    var locale = this.get('lan');
    navigator.languages.forEach(function (language) {
      if (locale === undefined && __WEBPACK_IMPORTED_MODULE_1_locales__["a" /* default */].locales.indexOf(language) !== -1) {
        locale = language;
      }
    });
    if (locale === undefined) {
      locale = 'en';
    }
    return locale;
  },
  getNetwork: function getNetwork() {
    return this.get('network', 'mainnet');
  },
  getMode: function getMode() {
    return this.get('mode', 'normal');
  }
});

/***/ }),

/***/ "6dsK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: '',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      amount: 0,
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    params: function params() {
      if (this.method === null) {
        return null;
      }
      var inputs = this.parsedAbi[this.method].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    payable: function payable() {
      if (this.method === null) {
        return null;
      } else {
        return this.parsedAbi[this.method].info.payable;
      }
    },
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(gasPriceCheck && gasLimitCheck && feeCheck && this.method !== null);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    decodeAbi: function decodeAbi() {
      try {
        var abiJson = JSON.parse(this.abi);
        this.parsedAbi = [];
        for (var i = 0; i < abiJson.length; i++) {
          this.parsedAbi[i] = { text: abiJson[i]['name'], value: i, info: abiJson[i] };
        }
      } catch (e) {
        this.$root.log.error('send_to_contract_decode_abi_error', e.stack || e.toString() || e);
        return true;
      }
    },
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(_this.parsedAbi[_this.method].info, _this.inputParams).substr(2);

                _this.confirmSendDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this.contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee, _this.amount);

              case 6:
                _this.rawTx = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.$root.log.error('send_to_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 15:
                _this.canSend = true;
                _context.next = 25;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                alert(_context.t1.message || _context.t1);
                _this.$root.log.error('send_to_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 18], [3, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this2.$emit('send');
                _context2.next = 17;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "7/GG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7btv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_server__ = __webpack_require__("yDAo");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// aperez 08Nov2022 TO-DO #4: finish return
function walletAddr_dappEncode(b) {
  var bytes = bs58.decode(addr);
  hexAddr = bytes.toString('hex');
  hexAddr = hexAddr.slice(2, 42); // Removes first byte (version) & last 4 bytes (checksum)
  return '0x' + hexAddr;
}

function hex_to_ascii(hexString) {
  // returns contract hex response to clean string - aperez 27Sep2021 & 20Nov2022 
  // updated on 20Nov2022 to return only string part of contract response
  var hex = hexString.toString();
  var hex_bit_length = hex.substr(0, 64);var _bit_length = parseInt(hex_bit_length, 16);
  var hex_str_length = hex.substr(64, 64);var _str_length = parseInt(hex_str_length, 16);
  var hex_str_data = hex.substr(128, _str_length * 2); // each char is encoded in a two hex digit lenght
  // console.log( hex_bit_length+" "+_bit_length ); 
  // console.log( hex_str_length+" "+_str_length );
  // console.log( hex_str_data );

  var str = '';
  for (var n = 0; n < hex_str_data.length; n += 2) {
    str += String.fromCharCode(parseInt(hex_str_data.substr(n, 2), 16)); // radix = 16 for hexadecimal
  }
  return str;
}

function parseAbis(abiJsonString, search_string) {
  // aperez 08Nov2022 - ABI parsing function - added seccond passing param 20Nov2022
  var _parsedAbi = [];
  for (var i = 0; i < abiJsonString.length; i++) {
    _parsedAbi[i] = { text: abiJsonString[i][search_string], value: i, info: abiJsonString[i] };
  }
  return _parsedAbi;
}

// general/central definition and setup of parsedABIs - aperez 08Nov2022
// updated to support specific individual ABIs to be called in functions - aperez 24Nov2022 

/* contract version HEXActor_v001.b05.sol
const contractAddress = "711c90a81be9c429f511f952140bb4036acc6a60"; // test Actor Dapp contract
const abiJson_actorlocation_call = JSON.parse('[{"constant": true,"inputs": [{"name": "_unit_Id","type": "uint32"}],"name": "getLocationFor","outputs": [{"name": "tile_location_hex_Id","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]');
const abiJson_actormove_send = JSON.parse('[{"constant": false,"inputs": [{"name": "_unit_Id","type": "uint32"},{"name": "_quadrant","type": "uint256"}],"name": "changeLocation","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"}]');
*/

// contract version HEXActor_v001.b06.sol
var contractAddress = "f24f7456aa7ee076db4339a00d5c523a3360b30e"; // test Actor Dapp contract
var abiJson_actorlocation_call = JSON.parse('[{	"constant": true,	"inputs": [{"name": "unit_Id","type": "uint32"}],"name": "getLocationFor","outputs": [{"name": "tile_location_hex_Id","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]');
var abiJson_actormove_send = JSON.parse('[{"constant": false,"inputs": [{"name": "unit_Id","type": "uint32"},{"name": "_quadrant","type": "uint256"}],"name": "changeLocation_mod","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"}]');

// general/central ABI parsing - aperez 08Nov2022
//var parsedAbi_call = []; // default parsedABIs to be replaced by specific parsedABIs - aperez 24Nov2022
//var parsedAbi_send = []; // default parsedABIs to be replaced by specific parsedABIs - aperez 24Nov2022
//parsedAbi_call = parseAbis(abiJson_call,'name'); // default parsedABIs to be replaced by specific parsedABIs - aperez 24Nov2022
//parsedAbi_send = parseAbis(abiJson_send,'name'); // default parsedABIs to be replaced by specific parsedABIs - aperez 24Nov2022

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: contractAddress, // modified from inlined default to passing param from above - aperez 08Nov2022
      //abi: '', // modified back to inlined default and ultimatelly commented - aperez 12Nov2022

      // U.I. specific variables fed into params eventually as needed by ABI enconding - aperez 24Nov2022
      actorId: '0', // by default ... to be modified in a dropdown menu in the interface - aperez 14Nov2022
      actorLocation: 'undefined', // variable that gets the result of a query via a callContract 
      move_to_quadrant: '0', // by default an impossible destination (options between 1 & 6) - aperez 14Nov2022

      // U.I. status variables for event control 
      flag_checkTXstatus: false, // while flag is true "get_TXstatus()" will be called - aperez 24Nov2022
      tx_status: '', // by default empty, and changes to 'unconfirmed' as read from TX_URL 

      // default callToContract properties.......................................................
      parsedAbi_call: [], // forked into call & send versions from parsedAbi - aperez 12Nov2022
      method_call: null, // forked into call & send from method:... - aperez 12Nov2022
      inputParams_call: [], // forked into call & send from inputParams:... - aperez 12Nov2022
      execResultDialog: false,
      result: 'loading...',

      // default sendToContrac properties........................................................
      parsedAbi_send: [], // forked into call & send versions from parsedAbi - aperez 12Nov2022
      method_send: null, // forked into call & send from method:... - aperez 12Nov2022
      inputParams_send: [], // forked into call & send from inputParams:... - aperez 12Nov2022
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      amount: 0,
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    /* from https://dev.to/ecordani/dynamic-styling-in-vue-js-46l individual styling functions for each hexa button - aperez 16Nov2022 */
    flag_hex_qdr1: function flag_hex_qdr1() {
      if (this.move_to_quadrant == 1) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },
    flag_hex_qdr2: function flag_hex_qdr2() {
      if (this.move_to_quadrant == 2) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },
    flag_hex_qdr3: function flag_hex_qdr3() {
      if (this.move_to_quadrant == 3) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },
    flag_hex_qdr4: function flag_hex_qdr4() {
      if (this.move_to_quadrant == 4) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },
    flag_hex_qdr5: function flag_hex_qdr5() {
      if (this.move_to_quadrant == 5) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },
    flag_hex_qdr6: function flag_hex_qdr6() {
      if (this.move_to_quadrant == 6) {
        return { '--bg-color': '#163613' };
      } else {
        return { '--bg-color': '#161213' };
      }
    },


    params_call: function params_call() {
      if (this.method_call === null) {
        return null;
      }
      var inputs = this.parsedAbi_call[this.method_call].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    params_send: function params_send() {
      if (this.method_send === null) {
        return null;
      }
      var inputs = this.parsedAbi_send[this.method_send].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    payable: function payable() {
      if (this.method_send === null) {
        return null;
      } else {
        return this.parsedAbi_send[this.method_send].info.payable;
      }
    },
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(gasPriceCheck && gasLimitCheck && feeCheck && this.method !== null);
    }
  },
  watch: {
    method_send: function method_send() {
      this.inputParams_send = [];
    },
    method_call: function method_call() {
      this.inputParams_call = [];
    },
    result: function result() {
      // watches the result to handle returning data - aperez 25Nov2022 
      /* this functions works on a TWO CYCLE execution, as the this.result val changes from
         default to a returning value and back to the default ... that explains the default
         empty if(){...} block - aperez 25Nov2022*/
      if (this.result == "loading...") {
        // do nothing as result value just defaulted
      } else {
        //console.log( "we have a result! "+this.result+" for "+JSON.stringify(this.parsedAbi_call[this.method_call].info) );
        var result_tag = this.parsedAbi_call[this.method_call].text;
        console.log(result_tag + " is: " + this.result);
        if (result_tag == "getLocationFor") {
          console.log("forking to manage the data as spatial info of an Actor");
          this.actorLocation = this.result;
          console.log("known location for Actor: " + this.actorId + " is: " + this.actorLocation);
          // al variables that the functions depend on have to be derived from result and stored in specific ..._result vars
          // as the global result defaults at the end of the cycle ...
          // one fork can initiate another callToContract and TRIGGER another cycle of the WATCH that forks 
          // over another if else () {} in this block
        } else if (result_tag == "getListOfActors") {} // other result_tag values here will fork the behaviour...
        // demostrative fork curently not operational ...

        // e.g. to activate certain parts of U.I. or initiate events

        this.result = "loading..."; // after all events are finished result value is cleared to default...

        /* TO-DO #9: develop around the following NOTE analysis ...
          NOTE: the result variable stays unchanged until it changes when a callToContract executes and gets a 
               different -result- value as long the result is unchange on aditional event happens ... which may 
               fail to update different events of the U.I probably the watch should be defined around the 
               "this.parsedAbi_call[this.method_call].text" or both the result and the result_tab - aperez 25Nov2022
          NOTE: alternatively specific variables can be fed with the this.result variable in the forks above and 
               a WATCH for each specific var is created. - aperez 25Nov2022
        */
      }
    }
    // TO-DO #5: may need to add a WATCH for flag_checkTXstatus and tx_status - aperez 24Nov2022
    // TO-DO #6: trigger method every x-time using examples as:
    //               https://stackoverflow.com/questions/13304471/javascript-get-code-to-run-every-minute
    //            or https://stackoverflow.com/questions/3138756/calling-a-function-every-60-seconds
  },
  methods: {
    // ******************* HEXALAND VUE-METHODS HERE - aperez 14Nov2022 ******************* 
    send_moveActor: function send_moveActor() {
      // draft funct to replace "sendToContract-FORM-UI" - aperez 14Nov2022
      this.parsedAbi_send = parseAbis(abiJson_actormove_send, 'name'); // locally parsing specific ABIJson to global parsedABIs - aperez 24Nov2022
      //alert(JSON.stringify(this.parsedAbi_send));
      this.method_send = 0; // As a policy every HEXALAND U.I will point to a individual ABI (no autoselection) so allways method will be '0'
      //alert(JSON.stringify(this.method_send));
      //alert(JSON.stringify(this.params_send));
      //alert(JSON.stringify(this.parsedAbi_send[this.method_send].info));
      this.inputParams_send[0] = this.actorId; // overwrites FORM data
      this.inputParams_send[1] = this.move_to_quadrant; // overwrites FORM data
      console.log("'ACTOR_ID' followed by 'Quadrant_ID'\n" + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.inputParams_send)); // visible while in DEV, to be commented
      //alert("Ready to send encoded data:\n"+JSON.stringify(abi.encodeMethod(this.parsedAbi_send[this.method_send].info, this.inputParams_send).substr(2))); // visible while in DEV, to be commented
      if (this.move_to_quadrant == 0) {
        // attempt to move to sea tiles or not selected tile not allowed - aperez 23Nov2022
        alert("Please select a valid destination");
      } else {
        this.send(); // calls the default sendToContract method - 23Nov2022
        // possibly here the TRIGGER of TO-DOs #5 & #6 & #7
      }
    },
    set_moveToQuadrant: function set_moveToQuadrant(quadrantId) {
      // replaces quadrant TEXT_FORM for button UI data input - aperez 14Nov2022
      this.move_to_quadrant = quadrantId;
      //alert("destination set for #"+this.move_to_quadrant+" location");      
    },
    call_locateActor: function call_locateActor() {
      this.parsedAbi_call = parseAbis(abiJson_actorlocation_call, 'name'); // locally parsing specific ABIJson to global parsedABIs - aperez 24Nov2022
      this.method_call = 0;
      this.inputParams_call[0] = this.actorId;
      this.callTo();
    },
    set_selectActor: function set_selectActor(sel_actorId) {
      this.actorId = sel_actorId;
    },

    /* workaround functions --get_TXstatus() &  fetchAsync()-- to capture the status of a TX to give 
       the user a in-game-response - aperez 24Nov2022
       a two function solution from https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
       and from https://stackoverflow.com/questions/247483/http-get-request-in-javascript/4033310#4033310
    */
    // TO-DO #7: trigger this method every x-time using examples as:
    //               https://stackoverflow.com/questions/13304471/javascript-get-code-to-run-every-minute
    //            or https://stackoverflow.com/questions/3138756/calling-a-function-every-60-seconds
    get_TXstatus: function get_TXstatus() {
      // trigger async function and then log response or catch error of fetch promise
      console.log("Ready to fetch");
      this.fetchAsync().then(function (data) {
        return console.log(data);
      }).catch(function (reason) {
        return console.log(reason.message);
      });
      // if success status is reached ... change the "flag_checkTXstatus" back to false
    },

    fetchAsync: function fetchAsync() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.github.com');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },


    // ********** THIRD PARTY VUE-METHODS IN SECTION BELLOW - aperez 14Nov2022 ********** 
    send: function send() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default.a.encodeMethod(_this2.parsedAbi_send[_this2.method_send].info, _this2.inputParams_send).substr(2);

                _this2.confirmSendDialog = true;
                _context2.prev = 3;
                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this2.contractAddress, encodedData, _this2.gasLimit, _this2.gasPrice, _this2.fee, _this2.amount);

              case 6:
                _this2.rawTx = _context2.sent;
                _context2.next = 15;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](3);

                _this2.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this2.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 15:
                _this2.canSend = true;
                _context2.next = 25;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t1 = _context2['catch'](0);

                _this2.$root.error('Params error');
                alert(_context2.t1.message || _context2.t1);
                _this2.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this2.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 25:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 18], [3, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this3.rawTx);

              case 4:
                txId = _context3.sent;

                _this3.confirmSendDialog = false;
                _this3.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_5_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this3.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                // above line to be replaced by a U.I. element that reacts every x-time to updates from above function "get_TXstatus()" - aperez 24Nov2022
                // initiates a watch on TX URL by activating "flag_checkTXstatus" as true
                _this3.$emit('send');
                _context3.next = 17;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this3.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this3.confirmSendDialog = false;

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 12]]);
      }))();
    },
    callTo: function callTo() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var encodedData, hexResult, parsedOutputs;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default.a.encodeMethod(_this4.parsedAbi_call[_this4.method_call].info, _this4.inputParams_call).substr(2);

                _this4.execResultDialog = true;
                _context4.prev = 3;
                _context4.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().callContract(_this4.contractAddress, encodedData);

              case 6:
                hexResult = _context4.sent;
                // this block of code manages the result cases STRING & NON-STRING - aperez 20Nov2022
                parsedOutputs = [];

                parsedOutputs = parseAbis(_this4.parsedAbi_call[_this4.method_call].info.outputs, 'type');
                // console.log(parsedOutputs[0].text);
                if (parsedOutputs[0].text == 'string') {
                  _this4.result = hex_to_ascii(hexResult);
                } else {
                  _this4.result = hexResult; // TO-DO #9: develop managing functions for UINTs (unsigned Ints) as encoded in ABIs
                }
                _context4.next = 17;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](3);

                _this4.$root.log.error('call_contract_call_contract_error', _context4.t0.stack || _context4.t0.toString() || _context4.t0);
                alert(_context4.t0.message || _context4.t0);
                _this4.execResultDialog = false;

              case 17:
                _context4.next = 24;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t1 = _context4['catch'](0);

                _this4.$root.error('Params error');
                _this4.$root.log.error('call_contract_encode_abi_error', _context4.t1.stack || _context4.t1.toString() || _context4.t1);
                return _context4.abrupt('return', false);

              case 24:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 19], [3, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "7zck":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "80Z7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("pageview")]),_vm._v("\n        "+_vm._s(_vm.$t('Query a Unit'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name,"outline":"","background-color":"blue lighten-1"},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e()],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.callTo}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('call_contract.result'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Result","disabled":""},model:{value:(_vm.result),callback:function ($$v) {_vm.result=$$v},expression:"result"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.execResultDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "8kY9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__ = __webpack_require__("7zck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a, {});

/***/ }),

/***/ "9SIY":
/***/ (function(module, exports) {

module.exports = ["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]

/***/ }),

/***/ "9Z0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Send_vue__ = __webpack_require__("L5P4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_380b18da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__ = __webpack_require__("ZHXn");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Send_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_380b18da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9rcu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc__ = __webpack_require__("4sqG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f__ = __webpack_require__("lajm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js__ = __webpack_require__("uotZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_buffer__ = __webpack_require__("X3l8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_safe_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes__ = __webpack_require__("b4MT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_qtum_opcodes__);











var Buffer = __WEBPACK_IMPORTED_MODULE_8_safe_buffer___default.a.Buffer;

function number2Buffer(num) {
  var buffer = [];
  var neg = num < 0;
  num = Math.abs(num);
  while (num) {
    buffer[buffer.length] = num & 0xff;
    num = num >> 8;
  }

  var top = buffer[buffer.length - 1];
  if (top & 0x80) {
    buffer[buffer.length] = neg ? 0x80 : 0x00;
  } else if (neg) {
    buffer[buffer.length - 1] = top | 0x80;
  }
  return Buffer.from(buffer);
}

function hex2Buffer(hexString) {
  var buffer = [];
  for (var i = 0; i < hexString.length; i += 2) {
    buffer[buffer.length] = parseInt(hexString[i], 16) << 4 | parseInt(hexString[i + 1], 16);
  }
  return Buffer.from(buffer);
}

var Ledger = function () {
  function Ledger(app) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Ledger);

    this.htmlcoin = app;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Ledger, null, [{
    key: 'connect',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var htmlcoin, pubkeyRes;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc___default.a;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f___default.a.create();

              case 3:
                _context.t1 = _context.sent;
                htmlcoin = new _context.t0(_context.t1);
                _context.next = 7;
                return htmlcoin.getWalletPublicKey(Ledger.defaultPath);

              case 7:
                pubkeyRes = _context.sent;

                if (!(pubkeyRes.bitcoinAddress[0] !== 'H')) {
                  _context.next = 10;
                  break;
                }

                throw 'Not HTML App';

              case 10:
                return _context.abrupt('return', new Ledger(htmlcoin));

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _ref.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(keyPair, ledger, path, from, to, amount, fee, utxoList) {
        var rawTxFetchFunc = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : function () {};
        var amountSat, feeSat, pubkeyRes, totalSelectSat, inputs, paths, selectUtxo, rawTxCache, i, item, outputs, changeSat, outputsScript;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                amountSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(amount).times(1e8);
                feeSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(fee).times(1e8);
                _context2.next = 4;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 4:
                pubkeyRes = _context2.sent;

                if (!(pubkeyRes.bitcoinAddress !== from)) {
                  _context2.next = 7;
                  break;
                }

                throw 'Ledger can not restore the source address, please plugin the correct ledger';

              case 7:
                totalSelectSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(0);
                inputs = [];
                paths = [];
                selectUtxo = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.selectTxs(utxoList, amount, fee);
                rawTxCache = {};
                i = 0;

              case 13:
                if (!(i < selectUtxo.length)) {
                  _context2.next = 31;
                  break;
                }

                item = selectUtxo[i];

                if (rawTxCache[item.hash]) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 18;
                return rawTxFetchFunc(item.hash);

              case 18:
                rawTxCache[item.hash] = _context2.sent;

              case 19:
                paths.push(path);
                totalSelectSat = totalSelectSat.plus(item.value);
                _context2.t0 = inputs;
                _context2.next = 24;
                return ledger.htmlcoin.splitTransaction(rawTxCache[item.hash]);

              case 24:
                _context2.t1 = _context2.sent;
                _context2.t2 = item.pos;
                _context2.t3 = [_context2.t1, _context2.t2];

                _context2.t0.push.call(_context2.t0, _context2.t3);

              case 28:
                i++;
                _context2.next = 13;
                break;

              case 31:
                outputs = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.TransactionBuilder(keyPair.network);

                outputs.addOutput(to, amountSat.toNumber());
                changeSat = totalSelectSat.minus(amountSat).minus(feeSat);

                outputs.addOutput(from, changeSat.toNumber());
                outputsScript = outputs.buildIncomplete().toHex().slice(10, -8);
                _context2.next = 38;
                return ledger.htmlcoin.createPaymentTransactionNew(inputs, paths, undefined, outputsScript);

              case 38:
                return _context2.abrupt('return', _context2.sent);

              case 39:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function generateTx(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(keyPair, ledger, path, from, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList) {
        var rawTxFetchFunc = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : function () {};
        var pubkeyRes, amount, amountSat, feeSat, totalSelectSat, inputs, paths, selectUtxo, rawTxCache, i, item, outputs, contract, changeSat, outputsScript;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 2:
                pubkeyRes = _context3.sent;

                if (!(pubkeyRes.bitcoinAddress !== from)) {
                  _context3.next = 5;
                  break;
                }

                throw 'Ledger can not restore the source address, please plugin the correct ledger';

              case 5:
                amount = 0;
                amountSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(amount).times(1e8);

                fee = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(gasLimit).times(gasPrice).div(1e8).add(fee).toNumber();
                feeSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(fee).times(1e8);
                totalSelectSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(0);
                inputs = [];
                paths = [];
                selectUtxo = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.selectTxs(utxoList, amount, fee);
                rawTxCache = {};
                i = 0;

              case 15:
                if (!(i < selectUtxo.length)) {
                  _context3.next = 33;
                  break;
                }

                item = selectUtxo[i];

                if (rawTxCache[item.hash]) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 20;
                return rawTxFetchFunc(item.hash);

              case 20:
                rawTxCache[item.hash] = _context3.sent;

              case 21:
                paths.push(path);
                totalSelectSat = totalSelectSat.plus(item.value);
                _context3.t0 = inputs;
                _context3.next = 26;
                return ledger.htmlcoin.splitTransaction(rawTxCache[item.hash]);

              case 26:
                _context3.t1 = _context3.sent;
                _context3.t2 = item.pos;
                _context3.t3 = [_context3.t1, _context3.t2];

                _context3.t0.push.call(_context3.t0, _context3.t3);

              case 30:
                i++;
                _context3.next = 15;
                break;

              case 33:
                outputs = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.TransactionBuilder(keyPair.network);
                contract = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.script.compile([__WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default.a.OP_4, number2Buffer(gasLimit), number2Buffer(gasPrice), hex2Buffer(encodedData), hex2Buffer(contractAddress), __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default.a.OP_CALL]);

                outputs.addOutput(contract, 0);
                changeSat = totalSelectSat.minus(amountSat).minus(feeSat);

                outputs.addOutput(from, changeSat.toNumber());
                outputsScript = outputs.buildIncomplete().toHex().slice(10, -8);
                _context3.next = 41;
                return ledger.htmlcoin.createPaymentTransactionNew(inputs, paths, undefined, outputsScript);

              case 41:
                return _context3.abrupt('return', _context3.sent);

              case 42:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function generateSendToContractTx(_x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19) {
        return _ref3.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'defaultPath',
    get: function get() {
      return "m/44'/88'/0'/0";
    }
  }]);

  return Ledger;
}();

/* harmony default export */ __webpack_exports__["a"] = (Ledger);

/***/ }),

/***/ "AUsI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Please input your password:")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{ref:"passwordInput",attrs:{"label":_vm.$t('password.password'),"type":"password","outline":"","background-color":"blue lighten-1"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirmPassword($event)}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmPassword}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AWyr":
/***/ (function(module, exports) {

module.exports = ["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","académie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acquérir","acronyme","acteur","actif","actuel","adepte","adéquat","adhésif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","aérer","aéronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agréable","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","algèbre","algue","aliéner","aliment","alléger","alliage","allouer","allumer","alourdir","alpaga","altesse","alvéole","amateur","ambigu","ambre","aménager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","anéantir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","apéritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","artériel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannière","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","bélier","belote","bénéfice","berceau","berger","berline","bermuda","besace","besogne","bétail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","brèche","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","caféine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","caméra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","cédille","ceinture","céleste","cellule","cendrier","censurer","central","cercle","cérébral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","chéquier","chercher","cheval","chien","chiffre","chignon","chimère","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cinéma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohésion","coiffer","coincer","colère","colibri","colline","colmater","colonel","combat","comédie","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","cortège","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","créature","créditer","crémeux","creuser","crevette","cribler","crier","cristal","critère","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuillère","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","débattre","débiter","déborder","débrider","débutant","décaler","décembre","déchirer","décider","déclarer","décorer","décrire","décupler","dédale","déductif","déesse","défensif","défiler","défrayer","dégager","dégivrer","déglutir","dégrafer","déjeuner","délice","déloger","demander","demeurer","démolir","dénicher","dénouer","dentelle","dénuder","départ","dépenser","déphaser","déplacer","déposer","déranger","dérober","désastre","descente","désert","désigner","désobéir","dessiner","destrier","détacher","détester","détourer","détresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","différer","digérer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","éblouir","écarter","écharpe","échelle","éclairer","éclipse","éclore","écluse","école","économie","écorce","écouter","écraser","écrémer","écrivain","écrou","écume","écureuil","édifier","éduquer","effacer","effectif","effigie","effort","effrayer","effusion","égaliser","égarer","éjecter","élaborer","élargir","électron","élégant","éléphant","élève","éligible","élitisme","éloge","élucider","éluder","emballer","embellir","embryon","émeraude","émission","emmener","émotion","émouvoir","empereur","employer","emporter","emprise","émulsion","encadrer","enchère","enclave","encoche","endiguer","endosser","endroit","enduire","énergie","enfance","enfermer","enfouir","engager","engin","englober","énigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","énumérer","envahir","enviable","envoyer","enzyme","éolien","épaissir","épargne","épatant","épaule","épicerie","épidémie","épier","épilogue","épine","épisode","épitaphe","époque","épreuve","éprouver","épuisant","équerre","équipe","ériger","érosion","erreur","éruption","escalier","espadon","espèce","espiègle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","étagère","étaler","étanche","étatique","éteindre","étendoir","éternel","éthanol","éthique","ethnie","étirer","étoffer","étoile","étonnant","étourdir","étrange","étroit","étude","euphorie","évaluer","évasion","éventail","évidence","éviter","évolutif","évoquer","exact","exagérer","exaucer","exceller","excitant","exclusif","excuse","exécuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expédier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fébrile","féconder","fédérer","félin","femme","fémur","fendoir","féodal","fermer","féroce","ferveur","festival","feuille","feutre","février","fiasco","ficeler","fictif","fidèle","figure","filature","filetage","filière","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fléau","flèche","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fougère","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","frégate","freiner","frelon","frémir","frénésie","frère","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","géant","gélatine","gélule","gendarme","général","génie","genou","gentil","géologie","géomètre","géranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruyère","guépard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","hélium","hématome","herbe","hérisson","hermine","héron","hésiter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homogène","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygiène","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impérial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","inédit","ineptie","inexact","infini","infliger","informer","infusion","ingérer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irréel","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juvénile","kayak","kimono","kiosque","label","labial","labourer","lacérer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","légal","léger","légume","lessive","lettre","levier","lexique","lézard","liasse","libérer","libre","licence","licorne","liège","lièvre","ligature","ligoter","ligue","limer","limite","limonade","limpide","linéaire","lingot","lionceau","liquide","lisière","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumière","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","maléfice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","matériel","matière","matraque","maudire","maussade","mauve","maximal","méchant","méconnu","médaille","médecin","méditer","méduse","meilleur","mélange","mélodie","membre","mémoire","menacer","mener","menhir","mensonge","mentor","mercredi","mérite","merle","messager","mesure","métal","météore","méthode","métier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","minéral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","murène","murmure","muscle","muséum","musicien","mutation","muter","mutuel","myriade","myrtille","mystère","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","nébuleux","nectar","néfaste","négation","négliger","négocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","numéro","nuptial","nuque","nutritif","obéir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","océan","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","onéreux","onirique","opale","opaque","opérer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxygène","ozone","paisible","palace","palmarès","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","pastèque","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pélican","pelle","pelouse","peluche","pendule","pénétrer","pénible","pensif","pénurie","pépite","péplum","perdrix","perforer","période","permuter","perplexe","persil","perte","peser","pétale","petit","pétrir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pièce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poésie","poète","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","pondérer","poney","portique","position","posséder","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","précieux","prédire","préfixe","prélude","prénom","présence","prétexte","prévoir","primitif","prince","prison","priver","problème","procéder","prodige","profond","progrès","proie","projeter","prologue","promener","propre","prospère","protéger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quiétude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","réactif","réagir","réaliser","réanimer","recevoir","réciter","réclamer","récolter","recruter","reculer","recycler","rédiger","redouter","refaire","réflexe","réformer","refrain","refuge","régalien","région","réglage","régulier","réitérer","rejeter","rejouer","relatif","relever","relief","remarque","remède","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","réserve","résineux","résoudre","respect","rester","résultat","rétablir","retenir","réticule","retomber","retracer","réunion","réussir","revanche","revivre","révolte","révulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivière","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","scélérat","scénario","sceptre","schéma","science","scinder","score","scrutin","sculpter","séance","sécable","sécher","secouer","sécréter","sédatif","séduire","seigneur","séjour","sélectif","semaine","sembler","semence","séminal","sénateur","sensible","sentence","séparer","séquence","serein","sergent","sérieux","serrure","sérum","service","sésame","sévir","sevrage","sextuple","sidéral","siècle","siéger","siffler","sigle","signal","silence","silicium","simple","sincère","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spécial","sphère","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succès","sucre","suffixe","suggérer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","symétrie","synapse","syntaxe","système","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","témoin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","tétine","texte","thème","théorie","thérapie","thorax","tibia","tiède","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tolérant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","trèfle","tremper","trésor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","végétal","véhicule","veinard","véloce","vendredi","vénérer","venger","venimeux","ventouse","verdure","vérin","vernir","verrou","verser","vertu","veston","vétéran","vétuste","vexant","vexer","viaduc","viande","victoire","vidange","vidéo","vignette","vigueur","vilain","village","vinaigre","violon","vipère","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xénon","yacht","zèbre","zénith","zeste","zoologie"]

/***/ }),

/***/ "AbdW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_ufg_manure.e48142b.jpg";

/***/ }),

/***/ "AySs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__ = __webpack_require__("KuJL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_568f2db8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__ = __webpack_require__("v1kD");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_568f2db8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "B1zG":
/***/ (function(module, exports) {

module.exports = {"mainnet":[{"name":"HTMLKnights Medal","symbol":"⚔","address":"18c697da30aaea24cbc57433141e7f325c5b5ea8","decimals":"0","total_supply":"100"},{"name":"S005Token","symbol":"S005","address":"15d62de8521341d11cf0d930f80fc6f9f556cce4","decimals":"3"}],"testnet":[]}

/***/ }),

/***/ "G+K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Password_vue__ = __webpack_require__("pbl8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c2b9d3b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__ = __webpack_require__("AUsI");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Password_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c2b9d3b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "G2dt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_wallet__ = __webpack_require__("Wq6Z");



var connectLedger = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].connectLedger();

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function connectLedger() {
    return _ref.apply(this, arguments);
  };
}();

var restoreHdNodeFromLedgerPath = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(ledger, path) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreHdNodeFromLedgerPath(ledger, path);

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function restoreHdNodeFromLedgerPath(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();



var wallet = false;

function getWallet() {
  return wallet;
}

function setWallet(wal) {
  wallet = wal;
}

function getLedgerDefaultPath() {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].getLedgerDefaultPath();
}

function generateMnemonic() {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].generateMnemonic();
}

function restoreFromMnemonic(mnemonic, password) {
  return wallet = __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromMnemonic(mnemonic, password);
}

function restoreFromMobile(mnemonic) {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromMobile(mnemonic);
}

function chooseMobileWallet(walletList, path) {
  return wallet = walletList[path].wallet;
}

function restoreFromWif(wif) {
  return wallet = __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromWif(wif);
}

function restoreFromHdNodeByPage(hdNode, start) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromHdNodeByPage(hdNode, start, length);
}

function validateBip39Mnemonic(mnemonic) {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].validateBip39Mnemonic(mnemonic);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getWallet: getWallet,
  setWallet: setWallet,
  connectLedger: connectLedger,
  getLedgerDefaultPath: getLedgerDefaultPath,
  generateMnemonic: generateMnemonic,
  restoreFromMnemonic: restoreFromMnemonic,
  restoreFromMobile: restoreFromMobile,
  restoreFromWif: restoreFromWif,
  restoreHdNodeFromLedgerPath: restoreHdNodeFromLedgerPath,
  restoreFromHdNodeByPage: restoreFromHdNodeByPage,
  chooseMobileWallet: chooseMobileWallet,
  validateBip39Mnemonic: validateBip39Mnemonic
});

/***/ }),

/***/ "HAe2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("edit")]),_vm._v("\n        "+_vm._s(_vm.$t('restore_wif.title'))+"\n      ")],1)])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',[_c('v-flex',{attrs:{"xs2":""}},[_c('v-subheader',[_vm._v("\n          "+_vm._s(_vm.$t('restore_wif.priv_key'))+"\n        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.restore($event)}},model:{value:(_vm.wif),callback:function ($$v) {_vm.wif=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"wif"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.restore}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HWGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      node: __WEBPACK_IMPORTED_MODULE_3_libs_server__["a" /* default */].currentNode()
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.wallet.setTxList();
    }
  },
  computed: {
    txList: function txList() {
      return this.wallet.txList;
    }
  },
  methods: {
    refreshWallet: function refreshWallet() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.wallet.setTxList();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ "Hs0l":
/***/ (function(module, exports) {

module.exports = ["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]

/***/ }),

/***/ "JERy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_ActorMove_vue__ = __webpack_require__("3TvT");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd1e93da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_ActorMove_vue__ = __webpack_require__("eqrB");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_ActorMove_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd1e93da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_ActorMove_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Ju6P":
/***/ (function(module, exports) {

module.exports = ["的","一","是","在","不","了","有","和","人","這","中","大","為","上","個","國","我","以","要","他","時","來","用","們","生","到","作","地","於","出","就","分","對","成","會","可","主","發","年","動","同","工","也","能","下","過","子","說","產","種","面","而","方","後","多","定","行","學","法","所","民","得","經","十","三","之","進","著","等","部","度","家","電","力","裡","如","水","化","高","自","二","理","起","小","物","現","實","加","量","都","兩","體","制","機","當","使","點","從","業","本","去","把","性","好","應","開","它","合","還","因","由","其","些","然","前","外","天","政","四","日","那","社","義","事","平","形","相","全","表","間","樣","與","關","各","重","新","線","內","數","正","心","反","你","明","看","原","又","麼","利","比","或","但","質","氣","第","向","道","命","此","變","條","只","沒","結","解","問","意","建","月","公","無","系","軍","很","情","者","最","立","代","想","已","通","並","提","直","題","黨","程","展","五","果","料","象","員","革","位","入","常","文","總","次","品","式","活","設","及","管","特","件","長","求","老","頭","基","資","邊","流","路","級","少","圖","山","統","接","知","較","將","組","見","計","別","她","手","角","期","根","論","運","農","指","幾","九","區","強","放","決","西","被","幹","做","必","戰","先","回","則","任","取","據","處","隊","南","給","色","光","門","即","保","治","北","造","百","規","熱","領","七","海","口","東","導","器","壓","志","世","金","增","爭","濟","階","油","思","術","極","交","受","聯","什","認","六","共","權","收","證","改","清","美","再","採","轉","更","單","風","切","打","白","教","速","花","帶","安","場","身","車","例","真","務","具","萬","每","目","至","達","走","積","示","議","聲","報","鬥","完","類","八","離","華","名","確","才","科","張","信","馬","節","話","米","整","空","元","況","今","集","溫","傳","土","許","步","群","廣","石","記","需","段","研","界","拉","林","律","叫","且","究","觀","越","織","裝","影","算","低","持","音","眾","書","布","复","容","兒","須","際","商","非","驗","連","斷","深","難","近","礦","千","週","委","素","技","備","半","辦","青","省","列","習","響","約","支","般","史","感","勞","便","團","往","酸","歷","市","克","何","除","消","構","府","稱","太","準","精","值","號","率","族","維","劃","選","標","寫","存","候","毛","親","快","效","斯","院","查","江","型","眼","王","按","格","養","易","置","派","層","片","始","卻","專","狀","育","廠","京","識","適","屬","圓","包","火","住","調","滿","縣","局","照","參","紅","細","引","聽","該","鐵","價","嚴","首","底","液","官","德","隨","病","蘇","失","爾","死","講","配","女","黃","推","顯","談","罪","神","藝","呢","席","含","企","望","密","批","營","項","防","舉","球","英","氧","勢","告","李","台","落","木","幫","輪","破","亞","師","圍","注","遠","字","材","排","供","河","態","封","另","施","減","樹","溶","怎","止","案","言","士","均","武","固","葉","魚","波","視","僅","費","緊","愛","左","章","早","朝","害","續","輕","服","試","食","充","兵","源","判","護","司","足","某","練","差","致","板","田","降","黑","犯","負","擊","范","繼","興","似","餘","堅","曲","輸","修","故","城","夫","夠","送","筆","船","佔","右","財","吃","富","春","職","覺","漢","畫","功","巴","跟","雖","雜","飛","檢","吸","助","昇","陽","互","初","創","抗","考","投","壞","策","古","徑","換","未","跑","留","鋼","曾","端","責","站","簡","述","錢","副","盡","帝","射","草","衝","承","獨","令","限","阿","宣","環","雙","請","超","微","讓","控","州","良","軸","找","否","紀","益","依","優","頂","礎","載","倒","房","突","坐","粉","敵","略","客","袁","冷","勝","絕","析","塊","劑","測","絲","協","訴","念","陳","仍","羅","鹽","友","洋","錯","苦","夜","刑","移","頻","逐","靠","混","母","短","皮","終","聚","汽","村","雲","哪","既","距","衛","停","烈","央","察","燒","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","遊","久","菜","味","舊","模","湖","貨","損","預","阻","毫","普","穩","乙","媽","植","息","擴","銀","語","揮","酒","守","拿","序","紙","醫","缺","雨","嗎","針","劉","啊","急","唱","誤","訓","願","審","附","獲","茶","鮮","糧","斤","孩","脫","硫","肥","善","龍","演","父","漸","血","歡","械","掌","歌","沙","剛","攻","謂","盾","討","晚","粒","亂","燃","矛","乎","殺","藥","寧","魯","貴","鐘","煤","讀","班","伯","香","介","迫","句","豐","培","握","蘭","擔","弦","蛋","沉","假","穿","執","答","樂","誰","順","煙","縮","徵","臉","喜","松","腳","困","異","免","背","星","福","買","染","井","概","慢","怕","磁","倍","祖","皇","促","靜","補","評","翻","肉","踐","尼","衣","寬","揚","棉","希","傷","操","垂","秋","宜","氫","套","督","振","架","亮","末","憲","慶","編","牛","觸","映","雷","銷","詩","座","居","抓","裂","胞","呼","娘","景","威","綠","晶","厚","盟","衡","雞","孫","延","危","膠","屋","鄉","臨","陸","顧","掉","呀","燈","歲","措","束","耐","劇","玉","趙","跳","哥","季","課","凱","胡","額","款","紹","卷","齊","偉","蒸","殖","永","宗","苗","川","爐","岩","弱","零","楊","奏","沿","露","桿","探","滑","鎮","飯","濃","航","懷","趕","庫","奪","伊","靈","稅","途","滅","賽","歸","召","鼓","播","盤","裁","險","康","唯","錄","菌","純","借","糖","蓋","橫","符","私","努","堂","域","槍","潤","幅","哈","竟","熟","蟲","澤","腦","壤","碳","歐","遍","側","寨","敢","徹","慮","斜","薄","庭","納","彈","飼","伸","折","麥","濕","暗","荷","瓦","塞","床","築","惡","戶","訪","塔","奇","透","梁","刀","旋","跡","卡","氯","遇","份","毒","泥","退","洗","擺","灰","彩","賣","耗","夏","擇","忙","銅","獻","硬","予","繁","圈","雪","函","亦","抽","篇","陣","陰","丁","尺","追","堆","雄","迎","泛","爸","樓","避","謀","噸","野","豬","旗","累","偏","典","館","索","秦","脂","潮","爺","豆","忽","托","驚","塑","遺","愈","朱","替","纖","粗","傾","尚","痛","楚","謝","奮","購","磨","君","池","旁","碎","骨","監","捕","弟","暴","割","貫","殊","釋","詞","亡","壁","頓","寶","午","塵","聞","揭","炮","殘","冬","橋","婦","警","綜","招","吳","付","浮","遭","徐","您","搖","谷","贊","箱","隔","訂","男","吹","園","紛","唐","敗","宋","玻","巨","耕","坦","榮","閉","灣","鍵","凡","駐","鍋","救","恩","剝","凝","鹼","齒","截","煉","麻","紡","禁","廢","盛","版","緩","淨","睛","昌","婚","涉","筒","嘴","插","岸","朗","莊","街","藏","姑","貿","腐","奴","啦","慣","乘","夥","恢","勻","紗","扎","辯","耳","彪","臣","億","璃","抵","脈","秀","薩","俄","網","舞","店","噴","縱","寸","汗","掛","洪","賀","閃","柬","爆","烯","津","稻","牆","軟","勇","像","滾","厘","蒙","芳","肯","坡","柱","盪","腿","儀","旅","尾","軋","冰","貢","登","黎","削","鑽","勒","逃","障","氨","郭","峰","幣","港","伏","軌","畝","畢","擦","莫","刺","浪","秘","援","株","健","售","股","島","甘","泡","睡","童","鑄","湯","閥","休","匯","舍","牧","繞","炸","哲","磷","績","朋","淡","尖","啟","陷","柴","呈","徒","顏","淚","稍","忘","泵","藍","拖","洞","授","鏡","辛","壯","鋒","貧","虛","彎","摩","泰","幼","廷","尊","窗","綱","弄","隸","疑","氏","宮","姐","震","瑞","怪","尤","琴","循","描","膜","違","夾","腰","緣","珠","窮","森","枝","竹","溝","催","繩","憶","邦","剩","幸","漿","欄","擁","牙","貯","禮","濾","鈉","紋","罷","拍","咱","喊","袖","埃","勤","罰","焦","潛","伍","墨","欲","縫","姓","刊","飽","仿","獎","鋁","鬼","麗","跨","默","挖","鏈","掃","喝","袋","炭","污","幕","諸","弧","勵","梅","奶","潔","災","舟","鑑","苯","訟","抱","毀","懂","寒","智","埔","寄","屆","躍","渡","挑","丹","艱","貝","碰","拔","爹","戴","碼","夢","芽","熔","赤","漁","哭","敬","顆","奔","鉛","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","倉","魏","銳","曉","氮","兼","隱","礙","赫","撥","忠","肅","缸","牽","搶","博","巧","殼","兄","杜","訊","誠","碧","祥","柯","頁","巡","矩","悲","灌","齡","倫","票","尋","桂","鋪","聖","恐","恰","鄭","趣","抬","荒","騰","貼","柔","滴","猛","闊","輛","妻","填","撤","儲","簽","鬧","擾","紫","砂","遞","戲","吊","陶","伐","餵","療","瓶","婆","撫","臂","摸","忍","蝦","蠟","鄰","胸","鞏","擠","偶","棄","槽","勁","乳","鄧","吉","仁","爛","磚","租","烏","艦","伴","瓜","淺","丙","暫","燥","橡","柳","迷","暖","牌","秧","膽","詳","簧","踏","瓷","譜","呆","賓","糊","洛","輝","憤","競","隙","怒","粘","乃","緒","肩","籍","敏","塗","熙","皆","偵","懸","掘","享","糾","醒","狂","鎖","淀","恨","牲","霸","爬","賞","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鴨","趨","鳳","晨","畜","輩","秩","卵","署","梯","炎","灘","棋","驅","篩","峽","冒","啥","壽","譯","浸","泉","帽","遲","矽","疆","貸","漏","稿","冠","嫩","脅","芯","牢","叛","蝕","奧","鳴","嶺","羊","憑","串","塘","繪","酵","融","盆","錫","廟","籌","凍","輔","攝","襲","筋","拒","僚","旱","鉀","鳥","漆","沈","眉","疏","添","棒","穗","硝","韓","逼","扭","僑","涼","挺","碗","栽","炒","杯","患","餾","勸","豪","遼","勃","鴻","旦","吏","拜","狗","埋","輥","掩","飲","搬","罵","辭","勾","扣","估","蔣","絨","霧","丈","朵","姆","擬","宇","輯","陝","雕","償","蓄","崇","剪","倡","廳","咬","駛","薯","刷","斥","番","賦","奉","佛","澆","漫","曼","扇","鈣","桃","扶","仔","返","俗","虧","腔","鞋","棱","覆","框","悄","叔","撞","騙","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","脹","諧","拋","黴","桑","崗","嘛","衰","盜","滲","臟","賴","湧","甜","曹","閱","肌","哩","厲","烴","緯","毅","昨","偽","症","煮","嘆","釘","搭","莖","籠","酷","偷","弓","錐","恆","傑","坑","鼻","翼","綸","敘","獄","逮","罐","絡","棚","抑","膨","蔬","寺","驟","穆","冶","枯","冊","屍","凸","紳","坯","犧","焰","轟","欣","晉","瘦","禦","錠","錦","喪","旬","鍛","壟","搜","撲","邀","亭","酯","邁","舒","脆","酶","閒","憂","酚","頑","羽","漲","卸","仗","陪","闢","懲","杭","姚","肚","捉","飄","漂","昆","欺","吾","郎","烷","汁","呵","飾","蕭","雅","郵","遷","燕","撒","姻","赴","宴","煩","債","帳","斑","鈴","旨","醇","董","餅","雛","姿","拌","傅","腹","妥","揉","賢","拆","歪","葡","胺","丟","浩","徽","昂","墊","擋","覽","貪","慰","繳","汪","慌","馮","諾","姜","誼","兇","劣","誣","耀","昏","躺","盈","騎","喬","溪","叢","盧","抹","悶","諮","刮","駕","纜","悟","摘","鉺","擲","頗","幻","柄","惠","慘","佳","仇","臘","窩","滌","劍","瞧","堡","潑","蔥","罩","霍","撈","胎","蒼","濱","倆","捅","湘","砍","霞","邵","萄","瘋","淮","遂","熊","糞","烘","宿","檔","戈","駁","嫂","裕","徙","箭","捐","腸","撐","曬","辨","殿","蓮","攤","攪","醬","屏","疫","哀","蔡","堵","沫","皺","暢","疊","閣","萊","敲","轄","鉤","痕","壩","巷","餓","禍","丘","玄","溜","曰","邏","彭","嘗","卿","妨","艇","吞","韋","怨","矮","歇"]

/***/ }),

/***/ "JzVn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("4quz")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"blue-grey"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Play\n      "),_c('v-icon',[_vm._v("casino")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Sell\n      "),_c('v-icon',[_vm._v("attach_money")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Buy\n      "),_c('v-icon',[_vm._v("add_shopping_cart")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"height":"auto","width":"25%"},attrs:{"src":__webpack_require__("U8Q/")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("This is heavy, Doc!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                  Going straight to the point: Do not expect any commitment from us.\n                  "),_c('br'),_c('br'),_vm._v("\n                  Yeah, that's right. We're here just for the fun!\n                  "),_c('br'),_c('br'),_vm._v("\n                  Please feel home and browse around. You may have great surprises in our lotteries!\n                  "),_c('br'),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('small',[_c('b',[_vm._v("Disclaimer")]),_vm._v(" "),_c('br'),_vm._v("\n                    HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.\n                    "),_c('br'),_vm._v("\n                    By using this application you agree on these terms.\n                  ")])]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"success","disabled":_vm.playLottery},on:{"click":function($event){_vm.playLottery = true; _vm.playUpForGrabs = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("monetization_on")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"warning","disabled":_vm.playUpForGrabs},on:{"click":function($event){_vm.playLottery = false; _vm.playUpForGrabs = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("directions_run")])],1)],1),_vm._v(" "),(_vm.playLottery)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("LOTTERY")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue-grey","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"85px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("owsU")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("BIFP Lottery")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(this.tokenLotteryStatus == 'On')?_c('span',[_vm._v("\n                          Status: "),_c('span',{staticClass:"subheading font-weight-bold green"},[_vm._v("On")])]):_c('span',[_vm._v("\n                          Status: "),_c('span',{staticClass:"subheading font-weight-bold red"},[_vm._v("Off")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Max Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v(_vm._s((Math.round(this.tokenLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" BIFP*")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Bets between "),_c('b',[_vm._v("1 and "+_vm._s(this.tokenLotteryFeeThreshold)+" BIFP")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Lucky number between "),_c('b',[_vm._v("0 and "+_vm._s(this.tokenLotteryPot))])])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue darken-1","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","align-center":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"64px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("aR/i")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("HTMLCoin Lottery")])]),_vm._v(" "),(this.htmlcoinLotteryStatus == 'On')?_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Status: "),_c('span',{staticClass:"subheading font-weight-bold green"},[_vm._v("On")])]):_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Status: "),_c('span',{staticClass:"subheading font-weight-bold red"},[_vm._v("Off")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Max Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v(_vm._s((Math.round(this.htmlcoinLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" HTML*")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Bets between "),_c('b',[_vm._v(_vm._s(this.tokenLotteryFeeThreshold + 1)+" and "+_vm._s(this.htmlcoinLotteryFeeThreshold)+" BIFP")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Lucky number between "),_c('b',[_vm._v("0 and "+_vm._s(this.htmlcoinLotteryPot))])])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-xs-center":""}},[_c('span',{staticClass:"title"},[_vm._v("The more BIFP you bet, the higher is your prize!")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your bet","outline":"","suffix":"BIFP","background-color":"teal darken-4"},model:{value:(_vm.lotteryBet),callback:function ($$v) {_vm.lotteryBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your lucky number","outline":"","background-color":"teal darken-4"},model:{value:(_vm.lotteryLuckyNumber),callback:function ($$v) {_vm.lotteryLuckyNumber=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryLuckyNumber"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.lotteryNotValid},on:{"click":_vm.runLottery}},[_vm._v("I'm feeling lucky!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"caption"},[_vm._v("* Prize pots are subject to constant fluctuation as several players run for the same prize, simultaneously and asynchronously. Such changes may not be reflected on this page.")]),_vm._v(" "),_c('v-spacer')],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.playUpForGrabs)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"display-2 font-weight-light"},[_vm._v("UP FOR GRABS")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"How much to play","outline":"","background-color":"teal darken-4","suffix":"BIFP"},model:{value:(_vm.upForGrabsBet),callback:function ($$v) {_vm.upForGrabsBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"upForGrabsBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.ufgNotValid},on:{"click":_vm.runUpForGrabs}},[_vm._v("The cookie is mine!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Token quantity","outline":"","suffix":"BIFP","background-color":"blue-grey darken-3"},model:{value:(_vm.sellTokenQty),callback:function ($$v) {_vm.sellTokenQty=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellTokenQty"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Price per token","outline":"","suffix":"HTML","background-color":"blue-grey darken-3"},model:{value:(_vm.sellPricePerToken),callback:function ($$v) {_vm.sellPricePerToken=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellPricePerToken"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.sellNotValid},on:{"click":_vm.setSell}},[_vm._v("Put for Sale!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"info","disabled":_vm.buyBank},on:{"click":function($event){_vm.buyBank = true; _vm.buyUsers = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("account_balance")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"error","disabled":_vm.buyUsers},on:{"click":function($event){_vm.buyBank = false; _vm.buyUsers = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("assessment")])],1)],1),_vm._v(" "),(_vm.buyBank)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("FROM BANK")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                          Tokens for sale: "),_c('b',[_vm._v(_vm._s((Math.round(this.bankTokenQuantity * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" BIFP")]),_vm._v(" "),_c('br'),_c('br'),_vm._v("\n                          Price per token: "),_c('b',[_vm._v(_vm._s((Math.round(this.bankPricePerToken * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" HTML")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"subheading"},[_vm._v("\n                          The \"buy from bank\" functionality is not yet implemented on AWP. For more info, please go to "),_c('a',{attrs:{"href":"http://biffytoken.site/BIFP.php","target":"_blank"}},[_vm._v("biffytoken.site")]),_vm._v(".\n                        ")])])],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.buyUsers)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("FROM MARKET")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"subheading"},[_vm._v("\n                          The \"buy from market\" functionality is not yet implemented on AWP. For more info, please go to "),_c('a',{attrs:{"href":"http://biffytoken.site/BIFP.php","target":"_blank"}},[_vm._v("biffytoken.site")]),_vm._v(".\n                        ")])])],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendLotteryDialog),callback:function ($$v) {_vm.confirmSendLotteryDialog=$$v},expression:"confirmSendLotteryDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSendLottery}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendLotteryDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txLotteryReceiptDialog),callback:function ($$v) {_vm.txLotteryReceiptDialog=$$v},expression:"txLotteryReceiptDialog"}},[_c('v-card',{attrs:{"color":"blue-grey lighten-5"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingLotteryTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n              Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n            ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n            Awaiting confirmation from the network...\n          ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"blue"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p',[_vm._v("\n                Unsuccessful\n              ")]),_vm._v(" "),_c('p',[_vm._v(" \n                There was an error while running your transaction.\n              ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":_vm.closeDialog}},[_vm._v("\n              Close\n            ")])],1)],1):_vm._e(),_vm._v(" "),(this.txLotteryConfirmed)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[(this.lotteryWin)?_c('v-flex',{attrs:{"xs12":""}},[(this.lotteryType != 'UFG')?_c('span',[_c('img',{attrs:{"src":__webpack_require__("+D9K")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold"},[_vm._v("\n                You have just won "+_vm._s(this.lotteryRewardAmount)+" "+_vm._s(this.lotteryType)+"!\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Are you sure you haven't seen any almanac around?\n              ")])]):_c('span',[_c('img',{attrs:{"src":__webpack_require__("gj2+")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"title"},[_vm._v("\n                Well, well... We have here the fastest draw in the west.\n              ")]),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold"},[_vm._v("\n                You have just won "+_vm._s(this.lotteryRewardAmount)+" BIFP!\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Now get outta here, or I'll hunt you down and shoot you like a duck!\n              ")])])]):_c('v-flex',{attrs:{"xs12":""}},[(this.lotteryType != 'UFG')?_c('span',[_c('img',{attrs:{"src":__webpack_require__("t7Gd")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold orange--text"},[_vm._v("\n                Not this time, McFly...\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Your \"lucky\" number was "),_c('b',[_vm._v(_vm._s(this.lotteryLuckyNumber))]),_vm._v(", but the drawn number was "),_c('b',[_vm._v(_vm._s(this.drawnNumber))]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                So why don't you make like a tree... and get outta here?!\n              ")])]):_c('span',[_c('img',{attrs:{"src":__webpack_require__("AbdW")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold orange--text"},[_vm._v("\n                Not this time, Mr. Eastwood...\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Some other punk has been quicker than you.\n                "),_c('br'),_vm._v("\n                Next time try seven o'clock. I do my killin' before breakfast!\n              ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"grey--text",attrs:{"flat":""},on:{"click":_vm.closeDialog}},[_vm._v("\n              Close\n            ")])],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"blue","dark":""}},[_c('v-card-text',[_c('b',[_vm._v("Loading info...")]),_vm._v(" "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "K8qq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KJOx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__ = __webpack_require__("MSCV");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var loadConfig = {
  lan: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getLan(),
  network: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getNetwork(),
  mode: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getMode()
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      lan: loadConfig.lan,
      lanSelect: [
      // { value: 'zh', text: '中文'},
      // { value: 'ko', text: '한글'}
      // { value: 'es', text: 'Español'},
      { value: 'en', text: 'English' }],
      network: loadConfig.network,
      networkSelect: [{ value: 'testnet', text: this.$t('common.testnet') }, { value: 'mainnet', text: this.$t('common.mainnet') }],
      mode: loadConfig.mode,
      modeSelect: [{ value: 'normal', text: this.$t('common.mode.normal') }, { value: 'offline', text: this.$t('common.mode.offline') }]
    };
  },

  components: {
    fileCreator: __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__["a" /* default */]
  },
  computed: {
    fileStr: function fileStr() {
      return 'data:text/plain,' + this.$root.log.exportToArray().join("\n");
    }
  },
  methods: {
    save: function save() {
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('lan', this.lan);
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('network', this.network);
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('mode', this.mode);
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "KSlh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("pEtf");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3040a1f9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("Ln/K");
function injectStyle (ssrContext) {
  __webpack_require__("NOWH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3040a1f9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KUFz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__("TXmL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_locales__ = __webpack_require__("qoVm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
  locale: __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getLan(),
  fallbackLocale: 'en',
  messages: __WEBPACK_IMPORTED_MODULE_2_locales__["a" /* default */].messages
}));

/***/ }),

/***/ "KuJL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      infoLabel: [{ label: 'address', name: 'address', copy: true }, { label: 'balance', name: 'balance' }, { label: 'unconfirmed_balance', name: 'unconfirmedBalance' }],
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      showPriv: false
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.wallet.setInfo();
    }
  },
  computed: {
    info: function info() {
      return this.wallet.info;
    },
    privKey: function privKey() {
      return this.wallet.getPrivKey();
    }
  },
  methods: {
    onCopySucc: function onCopySucc() {
      this.$root.success('Copied to clipboard!');
    },
    onCopyError: function onCopyError() {
      this.$root.error('Failed to copy!');
    },
    refreshWallet: function refreshWallet() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.wallet.setInfo();
                _this.wallet.setHrc20();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ "L5P4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__ = __webpack_require__("+Udk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      address: '',
      amount: '',
      symbol: 'HTML',
      tokens: [],
      addTokenStep: 1,
      addTokenDialog: false,
      addTokenLoading: false,
      addTokenName: '',
      addTokenSymbol: '',
      addTokenAddress: '',
      addTokenDecimals: 8,
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmAddressDialog: false,
      repeatAddress: '',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var amountCheck = /^\d+\.?\d*$/.test(this.amount) && this.amount > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(amountCheck && feeCheck);
    }
  },
  methods: {
    send: function send() {
      this.confirmAddressDialog = true;
      this.canSend = false;
    },
    confirmAddress: function confirmAddress() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wallet, token, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.address !== _this.repeatAddress)) {
                  _context.next = 3;
                  break;
                }

                _this.$root.error('address_is_not_same_as_the_old_one');
                return _context.abrupt('return', false);

              case 3:
                _this.confirmAddressDialog = false;
                _this.confirmSendDialog = true;
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();
                _context.prev = 6;

                if (!(_this.symbol == 'HTML')) {
                  _context.next = 14;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                _context.next = 11;
                return wallet.generateTx(_this.address, _this.amount, _this.fee);

              case 11:
                _this.rawTx = _context.sent;
                _context.next = 21;
                break;

              case 14:
                if (!__WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].checkSymbol(_this.symbol)) {
                  _context.next = 21;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                token = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenBySymbol(_this.symbol);
                encodedData = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].encodeSendData(token, _this.address, _this.amount);
                _context.next = 20;
                return wallet.generateSendToContractTx(token.address, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 20:
                _this.rawTx = _context.sent;

              case 21:
                _this.canSend = true;
                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](6);

                alert(_context.t0.message || _context.t0);
                _this.$root.log.error('send_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[6, 24]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                _this2.$root.success('Successful send. You can view at ' + __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId));
                _this2.$emit('send');
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 11]]);
      }))();
    },
    searchAddToken: function searchAddToken() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var tokenInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.addTokenLoading = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].fetchTokenInfo(_this3.addTokenAddress);

              case 4:
                tokenInfo = _context3.sent;

                _this3.addTokenName = tokenInfo.name;
                _this3.addTokenSymbol = tokenInfo.symbol;
                _this3.addTokenDecimals = tokenInfo.decimals;
                _context3.next = 15;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                _this3.addTokenLoading = false;
                if (_context3.t0.response.status === 404) {
                  _this3.$root.error('token_contract_address_is_not_exists');
                  _this3.$root.log.error('token_contract_address_is_not_exists', _this3.addTokenAddress);
                } else {
                  alert(_context3.t0.message || _context3.t0);
                  _this3.addTokenDialog = false;
                }
                return _context3.abrupt('return', false);

              case 15:
                _this3.addTokenLoading = false;
                _this3.addTokenStep = 2;

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 10]]);
      }))();
    },
    confirmAddToken: function confirmAddToken() {
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].addCustomToken(this.addTokenAddress, this.addTokenName, this.addTokenSymbol, this.addTokenDecimals);
      this.initTokens();
      this.symbol = this.addTokenSymbol;
      this.addTokenStep = 1;
      this.addTokenDialog = false;
      this.addTokenAddress = '';
    },
    initTokens: function initTokens() {
      var tokenList = [{ text: 'HTML', value: 'HTML' }];
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenList().forEach(function (token) {
        tokenList[tokenList.length] = {
          text: token.symbol,
          value: token.symbol,
          name: token.name,
          address: token.address
        };
      });
      //tokenList[tokenList.length] = { text: 'More...', value: 'more' }
      // commented line by aperez 31-aug-2021
      // supressing this option avoids all behaviour from add a new Token,
      // and prevents issues when adding predefined tokens from "token.json"
      // as the code might be intertwined for the two use cases
      this.tokens = tokenList;
    }
  },
  mounted: function mounted() {
    this.initTokens();
  },

  watch: {
    'symbol': function symbol(to, from) {
      var _this4 = this;

      if (from === 'more') return true;
      if (to === 'more') {
        this.$nextTick(function () {
          _this4.symbol = from;
          _this4.addTokenDialog = true;
        });
      }
    }
  }
});

/***/ }),

/***/ "LUta":
/***/ (function(module, exports) {

module.exports = ["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]

/***/ }),

/***/ "LVcC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    search: 'Search',
    copy: 'COPY',
    next: 'NEXT',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Htmlcoin Mainnet',
    menu: {
      create: 'GENERATE NEW WALLET',
      create_from_mnemonic: 'CREATE FROM MNEMONIC',
      restore_from_mnemonic: 'RESTORE FROM MNEMONIC',
      restore_from_wif: 'RESTORE FROM WIF PRIVATE KEY',
      restore_from_mobile: 'RESTORE FROM MOBILE WALLET',
      restore_from_key_file: 'RESTORE WALLET FROM KEY FILE',
      restore_from_ledger: 'RESTORE FROM LEDGER',
      view: 'WALLET INFO',
      dump_as_key_file: 'DUMP AS A KEY FILE',
      transactions: 'WALLET TRANSACTIONS',
      safe_send: 'SAFE SEND',
      send: 'SEND',
      request_payment: 'REQUEST PAYMENT',
      create_contract: 'CREATE CONTRACT',
      send_to_contract: 'SEND TO CONTRACT',
      call_contract: 'CALL CONTRACT',
      settings: 'SETTINGS',
      create_token: 'TokenFarm',
      dapp_myoffspring: 'MyOffspring'
    },
    info: {
      address: 'Address',
      balance: 'Balance',
      unconfirmed_balance: 'Unconfirmed Balance',
      priv_key: 'Private Key'
    },
    notify: {
      success: 'Success',
      fail: 'Failed',
      copy: 'Copy',
      password: 'Password',
      is_required: 'is required',
      parse: 'Parse',
      file: 'File',
      password_is_not_same_as_the_old_one: 'Password is not the same as the old one.',
      mnemonics_are_not_same_as_the_words_should_remember: 'The mnemonics are not same as the words you should remember.',
      mnemonics_can_not_restore: 'Those mnemonics can not restore a wallet! Please check and try again.',
      address_is_not_same_as_the_old_one: 'This address is not the same as the old one.',
      from_address_is_not_same_as_the_wallet: 'The from address is not same as the wallet address.',
      restore_wif_fail: 'Cannot restore a wallet from this WIF.',
      the_key_file_is_not_a_valid_format: 'The key file is not in a valid format.',
      restore_key_file_fail: 'Restore from key file failed. Maybe the password is not correct.',
      connect_ledger_fail: 'Fail to connect to Ledger. Please reconnect your ledger and try again.',
      token_contract_address_is_not_exists: 'Token contract address does not exist! Please confirm and try again.'
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline'
    }
  },
  mnemonic: {
    input_words: 'Please input the mnemonic words',
    label: 'M'
  },
  password: {
    enter: 'Please enter you password',
    password: 'password'
  },
  file_reader: {
    upload: 'Upload'
  },
  file_creator: {
    download: 'Please click on the button below to download your key file.'
  },
  ledger: {
    comm_fail: 'Fail to connect Ledger. Please reconnect your ledger and try again.'
  },
  derive_path: {
    title: 'Please choose a derive path',
    default: 'Default path',
    add_custom: 'Add custom derive path',
    edit_custom: 'Edit custom derive path',
    del_custom: 'Do you confirm to delete this path?',
    path_name: 'Path name',
    path: 'Path',
    prev_10: 'Prev 10 Address',
    next_10: 'Next 10 Address'
  },
  safe_send: {
    title: 'SAFE SEND',
    from_address: 'From Address',
    to_address: 'To Address',
    amount: 'Amount',
    fee: 'Fee',
    info: 'You need two computers (one online and one offline) and a removeable storage device to finish a safe-send. If you follow the tips below, you will not risk leaking your private key. For the offline computer, please in "Settings"-"Mode" choose "offline", and then restore your wallet.',
    info1_online: 'Please finish the form, then save the file and copy to the offline computer. And the finish step 2 on the offline computer',
    info1_offline: 'Please finish step 1 on the online computer and copy the file from online computer and then go to step 2',
    info2_online: 'Please finish this step on offline computer, and copy the file from offline computer and then go to step 3',
    info2_offline: 'Please upload the file copy from online computer, and finish the signature, and then save the file and copy back to online computer',
    info3_online: 'Please upload the file from the offline computer, and then finish the safe-send',
    info3_offline: 'Please finish this step on the online computer'
  },
  send: {
    send_tokens: 'SEND',
    enter_address: 'Please enter the address again',
    going_to_send: 'Do you confirm sending ',
    to_address: 'to address ',
    token_address: 'Token Contract Address'
  },
  request_payment: {
    title: 'REQUEST PAYMENT'
  },
  create_token: {
    title: 'CREATE TOKEN',
    name: 'Token Name',
    symbol: 'Token Symbol',
    decimal: 'Decimals (It\'s recommended to set decimals to 8)',
    total_supply: 'Total Supply (UNIT: 1 Token)',
    confirm: 'Do you confirm the creation of this Token?'
  },
  create_contract: {
    title: 'CREATE CONTRACT',
    confirm: 'Do you confirm to publish this contract?',
    compiler: 'Compiler'
  },
  send_to_contract: {
    title: 'SEND TO CONTRACT',
    confirm: 'Do you confirm?'
  },
  call_contract: {
    title: 'CALL CONTRACT',
    result: 'Result'
  },
  create: {
    title: 'GENERATE NEW WALLET'
  },
  create_mnemonic: {
    title: 'GENERATE NEW WALLET FROM MNEMONIC',
    remember: 'Please remember the following mnemonics:',
    remembered: 'I remember it. Let\'s check!'
  },
  restore: {
    title: 'RESTORE WALLET FROM MNEMONIC',
    mnemonic_warning: 'The input words are not bip39 mnemonics. If your address is generated by this wallet, please cancel this dialog and then check your words (no spaces, no capital letters, etc.). If you have double checked your words, you can continue.'
  },
  restore_wif: {
    title: 'RESTORE WALLET FROM WIF PRIVATE KEY',
    priv_key: 'PRIVATE KEY'
  },
  restore_mobile: {
    title: 'RESTORE FROM MOBILE WALLET'
  },
  restore_key_file: {
    title: 'RESTORE WALLET FROM THE KEY FILE',
    password_title: 'Please input you password to decrypt the wallet'
  },
  restore_ledger: {
    title: 'RESTORE FROM LEDGER',
    usage: 'Please ensure your firmware and app are the newest version. Plugin your Ledger, open Html APP, and then click the "CONNECT" button below try to connect.',
    download: 'No Html APP? Please install it follow this https://www.ledgerwallet.com/apps/manager',
    connect: 'CONNECT'
  },
  view: {
    title: 'WALLET INFO'
  },
  view_tx: {
    title: 'WALLET TRANSACTIONS',
    recent: 'Most recent 10 txs',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: 'FEE: ',
    total_out: 'TOTAL OUT: '
  },
  dump_as_key_file: {
    title: 'DUMP AS A KEY FILE',
    password_title: 'Please input a password to encrypt your key file:',
    warning: 'Please remember the password. If you lose it, the key file cannot be decrypted anymore.'
  },
  config: {
    title: 'SETTINGS',
    lan: 'Language',
    network: 'Network',
    mode: 'Mode'
  },
  warning: {
    title: 'IMPORTANT',
    list: ['We cannot recover your funds if you visit a phishing site or lose your backups. Please make sure to keep backups of your private keys/seed words safe.', 'We do not store your private keys and/or seed words on this web wallet.', 'We are not responsible for any lost funds or damages related to the use of this platform.', 'You as a user, are entirely responsible for your funds and your own security.', 'Please make sure to utilize updated operating systems and antivirus programs/services.', 'Please keep your private keys PRIVATE, do not provide them to anyone.', 'If you use Restore from Mnemonic, the seed words and password must be exactly right or the wallet will create a new address. When using Restore from Mnemonic, confirm you have the correct address.']
  }
});

/***/ }),

/***/ "Ln/K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs10":"","offset-xs1":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":"","fill-height":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('card',[_c('span',{staticClass:"subheading"},[_c('p',[_vm._v("\n                  This is a testing environment for individual dapps for the HEXALAND project\n                ")]),_vm._v(" "),_c('div',{attrs:{"align":"center"}},[_c('iframe',{staticStyle:{"height":"31vw","width":"60vw"},attrs:{"src":"https://minex3d.com/sponsored/fallworld_europe.html","scrolling":"no"}})]),_vm._v(" "),_c('p',[_vm._v("\n                 Mineral Exploration 3D, has set to build Dapps and badge tokens that can be sampled at "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://explorer.htmlcoin.com/token/18c697da30aaea24cbc57433141e7f325c5b5ea8","target":"_blank"}},[_c('b',[_vm._v("ALTHASH Blockchain"),_c('b')])]),_vm._v(", aiming at creating "),_c('b',[_vm._v("an living ecosystem")]),_vm._v(" for the Play to Earn paradigm.\n                ")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"cyan darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n                COMMUNITY DAPP\n              ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("gfSB")},on:{"click":function($event){_vm.openDapp('dapp_biffyplutonium')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"light-blue darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n                ALTHASH DAPP\n              ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("RLpJ")},on:{"click":function($event){_vm.openDapp('dapp_myoffspring')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"body-2 grey--text"},[_vm._v("\n              All HEXALAND "),_c('b',[_vm._v("Tokens")]),_vm._v(" and "),_c('b',[_vm._v("D-Apps")]),_vm._v(" rely on "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://htmlcoin.com","target":"_blank"}},[_c('b',[_vm._v("HTMLCOIN"),_c('b')])]),_vm._v(" cryptocurrency as GAS for its Operation.\n            ")])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_032f6220_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("kGMh");
function injectStyle (ssrContext) {
  __webpack_require__("++LV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_032f6220_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MSCV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileCreator_vue__ = __webpack_require__("Phfv");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6182b88c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__ = __webpack_require__("yjfn");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileCreator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6182b88c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Miy5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/actormove_menu_btn.a938249.png";

/***/ }),

/***/ "N2nY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// aperez 27Sep2021
// pending hacer funcion general que recibe un HEX y los decodifica y prueba si es
// un número, si no lo es repite la operacion usando hex_to_ascii(...)
function hex_to_ascii(hexString) {
  // aperez 27Sep2021
  var hex = hexString.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  // pendiente trim/suprimir simbolos no ascii y espacios
  return str;
}

// aperez 07Nov2022
var contractAddress = "f24f7456aa7ee076db4339a00d5c523a3360b30e"; // test Actor Dapp contract
var abiJson = JSON.parse('[{	"constant": true,	"inputs": [{"name": "unit_Id","type": "uint32"}],"name": "getLocationFor","outputs": [{"name": "tile_location_hex_Id","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "unit_Id","type": "uint32"}],"name": "get_nameby","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]');
// the above is a "call contract" ABI

// aperez 27Sep2021 - ABI parsing
var parsedAbi = [];
for (var i = 0; i < abiJson.length; i++) {
  parsedAbi[i] = { text: abiJson[i]['name'], value: i, info: abiJson[i] };
} // en of aperez code segment 27Sep2021

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: contractAddress, // modified from inlined default to passing param from above - aperez 27Sep2021
      abi: __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a, // modified from inlined default to passing param from above - aperez 27Sep2021
      parsedAbi: parsedAbi, // modified from inlined default to passing param from above - aperez 27Sep2021
      method: null,
      inputParams: [],
      execResultDialog: false,
      result: 'loading...'
    };
  },

  computed: {
    params: function params() {
      if (this.method === null) {
        return null;
      }
      var inputs = this.parsedAbi[this.method].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    notValid: function notValid() {
      //@todo valid the address
      return !(this.method !== null);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    decodeAbi: function decodeAbi() {
      // this function is ommited ... not called by commented @input="decodeAbi" in page form - aperez 08Nov2022
      try {
        var _abiJson = JSON.parse(this.abi);
        this.parsedAbi = [];
        for (var _i = 0; _i < _abiJson.length; _i++) {
          this.parsedAbi[_i] = { text: _abiJson[_i]['name'], value: _i, info: _abiJson[_i] };
        }
      } catch (e) {
        this.$root.log.error('call_contract_decode_abi_error', e.stack || e.toString() || e);
        return true;
      }
    },
    callTo: function callTo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData, hexResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(_this.parsedAbi[_this.method].info, _this.inputParams).substr(2);

                _this.execResultDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(_this.contractAddress, encodedData);

              case 6:
                hexResult = _context.sent;

                _this.result = hex_to_ascii(hexResult); // aperez 27Sep2021
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](3);

                _this.$root.log.error('call_contract_call_contract_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.execResultDialog = false;

              case 15:
                _context.next = 22;
                break;

              case 17:
                _context.prev = 17;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                _this.$root.log.error('call_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                return _context.abrupt('return', false);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 17], [3, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "NE1V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("settings")]),_vm._v("\n      "+_vm._s(_vm.$t('config.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.lan')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.lanSelect,"label":_vm.$t('config.lan'),"single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.lan),callback:function ($$v) {_vm.lan=$$v},expression:"lan"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v("LOG")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('file-creator',{attrs:{"color":"red","href":_vm.fileStr}},[_vm._v("DOWNLOAD LOGS")])],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"info",on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_vuetify__ = __webpack_require__("8kY9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_clipboard2__ = __webpack_require__("wvfG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__ = __webpack_require__("7zck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css__ = __webpack_require__("5NZv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_clipboard2___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](__WEBPACK_IMPORTED_MODULE_4_App__["a" /* default */]).$mount('#app');

/***/ }),

/***/ "NOWH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NysP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("U877");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fca96082_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("PosZ");
function injectStyle (ssrContext) {
  __webpack_require__("7/GG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fca96082"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fca96082_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "PDVb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},_vm._l((_vm.length),function(i){return _c('v-flex',{key:i,attrs:{"xs2":""}},[_c('v-text-field',{ref:"mnemonicInput",refInFor:true,attrs:{"label":_vm.$t('mnemonic.label') + i,"type":"text"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.tryInputMnemonicWords($event)},"focus":function($event){_vm.focus(i - 1)}},model:{value:(_vm.mnemonic[i - 1]),callback:function ($$v) {_vm.$set(_vm.mnemonic, i - 1, $$v)},expression:"mnemonic[i - 1]"}})],1)}))],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","dark":"","disabled":_vm.notFinishInput},on:{"click":_vm.inputMnemonicWords}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Phfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    downloadName: function downloadName() {
      return this.download ? this.download : new Date().getTime();
    }
  },
  methods: {
    doneClick: function doneClick() {
      this.$emit('click');
    }
  },
  props: ['color', 'download', 'href']
});

/***/ }),

/***/ "PosZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("RLpJ")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"teal"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      New\n      "),_c('v-icon',[_vm._v("child_care")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Check\n      "),_c('v-icon',[_vm._v("search")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"width":"50%","height":"auto"},attrs:{"src":__webpack_require__("TGXn")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to MyOffspring!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This application allows you to register your children and create a Birth Certificate for them in the "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain.\n                    "),_c('br'),_c('br'),_vm._v("\n                    To create a new record, just click on \"New\" menu item, and fill in the details about the birth of your heir.\n                    "),_c('br'),_c('br'),_vm._v(" "),_c('b',[_vm._v("Take note of the hash code generated, as it will be the unique identifier for the birth registration.")]),_vm._v(" "),_c('br'),_c('br'),_vm._v("\n                    Once the transaction is confirmed, the registration is complete and you can verify it through the menu item \"Check\".\n                    "),_c('br'),_c('br'),_vm._v("\n                    MyOffspring was developed based on suggestions given by our Communities Manager, "),_c('b',[_vm._v("Heitor Guimarães")]),_vm._v(", supported by the Community member "),_c('b',[_vm._v("Karol Pyla")]),_vm._v(", who wanted to register his son, "),_c('b',[_vm._v("Julek")]),_vm._v(", on AltHash blockchain. The HTMLCOIN Foundation is glad to have the support of such smart and dedicated people. Thank you!\n                  ")]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Full Name","required":"","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fullName),callback:function ($$v) {_vm.fullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Mother's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.motherFullName),callback:function ($$v) {_vm.motherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"motherFullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Father's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fatherFullName),callback:function ($$v) {_vm.fatherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fatherFullName"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"dateOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:(_vm.dateOfBirth_menu),callback:function ($$v) {_vm.dateOfBirth_menu=$$v},expression:"dateOfBirth_menu"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Date of Birth","prepend-icon":"event","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}}),_vm._v(" "),_c('v-date-picker',{ref:"picker",attrs:{"max":new Date().toISOString().substr(0, 10),"min":"1900-01-01"},on:{"change":_vm.dateOfBirth_save},model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"timeOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"return-value":_vm.timeOfBirth,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function($event){_vm.timeOfBirth=$event}},model:{value:(_vm.timePicker),callback:function ($$v) {_vm.timePicker=$$v},expression:"timePicker"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Time of Birth","prepend-icon":"access_time","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}),_vm._v(" "),(_vm.timePicker)?_c('v-time-picker',{attrs:{"full-width":"","format":"24hr"},on:{"change":_vm.timeOfBirth_save},model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Place of Birth (Facility, City, State/Province, Country)","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.placeOfBirth),callback:function ($$v) {_vm.placeOfBirth=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"placeOfBirth"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                  "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n                  ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v("Please store the ID below in a safe place, as it is the unique ID for this Birth registration.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{attrs:{"label":"Hash ID","disabled":""},model:{value:(_vm.hashID),callback:function ($$v) {_vm.hashID=$$v},expression:"hashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.hashID),expression:"hashID",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n                          "+_vm._s(_vm.$t('common.copy'))+"\n                        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{staticClass:"mx-3",attrs:{"label":"Hash ID","append-icon":"search","outline":"","background-color":"teal"},on:{"click:append":_vm.openCertificate},model:{value:(_vm.searchHashID),callback:function ($$v) {_vm.searchHashID=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"searchHashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("igel")},on:{"click":_vm.scanQrcode}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"width":"600px"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('span',{attrs:{"id":"certificate"}},[_c('v-card',{staticClass:"modal-detail"},[_c('v-card-text',[_c('v-container',{attrs:{"align-center":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo1",attrs:{"src":__webpack_require__("RLpJ")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo2",attrs:{"src":__webpack_require__("2Gzf")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-md-center":""}},[_c('span',{staticClass:"font-weight-medium my-2 headline font-bold",attrs:{"id":"title"}},[_vm._v("\n                  Digital Birth Certificate\n                ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p'),_vm._v(" "),_c('p',[_c('b',[_vm._v("Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Mother's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultMotherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Father's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFatherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Date of Birth:")]),_vm._v(" "+_vm._s(_vm.resultDateOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Time of Birth:")]),_vm._v(" "+_vm._s(_vm.resultTimeOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Place of Birth:")]),_vm._v(" "+_vm._s(_vm.resultPlaceOfBirth)+"\n                ")]),_vm._v(" "),_c('p',{staticClass:"text-xs-center"},[_c('span',{staticClass:"caption",attrs:{"id":"certificate_id"}},[_vm._v("Hash ID: "+_vm._s(_vm.searchHashID))]),_vm._v(" "),_c('img',{staticClass:"qr",attrs:{"src":_vm.qr,"id":"qr"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","id":"btn"},on:{"click":_vm.print}},[_c('v-icon',[_vm._v("print")])],1)],1)])],1)],1)],1)],1)],1)]),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"50%"},model:{value:(_vm.qrScan),callback:function ($$v) {_vm.qrScan=$$v},expression:"qrScan"}},[_c('v-container',[_c('v-layout',[_c('v-flex',{attrs:{"xs12":"","align-center":"","text-xs-center":""}},[(_vm.qrComponent)?_c('qrcode-stream',{attrs:{"track":false,"camera":_vm.camera},on:{"decode":_vm.onDecode,"init":_vm.onInit}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"teal","dark":""}},[_c('v-card-text',[_vm._v("\n        Please stand by\n        "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "QSGr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notify_vue__ = __webpack_require__("ZMJ6");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a622372_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notify_vue__ = __webpack_require__("kuet");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a622372_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notify_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "R9Gm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wif: ''
    };
  },

  methods: {
    restore: function restore() {
      try {
        __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__["a" /* default */].restoreFromWif(this.wif);
      } catch (e) {
        this.$root.error('restore_wif_fail');
        this.$root.log.error('restore_wif_restore_error', e.stack || e.toString() || e);
        return false;
      }
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "RLpJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/myoffspring_logo.597770f.png";

/***/ }),

/***/ "Rapo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ViewTx_vue__ = __webpack_require__("HWGS");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4158d916_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__ = __webpack_require__("qoEf");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ViewTx_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4158d916_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Rz30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58__ = __webpack_require__("ZDUk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bs58__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_js_sha256__ = __webpack_require__("BUS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_js_sha256__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var contractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "6de5afa19ca3e23987abccbe1a8498740c0fedd0" : "9aedd68bb2635995097627331b49c473136343cb";

var abiJson = JSON.parse('[{"constant": false, "inputs": [{"name": "new_j", "type": "address"} ], "name": "change_j", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getCuts", "outputs": [{"name": "BiffCutSetting", "type": "uint256"}, {"name": "JCutSetting", "type": "uint256"}, {"name": "PCutSetting", "type": "uint256"}, {"name": "NCutSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"} ], "name": "feeTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_n", "type": "address"} ], "name": "change_n", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_buyTokensFrom", "outputs": [{"name": "numOfTokensPurchased", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_whatsForSale", "outputs": [{"name": "numTokensBeingSold", "type": "uint256"}, {"name": "priceOfEachToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_j", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "lotteryID", "type": "string"} ], "name": "checkLotteryResults", "outputs": [{"name": "_player", "type": "address"}, {"name": "_lotteryType", "type": "uint8"}, {"name": "_playedAmount", "type": "uint256"}, {"name": "_luckyNumber", "type": "uint256"}, {"name": "_drawnNumber", "type": "uint256"}, {"name": "_win", "type": "bool"}, {"name": "_rewardAmount", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "who", "type": "uint256"}, {"name": "fakeAmount", "type": "uint256"} ], "name": "BIFP_testFeeAndCuts", "outputs": [{"name": "feeCollected", "type": "uint256"}, {"name": "biffGot", "type": "uint256"}, {"name": "jGot", "type": "uint256"}, {"name": "pGot", "type": "uint256"}, {"name": "nGot", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "player", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "feeBalances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_upForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "b", "type": "uint256"}, {"name": "j", "type": "uint256"}, {"name": "p", "type": "uint256"}, {"name": "n", "type": "uint256"} ], "name": "BIFP_setFeeCuts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "feeWithdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerIsOwnerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchTokenLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "tokensForSale", "outputs": [{"name": "numTokensForSale", "type": "uint256"}, {"name": "pricePerToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "confirmOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_p", "type": "address"} ], "name": "change_p", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "potentialOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "prizeName", "type": "string"} ], "name": "getPrizeBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "BIFP_addToTokenPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "prizeName", "type": "string"}, {"name": "newAmount", "type": "uint256"} ], "name": "setPrizeBalance", "outputs": [{"name": "prizePrevBalance", "type": "uint256"}, {"name": "prizeNewBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_addToHtmlPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getFees", "outputs": [{"name": "feeOwnerSetting", "type": "uint256"}, {"name": "feeSellerSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "amount", "type": "uint256"} ], "name": "BIFP_loadUpForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchHtmlcoinLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_n", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "luckyNumber", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_playLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "quantity", "type": "uint256"}, {"name": "htmlPrice", "type": "uint256"} ], "name": "BIFP_setSell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "get_p", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]');
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userTokenBalance: '0',
      loading: false,
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      active: 0,
      buyBank: true,
      buyUsers: false,
      playLottery: true,
      playUpForGrabs: false,
      checkLotteryResults: false,
      checkBuyResults: false,
      lotteryBet: '',
      lotteryLuckyNumber: '',
      lotteryID: '',
      lotteryWin: false,
      drawnNumber: '',
      lotteryRewardAmount: '',
      lotteryType: '',
      tokenLotteryStatus: '',
      htmlcoinLotteryStatus: '',
      tokenLotteryPrize: '',
      htmlcoinLotteryPrize: '',
      tokenLotteryFeeThreshold: 0,
      htmlcoinLotteryFeeThreshold: 0,
      tokenLotteryPot: 0,
      htmlcoinLotteryPot: 0,
      upForGrabsBet: '',
      buyFromBankAmount: '',
      bankPricePerToken: '',
      bankTokenQuantity: '',
      txLotteryReceiptDialog: false,
      txBuyReceiptDialog: false,
      awaitingLotteryTx: false,
      awaitingBuyTx: false,
      txError: false,
      txLotteryConfirmed: false,
      txBuyConfirmed: false,
      sellPricePerToken: '',
      sellTokenQty: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendLotteryDialog: false,
      confirmSendBuyDialog: false,
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    lotteryNotValid: function lotteryNotValid() {
      return !(/^[0-9]+$/.test(this.lotteryBet) && /^[0-9]+$/.test(this.lotteryLuckyNumber));
    },
    ufgNotValid: function ufgNotValid() {
      return !/^[0-9]+$/.test(this.upForGrabsBet);
    },
    sellNotValid: function sellNotValid() {
      return !(/^[0-9]+$/.test(this.sellPricePerToken) && /^[0-9]+$/.test(this.sellTokenQty));
    }
  },
  watch: {
    checkLotteryResults: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(val) {
        var decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 29;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.callContractFunction(contractAddress, abiJson, 'checkLotteryResults', [this.lotteryID]);

              case 4:
                decodedResult = _context.sent;


                this.drawnNumber = decodedResult[4].toString();

                if (!(decodedResult[5].toString() == 'true')) {
                  _context.next = 20;
                  break;
                }

                this.lotteryRewardAmount = parseInt(decodedResult[6]) / 100000000;
                _context.t0 = decodedResult[1].toString();
                _context.next = _context.t0 === '1' ? 11 : _context.t0 === '2' ? 13 : _context.t0 === '3' ? 15 : 17;
                break;

              case 11:
                this.lotteryType = 'BIFP';
                return _context.abrupt('break', 17);

              case 13:
                this.lotteryType = 'HTML';
                return _context.abrupt('break', 17);

              case 15:
                this.lotteryType = 'UFG';
                return _context.abrupt('break', 17);

              case 17:

                this.lotteryWin = true;
                _context.next = 21;
                break;

              case 20:
                this.lotteryWin = false;

              case 21:

                this.checkLotteryResults = false;
                this.txLotteryConfirmed = true;

                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t1 = _context['catch'](1);

                this.$root.log.error('call_contract_call_contract_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                alert(_context.t1.message || _context.t1);

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 25]]);
      }));

      function checkLotteryResults(_x) {
        return _ref.apply(this, arguments);
      }

      return checkLotteryResults;
    }()
  },
  methods: {
    closeDialog: function closeDialog() {
      this.txLotteryConfirmed = false;
      this.txLotteryReceiptDialog = false;
      this.txError = false;
      this.getData();
    },
    runLottery: function runLottery() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var playedAmount, encodedData, htmlcoinLowerFeeThreshold;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(parseInt(_this.userTokenBalance) >= parseInt(_this.lotteryBet))) {
                  _context2.next = 38;
                  break;
                }

                if (!(parseInt(_this.lotteryLuckyNumber) >= 0 && parseInt(_this.lotteryBet) > 0)) {
                  _context2.next = 35;
                  break;
                }

                if (!(parseInt(_this.lotteryBet) <= _this.tokenLotteryFeeThreshold && parseInt(_this.lotteryLuckyNumber) <= _this.tokenLotteryPot || parseInt(_this.lotteryBet) > _this.tokenLotteryFeeThreshold && parseInt(_this.lotteryBet) <= _this.htmlcoinLotteryFeeThreshold && parseInt(_this.lotteryLuckyNumber) <= _this.htmlcoinLotteryPot)) {
                  _context2.next = 31;
                  break;
                }

                _context2.prev = 3;


                _this.lotteryID = __WEBPACK_IMPORTED_MODULE_8_js_sha256___default()(_this.wallet.info.address + Date.now());

                playedAmount = _this.lotteryBet * 100000000;
                encodedData = _this.encodeContractSendFunction(abiJson, 'BIFP_playLottery', [playedAmount, _this.lotteryLuckyNumber, _this.lotteryID]);


                _this.confirmSendLotteryDialog = true;

                _context2.prev = 8;
                _context2.next = 11;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 11:
                _this.rawTx = _context2.sent;
                _context2.next = 20;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](8);

                _this.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this.confirmSendLotteryDialog = false;
                return _context2.abrupt('return', false);

              case 20:
                _this.canSend = true;
                _context2.next = 29;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t1 = _context2['catch'](3);

                _this.$root.error('Params error');
                _this.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this.confirmSendLotteryDialog = false;
                return _context2.abrupt('return', false);

              case 29:
                _context2.next = 33;
                break;

              case 31:
                htmlcoinLowerFeeThreshold = _this.tokenLotteryFeeThreshold + 1;


                alert('Wrong bet or lucky number!\n\nBIFP Lottery:\n  * Bets between 1 and ' + _this.tokenLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + _this.tokenLotteryPot + '\n\nHTMLCoin Lottery:\n  * Bets between ' + htmlcoinLowerFeeThreshold + ' and ' + _this.htmlcoinLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + _this.htmlcoinLotteryPot);

              case 33:
                _context2.next = 36;
                break;

              case 35:
                alert('Your bet must be higher than 0 and your lucky number must equal or higher than 0!');

              case 36:
                _context2.next = 39;
                break;

              case 38:
                alert('You do not have enough BIFP to play! Go get some!');

              case 39:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[3, 23], [8, 14]]);
      }))();
    },
    runUpForGrabs: function runUpForGrabs() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var playedAmount, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(parseInt(_this2.userTokenBalance) >= parseInt(_this2.upForGrabsBet))) {
                  _context3.next = 33;
                  break;
                }

                if (!(parseInt(_this2.upForGrabsBet) >= 0)) {
                  _context3.next = 30;
                  break;
                }

                _context3.prev = 2;


                _this2.lotteryID = __WEBPACK_IMPORTED_MODULE_8_js_sha256___default()(_this2.wallet.info.address + Date.now());

                playedAmount = _this2.upForGrabsBet * 100000000;
                encodedData = _this2.encodeContractSendFunction(abiJson, 'BIFP_upForGrabs', [playedAmount, _this2.lotteryID]);


                _this2.confirmSendLotteryDialog = true;

                _context3.prev = 7;
                _context3.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this2.gasLimit, _this2.gasPrice, _this2.fee);

              case 10:
                _this2.rawTx = _context3.sent;
                _context3.next = 19;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](7);

                _this2.$root.log.error('send_to_generate_tx_error', _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                alert(_context3.t0.message || _context3.t0);
                _this2.confirmSendLotteryDialog = false;
                return _context3.abrupt('return', false);

              case 19:
                _this2.canSend = true;
                _context3.next = 28;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t1 = _context3['catch'](2);

                _this2.$root.error('Params error');
                _this2.$root.log.error('send_to_contract_encode_abi_error', _context3.t1.stack || _context3.t1.toString() || _context3.t1);
                _this2.confirmSendLotteryDialog = false;
                return _context3.abrupt('return', false);

              case 28:
                _context3.next = 31;
                break;

              case 30:
                alert('The amount played must be higher than 0 BIFP!');

              case 31:
                _context3.next = 34;
                break;

              case 33:
                alert('You do not have enough BIFP to play! Go get some!');

              case 34:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 22], [7, 13]]);
      }))();
    },
    confirmSendLottery: function confirmSendLottery() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var txId, txViewUrl, apiURL, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:

                _this3.sending = true;
                _context4.prev = 1;
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this3.rawTx);

              case 4:
                txId = _context4.sent;

                _this3.confirmSendLotteryDialog = false;
                _this3.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this3.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this3.$emit('send');

                _this3.txLotteryReceiptDialog = true;
                _this3.awaitingLotteryTx = true;

                apiURL = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';
                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(apiURL + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this3.awaitingLotteryTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this3.txError = true;
                      } else {
                        _this3.checkLotteryResults = true;
                      }
                    }
                  }).catch(console.error);
                }, 15 * 1000);
                _context4.next = 21;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4['catch'](1);

                alert(_context4.t0.message || _context4.t0);
                _this3.$root.log.error('send_to_contract_post_raw_tx_error', _context4.t0.response || _context4.t0.stack || _context4.t0.toString() || _context4.t0);
                _this3.confirmSendLotteryDialog = false;

              case 21:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3, [[1, 16]]);
      }))();
    },
    setSell: function setSell() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var sellQtyPrecision, sellPricePrecision, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(parseInt(_this4.userTokenBalance) >= parseInt(_this4.sellTokenQty))) {
                  _context5.next = 33;
                  break;
                }

                if (!(parseInt(_this4.sellTokenQty) >= 0)) {
                  _context5.next = 30;
                  break;
                }

                _context5.prev = 2;

                // Bringing the numbers to the precision used by the Smart Contract
                sellQtyPrecision = parseInt(_this4.sellTokenQty) * 100000000;
                sellPricePrecision = parseInt(_this4.sellPricePerToken) * 100000000;
                encodedData = _this4.encodeContractSendFunction(abiJson, 'BIFP_setSell', [sellQtyPrecision, sellPricePrecision]);


                _this4.confirmSendDialog = true;

                _context5.prev = 7;
                _context5.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this4.gasLimit, _this4.gasPrice, _this4.fee);

              case 10:
                _this4.rawTx = _context5.sent;
                _context5.next = 19;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5['catch'](7);

                _this4.$root.log.error('send_to_generate_tx_error', _context5.t0.stack || _context5.t0.toString() || _context5.t0);
                alert(_context5.t0.message || _context5.t0);
                _this4.confirmSendDialog = false;
                return _context5.abrupt('return', false);

              case 19:
                _this4.canSend = true;
                _context5.next = 28;
                break;

              case 22:
                _context5.prev = 22;
                _context5.t1 = _context5['catch'](2);

                _this4.$root.error('Params error');
                _this4.$root.log.error('send_to_contract_encode_abi_error', _context5.t1.stack || _context5.t1.toString() || _context5.t1);
                _this4.confirmSendDialog = false;
                return _context5.abrupt('return', false);

              case 28:
                _context5.next = 31;
                break;

              case 30:
                alert('The quantity must be higher than 0 BIFP!');

              case 31:
                _context5.next = 34;
                break;

              case 33:
                alert('You do not have enough BIFP to sell! Go get some!');

              case 34:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this4, [[2, 22], [7, 13]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:

                _this5.sending = true;
                _context6.prev = 1;
                _context6.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this5.rawTx);

              case 4:
                txId = _context6.sent;

                _this5.confirmSendDialog = false;
                _this5.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this5.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);

                _context6.next = 16;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6['catch'](1);

                alert(_context6.t0.message || _context6.t0);
                _this5.$root.log.error('send_to_contract_post_raw_tx_error', _context6.t0.response || _context6.t0.stack || _context6.t0.toString() || _context6.t0);
                _this5.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this5, [[1, 11]]);
      }))();
    },
    getData: function getData() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var decodedResult, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this6.loading = true;

                _context7.prev = 1;
                _context7.next = 4;
                return _this6.callContractFunction(contractAddress, abiJson, 'tokenLotteryOn', []);

              case 4:
                decodedResult = _context7.sent;


                decodedResult[0].toString() == 'true' ? _this6.tokenLotteryStatus = 'On' : _this6.tokenLotteryStatus = 'Off';

                _context7.next = 8;
                return _this6.callContractFunction(contractAddress, abiJson, 'htmlcoinLotteryOn', []);

              case 8:
                decodedResult = _context7.sent;


                decodedResult[0].toString() == 'true' ? _this6.htmlcoinLotteryStatus = 'On' : _this6.htmlcoinLotteryStatus = 'Off';

                _context7.next = 12;
                return _this6.callContractFunction(contractAddress, abiJson, 'getPrizeBalance', ['tokenLottery']);

              case 12:
                decodedResult = _context7.sent;


                _this6.tokenLotteryPrize = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 16;
                return _this6.callContractFunction(contractAddress, abiJson, 'getPrizeBalance', ['htmlcoinLottery']);

              case 16:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryPrize = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 20;
                return _this6.callContractFunction(contractAddress, abiJson, 'getTokenLotteryFeeThreshold', []);

              case 20:
                decodedResult = _context7.sent;


                _this6.tokenLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 24;
                return _this6.callContractFunction(contractAddress, abiJson, 'getHtmlcoinLotteryFeeThreshold', []);

              case 24:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 28;
                return _this6.callContractFunction(contractAddress, abiJson, 'getTokenLotteryPot', []);

              case 28:
                decodedResult = _context7.sent;


                _this6.tokenLotteryPot = parseInt(decodedResult[0]);

                _context7.next = 32;
                return _this6.callContractFunction(contractAddress, abiJson, 'getHtmlcoinLotteryPot', []);

              case 32:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryPot = parseInt(decodedResult[0]);

                _context7.next = 36;
                return _this6.callContractFunction(contractAddress, abiJson, 'BIFP_whatsForSale', ['0x750db5c622d07fbbb9fd0129a322e810d12e5ca6']);

              case 36:
                decodedResult = _context7.sent;


                _this6.bankTokenQuantity = parseInt(decodedResult[0]) / 100000000;
                _this6.bankPricePerToken = parseInt(decodedResult[1]) / 100000000;

                for (i = 0; i < _this6.wallet.info.hrc20.length; i++) {
                  if (_this6.wallet.info.hrc20[i].contract.contract_address == contractAddress) {
                    _this6.userTokenBalance = parseInt(_this6.wallet.info.hrc20[i].amount) / 100000000;
                  }
                }

                _context7.next = 47;
                break;

              case 42:
                _context7.prev = 42;
                _context7.t0 = _context7['catch'](1);

                _this6.loading = false;
                _this6.$root.log.error('call_contract_call_contract_error', _context7.t0.stack || _context7.t0.toString() || _context7.t0);
                alert(_context7.t0.message || _context7.t0);

              case 47:

                _this6.loading = false;

              case 48:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this6, [[1, 42]]);
      }))();
    },
    findIndexByName: function findIndexByName(abiJson, name) {
      return abiJson.findIndex(function (item) {
        return item.name === name;
      });
    },
    callContractFunction: function callContractFunction(contractAddress, abiJson, functionName, params) {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var encodedData, encodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[_this7.findIndexByName(abiJson, functionName)], params).substr(2);
                _context8.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 3:
                encodedResult = _context8.sent;

                encodedResult = '0x' + encodedResult;

                return _context8.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[_this7.findIndexByName(abiJson, functionName)], encodedResult));

              case 6:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this7);
      }))();
    },
    encodeContractSendFunction: function encodeContractSendFunction(abiJson, functionName, params) {
      return __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[this.findIndexByName(abiJson, functionName)], params).substr(2);
    },


    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    }

    /*
    async buyFromBank() {
       if(parseInt(this.buyFromBankAmount) >= 0) {
      
        try {
           const buyAmount = this.buyFromBankAmount * 100000000;
           const encodedData = this.encodeContractSendFunction(
            abiJson, 
            'BIFP_buyTokens', 
            []
          );
           this.confirmSendBuyDialog = true;
           try {
            this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
          } catch (e) {
            this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
            alert(e.message || e);
            this.confirmSendBuyDialog = false;
            return false;
          }
            this.canSend = true;
        } catch (e) {
          this.$root.error('Params error');
          this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
          this.confirmSendBuyDialog = false;
          return false;
        }
       
      } else {
        alert('The buying amount must be higher than 0 HTML!');
      }
    },
     async confirmSendBuy() {
      
      this.sending = true;
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx);
        this.confirmSendBuyDialog = false;
        this.sending = false;
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId);
        this.$root.success(`Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0);
         this.txBuyReceiptDialog = true;
        this.awaitingBuyTx = true;
         var apiURL = config.getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';
         const interval = setInterval(() => {
           axios.get(apiURL + txId)
          .then(result=>{
            console.log('Checking Tx...')
             if(result.data.confirmations > 0) {
              clearInterval(interval);
              this.awaitingBuyTx = false;
               if(result.data.receipt[0].excepted != 'None') {
                this.txError = true;
              } else {
                this.txBuyConfirmed = true;
              }
            }
           })
          .catch(console.error)
        }, 15*1000)
       } catch (e) {
        alert(e.message || e);
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e);
        this.confirmSendBuyDialog = false;
      }
    },
     async confirmOwnershipTransfer() {
      
      try {
         const encodedData = this.encodeContractSendFunction(
          abiJson, 
          'confirmOwnershipTransfer',
          []
        );
         this.confirmSendDialog = true;
         try {
          this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
        } catch (e) {
          this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
          alert(e.message || e);
          this.confirmSendDialog = false;
          return false;
        }
          this.canSend = true;
      } catch (e) {
        this.$root.error('Params error');
        this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
        this.confirmSendDialog = false;
        return false;
      }
    },
    */

  },

  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "S96s":
/***/ (function(module, exports) {

module.exports = ["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]

/***/ }),

/***/ "Sqgs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__ = __webpack_require__("+Udk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      address: '',
      amount: '',
      symbol: 'HTML',
      tokens: [],
      addTokenStep: 1,
      addTokenDialog: false,
      addTokenLoading: false,
      addTokenName: '',
      addTokenSymbol: '',
      addTokenAddress: '',
      addTokenDecimals: 8,
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmAddressDialog: false,
      repeatAddress: '',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var amountCheck = /^\d+\.?\d*$/.test(this.amount) && this.amount > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(amountCheck && feeCheck);
    }
  },
  methods: {
    send: function send() {
      this.confirmAddressDialog = true;
      this.canSend = false;
    },
    confirmAddress: function confirmAddress() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wallet, token, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.address !== _this.repeatAddress)) {
                  _context.next = 3;
                  break;
                }

                _this.$root.error('address_is_not_same_as_the_old_one');
                return _context.abrupt('return', false);

              case 3:
                _this.confirmAddressDialog = false;
                _this.confirmSendDialog = true;
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();
                _context.prev = 6;

                if (!(_this.symbol == 'HTML')) {
                  _context.next = 14;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                _context.next = 11;
                return wallet.generateTx(_this.address, _this.amount, _this.fee);

              case 11:
                _this.rawTx = _context.sent;
                _context.next = 21;
                break;

              case 14:
                if (!__WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].checkSymbol(_this.symbol)) {
                  _context.next = 21;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                token = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenBySymbol(_this.symbol);
                encodedData = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].encodeSendDataHex(token, _this.address, _this.amount); // modified to support DEX-contract deposits

                _context.next = 20;
                return wallet.generateSendToContractTx(token.address, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 20:
                _this.rawTx = _context.sent;

              case 21:
                _this.canSend = true;
                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](6);

                alert(_context.t0.message || _context.t0);
                _this.$root.log.error('send_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[6, 24]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                _this2.$root.success('Successful send. You can view at ' + __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId));
                _this2.$emit('send');
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 11]]);
      }))();
    },
    searchAddToken: function searchAddToken() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var tokenInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.addTokenLoading = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].fetchTokenInfo(_this3.addTokenAddress);

              case 4:
                tokenInfo = _context3.sent;

                _this3.addTokenName = tokenInfo.name;
                _this3.addTokenSymbol = tokenInfo.symbol;
                _this3.addTokenDecimals = tokenInfo.decimals;
                _context3.next = 15;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                _this3.addTokenLoading = false;
                if (_context3.t0.response.status === 404) {
                  _this3.$root.error('token_contract_address_is_not_exists');
                  _this3.$root.log.error('token_contract_address_is_not_exists', _this3.addTokenAddress);
                } else {
                  alert(_context3.t0.message || _context3.t0);
                  _this3.addTokenDialog = false;
                }
                return _context3.abrupt('return', false);

              case 15:
                _this3.addTokenLoading = false;
                _this3.addTokenStep = 2;

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 10]]);
      }))();
    },
    confirmAddToken: function confirmAddToken() {
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].addCustomToken(this.addTokenAddress, this.addTokenName, this.addTokenSymbol, this.addTokenDecimals);
      this.initTokens();
      this.symbol = this.addTokenSymbol;
      this.addTokenStep = 1;
      this.addTokenDialog = false;
      this.addTokenAddress = '';
    },
    initTokens: function initTokens() {
      var tokenList = [{ text: 'HTML', value: 'HTML' }];
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenList().forEach(function (token) {
        tokenList[tokenList.length] = {
          text: token.symbol,
          value: token.symbol,
          name: token.name,
          address: token.address
        };
      });
      //tokenList[tokenList.length] = { text: 'More...', value: 'more' }
      // commented line by aperez 31-aug-2021
      // supressing this option avoids all behaviour from add a new Token,
      // and prevents issues when adding predefined tokens from "token.json"
      // as the code might be intertwined for the two use cases
      this.tokens = tokenList;
    }
  },
  mounted: function mounted() {
    this.initTokens();
  },

  watch: {
    'symbol': function symbol(to, from) {
      var _this4 = this;

      if (from === 'more') return true;
      if (to === 'more') {
        this.$nextTick(function () {
          _this4.symbol = from;
          _this4.addTokenDialog = true;
        });
      }
    }
  }
});

/***/ }),

/***/ "Sqob":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Ss9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_Actor_vue__ = __webpack_require__("7btv");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_790639cb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_Actor_vue__ = __webpack_require__("mqcr");
function injectStyle (ssrContext) {
  __webpack_require__("K8qq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_Actor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_790639cb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_Actor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TBqZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentIndex: 0,
      length: 12,
      mnemonic: []
    };
  },

  computed: {
    notFinishInput: function notFinishInput() {
      return this.mnemonic.filter(function (word) {
        return !!word;
      }).length !== this.length;
    }
  },
  methods: {
    inputMnemonicWords: function inputMnemonicWords() {
      this.$emit('mnemonic', this.mnemonic.join(' '));
    },
    tryInputMnemonicWords: function tryInputMnemonicWords() {
      if (this.notFinishInput) {
        if (this.mnemonic[this.currentIndex]) {
          this.$refs.mnemonicInput[this.currentIndex + 1].focus();
        }
        return;
      }
      this.inputMnemonicWords();
    },
    focus: function focus(index) {
      this.currentIndex = index;
    }
  }
});

/***/ }),

/***/ "TGXn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/myoffspring_splash2.56c6628.jpg";

/***/ }),

/***/ "Ts+B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreWif_vue__ = __webpack_require__("R9Gm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dc95684_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__ = __webpack_require__("HAe2");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreWif_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dc95684_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "U877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_sha256__ = __webpack_require__("BUS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qrcode__ = __webpack_require__("71e1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_printd__ = __webpack_require__("5OkI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_printd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_printd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__ = __webpack_require__("AbOu");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      contractAddress: '0b0c37fa6d64078dac7cfa4ccc43529a615602a1',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      fullName: '',
      motherFullName: '',
      fatherFullName: '',
      dateOfBirth_menu: false,
      dateOfBirth: '',
      timeOfBirth_menu: false,
      timeOfBirth: null,
      timePicker: false,
      placeOfBirth: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      error: null,
      qrScan: false,
      camera: false,
      qrComponent: false,
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false,
      hashID: '',
      searchHashID: '',
      resultStatus: '',
      resultFullName: 'loading...',
      resultMotherFullName: 'loading...',
      resultFatherFullName: 'loading...',
      resultDateOfBirth: 'loading...',
      resultTimeOfBirth: 'loading...',
      resultPlaceOfBirth: 'loading...',
      qr: ''
    };
  },

  components: {
    QrcodeStream: __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__["QrcodeStream"],
    QrcodeCapture: __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__["QrcodeCapture"]
  },
  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var nameCheck = /^(?!\s*$).+/.test(this.fullName);
      var dateOfBirthCheck = /^(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/.test(this.dateOfBirth.split("-").reverse().join("-")) && parseInt(this.dateOfBirth.replace(/-/g, "")) <= parseInt(this.todayFormattedDate());
      var timeOfBirthCheck = this.timeOfBirth == '' || /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(this.timeOfBirth);
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(nameCheck && dateOfBirthCheck && timeOfBirthCheck && gasPriceCheck && gasLimitCheck && feeCheck);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    },
    dateOfBirth_menu: function dateOfBirth_menu(val) {
      var _this = this;

      val && this.$nextTick(function () {
        return _this.$refs.picker.activePicker = 'YEAR';
      });
    },
    qrScan: function qrScan(val) {
      if (!val) this.camera = false;
    }
  },
  methods: {
    print: function print() {
      var cssText = '\n        #title {\n          font-family: Arial, Helvetica, sans-serif;\n          font-weight: bold;\n          font-size: x-large;\n          text-align: center;                      \n          display: block;\n          padding: 20px;\n          margin-top: 120px;\n        }\n\n        p {\n          font-family: Arial, Helvetica, sans-serif;\n          margin-left: 50px;\n        }\n\n        #certificate_id {\n          font-family: Arial, Helvetica, sans-serif;\n          text-align: center;\n          display: block;\n          padding: 20px;\n        }\n\n        #qr {\n          margin-left: auto;\n          margin-right: auto;\n          padding: 10px;\n          width: 100px; \n          height: auto;\n          display: block;\n        }\n\n        #btn {\n          display: none;\n        }\n\n        .logo1 {\n          float: left;\n          padding: 10px;\n          height: 20px;\n          width: auto;\n          margin-left: 25px;\n        }\n\n        .logo2 {\n          float: right;\n          padding: 10px;\n          height: 20px;\n          width: auto;\n          margin-right: 25px;\n        }\n      ';

      var d = new __WEBPACK_IMPORTED_MODULE_7_printd___default.a();

      var printCallback = function printCallback(_ref) {
        var launchPrint = _ref.launchPrint;
        return launchPrint();
      };

      d.print(document.getElementById('certificate'), cssText, printCallback);
    },
    scanQrcode: function scanQrcode() {
      this.searchHashID = '';
      this.qrComponent = true;
      this.camera = true;
      this.qrScan = true;
    },
    onDecode: function onDecode(certificateID) {
      this.searchHashID = certificateID;
      this.camera = false;
      this.qrScan = false;
      this.openCertificate();
    },
    onInit: function onInit(promise) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return promise;

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context['catch'](0);

                if (_context.t0.name === 'NotAllowedError') {
                  _this2.error = "ERROR: you need to grant camera access permisson";
                } else if (_context.t0.name === 'NotFoundError') {
                  _this2.error = "ERROR: no camera on this device";
                } else if (_context.t0.name === 'NotSupportedError') {
                  _this2.error = "ERROR: secure context required (HTTPS, localhost)";
                } else if (_context.t0.name === 'NotReadableError') {
                  _this2.error = "ERROR: is the camera already in use?";
                } else if (_context.t0.name === 'OverconstrainedError') {
                  _this2.error = "ERROR: installed cameras are not suitable";
                } else if (_context.t0.name === 'StreamApiNotSupportedError') {
                  _this2.error = "ERROR: Stream API is not supported in this browser";
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 5]]);
      }))();
    },
    send: function send() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var abiJson, newDateOfBirth, newTimeOfBirth, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                abiJson = [{ "constant": true, "inputs": [{ "name": "hash", "type": "string" }], "name": "getHeir", "outputs": [{ "name": "result", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "hash", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "name": "newHeir", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "hash", "type": "string" }], "name": "heirEvent", "type": "event" }];
                newDateOfBirth = _this3.dateOfBirth.replace(/-/g, "");
                newTimeOfBirth = _this3.timeOfBirth.replace(/:/g, "");

                _this3.hashID = __WEBPACK_IMPORTED_MODULE_5_js_sha256___default()(_this3.fullName + _this3.motherFullName + _this3.fatherFullName + newDateOfBirth + newTimeOfBirth + _this3.placeOfBirth + Date.now());
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[1], [_this3.hashID, _this3.fullName, _this3.motherFullName, _this3.fatherFullName, newDateOfBirth, newTimeOfBirth, _this3.placeOfBirth]).substr(2);

                _this3.confirmSendDialog = true;
                _context2.prev = 7;
                _context2.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this3.contractAddress, encodedData, _this3.gasLimit, _this3.gasPrice, _this3.fee);

              case 10:
                _this3.rawTx = _context2.sent;
                _context2.next = 19;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](7);

                _this3.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this3.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 19:
                _this3.canSend = true;
                _context2.next = 28;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t1 = _context2['catch'](0);

                _this3.$root.error('Params error');
                _this3.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this3.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 28:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 22], [7, 13]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this4.rawTx);

              case 4:
                txId = _context3.sent;

                _this4.confirmSendDialog = false;
                _this4.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this4.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this4.$emit('send');
                _this4.fullName = '';
                _this4.motherFullName = '';
                _this4.fatherFullName = '';
                _this4.dateOfBirth = '';
                _this4.timeOfBirth = null;
                _this4.placeOfBirth = '';
                _context3.next = 23;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this4.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this4.confirmSendDialog = false;

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 18]]);
      }))();
    },
    openCertificate: function openCertificate() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var abiJson, encodedData, encodedResult, decodedResult, rawDoB, formattedDateOfBirth, rawToB, formattedTimeOfBirth;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this5.searchHashID != '')) {
                  _context4.next = 49;
                  break;
                }

                _this5.loading = true;
                _context4.prev = 2;
                abiJson = [{ "constant": true, "inputs": [{ "name": "hash", "type": "string" }], "name": "getHeir", "outputs": [{ "name": "result", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "hash", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "name": "newHeir", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "hash", "type": "string" }], "name": "heirEvent", "type": "event" }];
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[0], [_this5.searchHashID]).substr(2);
                _context4.prev = 5;
                _context4.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(_this5.contractAddress, encodedData);

              case 8:
                encodedResult = _context4.sent;

                encodedResult = '0x' + encodedResult;
                decodedResult = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[0], encodedResult);
                rawDoB = decodedResult[4].toString();
                formattedDateOfBirth = '';

                if (rawDoB != '0') {
                  formattedDateOfBirth = rawDoB.substring(0, 4) + "-" + rawDoB.substring(4, 6) + "-" + rawDoB.substring(6);
                }
                rawToB = decodedResult[5].toString();
                formattedTimeOfBirth = '';

                if (!(rawToB != '0')) {
                  _context4.next = 29;
                  break;
                }

                _context4.t0 = rawToB.length;
                _context4.next = _context4.t0 === 3 ? 20 : _context4.t0 === 2 ? 22 : _context4.t0 === 1 ? 24 : 26;
                break;

              case 20:
                rawToB = '0' + rawToB;
                return _context4.abrupt('break', 26);

              case 22:
                rawToB = '00' + rawToB;
                return _context4.abrupt('break', 26);

              case 24:
                rawToB = '000' + rawToB;
                return _context4.abrupt('break', 26);

              case 26:
                formattedTimeOfBirth = rawToB.substring(0, 2) + ":" + rawToB.substring(2);
                _context4.next = 30;
                break;

              case 29:
                formattedTimeOfBirth = '00:00';

              case 30:
                _this5.resultStatus = decodedResult[0];
                _this5.loading = false;
                if (_this5.resultStatus == 'Heir record found.') {
                  _this5.execResultDialog = true;
                  _this5.resultFullName = decodedResult[1];
                  _this5.resultMotherFullName = decodedResult[2];
                  _this5.resultFatherFullName = decodedResult[3];
                  _this5.resultDateOfBirth = formattedDateOfBirth;
                  _this5.resultTimeOfBirth = formattedTimeOfBirth;
                  _this5.resultPlaceOfBirth = decodedResult[6];
                  _this5.drawQrCode();
                } else {
                  alert('Record not found!');
                }
                _context4.next = 41;
                break;

              case 35:
                _context4.prev = 35;
                _context4.t1 = _context4['catch'](5);

                _this5.loading = false;
                _this5.$root.log.error('call_contract_call_contract_error', _context4.t1.stack || _context4.t1.toString() || _context4.t1);
                alert(_context4.t1.message || _context4.t1);
                _this5.execResultDialog = false;

              case 41:
                _context4.next = 49;
                break;

              case 43:
                _context4.prev = 43;
                _context4.t2 = _context4['catch'](2);

                _this5.loading = false;
                _this5.$root.error('Params error');
                _this5.$root.log.error('call_contract_encode_abi_error', _context4.t2.stack || _context4.t2.toString() || _context4.t2);
                return _context4.abrupt('return', false);

              case 49:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[2, 43], [5, 35]]);
      }))();
    },
    dateOfBirth_save: function dateOfBirth_save(date) {
      this.$refs.dateOfBirth_menu.save(this.dateOfBirth);
    },
    timeOfBirth_save: function timeOfBirth_save() {
      this.$refs.timeOfBirth_menu.save(this.timeOfBirth);
    },
    todayFormattedDate: function todayFormattedDate() {
      var today = new Date();
      var dd = today.getDate().toString();
      var mm = (today.getMonth() + 1).toString(); //January is 0!
      var yyyy = today.getFullYear().toString();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var formattedDate = yyyy + mm + dd;
      return formattedDate;
    },

    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    },
    drawQrCode: function drawQrCode() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_6_qrcode___default.a.toDataURL('' + this.searchHashID, function (err, url) {
        _this6.qr = url;
      });
    }
  }
});

/***/ }),

/***/ "U8Q/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_plutonium_splash.f14e206.jpg";

/***/ }),

/***/ "V0p5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo2b_hexaland_webplatform.872e8cd.png";

/***/ }),

/***/ "VVu8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("play_circle_outline")]),_vm._v("\n        "+_vm._s(_vm.$t('send_to_contract.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Contract Address","required":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.contractAddress),callback:function ($$v) {_vm.contractAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"contractAddress"}}),_vm._v(" "),_c('v-textarea',{attrs:{"label":"ABI","required":"","outline":"","background-color":"blue lighten-1"},on:{"input":_vm.decodeAbi},model:{value:(_vm.abi),callback:function ($$v) {_vm.abi=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"abi"}}),_vm._v(" "),(_vm.parsedAbi)?_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","outline":"","background-color":"blue lighten-1","single-line":"","bottom":""},on:{"change":function($event){_vm.amount=0}},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}):_vm._e(),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name,"outline":"","background-color":"blue lighten-1"},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e(),_vm._v(" "),(_vm.payable)?[_c('v-text-field',{attrs:{"label":"amount","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})]:_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "VuLz":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_1":81,"OP_TRUE":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_CREATE":193,"OP_CALL":194,"OP_SPEND":195,"OP_GAS_PRICE":245,"OP_VERSION":246,"OP_GAS_LIMIT":247,"OP_DATA":248,"OP_SMALLINTEGER":250,"OP_PUBKEYS":251,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "Wq6Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39__ = __webpack_require__("+Qgu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js__ = __webpack_require__("uotZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_libs_ledger__ = __webpack_require__("9rcu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_buffer__ = __webpack_require__("EuP9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_buffer__);













var unit = ' HTML';
var network = {};
switch (__WEBPACK_IMPORTED_MODULE_10_libs_config__["a" /* default */].getNetwork()) {
  case 'testnet':
    network = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.networks.htmlcoin_testnet;
    break;
  case 'mainnet':
    network = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.networks.htmlcoin;
    break;
}

var Wallet = function () {
  function Wallet(keyPair) {
    var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Wallet);

    this.keyPair = keyPair;
    this.extend = extend;
    this.info = {
      address: this.getAddress(),
      balance: 'loading',
      unconfirmedBalance: 'loading',
      hrc20: []
    };
    this.txList = [];
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Wallet, [{
    key: 'validateMnemonic',
    value: function validateMnemonic(mnemonic, password) {
      var tempWallet = Wallet.restoreFromMnemonic(mnemonic, password);
      return this.keyPair.toWIF() === tempWallet.keyPair.toWIF();
    }
  }, {
    key: 'getAddress',
    value: function getAddress() {
      return this.keyPair.getAddress();
    }
  }, {
    key: 'getHasPrivKey',
    value: function getHasPrivKey() {
      return !!this.keyPair.d;
    }
  }, {
    key: 'getPrivKey',
    value: function getPrivKey() {
      try {
        return this.keyPair.toWIF();
      } catch (e) {
        if (e.toString() === 'Error: Missing private key') {
          return null;
        } else {
          throw e;
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {
      if (__WEBPACK_IMPORTED_MODULE_10_libs_config__["a" /* default */].getMode() !== 'offline') {
        this.setInfo();
        this.setHrc20();
        this.setTxList();
      }
    }
  }, {
    key: 'setInfo',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var info;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getInfo(this.info.address);

              case 2:
                info = _context.sent;

                this.info.balance = info.balance + unit;
                this.info.unconfirmedBalance = info.unconfirmedBalance + unit;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setInfo() {
        return _ref.apply(this, arguments);
      }

      return setInfo;
    }()
  }, {
    key: 'setHrc20',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getHrc20(this.info.address);

              case 2:
                this.info.hrc20 = _context2.sent;

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setHrc20() {
        return _ref2.apply(this, arguments);
      }

      return setHrc20;
    }()
  }, {
    key: 'setTxList',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getTxList(this.info.address);

              case 2:
                this.txList = _context3.sent;

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setTxList() {
        return _ref3.apply(this, arguments);
      }

      return setTxList;
    }()
  }, {
    key: 'generateCreateTokenTx',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(name, symbol, decimal, totalSupply1, gasLimit, gasPrice, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = Wallet;
                _context4.t1 = this;
                _context4.t2 = name;
                _context4.t3 = symbol;
                _context4.t4 = decimal;
                _context4.t5 = totalSupply1;
                _context4.t6 = gasLimit;
                _context4.t7 = gasPrice;
                _context4.t8 = fee;
                _context4.next = 11;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 11:
                _context4.t9 = _context4.sent;
                return _context4.abrupt('return', _context4.t0.generateCreateTokenTx.call(_context4.t0, _context4.t1, _context4.t2, _context4.t3, _context4.t4, _context4.t5, _context4.t6, _context4.t7, _context4.t8, _context4.t9));

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function generateCreateTokenTx(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return generateCreateTokenTx;
    }()
  }, {
    key: 'generateCreateContractTx',
    value: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(code, gasLimit, gasPrice, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = Wallet;
                _context5.t1 = this;
                _context5.t2 = code;
                _context5.t3 = gasLimit;
                _context5.t4 = gasPrice;
                _context5.t5 = fee;
                _context5.next = 8;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 8:
                _context5.t6 = _context5.sent;
                return _context5.abrupt('return', _context5.t0.generateCreateContractTx.call(_context5.t0, _context5.t1, _context5.t2, _context5.t3, _context5.t4, _context5.t5, _context5.t6));

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function generateCreateContractTx(_x9, _x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      }

      return generateCreateContractTx;
    }()
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(contractAddress, encodedData, gasLimit, gasPrice, fee, amount) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = Wallet;
                _context6.t1 = this;
                _context6.t2 = contractAddress;
                _context6.t3 = encodedData;
                _context6.t4 = gasLimit;
                _context6.t5 = gasPrice;
                _context6.t6 = fee;
                _context6.next = 9;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 9:
                _context6.t7 = _context6.sent;
                _context6.t8 = amount;
                _context6.next = 13;
                return _context6.t0.generateSendToContractTx.call(_context6.t0, _context6.t1, _context6.t2, _context6.t3, _context6.t4, _context6.t5, _context6.t6, _context6.t7, _context6.t8);

              case 13:
                return _context6.abrupt('return', _context6.sent);

              case 14:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function generateSendToContractTx(_x13, _x14, _x15, _x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref7 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(to, amount, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = Wallet;
                _context7.t1 = this;
                _context7.t2 = to;
                _context7.t3 = amount;
                _context7.t4 = fee;
                _context7.next = 7;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 7:
                _context7.t5 = _context7.sent;
                _context7.next = 10;
                return _context7.t0.generateTx.call(_context7.t0, _context7.t1, _context7.t2, _context7.t3, _context7.t4, _context7.t5);

              case 10:
                return _context7.abrupt('return', _context7.sent);

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function generateTx(_x19, _x20, _x21) {
        return _ref7.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'sendRawTx',
    value: function () {
      var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8(tx) {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return Wallet.sendRawTx(tx);

              case 2:
                res = _context8.sent;

                this.init();
                return _context8.abrupt('return', res);

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sendRawTx(_x22) {
        return _ref8.apply(this, arguments);
      }

      return sendRawTx;
    }()
  }, {
    key: 'callContract',
    value: function () {
      var _ref9 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9(address, encodedData) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Wallet.callContract(address, encodedData);

              case 2:
                return _context9.abrupt('return', _context9.sent);

              case 3:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function callContract(_x23, _x24) {
        return _ref9.apply(this, arguments);
      }

      return callContract;
    }()
  }], [{
    key: 'generateCreateTokenTx',
    value: function generateCreateTokenTx(wallet, name, symbol, decimal, totalSupply1, gasLimit, gasPrice, fee, utxoList) {
      var hrc20TokenCode = '60606040526020604051908101604052806000815250600090805190602001906200002c929190620001b5565b5060206040519081016040528060008152506001908051906020019062000055929190620001b5565b506000600260006101000a81548160ff021916908360ff160217905550600060035534156200008357600080fd5b60405162000fa438038062000fa4833981016040528080518201919060200180518201919060200180519060200190919080519060200190919050508360009080519060200190620000d7929190620001b5565b508260019080519060200190620000f0929190620001b5565b5081600260006101000a81548160ff021916908360ff16021790555080600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040518082815260200191505060405180910390a35050505062000264565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001f857805160ff191683800117855562000229565b8280016001018555821562000229579182015b82811115620002285782518255916020019190600101906200020b565b5b5090506200023891906200023c565b5090565b6200026191905b808211156200025d57600081600090555060010162000243565b5090565b90565b610d3080620002746000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a9578063095ea7b31461013757806318160ddd1461019157806323b872dd146101ba578063313ce567146102335780635a3b7e421461026257806370a08231146102f057806395d89b411461033d578063a9059cbb146103cb578063dd62ed3e14610425575b600080fd5b34156100b457600080fd5b6100bc610491565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b610177600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610539565b604051808215151515815260200191505060405180910390f35b341561019c57600080fd5b6101a46106e9565b6040518082815260200191505060405180910390f35b34156101c557600080fd5b610219600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106f3565b604051808215151515815260200191505060405180910390f35b341561023e57600080fd5b6102466109d3565b604051808260ff1660ff16815260200191505060405180910390f35b341561026d57600080fd5b6102756109ea565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b557808201518184015260208101905061029a565b50505050905090810190601f1680156102e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102fb57600080fd5b610327600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a23565b6040518082815260200191505060405180910390f35b341561034857600080fd5b610350610a3b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610390578082015181840152602081019050610375565b50505050905090810190601f1680156103bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103d657600080fd5b61040b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae3565b604051808215151515815260200191505060405180910390f35b341561043057600080fd5b61047b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c94565b6040518082815260200191505060405180910390f35b610499610cf0565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561052f5780601f106105045761010080835404028352916020019161052f565b820191906000526020600020905b81548152906001019060200180831161051257829003601f168201915b5050505050905090565b60008260008173ffffffffffffffffffffffffffffffffffffffff161415151561056257600080fd5b60008314806105ed57506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b15156105f857600080fd5b82600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a3600191505092915050565b6000600354905090565b60008360008173ffffffffffffffffffffffffffffffffffffffff161415151561071c57600080fd5b8360008173ffffffffffffffffffffffffffffffffffffffff161415151561074357600080fd5b6107c9600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cb9565b600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610892600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cb9565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061091e600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cd2565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a36001925050509392505050565b6000600260009054906101000a900460ff16905090565b6040805190810160405280600981526020017f546f6b656e20302e31000000000000000000000000000000000000000000000081525081565b60046020528060005260406000206000915090505481565b610a43610cf0565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b5050505050905090565b60008260008173ffffffffffffffffffffffffffffffffffffffff1614151515610b0c57600080fd5b610b55600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610cb9565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610be1600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610cd2565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b6000818310151515610cc757fe5b818303905092915050565b6000808284019050838110151515610ce657fe5b8091505092915050565b6020604051908101604052806000815250905600a165627a7a72305820b4801b60642dbdf96ab8aeb750302c39320e18dfedd0c1bf9c8efb3d3d41701d0029';
      if (new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(totalSupply1).times(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(10).pow(decimal)).greaterThanOrEqualTo(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(2).pow(256))) {
        alert('Total supply is overflowed in uint256');
        return false;
      }
      var encodedParam = __WEBPACK_IMPORTED_MODULE_6_ethjs_abi___default.a.encodeParams(['string', 'string', 'uint8', 'uint256'], [name, symbol, decimal, '0x' + new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(totalSupply1).times(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(10).pow(decimal)).toString(16)]);
      console.log(encodedParam);
      return __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildCreateContractTransaction(wallet.keyPair, hrc20TokenCode + encodedParam.substr(2), gasLimit, gasPrice, fee, utxoList);
    }
  }, {
    key: 'generateCreateContractTx',
    value: function generateCreateContractTx(wallet, code, gasLimit, gasPrice, fee, utxoList) {
      return __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildCreateContractTransaction(wallet.keyPair, code, gasLimit, gasPrice, fee, utxoList);
    }
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10(wallet, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList, amount) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (wallet.getHasPrivKey()) {
                  _context10.next = 5;
                  break;
                }

                if (!wallet.extend.ledger) {
                  _context10.next = 5;
                  break;
                }

                _context10.next = 4;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].generateSendToContractTx(wallet.keyPair, wallet.extend.ledger.ledger, wallet.extend.ledger.path, wallet.info.address, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList, __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().fetchRawTx);

              case 4:
                return _context10.abrupt('return', _context10.sent);

              case 5:
                return _context10.abrupt('return', __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildSendToContractTransaction(wallet.keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList, amount));

              case 6:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function generateSendToContractTx(_x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32) {
        return _ref10.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref11 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee11(wallet, to, amount, fee, utxoList) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (wallet.getHasPrivKey()) {
                  _context11.next = 5;
                  break;
                }

                if (!wallet.extend.ledger) {
                  _context11.next = 5;
                  break;
                }

                _context11.next = 4;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].generateTx(wallet.keyPair, wallet.extend.ledger.ledger, wallet.extend.ledger.path, wallet.info.address, to, amount, fee, utxoList, __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().fetchRawTx);

              case 4:
                return _context11.abrupt('return', _context11.sent);

              case 5:
                return _context11.abrupt('return', __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildPubKeyHashTransaction(wallet.keyPair, to, amount, fee, utxoList));

              case 6:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function generateTx(_x33, _x34, _x35, _x36, _x37) {
        return _ref11.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'sendRawTx',
    value: function () {
      var _ref12 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee12(tx) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().sendRawTx(tx);

              case 2:
                return _context12.abrupt('return', _context12.sent);

              case 3:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function sendRawTx(_x38) {
        return _ref12.apply(this, arguments);
      }

      return sendRawTx;
    }()
  }, {
    key: 'callContract',
    value: function () {
      var _ref13 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee13(address, encodedData) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().callContract(address, encodedData);

              case 2:
                return _context13.abrupt('return', _context13.sent);

              case 3:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function callContract(_x39, _x40) {
        return _ref13.apply(this, arguments);
      }

      return callContract;
    }()
  }, {
    key: 'validateBip39Mnemonic',
    value: function validateBip39Mnemonic(mnemonic) {
      return __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.validateMnemonic(mnemonic);
    }
  }, {
    key: 'restoreFromMnemonic',
    value: function restoreFromMnemonic(mnemonic, password) {
      //if (bip39.validateMnemonic(mnemonic) == false) return false
      var seedHex = __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.mnemonicToSeedHex(mnemonic, password);
      var hdNode = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode.fromSeedHex(seedHex, network);
      var account = hdNode.deriveHardened(88).deriveHardened(0).deriveHardened(0);
      var keyPair = account.keyPair;
      return new Wallet(keyPair);
    }
  }, {
    key: 'restoreFromMobile',
    value: function restoreFromMobile(mnemonic) {
      var seedHex = __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.mnemonicToSeedHex(mnemonic);
      var hdNode = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode.fromSeedHex(seedHex, network);
      var account = hdNode.deriveHardened(88).deriveHardened(0);
      var walletList = [];
      for (var i = 0; i < 10; i++) {
        var wallet = new Wallet(account.deriveHardened(i).keyPair);
        wallet.setInfo();
        walletList[i] = {
          wallet: wallet,
          path: i
        };
      }
      return walletList;
    }
  }, {
    key: 'restoreFromWif',
    value: function restoreFromWif(wif) {
      return new Wallet(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.ECPair.fromWIF(wif, network));
    }
  }, {
    key: 'restoreHdNodeFromLedgerPath',
    value: function () {
      var _ref14 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee14(ledger, path) {
        var res, compressed, keyPair, hdNode;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 2:
                res = _context14.sent;
                compressed = ledger.htmlcoin.compressPublicKey(__WEBPACK_IMPORTED_MODULE_11_buffer___default.a.Buffer.from(res['publicKey'], 'hex'));
                keyPair = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.ECPair.fromPublicKeyBuffer(compressed, network);
                hdNode = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode(keyPair, __WEBPACK_IMPORTED_MODULE_11_buffer___default.a.Buffer.from(res['chainCode'], 'hex'));

                hdNode.extend = {
                  ledger: {
                    ledger: ledger,
                    path: path
                  }
                };
                return _context14.abrupt('return', hdNode);

              case 8:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function restoreHdNodeFromLedgerPath(_x41, _x42) {
        return _ref14.apply(this, arguments);
      }

      return restoreHdNodeFromLedgerPath;
    }()
  }, {
    key: 'restoreFromHdNodeByPage',
    value: function restoreFromHdNodeByPage(hdNode, start) {
      var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var walletList = [];
      var extend = hdNode.extend;
      for (var i = start; i < length + start; i++) {
        var wallet = new Wallet(hdNode.derive(i).keyPair, extend);
        wallet.setInfo();
        walletList[i] = {
          wallet: wallet,
          path: i
        };
      }
      return walletList;
    }
  }, {
    key: 'generateMnemonic',
    value: function generateMnemonic() {
      return __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.generateMnemonic();
    }
  }, {
    key: 'connectLedger',
    value: function () {
      var _ref15 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee15() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].connect();

              case 2:
                return _context15.abrupt('return', _context15.sent);

              case 3:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function connectLedger() {
        return _ref15.apply(this, arguments);
      }

      return connectLedger;
    }()
  }, {
    key: 'getLedgerDefaultPath',
    value: function getLedgerDefaultPath() {
      return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].defaultPath;
    }
  }]);

  return Wallet;
}();

/* harmony default export */ __webpack_exports__["a"] = (Wallet);

/***/ }),

/***/ "ZHXn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("call_made")]),_vm._v("\n        "+_vm._s(_vm.$t('send.send_tokens'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.address),callback:function ($$v) {_vm.address=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"address"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs9":""}},[_c('v-text-field',{attrs:{"label":"Amount","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-select',{attrs:{"items":_vm.tokens,"outline":"","background-color":"blue lighten-1","single-line":""},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                 "+_vm._s(data.item.text)+_vm._s(data.item.name ? '(' + data.item.name + ')' : '')+"\n                ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n                 "+_vm._s(data.item.address)+"\n               ")])],1)]}}]),model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=$$v},expression:"symbol"}})],1)],1),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=$$v},expression:"gasPrice"}}):_vm._e(),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Limit","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=$$v},expression:"gasLimit"}}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.repeatAddress),callback:function ($$v) {_vm.repeatAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+_vm._s(this.symbol))]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.address))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.addTokenDialog),callback:function ($$v) {_vm.addTokenDialog=$$v},expression:"addTokenDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          Token\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('send.token_address'),"disabled":_vm.addTokenStep === 2},model:{value:(_vm.addTokenAddress),callback:function ($$v) {_vm.addTokenAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenAddress"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Name","disabled":""},model:{value:(_vm.addTokenName),callback:function ($$v) {_vm.addTokenName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenName"}}):_vm._e()],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Symbol","disabled":""},model:{value:(_vm.addTokenSymbol),callback:function ($$v) {_vm.addTokenSymbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenSymbol"}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.addTokenStep === 1)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":"","loading":_vm.addTokenLoading},on:{"click":_vm.searchAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.search'))+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.addTokenStep === 2)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.addTokenDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ZMJ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    list: function list() {
      return this.$root.notifyList;
    }
  }
});

/***/ }),

/***/ "aR/i":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ayyg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendToContract_vue__ = __webpack_require__("6dsK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c93b3da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__ = __webpack_require__("VVu8");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendToContract_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c93b3da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "b4MT":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_1":81,"OP_TRUE":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_CREATE":193,"OP_CALL":194,"OP_SPEND":195,"OP_GAS_PRICE":245,"OP_VERSION":246,"OP_GAS_LIMIT":247,"OP_DATA":248,"OP_SMALLINTEGER":250,"OP_PUBKEYS":251,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "bEpM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");



var _this = this;




var domain = '';
switch (__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork()) {
  case 'testnet':
    domain = 'https://testnet.htmlcoin.com';
    break;
  case 'mainnet':
    domain = 'https://explorer.htmlcoin.com';
    //domain = 'http://cdexplorer.net/' // test to point to other server - not working
    break;
}
var apiPrefix = domain + '/api';

var _get = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(url) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(apiPrefix + url);

          case 2:
            return _context.abrupt('return', _context.sent.data);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function _get(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _post = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(url, data) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(apiPrefix + url, data);

          case 2:
            return _context2.abrupt('return', _context2.sent.data);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function _post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  getInfo: function getInfo(address) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _get('/addr/' + address);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }))();
  },
  getHrc20: function getHrc20(address) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _get('/erc20/balances?balanceAddress=' + address);

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3);
    }))();
  },
  getTokenInfo: function getTokenInfo(contractAddress) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _get('/erc20/' + contractAddress);

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this4);
    }))();
  },
  getTxList: function getTxList(address) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _get('/txs/?address=' + address);

            case 2:
              return _context6.abrupt('return', _context6.sent);

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this5);
    }))();
  },
  getUtxoList: function getUtxoList(address) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _get('/addr/' + address + '/utxo');

            case 2:
              _context7.t0 = function (item) {
                return {
                  address: item.address,
                  txid: item.txid,
                  confirmations: item.confirmations,
                  isStake: item.isStake,
                  amount: item.amount,
                  value: item.satoshis,
                  hash: item.txid,
                  pos: item.vout
                };
              };

              return _context7.abrupt('return', _context7.sent.map(_context7.t0));

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this6);
    }))();
  },
  sendRawTx: function sendRawTx(rawTx) {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _post('/tx/send', { rawtx: rawTx });

            case 2:
              return _context8.abrupt('return', _context8.sent.txid);

            case 3:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this7);
    }))();
  },
  fetchRawTx: function fetchRawTx(txid) {
    var _this8 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _get('/rawtx/' + txid);

            case 2:
              return _context9.abrupt('return', _context9.sent.rawtx);

            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this8);
    }))();
  },
  getTxExplorerUrl: function getTxExplorerUrl(tx) {
    return domain + '/tx/' + tx;
  },
  getAddrExplorerUrl: function getAddrExplorerUrl(addr) {
    return domain + '/address/' + addr;
  },
  callContract: function callContract(address, encodedData) {
    var _this9 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _get('/contracts/' + address + '/hash/' + encodedData + '/call');

            case 2:
              return _context10.abrupt('return', _context10.sent['executionResult']['output']);

            case 3:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this9);
    }))();
  }
});

/***/ }),

/***/ "cDYc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mnemonic_vue__ = __webpack_require__("TBqZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66d4f577_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__ = __webpack_require__("PDVb");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mnemonic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66d4f577_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eLe2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("sms")]),_vm._v("\n        "+_vm._s(_vm.$t('restore.title'))+"\n      ")],1),_vm._v(" "),_c('center',[_c('span',{staticClass:"subheading grey--text"},[_vm._v(_vm._s(_vm.$t('mnemonic.input_words')))])])],1)]),_vm._v(" "),_c('v-card-text',[_c('mnemonic',{on:{"mnemonic":_vm.restore}})],1),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired},on:{"password":_vm.setPassword}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "eqrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("play_circle_outline")]),_vm._v("\n        "+_vm._s(_vm.$t('Move Actor'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","outline":"","background-color":"blue lighten-1","single-line":"","bottom":""},on:{"change":function($event){_vm.amount=0}},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name,"outline":"","background-color":"blue lighten-1"},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e(),_vm._v(" "),(_vm.payable)?[_c('v-text-field',{attrs:{"label":"amount","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})]:_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "fdWT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendHex_vue__ = __webpack_require__("Sqgs");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6737a262_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendHex_vue__ = __webpack_require__("yz4H");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendHex_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6737a262_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendHex_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gfSB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACWCAYAAADKSPR6AAAdkUlEQVR42u1dCXxU1dW/YZLMZJvsk0z2ZUIWSYKAYMBiFJqCxSIQlH4KDYi2YutWtW4fqPWr1lqU0kbTT6tCW7VFLdJaq1hs1bZKF6nSr4iICxQBQUxk377/mdwXXm7um5lkVuD8f7/zy8y8+95dcv7vnHNXIRgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYjPBjUH19fWZlZeV5mZmZTyQmJr49aNCgTvy+H3IwSDkMOdIPORSCPHtJXFycV2R99pKgfnvj4+O7HA7HB3a7/XdlZWWXQvJxzc7qwIgFJLjd7tqMjIyFNpttG74fPVklKSlpK8h5NT47ITZWDUZUrGROTk4BCHk1rMkH0rIdPcnFa7ETEhLe9Hg8rficzGrCiKiVTE5OHp6amvqkdPGOsvSRLrTPffhbCIljlWGEnZSwlM1Op/Mf0kJYWY7DMt7rEZD4EGKzQ3B56TPFap8Zgu+f4ZpXcL1HEMf1CCyRV/A7xa87ITsCFeNeEuN55nwoXyoDiVKuvbh+UJb5kFonUwysa4d9iLd/k5aWNpjVhhFW95UsZXp6+j8sXFeyntsh/4L8BfJHyB8gL4IIK3HfyoKCgpXl5eUrqZMIZPix3W7vcDgcHVlZWR15eXkdRUVFHYjTOpCmo6qqqqOurq7jlFNO6WhsbOwYMWKEV/D7vbjnFjz3ukAEed9s3Dt06FDvs+iZ9GzKg/KjfCl/KgcsXQeVC+XrQDkfx/XnCgsLV2ZnZ69EviupPpCXZN1eg6yHdGoISt/3gJxPI/4sYvVhhAVQzEJyXzUKSCT9FAT4E6zDTSDgMCh0OvVQNjc3x5+grlwCJBF1zQSpm1NSUhbBor4tuntue72w8PsOXL+roqIinbWIEWokZmRkXKWJKYmkW2FJf+JyuUafzA0EF/9LsLTPSRe3FzlhNdeXlpZ+mdWIEVIXFtayBqR8X2Mpt5G1gFtYws0kxLBhwzzwHJ6n+FJpq/0g5zJ2aRkhQ0lJSSas5T2auLKTLCVctIGQMi7G3dy4AZYtDuSsBTlfUtrrCGLWD5xO5xWCxzgZoUBBQcFkKJU6eeAglO9VuK9jArW6hYWF2YjJhsP6TnE4HJeA1Jfj71w8YyrcwBFIE80YjHqbC2DRmmDZplK5bDbbJfh8EcrcgmvVSJMSIFkTqI64f7PqYXBHECNkgGI+Kfr2wG6H8t4cyP3V1dXlUMjpSH8HyPgcXN/NMlY9gr+H8f0/+P15pLkNcn55eXlpBKtnLyoqagCJ5oIwi1DGP6AMm+XwyFEaVsH3tfj954gfrwVBz4XVywrguZlotx+r7YbnrQZpx7NWMYLXXLv9XU2Hz1tQsNP8WUko8emQ9oSEhHdk3OUd34QFPkCusCSoMR54AN83pqamPgA5G3FrYjjrBfc8IzMz8yLk9TTy3W4uB4i5W46XGmWmOn+GF8hapF8A932wH5eUJmFMomeZ2w7tsAHt1sZaxQjex0tI2KXp9Hk5KyvL6eO25LS0tCk0wRufuyQZt0FZf4vnLYQVImt7DSzILfQd1uoZkGOrfPY+3PcyCD3L7XaHZVobrHQeCPbfKMc6I098fge/LcPf/0F5roNcgzLfhLL8EBbzNZTvU1mPT3D/T+GaD/VFTjzrFNy7ydx2IPsW1OtK1ipG0ICi7tHEl9TzOMjiFhuM0VTc9zepyPshj0IuBdFGNDc3Z5hjNRrfg/vaSDEd0twvrSmt6PgXSHvZ8OHDE0LtneOlcp+cdE+WcCPKeieINMPj8dThe5LZ6qPMOXBLP4+yXI16/1VawQO45ylY9VOs2gFkLkE7vCx6j2luA1mvY61iBA0o8F6zcoE4B6HYv7NKj2tNUL4XRPc0PFLEDihxrfDfG2mDlSqGNVoIAtBUusP4+0ZZWdmEUDoAIMsslIms+EGQbR0I+XXqmAqgY4fc03NRlxWie8reQRD2IatOK6R1oy2eVGLMXbCY81mrGEFDzms1K9eBoqKiFbq0LperApbiAXJf6T58bodLW6MhZUp+fn4urGeqmh2UuRgKfw9eAGSp95B7WVNTE5L5pih3FYi1RnQPX3yIGHMeiJ+hJIunmUs0q4ccBpWcqM8YmuUkY+JdKO81upcOrc8sLi5+XIkxu5D+26xVjFBgr+KO7YZyPqzr7IHF+zIUfoN0YR+lOMustKTsUNgboaCksMshT8J9vBF/08zPITKD1EvJaiK/92B9Lg1BPeJhrRbImHIHnr9A6WG14QVQT8SBl/AUvv8K1nspXjZTcnNzzS8Q8DKeelapQ+swnvNvchTUzPDSyR8yZMjjykutCxabickICdT5n11wBdvVROQOwhp9l9KDlFuh3G1mUtKUPVx/COT9SJgG36HYW0HUx0CCoebQFuScTBaJrCaeR1Y42N0BHMj/XzLvN0E2j3EhJycnDS+N6dRZBfJ8LGNPeglRPP0mXjC3UsxoJid++18qG1lOPGu6mllLS4sLxHxI6fyh5WBMTEZIXNkDisXsoiEQNR0Nn8CyUezpHUiHO9hgXKPZQ2QB6V6hXya1D0r7tJnIUPYqkPNZSo9rz5eXl1cH2YlVL7qHP8g9pjHGeOMaDetQz6tQhjfEsV7oLajPZaNGjerpiS4oKKDJFVuofCD1MjU/Go7Bc7+tth3yYWIyQkLMg6pygYTtmk6fabCG75EbS8pXXV3d455WVlbejN8+Er7XcHbW1dXdbdxD9yMmpKGFI3juxsGDB18STD3q6+tni+5JDR/X1tbOMH4/55xz8pHX3RrPoBc5YdXfQx3GmjqJ7HgRvSWv7dLEmU5acqa2HV4QTExGSNCLmHAru/Lz81VixkFJ59FQB5RvDxT1CpMCp0IZfy00qy5U5QcB/y6ODVfEwbU8B888Kp/5/WAqAQv3Q5nPhyCm2/gdeZKL/bYIYGcCWG4it6PHN3Y4fm/Ua9y4cXkqMeXsKPMzaJH2HaxSjJATk+IkxJPtSkdHPA3IS8tHA/FfM64RCXDPqgAUn1zGtURk417EneMhR6WL+cNgKuHxeFbIfN43k5/CQdG9I0IgW4ZcJrrnzBqx6W+M9gHxixUPwgl3nInJiBwxS0tLVYtpg3W7EpaN4sED+HyVOb7EnxcCJOYaE2mo+/PzeJ6XmLCci4OpxMiRIx8wLCZ1zJgujdVMOLeymHOFaZMtxJ3PGu3zuc99zq0SMy8vTyVmF+rBriwjPMQsKytr13R2zIQ7+7GMMe8wxZhxDQ0N98OifuZH8Q/KziMvJk6caIdlnknX0tLStjU2Nt4QZOfPVGnRd8DS9SxanjFjRhli24f9kZJcarxwaP7rIJNFf0u64EfVGJOI6Xa7mZiMyBCTxuLgFvYhJshzBs1xJUWFwtJeOTWmzh8X9ayqz1ItJg1N4Dk5UrFpFhCNZR7B73+Aq3hqMJUA+UaJ7tlIe10u108NS0/LulDujX6IuR/lusE8GQFxNk3fI0t7BC+l36v5UQ8uXixMTEbkiFlVVdWHmEQ+WjpFBIPybYKFmmHqAPJ2shgzZoS+V5bkAJT8JTk0MpZ6UEX3Xq0/nzlzZkqQ9UjCy+Ej+QL4Jy1HAyHHI4810o02RC3b7uzs7KVyRYnZQ6CYdzeVG9cv0hGzuLi4T4yJtuEYkxEeYtbW1rZr0hEJ54jusb1DspMj05xg+vTptiFDhiwF0agDhkiyqampafnYsWNr5WJsL0Hh0m5EfPYDSfL/wFpdG4J6JMLFflTmsY3GYmEtd8rv+1JTU385bdq082HllklLuAXlfBsvnK/Omzev19RBWlQNQnvdWBoGoumFOmLSMJFqMSFsMRkRJaYgSwf38zHRPYRAS6loup1uYTF18DjNHSm0UgNW9Q3Re1iFrNtLyG9ICOoRR3ngedRrTEMwXktNri3yfTIzM9OY2UOxIllnIqO6siWO5sDC0r4kLf8huNz3CtNkBTMx4Vn0sZgQtpiM0BOTJmJDwdutEsOtm0rHBMhYcyviuevxN1/4X71Bm37Vwjq+Z8prR0lJyXdE6A7rycAzHzTVh5ZvrcALJS+A8tngzlbJqXifyk6f1+QLRuiICXeZLSYjNojZ1tbmgJtIZ5pskq5oF4h5D347TXbs9FqxITflyqLNpOlwItE9A6fnBC9Yp3WwmLOEafxwIBg/fnw67eUj69PzfJRvPW2SRRPnqXNHlscMmlDgpjFVWFva7Nm7qwEtrAb5WoTFcjYiJsrNxGTEBjFlDJYGhafd0jdKRaYOnB1Q/kdhdWjYohGKTStP6hGHTQQpyYrtkGQ5SHEl0v9b7hpAJFgPa3q5lXXyB8S1eSDK7aJ70jmtWNkuY8TtssPnAEi7HsRc5Ha7JyC/IXJlTAN+n0N7EskJ9ZSWjuFbL/fuibfKk4nJiDliypgxEfFXKyweHSuwVVrCw9JKHYXiG3GeMbmAYrZttPteaWnpf40ZM6YaJLlfkocIS8vJrrKIWX2hAC7lEnHsNK730tPTb5BW8Bp8p9lGu2Rs653LS+OSSEN17TmLRa5L3Uybk8H6Nvvbk4iJyYhJYhqgjhsQ4Hp8fAakW2Oz2T42Ok7o2SDBJzRkgd+fBWG/RT20xr20C4BcJrVJEvpdIlU/toD04MXwoEFK5P9/RUVFV/Rc9HhoEkMTnkvne66iYw6kZfRuEkazmCCbIK+jDk/gRXMJypMbSMYWxOTOH0ZsENNAU1NTEu4bCWLcBiI8gZ9o241lQ4cO/W5xcfFpFJvq7gMRXEh/nbSYFHPukj2hpX46bGgCwHJTTPknuKozrBJT/JuXl3cu/n5flu0pxLy/gPX+en19fQ2RuD/1JWI2NDSwxWTENjGDBG318TXEe7RrAK1g2QnrR7vDV4juzZrT5Fhisvw+HFaOVrTslZaZhmGGiQju/M7EZJwMxBRQchfczsuQ/99lmbbTrnog4MW08xxcze/g2lXU8woS/17GtDRv92VcmxDp8loQk11ZRviIOWTIkPZoFIQ276J9hUT3uZRGnLpfHJuUcEjuuODt3U1MTHympqamORplZYvJOGmIKUGxKA25vCL6nqrVs1LF6XS+UFJSYrnvKxOTccIRc+jQoe1RLpMD5ZhJm0LriIn48/Xq6uqzRBRP1mJiMk5GYtJqlmK4qk9aEJPm6KZEs3wTJ050op2YmIyw4XAsEpOmzuXl5dFRee+IY5t80aT31SjjSBHlcyiZmIxwo9cmWiBC16mnntoeCwWD8ufKvYbek2V7KzU19XzR+/yRqBFz2LBhTExGZFzZWCImoaSk5AyykqJ725MOuZJFMDEZTMzourRnwGquluW7E5LNxGQwMaOM8ePHn5GcnHy8EJMnGDBODmJOmDDhuCEm2o52PLiPVYpxwhNz0qRJZ6SlpR0XxMQLhDaG/hGrFOOEJ+aUKVOYmAwmJhOTiclgYvrFuHHjPg+F/4dU/J/0YxE1E5PBxAwhbB6Pp4k6UeLj4/8mjm1b4t2cGbLJbre/mJOTcys+5zAxGUzMMCM/P/8UuK1LBg0aRNt/0PIu7x5C4tiUPOOzsRysMzU1df7y5cvTmJiME5qY0ZgrS/Ni09PTL8BL4QMTGWknA9r1nc5L2SLL92dYS9rT1ry51pGUlBTa+T0z0sRU58qibIfz8vIWs0oxwkLMSK7HbGlpSXG73V+l7S8l0Q6SqwqiTnM6nVmNjY1nOBwOtfPHTVuRgLgfSYLSaV2bQYr6SJWbdzBgRJyYEdxaxIY4kjZapi0mafPoj5E/HVxUYSTwNcEAxDgd1tI49fkQpYP1zWdiMpiYwcEj11zSGSOfIl68jzZvNifwN1zS1taWjzKvli7wXklsJiaDiTlQawk5F4Sk3dMPIN/Hk5KSzMep0y7ouYjjpsMS/lOWj06NHkqHxgrTjnhwhWmv2m2SnO/SaV2RICZv+Mw44YiJuLFUnhx2BJ/XVVZW0vklxv49tuzs7FGIMR+He7tTHFvMTZtxbSosLLxdHhTUg7KysstEd0/u7oyMjMUizFtZMjEZESWmr2P4Qog4WMcxIOR2aS2X0A55xkW4tHVwcX8p9Ifg0tEL+zIzM2n392Qz1+l4BEni1SBnRriJyad9MSJKTN2J0iFGIsjXCoLtpw4fGos0u7AAnT3yqfBxPDsddYDY03wKdCKI6T06HkLbkdSFm5iw2kxMRuSI6fF4wk1M2qJylnRN30cM+TXTtRSU4W61XBo5TCeJmdxfGgu9URLzfRjMM8NNTLjUTExGZIhps9m6SktLw01M2rOnTXSfzrXe5XJdaLqWDvmBH1J6ZfLkyTeYzrukzqTL5LXNsKZfCmcFqAMqLy+vDzHhATAxGSEI9uLiehGTDqLNz8+PBDG/Ii3mhpSUlDbTNepxvVcou/fpZOzYsXPEsd3ybHa7/WppMTfBCk8Mcx2ciHP7DJeg/Xi4hHHcEtMOy0wnc9G0u60g5rfM11CGW0X3IbS+iLlHHo5r9L4mgIw/ksR81+l0nh5uYsLlvlmJe7tQJraYjJBgv6pciNXCTUwbyNgCAnbi825YOsrPOCg2DgQ7F0r/V6FsrWkSOreETvsyn2WZBLeY7qFDaN9yu92l4awA2igTruyd6ksNZWdiMkKCvWqcBGsW9nFMsnYgEh0edNjhcLxWXV19trljJTs7+yvyuPY+xMS9v5GdOz1HsZ911llnIj0tC9uXlJT0S6vzOEOFlpYWV319/SNqfA5LzcRkhJ6YdOQ5YqefhztTGmekk6hhZfbAOn5GVrqsrKxn7JHOxAQBL8D1+0Dgn9G4Jv4+grTfKyoqGkWuq+lx2S6X63cyLt2KR58X7vLX1dXlDx48+HGhTM7IyspiYjJC4FPabHsVd+xgbm7ubyMR3sLtGw5r+SeKC+mY9rS0tIvxOdWUhixiNqyQh6bdgXBlRFjRe1YPHXp7p3R7D8BaPqM8IywoLS11o52Wid5DTbtQ1gWsVYxQuJRqJ8shxHwviAgcb0ckS01NvRTk3ExxIyzOG/hMQyeBuqHJIOXdIMRO6RJ/BHKPiUS7wTIWw91epbzUtpMXwFrFCBpQanWGDVmeVXDVEiORP004hzLfJTuCaPhkDazenXBNR8O11RIU1jMZbuR5eIE8AIu/U5Z7F1zweZFqN5SvEvltUGLMLbDqV7NWMUJhMTcrxKQ47VW5giMSIMtcinIsADm9OxjQxHW8MF4FYRfi9wvhHn4BlvVs/PaFkpKSK2EZH5U7GZAbfhjptsAtnhMJF9bUbvUg4i4lxnwfFvxS1ipG0ICSv6oQk8YB34zkbgASuXBDL4G1/ItBOJoPi7/v4C8t+3qDygVCbBLdJ00fBjH2g6ArYXXPsrKu4XI0aLhHKLOm6KBdlH86axUjaICA3xZ9J4hvw5v/higUxwmSjQBBr4eVXA3iaY96h+XcDQKsgCt5EYhaF4VypoOYi8SxTcIMWU07MrBWMYJGUVFRgylO6xnAh4K9Qmsio1CkOBpKoaVfIOcX8f0quLa3ozzU83pbbm7ulSjXeFjKighbSS9obm5FRcUkvLw+FH3HV38d7okNjJMHKS6Xa6Hy9qfPnVC0h3AtL4plo+ESGh6hHfCyIBkgZqqIQI+xFWClS+TmYOqBv5th7emQXRurFCMkFgpuawWspq4T6NOEhIQHKysrXdxM3p7YPLkJtbqA+wCIuQxWntuJEVIkUG+nJp4jy/kJ4qmlpaWlw07mBqqvrx8LUr4uNPN3aT/c4uLieaxGjHAgF2/8pyzIuYcmiCO2u4JcOdF7OtyJDDvi3CrUmcZZt+hIiVjzk7S0tHuampqSWIUYYXFp7XZ7NWSd6NvbeES6tuTC7UpKSvqgoKDgz/n5+Us8Hs+9zc3N38PfeVlZWefD8rZWV1e3jh49unXcuHGtkyZNap0+fXqPzJ49u3Xu3LkRk1mzZvXkPXXq1NaJEye2orytI0aM8JYTdWhF3HrBmWeeedOYMWO+V1hYeG9FRcXT+P1NuRP8Z7LeujbZB2u5fOTIkdmsPoxwYhBcstMcDscGEcAOAie5HKCpi1HuHGOcTJYTrlkNZIXofbAPk/GY50Abgd0Py5rO6sKIKIYPH+6uqqq6A7HlRtE90+YIk9Iba6+tqan5JmsII6qubXl5eWN2djYdjUcD6p/ImIumzO2X25KEWmiu7NFABWU4EuoyyHrtk/Wkne920lRAtMNdovdetgxGVJFIc2dpiZbT6VyYlJS0JCMjYwXiKzqVa1VKSsoqxKWrEHOtio+Pp6VQAxJYI5o8/0+32/3vQIXSDzQ/m83mFSo3lR/1W0VLuSAv4rdfwF19hNZ6on4X1tbWulkNGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAxGVHAe5HY/cjmEThTWHbk2X0l7gelaQwDPNuRi031X9+O+KsgCze8FmrJO0KSb7Kd9hvvJ/2YInaqsOyfym0ratgH8P27VpKmxaAfCtf1oO0Nma/KIk/9zqsODkBchSyA3QaZBrM7qvNKHPhioU9LcJnqfD+NLpxo15S9Rnp+kSdNiuj7Doh1OU54z2iLd5EgQkxo90E2A6Ui2IuV+Nc0TSgME+uxXTPf158iCs2Vjqb8vVcqZA+nUpPN3QvOcfpRlvnLvVuX68wP8f8Qpac7VpJlgkWcgskpD/FV+7lkn216F7n93qpJmiiZNSoA6dZHm+mjl+VmaNN8xXf+FRZ3alecssUjXEWvE1ClXLBDTDlmruTbW9Mz7NdevD6B95vSzfaYc58Qc3s97ZwZAzLWKhY1VYm5QPIatsUbMxZCF0n3RFSwtCGKukQqqykI//9znLcR4Gw+zUIgE6aKo1+jsx/gBEnOZfJvqLPCzxzEx46VXZGUhdb9TG7gCeKneeRwQ86gpJKn1kSZqxDQ30iLN9cwgiDk+gDJt8GFNfWGBJr9rJAnV32sDfOYcH4owSKOwW6NMzCHyZWXIfE3auUoaj7y3TZP2RRkGEOi4hIc1aRYGQExzu8UyMS+SaS6NZWIWaKzmsiBd2XAS0y4tsj8LcW0/2meOH0X4W4wRU4VOkcdYpNW5+xVKmmRNvQINQzZI3Yo1YprL/LBM84TF9agSs9PCTevUNEIoYszXA4hTdPJFTX1O9XPPnwN0YX0Rc6HsSXxFc+1XxzEx/6gJBXR4TKMXgf7vfhCDxFysvFhtiv4vjvXOn6WarulQEHPtAIlp1W0938c9Nf1sn/52/nzxOCZmoOX9vuaZWf343/04xog5Tfmu6u3U46FXlt4k7hgnZqKFS3vNANqnP8T8VgwMlwRDzA8DDCEe0jzTYfG/mx/A0Eu0iVmlWMgPlc+NsULMTNmbSWOWl2uufzUIYrbJuMUsBX6IuUZzT4XwfXbjLZq8y0NEzFXSnfsZ5G7IPI0nMVBiLtTkp7bPvH6QLRhXttPC7X+lH64s/R/KQkjMyZrr05XyNWjS3OiDmJVKTGmW+2OJmClKsO9rSCCWOn8iRczRAd47EGJerMnvG36IcVQZshgoMe+yeJGaMUKT5td+iBmI5xEoMav9xPVCxv++xpd1xLTqhb0glohJlaApTDRV6xnhe1YNEzNwYnYK6/HY63wo/lE5bvoNjVVTe4KDIabV2N09kC9Lq6PrFJwRADHjJIGDJWaCsJ74crkPy1fph5hWdS+IJWL6k9lMzAER05c8bLrv2X7+P1pDREzCon7m3a7EwFbENIbfOoMkppDDXf0p42Llfh0xdTN91sn0xwUxl4neE46ZmKEnZpmwnmnj675QEDNR+B6ANwvpziA//7tblOsXhICYDum+BlJG6p9ID4CYQvSdG7somsTsCKBy1DP1HOTrCil1jfiYH2KeHSFi3iSsp1v1B7M1zzk9wHs/HCAxCRlyWGKDD4WbEUAZLhzgi4U6VB4R1nNfLxf61UbqC+UmTRqdu5kcoE4ZoBcCrWR5XVhPZqCZYPYA8jcmUbRZxKUNmg4hBsM7PEWrYEZJqx8f4fxp+IHmIteI3tMxYwWZslPoNNlODlYZBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGI/z4fyiE1yUtdN/hAAAAAElFTkSuQmCC"

/***/ }),

/***/ "gj2+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_ufg_win.9072f3e.jpg";

/***/ }),

/***/ "igel":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ip/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.showWarning),callback:function ($$v) {_vm.showWarning=$$v},expression:"showWarning"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('warning.title')))]),_vm._v(" "),_c('v-card-text',[_c('ol',_vm._l((_vm.total),function(dummy,i){return (_vm.hasWarning(i))?_c('li',[_vm._v("\n            "+_vm._s(_vm.$t('warning.list.' + i))+"\n          ")]):_vm._e()}))]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","flat":""},nativeOn:{"click":function($event){return _vm.close($event)}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "j8CV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  common: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    search: 'Buscar',
    copy: 'COPIAR',
    next: 'SIGUIENTE',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Htmlcoin Mainnet',
    menu: {
      create: 'GENERAR NUEVA BILLETERA',
      create_from_mnemonic: 'CREATE FROM MNEMONIC', // ignoring - unused 10-nov-2022
      restore_from_mnemonic: 'RESTORE FROM MNEMONIC', // ignoring - unused 10-nov-2022
      restore_from_wif: 'RESTAURAR DE LLAVE PRIVADA',
      restore_from_mobile: 'RESTORE FROM MOBILE WALLET', // ignoring - unused 10-nov-2022
      restore_from_key_file: 'RESTORE WALLET FROM KEY FILE', // ignoring - unused 10-nov-2022
      restore_from_ledger: 'RESTORE FROM LEDGER', // ignoring - unused 10-nov-2022
      view: 'DETALLES DE CRIPTO-BILLETERA',
      dump_as_key_file: 'DUMP AS A KEY FILE', // ignoring - unused 10-nov-2022
      transactions: 'TRANSACCIONES',
      safe_send: 'SAFE SEND', // ignoring - unused 10-nov-2022
      send: 'SEND', // ignoring - unused 10-nov-2022
      request_payment: 'REQUEST PAYMENT', // ignoring - unused 10-nov-2022
      create_contract: 'CREATE CONTRACT', // ignoring - unused 10-nov-2022
      send_to_contract: 'SEND TO CONTRACT', // ignoring - unused 10-nov-2022
      call_contract: 'CALL CONTRACT', // ignoring - unused 10-nov-2022
      settings: 'CONFIGURACION',
      create_token: 'TokenFarm', // ignoring - unused 10-nov-2022
      dapp_myoffspring: 'MyOffspring' // ignoring - unused 10-nov-2022
      // TO-DO: add entries for ActorQuery and ActorMove
    },
    info: {
      address: 'Direccion',
      balance: 'Balance',
      unconfirmed_balance: 'Balance sin confirmar',
      priv_key: 'Llave Privada'
    },
    notify: {
      success: 'Exitosa',
      fail: 'Fallida',
      copy: 'Copiar',
      password: 'Clave',
      is_required: 'se requiere',
      parse: 'Parse', // ignoring - dev specific no translation 10-nov-2022
      file: 'Archivo',
      password_is_not_same_as_the_old_one: 'Password is not the same as the old one.', // TO-DO:
      mnemonics_are_not_same_as_the_words_should_remember: 'The mnemonics are not same as the words you should remember.', // TO-DO:
      mnemonics_can_not_restore: 'Those mnemonics can not restore a wallet! Please check and try again.', // TO-DO:
      address_is_not_same_as_the_old_one: 'This address is not the same as the old one.', // TO-DO:
      from_address_is_not_same_as_the_wallet: 'The from address is not same as the wallet address.', // TO-DO:
      restore_wif_fail: 'Cannot restore a wallet from this WIF.', // TO-DO:
      the_key_file_is_not_a_valid_format: 'The key file is not in a valid format.', // TO-DO:
      restore_key_file_fail: 'Restore from key file failed. Maybe the password is not correct.', // TO-DO:
      connect_ledger_fail: 'Fail to connect to Ledger. Please reconnect your ledger and try again.', // TO-DO:
      token_contract_address_is_not_exists: 'Token contract address does not exist! Please confirm and try again.' // TO-DO:
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline'
    }
  },
  mnemonic: {
    input_words: 'Please input the mnemonic words', // ignoring - unused 10-nov-2022
    label: 'M' // ignoring - unused 10-nov-2022
  },
  password: {
    enter: 'Escriba su clave',
    password: 'Clave'
  },
  file_reader: {
    upload: 'Upload' // ignoring - unused 10-nov-2022
  },
  file_creator: {
    download: 'Please click on the button below to download your key file.' // ignoring - unused 10-nov-2022
  },
  ledger: {
    comm_fail: 'Fail to connect Ledger. Please reconnect your ledger and try again.' // ignoring - unused 10-nov-2022
  },
  derive_path: {
    title: 'Please choose a derive path', // ignoring - unused 10-nov-2022
    default: 'Default path', // ignoring - unused 10-nov-2022
    add_custom: 'Add custom derive path', // ignoring - unused 10-nov-2022
    edit_custom: 'Edit custom derive path', // ignoring - unused 10-nov-2022
    del_custom: 'Do you confirm to delete this path?', // ignoring - unused 10-nov-2022
    path_name: 'Path name', // ignoring - unused 10-nov-2022
    path: 'Path', // ignoring - unused 10-nov-2022
    prev_10: 'Prev 10 Address', // ignoring - unused 10-nov-2022
    next_10: 'Next 10 Address' // ignoring - unused 10-nov-2022
  },
  safe_send: {
    title: 'SAFE SEND', // ignoring - unused 10-nov-2022
    from_address: 'From Address', // ignoring - unused 10-nov-2022
    to_address: 'To Address', // ignoring - unused 10-nov-2022
    amount: 'Amount', // ignoring - unused 10-nov-2022
    fee: 'Fee', // ignoring - unused 10-nov-2022
    info: 'You need two computers (one online and one offline) and a removeable storage device to finish a safe-send. If you follow the tips below, you will not risk leaking your private key. For the offline computer, please in "Settings"-"Mode" choose "offline", and then restore your wallet.', // ignoring - unused 10-nov-2022
    info1_online: 'Please finish the form, then save the file and copy to the offline computer. And the finish step 2 on the offline computer', // ignoring - unused 10-nov-2022
    info1_offline: 'Please finish step 1 on the online computer and copy the file from online computer and then go to step 2', // ignoring - unused 10-nov-2022
    info2_online: 'Please finish this step on offline computer, and copy the file from offline computer and then go to step 3', // ignoring - unused 10-nov-2022
    info2_offline: 'Please upload the file copy from online computer, and finish the signature, and then save the file and copy back to online computer', // ignoring - unused 10-nov-2022
    info3_online: 'Please upload the file from the offline computer, and then finish the safe-send', // ignoring - unused 10-nov-2022
    info3_offline: 'Please finish this step on the online computer' // ignoring - unused 10-nov-2022
  },
  send: {
    send_tokens: 'SEND', // ignoring - unused 10-nov-2022
    enter_address: 'Please enter the address again', // ignoring - unused 10-nov-2022
    going_to_send: 'Do you confirm sending ', // ignoring - unused 10-nov-2022
    to_address: 'to address ', // ignoring - unused 10-nov-2022
    token_address: 'Token Contract Address' // ignoring - unused 10-nov-2022
  },
  request_payment: {
    title: 'REQUEST PAYMENT' // ignoring - unused 10-nov-2022
  },
  create_token: {
    title: 'CREATE TOKEN', // ignoring - unused 10-nov-2022
    name: 'Token Name', // ignoring - unused 10-nov-2022
    symbol: 'Token Symbol', // ignoring - unused 10-nov-2022
    decimal: 'Decimals (It\'s recommended to set decimals to 8)', // ignoring - unused 10-nov-2022
    total_supply: 'Total Supply (UNIT: 1 Token)', // ignoring - unused 10-nov-2022
    confirm: 'Do you confirm the creation of this Token?' // ignoring - unused 10-nov-2022
  },
  create_contract: {
    title: 'CREATE CONTRACT', // ignoring - unused 10-nov-2022
    confirm: 'Do you confirm to publish this contract?', // ignoring - unused 10-nov-2022
    compiler: 'Compiler' // ignoring - unused 10-nov-2022
  },
  send_to_contract: {
    title: 'SEND TO CONTRACT', // ignoring - unused 10-nov-2022
    confirm: 'Do you confirm?' // ignoring - unused 10-nov-2022
  },
  call_contract: {
    title: 'CALL CONTRACT', // ignoring - unused 10-nov-2022
    result: 'Result' // ignoring - unused 10-nov-2022
  },
  // TO-DO: create entries for Dapps ActorQuery and ActorMove 10-nov-2022
  create: {
    title: 'GENERATE NEW WALLET' // ignoring - unused 10-nov-2022
  },
  create_mnemonic: {
    title: 'GENERATE NEW WALLET FROM MNEMONIC', // ignoring - unused 10-nov-2022
    remember: 'Please remember the following mnemonics:', // ignoring - unused 10-nov-2022
    remembered: 'I remember it. Let\'s check!' // ignoring - unused 10-nov-2022
  },
  restore: {
    title: 'RESTORE WALLET FROM MNEMONIC', // ignoring - unused 10-nov-2022
    mnemonic_warning: 'The input words are not bip39 mnemonics. If your address is generated by this wallet, please cancel this dialog and then check your words (no spaces, no capital letters, etc.). If you have double checked your words, you can continue.' // ignoring - unused 10-nov-2022
  },
  restore_wif: {
    title: 'RESTAURAR BILLETERA CON LLAVE PRIVADA',
    priv_key: 'PK'
  },
  restore_mobile: {
    title: 'RESTORE FROM MOBILE WALLET' // ignoring - unused 10-nov-2022
  },
  restore_key_file: {
    title: 'RESTORE WALLET FROM THE KEY FILE', // ignoring - unused 10-nov-2022
    password_title: 'Please input you password to decrypt the wallet' // ignoring - unused 10-nov-2022
  },
  restore_ledger: {
    title: 'RESTORE FROM LEDGER', // ignoring - unused 10-nov-2022
    usage: 'Please ensure your firmware and app are the newest version. Plugin your Ledger, open Html APP, and then click the "CONNECT" button below try to connect.', // ignoring - unused 10-nov-2022
    download: 'No Html APP? Please install it follow this https://www.ledgerwallet.com/apps/manager', // ignoring - unused 10-nov-2022
    connect: 'CONNECT' // ignoring - unused 10-nov-2022
  },
  view: {
    title: 'INFO DE CRIPTO-BILLETERA'
  },
  view_tx: {
    title: 'TRANSACCIONES',
    recent: 'Transacciones mas recientes (10)',
    tx: 'Tx: ',
    mined_at: 'Mineada el ',
    total_in: 'TOTAL IN: ',
    fee: 'TARIFA: ',
    total_out: 'TOTAL OUT: '
  },
  dump_as_key_file: {
    title: 'DUMP AS A KEY FILE', // ignoring - unused 10-nov-2022
    password_title: 'Please input a password to encrypt your key file:', // ignoring - unused 10-nov-2022
    warning: 'Please remember the password. If you lose it, the key file cannot be decrypted anymore.' // ignoring - unused 10-nov-2022
  },
  config: {
    title: 'CONFIGURACION',
    lan: 'Idioma',
    network: 'Red',
    mode: 'Modo'
  },
  warning: {
    title: 'IMPORTANTE',
    list: [// TO-DO: all bellow to be translated 10-nov-2022
    'We cannot recover your funds if you visit a phishing site or lose your backups. Please make sure to keep backups of your private keys/seed words safe.', 'We do not store your private keys and/or seed words on this web wallet.', 'We are not responsible for any lost funds or damages related to the use of this platform.', 'You as a user, are entirely responsible for your funds and your own security.', 'Please make sure to utilize updated operating systems and antivirus programs/services.', 'Please keep your private keys PRIVATE, do not provide them to anyone.', 'If you use Restore from Mnemonic, the seed words and password must be exactly right or the wallet will create a new address. When using Restore from Mnemonic, confirm you have the correct address.']
  }
});

/***/ }),

/***/ "kGMh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"light":""}},[_c('v-toolbar',{class:_vm.headerClass,attrs:{"app":"","fixed":"","height":"82px","clipped-left":""}},[_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("apps")])],1),_vm._v(" "),_c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_actorquery')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("nFb8")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_actormove')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("Miy5")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_actor')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("Sqob")}})])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"title"},[_c('span',{staticClass:"text"},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("V0p5"),"alt":"HexaLand Web"},on:{"click":function($event){_vm.changeView('home')}}})])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!this.wallet)?_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("open_in_browser")])],1),_vm._v(" "),_c('v-list',[_vm._l((_vm.loginItems),function(loginItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[loginItem.name]),expression:"!notShow[loginItem.name]"}],key:loginItem.title,on:{"click":function($event){_vm.changeView(loginItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(loginItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(loginItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.changeView('settings')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Settings")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("settings")])],1)],1)],2)],1):_vm._e(),_vm._v(" "),(this.wallet)?_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("account_balance_wallet")])],1),_vm._v(" "),(this.wallet)?_c('v-toolbar',{attrs:{"color":"light-blue darken-4","dark":""}},[_c('center',[_c('span',{staticClass:"caption cursor",on:{"click":function($event){_vm.changeView('view')}}},[_c('b',[_vm._v("\n                "+_vm._s(this.wallet.info['address'])+"\n              ")]),_vm._v(" "),_c('br'),_vm._v("\n                "+_vm._s(this.wallet.info['balance'])+"\n            ")])])],1):_vm._e(),_vm._v(" "),_c('v-list',[_vm._l((_vm.walletItems),function(walletItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[walletItem.name]),expression:"!notShow[walletItem.name]"}],key:walletItem.title,on:{"click":function($event){_vm.changeView(walletItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(walletItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(walletItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_vm._l((_vm.smartContractItems),function(smartContractItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[smartContractItem.name]),expression:"!notShow[smartContractItem.name]"}],key:smartContractItem.title,on:{"click":function($event){_vm.changeView(smartContractItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(smartContractItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(smartContractItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.changeView('settings')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Settings")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("settings")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.logout_dialog = true}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Log Out")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("power_settings_new")])],1)],1)],2)],1):_vm._e(),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('main',[_c('v-content',[_c('v-container',{attrs:{"fluid":"","fill-height":"","justify-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":"","offset-xs1":""}},[_c('home',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['home']),expression:"isCurrent['home']"}],on:{"openDapp":_vm.openDapp,"openURL":_vm.openURL}}),_vm._v(" "),_c('restore-wif',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_wif']),expression:"isCurrent['restore_from_wif']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),(_vm.isCurrent['view'])?_c('view-wallet',{attrs:{"view":_vm.isCurrent['view']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['transactions'])?_c('view-tx',{attrs:{"view":_vm.isCurrent['transactions']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['send'])?_c('send',{on:{"send":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['sendhex'])?_c('send-hex',{on:{"sendhex":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_myoffspring'])?_c('dapp-myoffspring'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_biffyplutonium'])?_c('dapp-biffy-plutonium'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_actorquery'])?_c('dapp-actor-query'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_actormove'])?_c('dapp-actor-move'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_actor'])?_c('dapp-actor'):_vm._e(),_vm._v(" "),(_vm.isCurrent['send_to_contract'])?_c('send-to-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['settings'])?_c('config'):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"290"},model:{value:(_vm.logout_dialog),callback:function ($$v) {_vm.logout_dialog=$$v},expression:"logout_dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("Log out?")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"red darken-1","flat":"flat"},on:{"click":function($event){_vm.logout_dialog = false}}},[_vm._v("\n            No\n          ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","flat":"flat"},on:{"click":_vm.logout}},[_vm._v("\n            Yes\n          ")])],1)],1)],1),_vm._v(" "),_c('notify'),_vm._v(" "),_c('warning')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "kuet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"fixed","bottom":"0px","width":"100%","z-index":"10000"}},_vm._l((_vm.list),function(info,id){return _c('v-alert',{key:id,attrs:{"color":info.type,"dismissible":""},model:{value:(info.show),callback:function ($$v) {_vm.$set(info, "show", $$v)},expression:"info.show"}},[(info.isHtml)?[_c('span',{domProps:{"innerHTML":_vm._s(info.msg)}})]:[_vm._v("\n      "+_vm._s(info.msg)+"\n    ")]],2)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "mZxO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_ActorQuery_vue__ = __webpack_require__("N2nY");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e2105d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_ActorQuery_vue__ = __webpack_require__("80Z7");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_ActorQuery_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e2105d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_ActorQuery_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mqcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('a',{staticClass:"roundbtn-float noHover",staticStyle:{"--deltax":"-050.0%","--deltay":"-050.0%","--bg-color":"#000","--px-width":"100px","display":"none"},attrs:{"id":"place_holder"}}),_vm._v(" "),_c('a',{staticClass:"roundbtn-float noHover",staticStyle:{"--deltax":"-130.0%","--deltay":"155.0%","--bg-color":"#444","--px-width":"65px"},attrs:{"id":"title1_movact"}},[_vm._v("Move")]),_vm._v(" "),_c('a',{staticClass:"roundbtn-float noHover",staticStyle:{"--deltax":"030.0%","--deltay":"155.0%","--bg-color":"#444","--px-width":"65px"},attrs:{"id":"title2_movact"}},[_vm._v("Actor")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"-050.0%","--deltay":"-050.0%","--bg-color":"#161213"},attrs:{"id":"hex_cntr"},on:{"click":function($event){_vm.send_moveActor()}}},[_vm._v("+")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"-050.0%","--deltay":"-151.0%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr1),attrs:{"id":"hex_qdr1"},on:{"click":function($event){_vm.set_moveToQuadrant('1')}}},[_vm._v("1")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"+026.0%","--deltay":"-100.5%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr2),attrs:{"id":"hex_qdr2"},on:{"click":function($event){_vm.set_moveToQuadrant('2')}}},[_vm._v("2")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"+026.0%","--deltay":"000.5%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr3),attrs:{"id":"hex_qdr3"},on:{"click":function($event){_vm.set_moveToQuadrant('3')}}},[_vm._v("3")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"-050.0%","--deltay":"+051.0%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr4),attrs:{"id":"hex_qdr4"},on:{"click":function($event){_vm.set_moveToQuadrant('4')}}},[_vm._v("4")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"-126.0%","--deltay":"000.5%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr5),attrs:{"id":"hex_qdr5"},on:{"click":function($event){_vm.set_moveToQuadrant('5')}}},[_vm._v("5")]),_vm._v(" "),_c('a',{staticClass:"hexbtn-float",staticStyle:{"--deltax":"-126.0%","--deltay":"-100.5%","--bg-color":"#161213"},style:(_vm.flag_hex_qdr6),attrs:{"id":"hex_qdr6"},on:{"click":function($event){_vm.set_moveToQuadrant('6')}}},[_vm._v("6")]),_vm._v(" "),_c('v-card-text',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_c('v-form',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_c('v-select',{attrs:{"items":_vm.parsedAbi_send,"label":"Method_send","outline":"","background-color":"blue lighten-1","single-line":"","bottom":""},on:{"change":function($event){_vm.amount=0}},model:{value:(_vm.method_send),callback:function ($$v) {_vm.method_send=$$v},expression:"method_send"}}),_vm._v(" "),(_vm.payable)?[_c('v-text-field',{attrs:{"label":"amount","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})]:_vm._e()],2)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('a',{staticClass:"roundbtn-float",staticStyle:{"--deltax":"-000.0%","--deltay":"280.0%","--bg-color":"#161213","--px-width":"100px"},attrs:{"id":"query_TXstatus"},on:{"click":function($event){_vm.get_TXstatus()}}},[_vm._v("TX status")]),_vm._v(" "),_c('a',{staticClass:"roundbtn-float noHover",staticStyle:{"--deltax":"-250.0%","--deltay":"-000.0%","--bg-color":"#444","--px-width":"100px"},attrs:{"id":"title3_info"}},[_vm._v("Actor Id")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.actorId),expression:"actorId"}],staticClass:"roundbtn-float",staticStyle:{"--deltax":"-250.0%","--deltay":"105.0%","--bg-color":"#161213","--px-width":"100px"},attrs:{"type":"text"},domProps:{"value":(_vm.actorId)},on:{"input":function($event){if($event.target.composing){ return; }_vm.actorId=$event.target.value}}}),_vm._v(" "),_c('a',{staticClass:"roundbtn-float",staticStyle:{"--deltax":"-250.0%","--deltay":"210.0%","--bg-color":"#161213","--px-width":"100px"},attrs:{"id":"query_actor"},on:{"click":function($event){_vm.call_locateActor()}}},[_vm._v("Query")]),_vm._v(" "),_c('a',{staticClass:"roundbtn-float noHover",staticStyle:{"--deltax":"-050.0%","--deltay":"-050.0%","--bg-color":"#000","--px-width":"100px","display":"none"},attrs:{"id":"place_holder"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "nFb8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/actorquery_menu_btn.0b469c7.png";

/***/ }),

/***/ "owsU":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pEtf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["current"],
  data: function data() {
    return {};
  },

  methods: {
    openDapp: function openDapp(name) {
      this.$emit("openDapp", name);
    },
    openURL: function openURL(url) {
      this.$emit("openURL", url);
    }
  }
});

/***/ }),

/***/ "pbl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      password: ''
    };
  },

  props: ['open', 'validate', 'notEmpty', 'title'],
  computed: {
    dialog: function dialog() {
      return this.open;
    },
    headline: function headline() {
      return this.title ? this.title : 'password.enter';
    }
  },
  methods: {
    confirmPassword: function confirmPassword() {
      var password = this.password;
      if (this.notEmpty && this.password === '') {
        this.$root.error('Password is required!');
        return false;
      }
      this.$emit('password', password);
      this.password = '';
      return true;
    }
  },
  watch: {
    open: function open(_open) {
      var _this = this;

      if (_open) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          return _this.$refs.passwordInput.focus();
        });
      }
    }
  }
});

/***/ }),

/***/ "qoEf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("list")]),_vm._v("\n        "+_vm._s(_vm.$t('view_tx.title'))+"\n    ")],1),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":""},on:{"click":_vm.refreshWallet},slot:"activator"},[_c('v-icon',{attrs:{"color":"blue accent-4"}},[_vm._v("\n          refresh\n        ")])],1),_vm._v(" "),_c('span',[_vm._v("Refresh")])],1)],1),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v(_vm._s(_vm.$t('view_tx.recent')))]),_vm._v(" "),_vm._l((_vm.txList.txs),function(tx,id){return _c('div',{key:id},[_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs10":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.tx'))+"\n          "),_c('v-btn',{attrs:{"small":"","light":"","href":_vm.node.getTxExplorerUrl(tx.txid),"target":"_blank"}},[_vm._v("\n            "+_vm._s(tx.txid)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.mined_at'))+_vm._s(new Date(tx.time * 1000).toString())+"\n        ")])],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[_vm._v("\n            "+_vm._s(vtx.addr)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":"","text-xs-right":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n            "+_vm._s(vtx.value)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n             HTML\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},[_c('v-icon',[_vm._v("\n            arrow_right_alt\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.scriptPubKey.addresses.join(' '))+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","text-xs-right":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.value)+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              HTML\n            ")]:_vm._e()],2)}))],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px solid"}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_in'))+_vm._s(tx.valueIn)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.fee'))+_vm._s(tx.fees)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_out'))+_vm._s(tx.valueOut)+"\n          ")])],1)],1)],1)})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qoVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__en__ = __webpack_require__("LVcC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__es__ = __webpack_require__("j8CV");

//import zh from './zh'
//import ko from './ko'


var locales = [
// 'es',
// 'zh',
// 'ko'
'en'];
var messages = {
  // es, 
  // zh,
  // ko
  en: __WEBPACK_IMPORTED_MODULE_0__en__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = ({
  locales: locales,
  messages: messages
});

/***/ }),

/***/ "r1Qh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_BiffyPlutonium_vue__ = __webpack_require__("Rz30");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b283584a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__ = __webpack_require__("JzVn");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_BiffyPlutonium_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b283584a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "r1po":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t7Gd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_manure.fd0ff29.jpg";

/***/ }),

/***/ "tUk+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Restore_vue__ = __webpack_require__("4tbZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_157df904_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__ = __webpack_require__("eLe2");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Restore_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_157df904_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "v1kD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("info")]),_vm._v("\n          "+_vm._s(_vm.$t('view.title'))+"\n      ")],1),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":""},on:{"click":_vm.refreshWallet},slot:"activator"},[_c('v-icon',{attrs:{"color":"blue accent-4"}},[_vm._v("\n            refresh\n          ")])],1),_vm._v(" "),_c('span',[_vm._v("Refresh")])],1)],1),_vm._v(" "),_c('v-card-text',[_vm._l((_vm.infoLabel),function(item,i){return _c('v-layout',{key:i},[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.' + item.label))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":""},model:{value:(_vm.info[item.name]),callback:function ($$v) {_vm.$set(_vm.info, item.name, $$v)},expression:"info[item.name]"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[(item.copy)?_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.info[item.name]),expression:"info[item.name]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")]):_vm._e()],1)],1)}),_vm._v(" "),(_vm.privKey !== null)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.priv_key'))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":"","type":_vm.showPriv ? 'text' : 'password',"append-icon":_vm.showPriv ? 'visibility_off' : 'visibility'},on:{"click:append":function($event){_vm.showPriv = !_vm.showPriv}},model:{value:(_vm.privKey),callback:function ($$v) {_vm.privKey=$$v},expression:"privKey"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPriv),expression:"showPriv"},{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.privKey),expression:"privKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")])],1)],1):_vm._e(),_vm._v(" "),(_vm.wallet.info.hrc20.length > 0)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            HRC20 Tokens\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-card',{staticStyle:{"border-bottom":"2px solid #000","padding":"5px 10px"},attrs:{"flat":"","tile":"","dark":"","color":"blue-grey darken-3"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("NAME")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("BALANCE")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("CONTRACT ADDRESS")])])])],1)],1),_vm._v(" "),_vm._l((_vm.wallet.info.hrc20),function(token,i){return _c('v-card',{key:i,staticStyle:{"border-bottom":"2px solid #000","padding":"15px 10px"},attrs:{"flat":"","tile":"","dark":"","color":'light-blue darken-'+(i%2+3)}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":""}},[_vm._v(_vm._s(token.contract.name))]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_vm._v(_vm._s(token.amount / Math.pow(10, token.contract.decimals))+" "+_vm._s(token.contract.symbol))]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('span',{staticClass:"caption"},[_vm._v(_vm._s(token.contract.contract_address))])])],1)],1)})],2)],1):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "v3+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_config__ = __webpack_require__("6+u4");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      total: 6,
      showWarning: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].get('showWarning', true)
    };
  },

  methods: {
    hasWarning: function hasWarning(i) {
      var key = 'warning.list.' + i;
      return this.$t(key) !== key;
    },
    close: function close() {
      this.showWarning = false;
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('showWarning', this.showWarning, 86400);
    }
  }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localstorage_logger__ = __webpack_require__("lY3B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localstorage_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_localstorage_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Notify__ = __webpack_require__("QSGr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Warning__ = __webpack_require__("3ZG3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_controllers_Home__ = __webpack_require__("KSlh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_controllers_Restore__ = __webpack_require__("tUk+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_controllers_RestoreWif__ = __webpack_require__("Ts+B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_controllers_View__ = __webpack_require__("AySs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_controllers_ViewTx__ = __webpack_require__("Rapo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_controllers_Send__ = __webpack_require__("9Z0V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_controllers_SendHex__ = __webpack_require__("fdWT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_controllers_Dapp_MyOffspring__ = __webpack_require__("NysP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_controllers_Dapp_ActorQuery__ = __webpack_require__("mZxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_controllers_Dapp_ActorMove__ = __webpack_require__("JERy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_controllers_Dapp_Actor__ = __webpack_require__("Ss9u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_controllers_Dapp_BiffyPlutonium__ = __webpack_require__("r1Qh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_controllers_SendToContract_vue__ = __webpack_require__("ayyg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_controllers_Config__ = __webpack_require__("/kv9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_libs_i18n__ = __webpack_require__("KUFz");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//Components



// import CreateWallet from "controllers/Create";
// import CreateMnemonic from "controllers/CreateMnemonic";


// import RestoreMobile from "controllers/RestoreMobile";
// import RestoreKeyFile from "controllers/RestoreKeyFile";
// import RestoreLedger from "controllers/RestoreLedger";


// import SafeSend from "controllers/SafeSend";

 // aperez 8Nov2021
// import RequestPayment from "controllers/RequestPayment";
// import DumpKeyFile from "controllers/DumpKeyFile";

//import DappSilverGrain from "controllers/Dapp-SilverGrain";



//import DappSilverDex from "controllers/Dapp-SilverDex";

// import DappAltProof from "controllers/Dapp-AltProof";

// import CreateContract from "controllers/CreateContract";

//import CallContract from "controllers/CallContract.vue";





var log = __WEBPACK_IMPORTED_MODULE_2_localstorage_logger___default()({
  maxLogSizeInBytes: 500 * 1024 // 500KB
});

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app",
  i18n: __WEBPACK_IMPORTED_MODULE_21_libs_i18n__["a" /* default */],
  data: function data() {
    return {
      wallet: false,
      walletAddress: '',
      walletBalance: '',
      current: "home",
      logout_dialog: false,
      network: __WEBPACK_IMPORTED_MODULE_19_libs_config__["a" /* default */].getNetwork(),
      mode: __WEBPACK_IMPORTED_MODULE_19_libs_config__["a" /* default */].getMode(),
      log: log,
      notifyList: {},
      loginItems: [
      /*
              {
                title: "Restore from Key File",
                name: "restore_from_key_file",
                action: "cloud_upload"
              },
      */
      {
        title: "Restore from PrivateKey",
        name: "restore_from_wif",
        action: "create"
      }],
      walletItems: [{
        title: "View Wallet Info",
        name: "view",
        action: "info"
      }, {
        title: "View Wallet Txs",
        name: "transactions",
        action: "list"
      }, {
        title: "Send",
        name: "send",
        action: "call_made"
      }, {
        title: "SendHex",
        name: "sendhex",
        action: "call_made"
      }],
      smartContractItems: [{
        title: "Send to Contract",
        name: "send_to_contract",
        action: "play_circle_outline"
        /*
          {
            title: "Call Contract",
            name: "call_contract",
            action: "pageview"
          },
           {
            title: "Create Contract",
            name: "create_contract",
            action: "build"
          }
        */
      }]
    };
  },

  computed: {
    isCurrent: function isCurrent() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, this.current, true);
    },
    notShow: function notShow() {
      return {
        // restore_from_ledger: this.network !== "mainnet",
        view: this.mode === "offline" || !this.wallet,
        transactions: this.mode === "offline" || !this.wallet,
        wallet: this.mode === "offline" && !this.wallet,
        // safe_send: this.mode === "offline" && !this.wallet,
        send: this.mode === "offline" || !this.wallet,
        sendhex: this.mode === "offline" || !this.wallet,
        // request_payment: !this.wallet,
        // dump_as_key_file: !this.wallet || !this.wallet.getHasPrivKey(),
        contract: this.mode === "offline" || !this.wallet,
        // create_contract: this.mode === "offline" || !this.wallet,
        send_to_contract: this.mode === "offline" || !this.wallet,
        // call_contract: this.mode === "offline" || !this.wallet,
        dapp_myoffspring: this.mode === "offline" || !this.wallet,
        //dapp_silvergrain: this.mode === "offline" || !this.wallet,
        dapp_actorquery: this.mode === "offline" || !this.wallet,
        dapp_actormove: this.mode === "offline" || !this.wallet,
        dapp_actor: this.mode === "offline" || !this.wallet,
        //dapp_silverdex: this.mode === "offline" || !this.wallet,

        // dapp_altproof: this.mode === "offline" || !this.wallet,
        dapp_biffyplutonium: this.mode === "offline" || !this.wallet,
        dapps: this.mode === "offline" || !this.wallet
      };
    },
    headerClass: function headerClass() {
      return this.mode === "normal" ? this.network === "mainnet" ? "blue-grey lighten-5" : "red darken-3" : "blue-grey darken-4";
    }
  },
  components: {
    Notify: __WEBPACK_IMPORTED_MODULE_3_components_Notify__["a" /* default */],
    Warning: __WEBPACK_IMPORTED_MODULE_4_components_Warning__["a" /* default */],
    Home: __WEBPACK_IMPORTED_MODULE_5_controllers_Home__["a" /* default */],
    //CreateWallet,
    //CreateMnemonic,
    RestoreWallet: __WEBPACK_IMPORTED_MODULE_6_controllers_Restore__["a" /* default */],
    RestoreWif: __WEBPACK_IMPORTED_MODULE_7_controllers_RestoreWif__["a" /* default */],
    //RestoreMobile,
    //RestoreKeyFile,
    //RestoreLedger,
    ViewWallet: __WEBPACK_IMPORTED_MODULE_8_controllers_View__["a" /* default */],
    ViewTx: __WEBPACK_IMPORTED_MODULE_9_controllers_ViewTx__["a" /* default */],
    //SafeSend,
    Send: __WEBPACK_IMPORTED_MODULE_10_controllers_Send__["a" /* default */],
    SendHex: __WEBPACK_IMPORTED_MODULE_11_controllers_SendHex__["a" /* default */],
    //RequestPayment,
    //DumpKeyFile,
    DappMyoffspring: __WEBPACK_IMPORTED_MODULE_12_controllers_Dapp_MyOffspring__["a" /* default */],
    DappActorQuery: __WEBPACK_IMPORTED_MODULE_13_controllers_Dapp_ActorQuery__["a" /* default */],
    DappActorMove: __WEBPACK_IMPORTED_MODULE_14_controllers_Dapp_ActorMove__["a" /* default */],
    DappActor: __WEBPACK_IMPORTED_MODULE_15_controllers_Dapp_Actor__["a" /* default */],
    //DappSilverGrain,
    //DappSilverDex,
    //DappAltProof,
    DappBiffyPlutonium: __WEBPACK_IMPORTED_MODULE_16_controllers_Dapp_BiffyPlutonium__["a" /* default */],
    //CreateContract,
    SendToContract: __WEBPACK_IMPORTED_MODULE_17_controllers_SendToContract_vue__["a" /* default */],
    //CallContract,
    Config: __WEBPACK_IMPORTED_MODULE_18_controllers_Config__["a" /* default */]
  },
  methods: {
    setWallet: function setWallet() {
      this.wallet = __WEBPACK_IMPORTED_MODULE_20_libs_web_wallet__["a" /* default */].getWallet();
      this.wallet.init();
      if (this.wallet) {
        if (this.mode === "offline") {
          this.current = "request_payment";
        } else {
          this.current = "home";
        }
      }
    },
    logout: function logout() {
      this.wallet = null;
      this.current = "home";
      this.logout_dialog = false;
    },
    changeView: function changeView(name) {
      this.current = name;
    },
    openDapp: function openDapp(name) {
      if (this.mode === "offline" || !this.wallet) {
        alert('HEXALAND WORLD is a Distributed Application running on the ALTHash / HTMLCoin Blockchain, to access it You need to either import your wallet, or create a new Wallet at ALTHASH.ORG Please use the menu at the top-right corner of the page.');
      } else {
        this.changeView(name);
      }
    },
    openURL: function openURL(url) {
      window.open(url, "_blank");
    },
    error: function error(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "error", true, ttl);
    },
    success: function success(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "success", true, ttl);
    },
    addNotify: function addNotify(msg, type) {
      var _this = this;

      var isHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var ttl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

      var notifyId = [msg, type].join("_");
      var notify = {
        msg: msg.split(" ").reduce(function (msg, current) {
          var tmsg = _this.$t("common.notify." + current);
          tmsg = tmsg === "common.notify." + current ? " " + current : tmsg;
          return msg + tmsg;
        }, ""),
        type: type,
        show: true,
        isHtml: isHtml
      };
      if (this.notifyList[notifyId] && this.notifyList[notifyId].timer) {
        clearTimeout(this.notifyList[notifyId].timer);
      }
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].set(this.notifyList, notifyId, notify);
      if (ttl > 0) {
        this.notifyList[notifyId].timer = setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_1_vue__["default"].delete(_this.notifyList, notifyId);
        }, ttl * 1000);
      }
    }
  }
});

/***/ }),

/***/ "yDAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_nodes_insight__ = __webpack_require__("bEpM");


var nodeConfigs = {
  insight: __WEBPACK_IMPORTED_MODULE_0_libs_nodes_insight__["a" /* default */]
};

var defaultNodeId = 'insight';
var currentNodeId = defaultNodeId;

/* harmony default export */ __webpack_exports__["a"] = ({
  currentNode: function currentNode() {
    return nodeConfigs[currentNodeId];
  },
  setNodeId: function setNodeId(nodeId) {
    if (nodeConfigs[nodeId]) {
      currentNodeId = nodeId;
    }
  }
});

/***/ }),

/***/ "yjfn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('center',[_c('p',[_c('span',{staticClass:"subheading"},[_vm._v("\n        "+_vm._s(_vm.$t('file_creator.download'))+"\n      ")])]),_vm._v(" "),_c('p',[_c('v-btn',{attrs:{"color":_vm.color,"download":_vm.downloadName,"href":_vm.href,"target":"_blank"},on:{"click":_vm.doneClick}},[_vm._t("default",[_c('v-icon',[_vm._v("\n            cloud_download\n          ")])])],2)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "yoUZ":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "yz4H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("call_made")]),_vm._v("\n        "+_vm._s(_vm.$t('Send via Hex Address'))+" \n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.address),callback:function ($$v) {_vm.address=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"address"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs9":""}},[_c('v-text-field',{attrs:{"label":"Amount","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-select',{attrs:{"items":_vm.tokens,"outline":"","background-color":"blue lighten-1","single-line":""},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                 "+_vm._s(data.item.text)+_vm._s(data.item.name ? '(' + data.item.name + ')' : '')+"\n                ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n                 "+_vm._s(data.item.address)+"\n               ")])],1)]}}]),model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=$$v},expression:"symbol"}})],1)],1),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=$$v},expression:"gasPrice"}}):_vm._e(),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Limit","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=$$v},expression:"gasLimit"}}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.repeatAddress),callback:function ($$v) {_vm.repeatAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+_vm._s(this.symbol))]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.address))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.addTokenDialog),callback:function ($$v) {_vm.addTokenDialog=$$v},expression:"addTokenDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          Token\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('send.token_address'),"disabled":_vm.addTokenStep === 2},model:{value:(_vm.addTokenAddress),callback:function ($$v) {_vm.addTokenAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenAddress"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Name","disabled":""},model:{value:(_vm.addTokenName),callback:function ($$v) {_vm.addTokenName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenName"}}):_vm._e()],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Symbol","disabled":""},model:{value:(_vm.addTokenSymbol),callback:function ($$v) {_vm.addTokenSymbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenSymbol"}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.addTokenStep === 1)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":"","loading":_vm.addTokenLoading},on:{"click":_vm.searchAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.search'))+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.addTokenStep === 2)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.addTokenDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.d5aa1039b59149584e19.js.map