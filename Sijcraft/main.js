
var Lib;
var Jdk;
var Android;
var getJS=[];
var ID=[
	ItemID.anjin,
	ItemID.lan,
	ItemID.hei,
	ItemID.xue,
	ItemID.book,
	ItemID.dark,
	ItemID.glass,
	ItemID.xili,
	ItemID.yi,
	ItemID.xie
];

//添加物品   add more items


IDRegistry.genItemID("anjin");
Item.createItem("anjin", "暗金锭", {name: "Anj",meta:0
				}, {
					stack:64
				});
IDRegistry.genItemID("lan");
Item.createItem("lan", "蓝水晶", {name: "Lan",meta:0
				}, {stack:64});
IDRegistry.genItemID("hei");
Item.createItem("hei", "黑钛金", {name: "Hei",meta:0
				}, {stack:64});
IDRegistry.genItemID("xue");
Item.createItem("xue", "混沌之血", {name: "Xue",meta:0
				}, {stack:64});
IDRegistry.genItemID("book");
Item.createItem("book", "颂世录", {name: "Book",meta:0
				}, {stack:64});
IDRegistry.genItemID("dark");
Item.createItem("dark", "黑暗之剑", {name: "Dark",meta:0
				}, {stack:64});

IDRegistry.genItemID("glass");
Item.createItem("glass", "玻璃之剑", {name: "Glass",meta:0
				}, {stack:64});
IDRegistry.genItemID("xili");
Item.createItem("xili", "暗金洗礼", {name: "Xili",meta:0
				}, {stack:64});

IDRegistry.genItemID("yi");
Item.createItem("yi", "以太之剑", {name: "Yi",meta:0
				}, {stack:64});
IDRegistry.genItemID("xie");
Item.createItem("xie", "邪恶起源", {name: "Xie",meta:0,
				}, {stack:64});


//设定物品的特殊属性
Item.describeItem(ID[5], {
					  toolRender: true, // 是否为物品为工具形态
					  maxDamage: 20, //设置最大耐久度
				  });

Item.describeItem("glass", {
					  toolRender: true, // 是否为物品为工具形态
					  maxDamage: 10, //设置最大耐久度
				  });

Item.describeItem("xili", {
					  toolRender: true, // 是否为物品为工具形态
					  maxDamage: 30, //设置最大耐久度
				  });


Item.describeItem("yi", {
					  toolRender: true, // 是否为物品为工具形态
					  maxDamage: 30, //设置最大耐久度
				  });

Item.describeItem("xie", {
					  toolRender: true, // 是否为物品为工具形态
					  maxDamage: 40, //设置最大耐久度
				  });

/*


 ItemIC.普通剑合成();


 */
      var ItemIC={
				
			剑合成:function(id,数量,X1id,X2id) {
            Recipes.addShaped({id: id, count: 数量, data: 0}, [
						      " x ",
							  " x ",
							  " b "
							  
						  ], [ 'x', X1id, 0, 'b', X2id, 0]);

	               },
				   
		   熔铁:function(输出结果){
					   
			   Recipes.addFurnace（265,输出结果,0）;
					   
				   
			   }
.            }	  
				  //Java类，其内层接口为IC的API
         var Java={

	//io流类操作接口
	//写出文件夹，sd为路径
	        iowm:function(sd) {

		   FileTools.mkdir(sd)

	       },

//写入文本
//bool是是否追加。。?

	iowt:function(sd, txt, bool) {

		FileTools.WriteText(sd, txt, bool)

	},
//读取文本
	iort:function(sd) {
						
		FileTools.ReadText(sd)
		}
}










				  
				  

