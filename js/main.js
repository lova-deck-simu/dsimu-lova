var mainApp   = angular.module('mainApp', ['ngAnimate', 'ngDragDrop', 'ngSanitize']);
var dataJson  = './servantDetailList.json';

var wikiUrl   = 'http://wiki.4gamer.net/lova/使い魔/';

var updateLogs = [
  {
    date: "2016/06/30",
    descs: [
      "サービスが終了しました。",
      "1年間お疲れ様でした。",
      "またどこか別のゲームでお会いしましょう_(:3」∠)_",
      "<br/>",
      "・本サイトについて",
      "ドメインの期限切れにより8月にはこのサイトが見れなくなってしまいます。",
      "サービス終了後もLoVAの思い出としてとっておきたいので永久保存をgithubに用意しました。",
      "<a href='https://lova-deck-simu.github.io/dsimu-lova/'>こちら</a>",
    ],
  }, 
  {
    date: "2016/06/03",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=820'>公式のアップデート</a>に伴い使い魔データの修正。",
    ],
  }, 
  {
    date: "2016/05/27",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=809'>公式のアップデート</a>に伴い新規使い魔を追加、および使い魔データの修正。",
    ],
  }, 
  {
    date: "2016/05/17",
    descs: [
      "公式より<a href='http://lova.jp/member/article.php?no=792'>サービス終了のお知らせ</a>が発表されました。",
      "バランス調整を重ね使える使い魔も増え、以前よりだいぶ面白くなってきた所なのに非常に残念です。",
      "今までアップデートのたびにデータの更新を手伝ってくれた方、ご利用してくださった方、ありがとうございました。",
      "一応、次回の追加使い魔含めサービス終了までこのサイトも更新する予定です。",
      "最後までよろしくお願いします。",
      "<span style='color: #270a0a'>なお最後なのでぶっちゃけると管理人のアカウントは「_(:3」∠)_」「_(┐「ε:)_」「...Φ(:3」∠)_」「(:3[布団]」です。</span>",
      "デッキシミュレータ管理人より"
    ],
  },  
  {
    date: "2016/05/14",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=785'>公式のアップデート</a>に伴い使い魔データの修正。",
    ],
  },  
  {
    date: "2016/04/27",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=767'>公式のアップデート</a>に伴い使い魔データの修正。",
    ],
  },  
  {
    date: "2016/04/14",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=735'>公式のアップデート</a>に伴い使い魔データの修正。",
    ],
  },
  {
    date: "2016/04/03",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=715'>公式のアップデート</a>と<a href='http://lova.jp/member/article.php?no=716'>使い魔のバランス調整</a>の変更を反映しました。",
      "（編集してくれた方ありがとうございます。大変助かりました。）",
    ],
  },
  {
    date: "2016/03/03",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=665'>公式のアップデート</a>に伴い使い魔データの修正。",
    ],
  },
  {
    date: "2016/03/01",
    descs: [
      "タイプ別ソートが正しい順番でソートされていなかった不具合を修正しました。",
    ],
  },
  {
    date: "2016/02/26",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=653'>公式のアップデート</a>に伴い新規使い魔を追加、および使い魔データの修正。",
    ],
  },
  {
    date: "2016/02/13",
    descs: [
      "ページ下部に「使い魔のデータの利用について」の項目を追加しました。",
    ],
  },
  {
    date: "2016/02/12",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=626'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2016/02/06",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=615'>公式のアップデート</a>に伴い使い魔のデータ修正。(データを編集してくれた方ありがとうございます)",
    ],
  },
  {
    date: "2016/01/24",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=597'>公式のアップデート</a>に伴い新規使い魔を追加。",
    ],
  },
  {
    date: "2016/01/17",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=564'>公式のアップデート</a>に伴い使い魔のデータ修正。(データを編集してくれた方ありがとうございます)",
    ],
  },
  {
    date: "2015/12/30",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=553'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/12/24",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=537'>公式のアップデート</a>に伴い新規使い魔を追加、及び使い魔のデータ修正。",
      "新規使い魔の画像は一時的に特設サイトのものを使っています。画像が用意出来たらあとで差し替えます。",
      "-> 差し替えました。(2015/12/25 00:07)",
      "口承はまだ未記入です。もうしばらくお待ち下さい。。。",
      "-> 口承追加しました。(2015/12/30)"
    ],
  },
  {
    date: "2015/12/09",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=507'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/12/02",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=497'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/11/25",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=481'>公式のアップデート</a>に伴い新規使い魔を追加、及び使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/11/11",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=449'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/11/04",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=437'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/10/29",
    descs: [
      "ニューアーハンの射程を間違えていたため修正",
    ],
  },
  {
    date: "2015/10/28",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=421'>公式のアップデート</a>に伴い新規使い魔を追加、及び使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/10/27",
    descs: [
      "使い魔の表記をゲーム内での表記と統一するため全角の％（）を半角%()に、全角のカンマ(，)を読点(、)に修正。",
    ],
  },
  {
    date: "2015/10/21",
    descs: [
      "サルーインのアクティブスキルの説明を修正。アルカイザー、バラバのスキルの説明に移動距離が抜けていたため追加。",
    ],
  },
  {
    date: "2015/10/17",
    descs: [
      "キーワード検索の絞り込み検索に対応しました。半角スペース「 」区切りで複数のキーワードを並べることで検索結果を絞ることが出来ます。",
      "デッキリセットボタンを追加しました。クリックすることでデッキを空にすることが出来ます。",
    ],
  },
  {
    date: "2015/10/14",
    descs: [
      "<a href='http://lova.jp/member/article.php?no=393'>公式のアップデート</a>に伴い使い魔のデータ修正。",
    ],
  },
  {
    date: "2015/10/08",
    descs: [
      "アシュトンのスキルの説明を修正しました。",
    ],
  },
  {
    date: "2015/10/07",
    descs: [
      "ニムエのアクティブスキルのCTを修正しました。",
      "ブラウザのIEでデッキにカードがセットできなかった不具合を修正しました。",
      "<a href='http://lova.jp/member/article.php?no=376'>公式のアップデート</a>に伴い使い魔のスキル及びツールチップの修正。",
    ],
  },
  {
    date: "2015/10/06",
    descs: [
      "ニムエのツールチップを修正しました。",
    ],
  },
  {
    date: "2015/10/03",
    descs: [
      "編集した使い魔のデータの差分を確認できるようにしました。詳しくは<a href='https://docs.google.com/spreadsheets/d/1spONgsc2npMThL8269yqH4k5kcE71Rwl2J_YdXLBYBQ/edit#gid=762766661'>こちら</a>を御覧ください。"
    ],
  },
  {
    date: "2015/10/03",
    descs: [
      "ニムエの作家名を修正",
      "シルメリアのアクティブスキルのCTを修正",
    ],
  },
  {
    date: "2015/10/03",
    descs: [
      "使い魔のデータを編集できるようにしました。詳しくは<a href='https://goo.gl/HzvufA'>こちら</a>を御覧ください。",
      "<a href='https://goo.gl/1ZBY7E'>お問い合わせフォーム</a>を新設しました。",
    ],
  },
  {
    date: "2015/10/02",
    descs: [
      "使い魔のデータを更新しました",
    ],
  },
  {
    date: "2015/9/3",
    descs: [
      "使い魔のデータを更新しました",
    ],
  },
  {
    date: "2015/8/26",
    descs: [
      "使い魔のデータを更新しました",
    ],
  },
  {
    date: "2015/8/15",
    descs: [
      "ドメイン変更に伴いサイト名を変更しました。",
      "デザインを修正しました。",
    ],
  },
  {
    date: "2015/8/13",
    descs: ["サイトを公開しました。"],
  }
]

