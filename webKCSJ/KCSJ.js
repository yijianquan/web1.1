function displaySubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "block"; 
}
function hideSubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "none"; 
}
function showbig(i){
    var nowimg = document.getElementsByTagName("img");
    for(var n = 0;n<5;n++){
        nowimg[n].style = "";
    }
    nowimg[i+1].style = "border: 5;border-style: solid; color: yellow;";
    var imgname = document.getElementById('tuijiandatu');
    imgname.src = nowimg[i+1].src;
}

window.onload = function() {
    //为“用户名”添加验证函数，当失去焦点时调用函数
    var username = document.getElementById("username"); 
    username.onblur = checkUsername;
}
function checkUsername() {
    var username=document.getElementById('username');
    var oldspan=document.getElementsByTagName('span');
    if(username.value=='')
{
    //若存在span节点，则将其删除
    if(oldspan.length>0){
        oldspan[0].parentNode.removeChild(oldspan[0]);
    }
    //产生一个新的span节点,插入到username节点的后面
    var newspan=document.createElement('span');
    username.parentNode.appendChild(newspan);
    var txtnode=document.createTextNode('必须输入用户名');
    newspan.appendChild(txtnode);
    newspan.style.color='red';
    username.focus();//重新聚焦
}
else
{
    if(oldspan.length>0){
        oldspan[0].parentNode.removeChild(oldspan[0]);
    }
    var newspan=document.createElement('span');
    username.parentNode.appendChild(newspan);
    var txtnode=document.createTextNode('用户名可以注册');
    newspan.appendChild(txtnode);
    newspan.style.color='red';
}   
}