//全局变量
//================================================================

//节点存放数组
var aNode=new Array();
var nId=0;
var lastNId;

//双向链路存放数组
var aDuplexLink=new Array();
var dlId=0;

//链路显示参数
var color=new jsColor();
var pen=new jsPen(color,2);
var whiteColor=new jsColor('#FFFFFF')
var penWhite=new jsPen(whiteColor,2);

//状态参数
var connecting=false;
var firSelect=false;
var movingRepaint=false;

//================================================================