// 顺延函数：如果上一个动作完成，则当前动作替换上一个
function shift(fn, time) {
    time = time || 200;
    var queue = window._shift_fn, current;
    queue ? queue.concat([fn, time]) : (queue = [[fn, time]]);
    current = queue.pop();
    clearTimeout(window._shift_timeout);
    window._shift_timeout = setTimeout(function () {
        current[0]();
    }, current[1]);
}

//require('wikiparser', function(parser) {
//  window.InstaView = parser;
//})

// fetch lib data
function libListCtrl($scope) {

    //$scope.convert = function(root, content) {
    //  return window.InstaView.convert;
    //}


    $scope.convert = function (s) {
        var htmlString = window.InstaView.convert(s);
        return htmlString;
    }

    // hack
    $scope.bruteInsert = function(id, content) {
        var ele = document.getElementById('content_' + id);
        ele.innerHTML = $scope.convert(content);
    }


    $scope.toggleWholePage = function(id, target) {
        var ele = document.getElementById(id);
        if (target.state == 0) {
            ele.style.maxHeight = 'none';
            target.innerHTML = '点击折叠';
            target.state = 1;
        }
        else {
            ele.style.maxHeight = '200px';
            target.innerHTML = '点击查看全文';
            target.state = 0;
        }



    }

    function anchorClick(e) {
        e.preventDefault();
        console.log(e);
    }

    //var elasticServer = 'mockup/result.json/';
    var elasticServer = '/api.php';

    var fetch = function (tag) {

        tag = '?keywords=' + tag;

        return $.getJSON(elasticServer + tag).done(function (data) {
            $scope.$apply(function () {
                $scope.pages = data['hits'];
            });
        });
    };

    // page loaded
    fetch();  // on page load, do nothing...

    // query change
    $scope.fetchLibs = function (e) {

        $scope.isPopular = false;

        // 搜索顺延
        shift(function () {
            fetch(e.query);
        })
    }
}

//libListCtrl.$inject = ['$sce'];

// return a legal name
var myApp = angular.module('static', []);
angular.module('static').filter('legalname', function () {
    return function (input) {
        return input.replace(/\./g, '_');
    }
});

angular.module('static')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

// select url text
$(document).on('mouseenter', 'pre', function (e) {
    var doc = document
        , text = $(this).find('code')
        , range, selection;

    if (!text.length) return;

    text = text[0];

    // http://stackoverflow.com/a/987376/1189321
    if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
});

// file(s)
$('#search').on('click', '[data-toggle="showhide"]', function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href'));

    $target.is(':visible') ? $target.slideUp('fast') : $target.show('fast');
});