var tribes = ["人獣", "神族", "魔種", "海種", "不死"];
var tribe_bit = {};
tribes.forEach(function(tribe, index){
  tribe_bit[ tribe ] = Math.pow(2, index);
});
var tribe_all_bit = Math.pow(2, tribes.length) - 1;
var tribe_en = {
  "人獣": "jinju",
  "神族": "shinzoku",
  "魔種": "mashu",
  "海種": "kaishu",
  "不死": "fushi",
}

var costs    = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var cost_bit = {};
costs.forEach(function(cost, index){
  cost_bit[ cost ] = Math.pow(2, index);
});
var cost_all_bit = Math.pow(2, costs.length) - 1;

var ranges     = ['short', 'long'];
var range_bit = {
  'short': Math.pow(2, 0),
  'long' : Math.pow(2, 1),
};
var range_all_bit = 3;

var statusKeys = ["hp","ap","atk","def","res","ms","as"]
var infoKeys   = ["cost","type","range","illust","cv"]

var sorts      = [
  { label: '指定なし' },
  { key: 'type', label: 'タイプ順' },
  { key: 'cost', label: 'コスト高い順', reverse: true  },
  { key: 'cost', label: 'コスト低い順' },
  { key: 'status.Lv1.hp'  , label: 'HP高い順', reverse: true  },
  { key: 'status.Lv1.hp'  , label: 'HP低い順' },
  { key: 'status.Lv1.ap'  , label: 'AP高い順', reverse: true },
  { key: 'status.Lv1.ap'  , label: 'AP低い順' },
  { key: 'status.Lv1.atk' , label: 'ATK高い順', reverse: true  },
  { key: 'status.Lv1.atk' , label: 'ATK低い順' },
  { key: 'status.Lv1.def' , label: 'DEF高い順', reverse: true  },
  { key: 'status.Lv1.def' , label: 'DEF低い順' },
  { key: 'status.Lv1.res' , label: 'RES高い順', reverse: true  },
  { key: 'status.Lv1.res' , label: 'RES低い順' },
  { key: 'status.Lv1.as'  , label: 'AS高い順', reverse: true  },
  { key: 'status.Lv1.as'  , label: 'AS低い順' },
  { key: 'status.Lv1.ms'  , label: 'MS高い順', reverse: true  },
  { key: 'status.Lv1.ms'  , label: 'MS低い順' },
]

