//定义展收main-list
function inoutMainlist() {
    //alert('展main-list');
    
}

//监听header-div-left-list-btn点击事件
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#header-div-left-list-btn')) {
        document.querySelector('#header-div-left-list-btn').addEventListener('click', inoutMainlist);
    } else {
        console.error('Button not found: #header-div-left-list-btn');
    }
});





