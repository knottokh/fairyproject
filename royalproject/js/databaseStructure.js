var $pageEntity = {
	 init : function(){

	 },
	 getColumns : function(tablename){
	 			var returnobj;
	 			switch (tablename){
	 				case "acct_fund": //1
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id :"tn_id",//p
	 											acctype_id:"acctype_id", //from acc_type
	 											acct_id:"acct_id",  //from acct_no
	 											tn_date:"tn_date",
	 											tn_detail:"tn_detail",
	 											amount:"amount",
	 											remark:"remark",
	 								};
	 								break;
	 				case "acct_no"://2
	 								returnobj ={
	 											primary :"acct_id",
	 											value : 0,
	 											acct_id :"acct_id",//p
	 											acct_name:"acct_name",
	 											acct_level:"acct_level",
	 											acct_group:"acct_group", 
	 								};
	 								break;
	 				case "acct_start"://3
	 								returnobj ={
	 											primary :"acctype_id",
	 											value : 0,
	 											acctype_id:"acctype_id",//From acct_type
	 											accyear:"accyear",
	 											accmount:"accmount",
	 											balance_backward:"balance_backward",
	 											balance_tomount : "balance_tomount",
	 											balance_forward : "balance_forward"
	 								};
	 								break;
	 				case "acct_type" : //4
	 								returnobj ={
	 											primary :"acctype_id",
	 											value : 0,
	 											acctype_id:"acctype_id",//p
	 											acctype_name:"acctype_name",
	 											fund_id:"fund_id",//From funds
	 								};
	 								break;
	 				case "agriculture_goods_dtl"://5
	 								returnobj ={
	 											primary :"dtl_id",
	 											value : 0,
	 											dtl_id:"dtl_id",//p
	 											buy_id:"buy_id",
	 											buy_detail:"buy_detail",
	 											amount:"amount",
	 											buy_unit : "buy_unit",
	 											price_unit : "price_unit"
	 								};
	 								break;
	 				case "agriculture_goods_tn"://6
	 								returnobj ={
	 											primary :"buy_id",
	 											value : 0,
	 											buy_id:"buy_id",//p
	 											buy_date:"buy_date",
	 											buy_vender:"buy_vender",
	 											acct_flag:"acct_flag",
	 								};
	 								break;	
	 				case "asset_if"://7
	 								returnobj ={
	 											primary :"asset_id",
	 											value : 0,
	 											asset_id:"asset_id",//p
	 											tn_date:"tn_date",
	 											asset_detail:"asset_detail",
	 											asset_amt:"asset_amt",
	 											asset_unit : "asset_unit",
	 											asset_unit_cost : "asset_unit_cost",
	 											acctype_id:"acctype_id",
	 											acct_flag : "acct_flag",
	 								};
	 								break;
	 				case "fertilizer"://8
	 								returnobj ={
	 											primary :"fertilizer_id",
	 											value : 0,
	 											fertilizer_id:"fertilizer_id",//p
	 											fertilizer_formula:"fertilizer_formula",
	 											brand:"brand",
	 											amount:"amount",
	 											cost : "cost",
	 											price : "price",
	 											year_import : "year_import"
	 								};
	 								break;	 								
	 				case "fertilizer_sales_dtl"://9
	 								returnobj ={
	 											primary :"sales_id",
	 											value : 0,
	 											sales_id:"sales_id",//from fertilizer_sales_tn
	 											fertilizer_id:"fertilizer_id",
	 											sales_total:"sales_total",
	 											cost_unit:"cost_unit",
	 											remark : "remark",
	 								};
	 								break;
	 				case "fertilizer_sales_tn"://10
	 								returnobj ={
	 											primary :"sales_id",
	 											value : 0,
	 											sales_id:"sales_id",//p
	 											sales_detail:"sales_detail",
	 											address_id:"address_id",
	 											address_moo:"address_moo",
	 											sales_date : "sales_date",
	 											sales_total : "sales_total",
	 											net_total : "net_total",
	 											remark : "remark",
	 								};
	 								break;	 								
	 				case "funds"://11
	 								returnobj ={
	 											primary :"fund_id",
	 											value : 0,
	 											fund_id:"fund_id",//p
	 											fund_name:"fund_name",
	 											history:"history",
	 								};
	 								break;
	 				case "goods"://12
	 								returnobj ={
	 											primary :"goods_id",
	 											value : 0,
	 											goods_id:"goods_id",//p
	 											goods_name:"goods_name",
	 											accmount:"accmount",
	 								};
	 								break;
	 				case "goods_tf"://13
	 								returnobj ={
	 											primary :"tf_id",
	 											value : 0,
	 											tf_id:"tf_id",//p
	 											tn_date:"tn_date",
	 											goods_id:"goods_id",
	 											goods_amt:"goods_amt",
	 											acctype_id : "acctype_id",
	 											goods_price : "goods_price"
	 								};
	 								break;
	 				case "milling_fund_summary"://14
	 								returnobj ={
	 											primary :"summary_key",
	 											value : 0,
	 											summary_key:"summary_key",//p
	 											summary_date:"summary_date",
	 											net_amount:"net_amount",
	 											net_weight_paddy:"net_weight_paddy",
	 											net_weight_rice : "net_weight_rice",
	 											net_broken_milled_rice : "net_broken_milled_rice",
	 											net_rice_bran : "net_rice_bran",
	 								};
	 								break;
	 				case "milling_fund_tn"://15
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											milling_date:"milling_date",
	 											milling_detail:"milling_detail",
	 											milling_address:"milling_address",
	 											amount : "amount",
	 											weight_paddy : "weight_paddy",
	 											weight_rice : "weight_rice",
	 								};
	 								break;
	 				case "mill_expense_tn"://16
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											tn_date:"tn_date",
	 											tn_detail:"tn_detail",
	 											mill_expense_id:"mill_expense_id",
	 											units : "units",
	 											amount : "amount",
	 											price_per_unit:"price_per_unit",
	 											remark : "remark",
	 								};
	 								break;	 								
	 				case "mill_expense_transf"://17
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											tn_date:"tn_date",
	 											tn_detail:"tn_detail",
	 											net:"net",
	 											remark : "remark",
	 								};
	 								break;
	 				case "mill_expense_transf_dtl"://18
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											rice_id:"rice_id",
	 											amount:"amount",
	 											price_per_unit:"price_per_unit",
	 											transf_amount : "transf_amount",
	 								};
	 								break;
	 				case "mill_expense_type"://19
	 								returnobj ={
	 											primary :"mill_expense_id",
	 											value : 0,
	 											mill_expense_id:"mill_expense_id",//p
	 											expense_name:"expense_name",
	 								};
	 								break;
	 				case "mill_fund_board"://20
	 								returnobj ={
	 											primary :"board_id",
	 											value : 0,
	 											board_id:"board_id",//p
	 											board_name:"board_name",
	 											board_position:"board_position",
	 											board_status:"board_status",
	 								};
	 								break;
	 				case "mill_fund_member"://21
	 								returnobj ={
	 											primary :"member_id",
	 											value : 0,
	 											member_id:"member_id",//p
	 											prename:"prename",
	 											first_name:"first_name",
	 											last_name:"last_name",
	 											address_no : "address_no",
	 											moo : "moo",
	 											sub_district:"sub_district",
	 											district:"district",
	 											province:"province",
	 											share_amount:"share_amount",
	 											share_price_unit : "share_price_unit",
	 											apply_date:"apply_date",
	 											active_flag:"active_flag",
	 											remark : "remark",
	 								};
	 								break;	 								
	 				case "mill_income_dtl"://22
	 								returnobj ={
	 											primary :"dtl_id",
	 											value : 0,
	 											dtl_id:"dtl_id",//p
	 											tn_id:"tn_id",
	 											mill_product_id:"mill_product_id",
	 											amount:"amount",
	 											price_per_unit : "price_per_unit",
	 								};
	 								break;
	 				case "mill_income_tn"://23
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											tn_detail:"tn_detail",
	 											tn_date:"tn_date",
	 											remark:"remark",
	 											net_sale : "net_sale",
	 								};
	 								break;
	 				case "mill_product"://24
	 								returnobj ={
	 											primary :"mill_product_id",
	 											value : 0,
	 											mill_product_id:"mill_product_id",//p
	 											product_name:"product_name",
	 											cost:"cost",
	 											price:"price",
	 											amount : "amount",
	 								};
	 								break;
	 				case "observe_activity_tn"://25
	 								returnobj ={
	 											primary :"obs_activity_id",
	 											value : 0,
	 											obs_activity_id:"obs_activity_id",//p
	 											obs_date:"obs_date",
	 											obs_detail:"obs_detail",
	 											obs_amount:"obs_amount",
	 											obs_expense : "obs_expense",
	 											obs_remark : "obs_remark"
	 								};
	 								break;
	 				case "operating_schedule"://26
	 								returnobj ={
	 											primary :"tn_id",
	 											value : 0,
	 											tn_id:"tn_id",//p
	 											operate_date:"operate_date",
	 											board_id:"board_id",
	 											remark:"remark",
	 								};
	 								break;	 								
	 				case "participant_tf"://27
	 								returnobj ={
	 											primary :"pt_id",
	 											value : 0,
	 											pt_id:"pt_id",//p
	 											tn_date:"tn_date",
	 											join_name:"join_name",
	 											acctype_id:"acctype_id",
	 								};
	 								break;	
					case "rice"://28
	 								returnobj ={
	 											primary :"rice_id",
	 											value : 0,
	 											rice_id:"rice_id",//p
	 											rice_name:"rice_name",
	 								};
	 								break;		 								
	 				default :
				 				returnobj = undefined;
	 			}

	 			return returnobj;
	 },
	 GetData:function(phppage,data,callback){
	 		data.method = "get";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
																callback(obj);
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
                alert(textStatus.responseText);
            }

					});	
	 },
	 InsertData:function(phppage,data,callback){
	 		//data.objdata.Created = $pageEntity.dateFormate(new Date());
	 	//	data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 		
	 			data.method = "POST";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					     success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Insert Success");
					                     callback("Insert Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	 EditData:function(phppage,data,callback){
	 //	data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	  DeleteData:function(phppage,data,callback){
	  	//	data.objdata.Active = "N";
	  		//data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	  RestoreData:function(phppage,data,callback){
	  		//data.objdata.Active = "Y";
	  		//data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	 RemoveData:function(phppage,data,callback){
	 			data.method = "DELETE";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
																//alert("Delete Success");
																callback("Delete Success");
					                  }
					                  else {
					                      alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
					   			alert(textStatus.responseText);
            }

					});	
	 },
	dateTimeFormate: function (date) {

        return 	date.getFullYear() +"-" 
        				+(date.getMonth() + 1) +"-"
                + date.getDate() + " "
                + date.getHours() + ":"
                + date.getMinutes() + ":"
                + date.getSeconds();
    },
   MysqlDatetoDateTime:function (dateString) {
  		var dt  = dateString.split(/\-|\s|:/);
  		var m = parseInt(dt[1]) - 1;
  		dt[1] = m;
  		return new Date(dt[0],dt[1],dt[2],dt[3],dt[4],dt[5]);
		},
	dateFormate: function (date) {

        return 	date.getFullYear() +"-" 
        				+(date.getMonth() + 1) +"-"
                + date.getDate();
    },
   MysqlDatetoDate:function (dateString) {
  		var dt  = dateString.split(/\-|\s|:/);
  		var m = parseInt(dt[1]) - 1;
  		dt[1] = m;
  		return new Date(dt[0],dt[1],dt[2]);
	},	
	 getParameterByName:function(name, url) {
		    if (!url) url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
};