var locale = {
  info: {
    cost  : "コスト",
    type  : "タイプ",
    range : "射程",
    illust: "イラスト",
    cv    : "CV",
  },
  status: {
    hp  : "HP",
    ap  : "AP",
    atk : "ATK",
    pow : "POW",
    def : "DEF",
    res : "RES",
    ms  : "MS",
    as  : "AS",
  },
  range: {
    short : '近距離',
    long  : '遠距離',
  },
  range_icon: {
    short : '近',
    long  : '遠',
  },
  skill: {
    active : 'アクティブ',
    passive: 'パッシブ',
  }
}

mainApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
})

mainApp.controller('mainCtrl', ['$scope', '$http', '$location', '$timeout', '$sce', '$q', function($scope, $http, $location, $timeout, $sce, $q){
  $scope.updateLogs = updateLogs;
  $scope.trustAsHtml = $sce.trustAsHtml;
  $scope.checked   = {
    tribe: Math.pow(2, tribes.length) - 1,
    cost : Math.pow(2, costs.length) - 1,
    range: Math.pow(2, ranges.length) - 1,
  };
  $scope.icon          = {};
  $scope.locale        = locale;
  $scope.tribes        = tribes;
  $scope.tribe_en      = tribe_en;
  $scope.tribe_bit     = tribe_bit;
  $scope.tribe_all_bit = tribe_all_bit;
  $scope.statusKeys    = statusKeys;
  $scope.infoKeys      = infoKeys;
  $scope.costs         = costs;
  $scope.cost_bit      = cost_bit;
  $scope.cost_all_bit  = cost_all_bit;
  $scope.ranges        = ranges;
  $scope.range_bit     = range_bit;
  $scope.range_all_bit = range_all_bit;
  $scope.sorts         = sorts;
  $scope.displayType   = 'card';
  
  
  // $scope.servants  = [];
  $scope.servantsHash = {};
  $scope.selectedServant = {};
  // $scope.deck = [{},{},{},{},{},{},{},{}];
  $scope.deck = new Deck();

  $http.get( dataJson )
    .then(function(result){
      var servants = result.data;
      
      servants.forEach(function(servant, index){
        servant.array_index = index;
        $scope.servantsHash[servant.id] = servant;
        
        servant.tribeNumber = Number( servant.number.slice(3) );
        servant.cost = Number( servant.cost );
        servant.tribe_bit = tribe_bit[ servant.tribe ];
        servant.cost_bit  = cost_bit[ servant.cost ];
        servant.range_bit = range_bit[ servant.range_type ];
        servant.url       = wikiUrl + servant.tribe + '/' + servant.name; 
      })

      $scope.servants = servants;
      showDetail( servants[0] );
      
      setDeckByQuery();
    })
  
  
  $scope.thumbnailSrc = function (servant_number) {
    if (servant_number)
      return './img/thumb/' + servant_number + '.jpg';
  }
  
  $scope.imageSrc = function (servant_number) {
    if (servant_number) {
      return './img/medium/' + servant_number + '.jpg';
    }
  }
  
  $scope.removeFromDeck = function(event, ui, target, $index, servant) {
    var deck_pos    = getElementPosition( '#deck' );
    var dropped_pos = ui.offset.top  + deck_pos.height / 2;
    
    if ( dropped_pos < deck_pos.top || deck_pos.bot < dropped_pos ) {
      $timeout(function(){
        $scope.servants[ servant.array_index ] = servant;
        $scope.deck.remove(target, $index, servant);
      })
    }
  };
  
  $scope.checkBeforeSet = function(event, ui, target, index, deck) {
    // IEがPromiseに対応していないため、angularのqを使う
    var d = $q.defer();
    
    // ドラッグしてきたカードがデッキのものだった場合は何もしない
    if ($(ui.draggable).parents('#deck').length > 0) {
      d.resolve();
      return d.promise;
    }
    
    // ドラッグしてきたカードがservantListからならば、上書きされるカードはdeckからremoveする
    var old_servant = deck[ target ][ index ];
    
    if (old_servant.name) {
      deck.remove( target, index );
    }
  
    d.resolve();    
    return d.promise;
  }
  
  $scope.setToDeck = function(event, ui, servant) {
    // console.log("ondrop", arguments)
    servant._setDeck = true;
  }
  
  function getElementPosition(selector) {
    var target = $(selector);
    return {
      width  : target.width(),
      height : target.height(),
      top    : target.position().top,
      bot    : target.position().top + target.height(),
    };
  }

  $scope.showDetail = showDetail;
  function showDetail( servant ) {
    if (servant.name) {
      $scope.selectedServant.isSelected = false;
      $scope.selectedServant = servant;
      $scope.selectedServant.isSelected = true;
    }
  };
  
  $scope.showOralTradition = showOralTradition;
  function showOralTradition( servant ) {
    if (servant.name) {
      $scope.selectedServant = servant;
      $scope.showOverlay = true;
    }
  };
  
  $scope.closeOralTradition = closeOralTradition;
  function closeOralTradition($event) {
    if ( $($event.target).hasClass('overlay-close-btn') ) {
      $scope.showOverlay = false;
    }
  };
  
  function setDeckByQuery() {
    var query = $location.search();
    
    if ( !query.d ) return;
    if ( !(typeof query.d === 'string') ) return;

    $scope.deck.setDeckByQuery( $scope.servantsHash, query .d );
  }
  
  $scope.resetDeck = resetDeck;
  function resetDeck( deck ) {
    var ans = window.confirm('デッキをリセットします。');
    if (ans)  {
      deck.removeAll();
    }
  }
  
  $scope.getDeckUrl = getDeckUrl;
  function getDeckUrl() {
    var query = $scope.deck.getQuery();

    $location.search('d', query);
    return $location.absUrl();
  }
  
  // event.targetを選択状態にする
  $scope.selectOnClick = selectOnClick;
  function selectOnClick($event){
    $event.target.select();
  }
  
  /**
   * object[ keys ]のすべての要素をflagの値にする
   */
  $scope.checkAll = checkAll;
  function checkAll( object, keys, flag ) {
    $timeout(function(){
      keys.forEach(function(key){
        object[ key ] = flag;
      })
    })
  }
  
  $scope.showFlag = function(servant) {
    if ((servant.tribe_bit & $scope.checked.tribe) == 0) return false;
    if ((servant.cost_bit & $scope.checked.cost) == 0) return false;
    if ((servant.range_bit & $scope.checked.range) == 0) return false;
    
    return true;
  }
  
  $scope.xor = xor;
  function xor ( a, b ) {
    return a ^ b;
  }
  $scope.and = and;
  function and ( a, b) {
    return a & b;
  }
}])

