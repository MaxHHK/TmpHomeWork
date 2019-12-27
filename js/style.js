$(function() {
    $("[data-toggle='popover']").popover({
        html : true,  
        title: title(),  
        delay:{show:100, hide:100},
        trigger:'focus hover',
        content: function() {
          return content();  
        } 
    });
});

function title() {
    return '深入解释';
}

function content() {
    var data = $(
        "<div>You find it</div>" +
        "<input id='btn' type='button' value='关闭' onclick='test()'/></form>"
    );
    return data;
}

//模拟悬浮框里面的按钮点击操作
function test() {
    alert('关闭成功');
}

$('.popover-dismiss').popover({
    trigger: 'focus'
})

// collapse
$('#collapseBooks').on('show.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up');
    var btnDown = document.getElementById('show_btn_down');
    var path = 'img/show/close_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
        // var img = btnimgs.item(i);
        // console.log(i)
        // var interval = setInterval(function() {
        //     if (index < 6) {
        //         index += 1;
        //         img.src = path + index + '.png';
        //     } else {
        //         clearInterval(interval);
        //     }
        // }, 50)
})

$('#collapseBooks').on('hide.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up');
    var btnDown = document.getElementById('show_btn_down');
    var path = 'img/show/show_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
})