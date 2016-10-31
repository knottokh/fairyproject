var $adminTables= {
	 tablename:'acct_start',
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
                		data.acctype_id,
                		data.RecordNo,
                    	data.acctype_id,
	                    data.accyear,
	                    data.accmount,
	                    data.balance_backward,
	                    data.balance_tomount,
	                    data.balance_forward
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
		                acctype_id: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                accyear: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                accmount: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                balance_backward: {
		                    required: true,
		                    number: true,
		                },
		                balance_tomount: {
		                    required: true,
		                    number: true,
		                },
		                balance_forward: {
		                    required: true,
		                    number: true,
		                },
		            },
		         /*   messages: {
		                acctype_id: {
		                    required: "required",
		                    number:"number only",
		                },
		                 accyear: {
		                    required: "required",
		                    number:"number only",
		                },
		                accmount: {
		                    required: "required",
		                    number:"number only",
		                },
		                 balance_backward: {
		                    required: "required",
		                    number:"number only",
		                },
		                balance_tomount: {
		                    required: "required",
		                    number:"number only",
		                },
		                 balance_forward: {
		                    required: "required",
		                    number:"number only",
		                },
		            }*/
		        });

            $adminTables.$taskDialog.find(".btn-close").hide();

            if(id){


            	var tracking = $(this.name).attr("tracking");
            	if(tracking == "V"){
            			$adminTables.$taskDialog.find(".btn-save").hide();
            			$adminTables.$taskDialog.find(".btn-cancel").hide();
            			$adminTables.$taskDialog.find(".btn-close").show();
            			$adminTables.$taskDialog.find('input').prop('readonly', true);	
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
				 												$adminTables.$taskDialog.find('input[name=acctype_id]').val(jsonobj[0].acctype_id);	
				 												 $adminTables.$taskDialog.find('input[name=accyear]').val(jsonobj[0].accyear);
				 												 $adminTables.$taskDialog.find('input[name=accmount]').val(jsonobj[0].accmount);
				 												 $adminTables.$taskDialog.find('input[name=balance_backward]').val(jsonobj[0].balance_backward);	
				 												 $adminTables.$taskDialog.find('input[name=balance_tomount]').val(jsonobj[0].balance_tomount);
				 												 $adminTables.$taskDialog.find('input[name=balance_forward]').val(jsonobj[0].balance_forward);
           			 						
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
   						var acctype_id		= $adminTables.$taskDialog.find('input[name=acctype_id]').val();
					    var accyear 	= $adminTables.$taskDialog.find('input[name=accyear]').val();
					    var accmount		= $adminTables.$taskDialog.find('input[name=accmount]').val();
					    var balance_backward 	= $adminTables.$taskDialog.find('input[name=balance_backward]').val();
					    var balance_tomount		= $adminTables.$taskDialog.find('input[name=balance_tomount]').val();
					    var balance_forward 	= $adminTables.$taskDialog.find('input[name=balance_forward]').val();
   					 	var attno = $adminTables.objdata();
	 								attno.acctype_id = acctype_id;
	 								attno.accyear = accyear;
									attno.accmount = accmount;		
									attno.balance_backward = balance_backward;
	 								attno.balance_tomount = balance_tomount;
									attno.balance_forward = balance_forward;	
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

