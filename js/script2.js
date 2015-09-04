str1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis vel, veniam optio soluta, magni quidem quaerat mollitia aperiam, atque cumque minima dolores ducimus voluptatem autem!";


// Function if they click new game
function newGame() {
    ngame=prompt("name");// ask for name of game

    if (ngame===null || ngame===''){ // if name of game is blank or canceled
    	return;// exit code
    }
    //else
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + '<li onclick="li_state_normal(this)">'+ngame+"</li>";
    
};

// Function if click on minus
function delparent(el){
    el.parentNode.parentNode.removeChild(el.parentNode);
}

function getIndex(node) { // when clicked on a li    
    var childs = node.parentNode.children; // creates an array of ul children   
    for (i = 0; i < childs.length; i++) { // loops the li index
        if (node == childs[i]) { // finds the index of the li clicked on           
           return me = childs[i]
        }
    }
}


function li_state_normal(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML;
my_parent.innerHTML = my_parent.innerHTML.replace('<li onclick="li_state_normal(this)">' + me.innerHTML + '</li>', '<li class="li_active" onclick="li_state_minus(this)"><div>-</div>' + me.innerHTML + '</li>');

}

function li_state_minus(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML.replace('<div>-</div>','');

my_parent.innerHTML = my_parent.innerHTML.replace('<li class="li_active" onclick="li_state_minus(this)"><div>-</div>'+ str + '</li>', '<li class="li_active li_open" onclick="li_state_open(this)">' + str + '</li>');


}

function li_state_open(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML;
my_parent.innerHTML = my_parent.innerHTML.replace('<li class="li_active li_open" onclick="li_state_open(this)">' + me.innerHTML + '</li>', '<li onclick="li_state_normal(this)">' + me.innerHTML + '</li>');

}

            


               
//                     for (j = 0; j < childs.length; j++) {//resets all lis
//                         liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                         liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
//                         liList[j].style.maxHeight = "52px";
//                         liList[j].style.overflow = "hidden";
//                     }
//                         // adds minus
//                         liList[i].innerHTML = liList[i].innerHTML + '<div onclick="delparent(this)"> - </div>';
                
//             }
//             else{

//                 if (liList[i].innerHTML.indexOf('*</div>*') != -1{

//                             liList[i].innerHTML = liList[i].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                             liList[i].style.maxHeight = "400px";
//                             liList[i].style.overflow = "scroll";
//                             liList[i].style.overflowX = "hidden";
//                             liList[i].innerHTML = liList[i].innerHTML + "<br><hr>" + "<p>" + str1 + "</p>";
//                     }
//                 else{
               
//                     if (liList[i].innerHTML.indexOf('*</p>*') !=-1){// paragraph open
                           
//                                 for (j = 0; j < childs.length; j++) { // resets all lis
//                                     liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                                     liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
//                                     liList[j].style.maxHeight = "52px";
//                                     liList[j].style.overflow = "hidden";
//                                 }

//                     }
//                 }
//             }
                    
//         }
//     }

// }