mainApp
.filter('customTextFilter', ['$filter', function($filter){
  return function( items, expression, reverse ){
    if (!expression) return items;
    
    expression = expression.replace(/　/g, ' ');
    
    var and_elems = expression.split(/\s+/);
    var filtered_items = items;
    
    and_elems.forEach(function(and_elem){
      filtered_items = $filter('filter')(filtered_items, and_elem, reverse);
    });
    
    return filtered_items;
  }
}])

// chromeだとordebyのexpression引数に空文字が入るとソートがおかしくなるため、カスタムフィルタで対応
.filter('orderByAllowBlank', ['$filter', function($filter){
  return function( items, expression, reverse ){
    if (!expression) {
      return items;
    } else {
      return $filter('orderBy')(items, expression, reverse);
    }
    
  }

}])



// Deckクラス
var Deck = (function(){
  // クラス変数
  var DECK_SIZE = 8;
  var MAIN_SIZE = 6;
  var SIDE_SIZE = 2;
  
  var TRIBE_TO_CHAR = {
    '人獣': 'J',
    '神族': 'S',
    '魔種': 'M',
    '海種': 'K',
    '不死': 'F',
  };
  var CHAR_TO_TRIBE = {
    'J': '人獣',
    'S': '神族',
    'M': '魔種',
    'K': '海種',
    'F': '不死',
  };
  
  /**
   * Deckコンストラクタ
   * @param {Array} servants main * 6 , side * 2
   */
  function Deck ( servants ) {
    var Deck = this;

    Deck.main = [{},{},{},{},{},{}];
    Deck.side = [{},{}];
    
    if (servants && servants instanceof Array) {
      main.forEach(function(servant, index){
        Deck.set( index, servant );
      })
    }
  }
  
  /////////////////////
  // instance method //
  /////////////////////
  
  Deck.prototype.isMain = function isMain( index ) {
    return 0 <= index && index < MAIN_SIZE;
  };
  Deck.prototype.isSide = function isSide( index ) {
    return MAIN_SIZE <= index && index < MAIN_SIZE + SIDE_SIZE;
  };
  
  Deck.prototype.setMain = function setMain( main_index, servant ) {
    this.main[ main_index ] = servant;
    servant._setDeck = true;
  }
  Deck.prototype.removeMain = function removeMain( main_index ) {
    this.main[ main_index ]._setDeck = false;
    this.main[ main_index ] = {};
  }
  Deck.prototype.setSide = function setSide( side_index, servant ) {
    this.side[ side_index ] = servant;
    servant._setDeck = true;
  }
  Deck.prototype.removeSide = function removeSide( side_index ) {
    this.side[ side_index ]._setDeck = false;
    this.side[ side_index ] = {};
  }
  Deck.prototype.set = function set( target, index, servant ) {
    if (target == "main")
      return this.setMain( index, servant );
    
    if (target == "side")
      return this.setSide( index, servant );
    
    throw "target is must be 'main' or 'side'";
  }
  Deck.prototype.remove = function remove( target, index ) {
    if (target == "main")
      return this.removeMain( index );
    
    if (target == "side")
      return this.removeSide( index );
    
    throw "target is must be 'main' or 'side'";
  }
  
  Deck.prototype.removeAll = function removeAll() {
    for (var i=0; i < MAIN_SIZE; i++) this.removeMain( i );
    for (var i=0; i < SIDE_SIZE; i++) this.removeSide( i );
  } 
  
  Deck.prototype.cost = function cost() {
    var cost = 0;
    
    this.main.forEach(function(servant){
      if (servant.cost) cost += servant.cost;
    })
    return cost;
  }
  
  // デッキに含まれる使い魔の種族数をカウント
  Deck.prototype.tribeCount = function tribeCount() {
    var tribes;
    
    tribes        = this.main.map(function(servant){ return servant.tribe });
    // 空データ削除
    tribes        = tribes.filter(function(tribe){ return tribe })
    // 重複削除
    tribes = unique( tribes );

    return tribes.length;
  }
  
  Deck.prototype.filled = function filled() {
    var result = true;
    
    this.main.forEach(function(servant){
      if (!servant.name) {
        result = false;
      }
    });
    return result;
  }
  
  Deck.prototype.manaBonus = function manaBonus() {
    if (this.filled() == false) return 0;
    if (this.tribeCount() >  2) return 0;
    if (this.tribeCount() == 2) return 5;
    if (this.tribeCount() == 1) return 10;
    return 0;
  }
  
  Deck.prototype.getQuery = function getQuery() {
    var deck       = this;
    var base32_ids = '';
    var base32_id;
    
    ['main', 'side'].forEach(function(target){
      deck[ target ].forEach(function(servant){
        base32_id = '';
        if (servant.tribeNumber) {
          base32_id += TRIBE_TO_CHAR[ servant.tribe ];
          base32_id += servant.tribeNumber.toString(32);
        }
        else{
          base32_id = '$';
        }
        base32_ids += base32_id;
      })
    })
    
    return base32_ids;
  }
  
  Deck.prototype.setDeckByQuery = function(servantsHash, query) {
    var deck = this;
    var servant_ids;
    var servant;
    
    // 旧queryタイプの対応
    if (query.indexOf(',') >= 0) {
      servant_ids = query.split(',');
      
      deck.setDeckByIds( servantsHash, servant_ids );
      return;
    }
    
    servant_ids = parseQuery( query );
    
    // 長さがデッキサイズを超えた場合は切り捨て
    if (servant_ids.length > DECK_SIZE) {
      servant_ids = servant_ids.slice(0,DECK_SIZE);
    }
    deck.setDeckByIds( servantsHash, servant_ids );
  }
  
  Deck.prototype.setDeckByIds = function(servantsHash, servant_ids) {
    var deck = this;
    
    servant_ids.map(function(servant_id, index){
      servant = servantsHash[ servant_id ] || {};
      
      if (deck.isMain( index )) {
        deck.setMain( index, servant );
      }
      else {
        deck.setSide( index - MAIN_SIZE, servant );
      }
    })
  }
  
  
  ////////////////////
  // private mthod  //
  ////////////////////
  
  /**
   * nを左からpadで詰めてlen桁に調整する
   */
  function paddingLeft(n, len, pad) {
    return (Array(len+1).join(pad) + n).slice(-len);
  }

  /**
   * 重複削除
   */
  function unique(array) {
    return array.filter(function (x, i, self) {
      return self.indexOf(x) === i;
    });
  }
    
  function parseQuery(query) {
    var query_array = query.split('');
    var servant_ids = [];
    var c;
    var base32_id;
    var servant;
    
    while (query_array.length > 0) {
      c = query_array.shift();
      base32_id = '';
      servant   = {};
      
      // 種族の頭文字の場合
      if (CHAR_TO_TRIBE[c]) {
        while (query_array[0] && query_array[0].match(/[0-9a-z]/)) {
          base32_id += query_array.shift();
        }
        
        servant.tribeNum = parseInt(base32_id, 32);
        servant.id = c.toLowerCase() + paddingLeft( servant.tribeNum, 3, '0' );
        
        servant_ids.push( servant.id );
      }
      // $の場合
      else if (c == '$') {
        servant_ids.push( null );
      }
      else {
        console.log(query_array)
        console.log(c)
        console.log('parse error!');
        break;
      }
    }
    
    return servant_ids;
  }
  
  return Deck;  
})();
