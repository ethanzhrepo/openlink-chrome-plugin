function clickHandler(info, tab){
        if (info.menuItemId=='op_openlink_open_bt') {
                if (info.linkUrl) {
                        var url = 'http://openlink.crabcloud.com/openlink?format=jsredir&url=' + info.linkUrl;
                        chrome.tabs.create({'url' : url, 'index':tab.index + 1});
                }
        }
}

function startup(){
	var r =chrome.contextMenus.create({
		'type' : 'normal',
		'id' : 'op_openlink_open_bt',
		'title' : 'Reverse this Link',
		'contexts' :['link']
	});
}

chrome.runtime.onInstalled.addListener(startup);
chrome.contextMenus.onClicked.addListener(clickHandler);
