var $adminTables= {
	 tablename:'agriculture_goods_dtl',
	 $giid :null,
	 $taskDialog:null,
	 $formValid:null,
	  defaultimg:"",
	 objdata : function(){
	 	 return $pageEntity.getColumns($adminTables.tablename);
	},
	init : function(){
				  $(document).on('click.bs.modal.data-api', '.btn-dlg-newItem', function (event) {
				  		$adminTables.dialogShow();
            return false;
        });
			$adminTables.defaultimg =  $globalKudo.rootpath+"images/defaults/no-image.jpg";
	 },
	 loadData:function(){
	 		        var data = {	table: $adminTables.tablename, 
								    	objdata : $adminTables.objdata(),
								    //	where :"where Active = 'Y'"
					    			};
				  data.method = "get";	    			

 			var authorize = true;
			 $adminTables.$grid = new Grid({
           // TableId: "tblRoleListTask",
            // TableDataId: "tblRoleListDataTask",
            DivSelector: "#gridMainTables",
            DivDataSelector: "#gridMainTablesTeamp",
            SourceUrl: $globalKudo.apipath,
            Data : data,
            Sorting: { sort: false, excepts: ["records_no", "action"] },
            Searching: false,
            PerPage:20,
            fnRowDisplayFormat: function (html, data) {
                return html.format(
                		data.dtl_id,
                		data.RecordNo,
                    	data.buy_id,
	                    data.buy_detail,
	                    data.amount,
	                    data.buy_unit,
	                    data.price_unit
                    );
            },
            fnRowElementsAction: [{
                name: ".btn-delete",
                callback: $adminTables.RemoveItems,
                authorize:authorize
            },
            {
                name: ".btn-assign",
                callback: $adminTables.dialogShow,
                authorize: authorize
            },
            {
                name: ".btn-view",
                callback: $adminTables.dialogShow,
                authorize: authorize
            }],
            fnRowCreated: function ($html, data) {
               /* if (data.Id == 1) {
                    $html.find('.btn').remove();
                }*/

                return $html;
            },
        });
				$adminTables.$grid.Bind();
	 },
	 dialogShow:function ($row, id){
			$spinner.show();
	 		
	 		try{
	 			   		
            $adminTables.$taskDialog = $dialogFirst.init('#tablesDataTmp');
            $adminTables.$formValid = $adminTables.$taskDialog.find("#tablesDataForms");
            $adminTables.$formValid.validate({
		            rules: {
		                buy_id: {
		                    required: true,
		                    number: true,
		                    maxlength:11,	
		                    digits: true,
		                },
		                buy_detail: {
		                    required: true,
		                    maxlength:100,
		                },
		                amount: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                buy_unit: {
		                    required: true,
		                    maxlength:20,
		                },
		                price_unit: {
		                    required: true,
		                    number: true,
		                },
		            },
		        });

            $adminTables.$taskDialog.find(".btn-close").hide();
            if(id){


            	var tracking = $(this.name).attr("tracking");
            	if(tracking == "V"){
            			$adminTables.$taskDialog.find(".btn-save").hide();
            			$adminTables.$taskDialog.find(".btn-cancel").hide();
            			$adminTables.$taskDialog.find(".btn-close").show();
            			$adminTables.$taskDialog.find('input').prop('readonly', true);	
            			$adminTables.$taskDialog.find('textarea').prop('readonly', true);
            	}else{
            		 $adminTables.$taskDialog.find(".btn-save").click(function(){
            		 				$adminTables.onSubmitUpdateTables(id);
            		 });
            	}
            		var attno = $adminTables.objdata();
	 									attno.value = id;
				 					var objgetdata = {	table: $adminTables.tablename, 
											    					objdata: attno
											    				};
				 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
				 									
				 												var jsonobj = JSON.parse(data.data);
				 												//alert(jsonobj[0].Name);
				 												 $adminTables.$taskDialog.find('input[name=buy_id]').val(jsonobj[0].buy_id);
				 												 $adminTables.$taskDialog.find('textarea[name=buy_detail]').html(jsonobj[0].buy_detail);
				 												 $adminTables.$taskDialog.find('input[name=amount]').val(jsonobj[0].amount);
				 												 $adminTables.$taskDialog.find('input[name=buy_unit]').val(jsonobj[0].buy_unit);
				 												 $adminTables.$taskDialog.find('input[name=price_unit]').val(jsonobj[0].price_unit);
           			 						
				 									  $spinner.hide();		
           			 								$adminTables.$taskDialog.show();
				 					});
            }	else{


	             	$adminTables.$taskDialog.find(".btn-save").click($adminTables.onSubmitNewTables);
            		 $spinner.hide();		
           			 $adminTables.$taskDialog.show();
            }
	 		}
	 		catch(e){
	 			$spinner.hide();	
	 			var params = { message: "เกิดข้อผิดพลาด : "+e.message };
	 			$alert.error(params);
	 		}


	 },
	deleteItems: function ($row, id) {
        var params = { id: id };
        $alert.confirmDelete($adminTables.onSubmitDeleteItems, params);
   },
   onSubmitDeleteItems:function(params){
   		if(params.id){
   			 			var attno = $adminTables.objdata();
	 								attno.value = params.id;
		 						var savedata = {	table: $adminTables.tablename, 
									    						objdata: attno
						    					};

								    //Logic to delete the item
							$pageEntity.DeleteData($globalKudo.apipath,savedata,function(){
										$adminTables.$grid.Bind();	

							});

	 				}		
   		return false;
   },
   RemoveItems: function ($row, id) {
        var params = { id: id };
        $alert.confirmDelete($adminTables.onSubmitRemoveItems, params);
   },
   onSubmitRemoveItems:function(params){
   		if(params.id){
   			 			var attno = $adminTables.objdata();
	 								attno.value = params.id;
		 						var savedata = {	table: $adminTables.tablename, 
									    						objdata: attno
						    					};

								    //Logic to delete the item
							$pageEntity.RemoveData($globalKudo.apipath,savedata,function(){
										$adminTables.$grid.Bind();	

							});

	 				}		
   		return false;
   },
   onSubmitNewTables:function(){
   		$adminTables.addToDatabase();
   		return false;
   },
   onSubmitUpdateTables:function(id){
   		$adminTables.addToDatabase(id);
   		return false;
   },
   addToDatabase:function(itemid){
   		if( $adminTables.$formValid.valid()){
   					//	var file_data = $adminTables.$taskDialog.find('#files').prop('files')[0];   
   						var buy_id		= $adminTables.$taskDialog.find('input[name=buy_id]').val();
					    var buy_detail	= $adminTables.$taskDialog.find('textarea[name=buy_detail]').html();
					    var amount 	= $adminTables.$taskDialog.find('input[name=amount]').val();
					    var buy_unit 	= $adminTables.$taskDialog.find('input[name=buy_unit]').val();
					    var price_unit 	= $adminTables.$taskDialog.find('input[name=price_unit]').val();
   					 	var attno = $adminTables.objdata();
	 								attno.buy_id = buy_id;
	 								attno.buy_detail = buy_detail;
									attno.amount = amount;	
									attno.buy_unit = buy_unit;
									attno.price_unit = price_unit;	
	 						if(itemid){
	 										attno.value = itemid;
	 								}	

	 						 	var savedata = {	table: $adminTables.tablename, 
												    					objdata: attno
									    					};				

								$adminTables.InserUpdate(itemid,savedata);
	 								
		   	
		   	}
   },
   InserUpdate:function(id,data){
   			 $spinner.show();	
   			if(id){
	 										$pageEntity.EditData($globalKudo.apipath,data,function(msg){
	 												 $spinner.hide();	
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
									 });  
	 								}
	 								else{
					 		
									 $pageEntity.InsertData($globalKudo.apipath,data,function(msg){
									 				 $spinner.hide();	
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
									 });  
			 }
   }
	
};

