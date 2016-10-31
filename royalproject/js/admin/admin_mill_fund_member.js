var $adminTables= {
	 tablename:'mill_fund_member',
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
                		data.member_id,
                		data.RecordNo,
                    	data.prename,
	                    data.first_name,
	                    data.last_name,
	                    data.address_no,
	                    data.moo,
	                    data.sub_district,
	                    data.district,
	                    data.province,
	                    data.share_amount,
	                    data.share_price_unit,
	                    data.apply_date,
	                    data.active_flag,
	                    data.remark
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
	 ToCalendarDate:function(divid){
		//	$adminMatches.$taskDialog.find('#datetimepicker1').datetimepicker();
		 $adminTables.$taskDialog.find(divid).datetimepicker({
		                    locale: 'th',
		                  //  sideBySide:true,
		                   format: 'YYYY-MM-DD',
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                  //  widgetParent:".wiget-calendar-div"
		                });
		//  $adminMatches.$taskDialog.find(divid).on("dp.change", function (e) {
       //     $adminMatches.$taskDialog.find('#EndDateInput').data("DateTimePicker").minDate(e.date);
       // });
	},
	ToCalendarDateTime:function(divid){
		//	$adminMatches.$taskDialog.find('#datetimepicker1').datetimepicker();
		 $adminTables.$taskDialog.find(divid).datetimepicker({
		                    locale: 'th',
		                  //  sideBySide:true,
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                  //  widgetParent:".wiget-calendar-div"
		                });
		//  $adminMatches.$taskDialog.find(divid).on("dp.change", function (e) {
       //     $adminMatches.$taskDialog.find('#EndDateInput').data("DateTimePicker").minDate(e.date);
       // });
	},
	 dialogShow:function ($row, id){
			$spinner.show();
	 		
	 		try{	   	
            $adminTables.$taskDialog = $dialogFirst.init('#tablesDataTmp');
            $adminTables.$formValid = $adminTables.$taskDialog.find("#tablesDataForms");
            $adminTables.$formValid.validate({
		            rules: {
		            	prename: {
		                    required: true,
		                    maxlength:20,
		                },
		                first_name: {
		                    required: true,
		                    maxlength:50,
		                },
		                last_name: {
		                    required: true,
		                    maxlength:50,
		                },
		                address_no: {
		                    required: true,
		                    maxlength:10,
		                },
		                moo: {
		                    required: true,
		                    maxlength:10,
		                },
		                sub_district: {
		                    required: true,
		                    maxlength:50,
		                },
		                district: {
		                    required: true,
		                    maxlength:50,
		                },
		                province: {
		                    required: true,
		                    maxlength:50,
		                },
		                share_amount: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                share_price_unit: {
		                    required: true,
		                    number: true,
		                },
		                apply_date: {
		                    required: true,
		                },
		                active_flag: {
		                    required: true,
		                    maxlength:1,
		                },
		                remark: {
		                    required: true,
		                    maxlength:200,
		                },
		            },
		        });

            $adminTables.$taskDialog.find(".btn-close").hide();
			$adminTables.ToCalendarDate("#apply_date");
			
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
				 												 $adminTables.$taskDialog.find('input[name=prename]').val(jsonobj[0].prename);	
				 												 $adminTables.$taskDialog.find('input[name=first_name]').val(jsonobj[0].first_name);
				 												 $adminTables.$taskDialog.find('input[name=last_name]').val(jsonobj[0].last_name);	
				 												 $adminTables.$taskDialog.find('input[name=address_no]').val(jsonobj[0].address_no);
				 												 $adminTables.$taskDialog.find('input[name=moo]').val(jsonobj[0].moo);	
				 												 $adminTables.$taskDialog.find('input[name=sub_district]').val(jsonobj[0].sub_district);
				 												 $adminTables.$taskDialog.find('input[name=district]').val(jsonobj[0].district);	
				 												 $adminTables.$taskDialog.find('input[name=province]').val(jsonobj[0].province);
				 												 $adminTables.$taskDialog.find('input[name=share_amount]').val(jsonobj[0].share_amount);	
				 												 $adminTables.$taskDialog.find('input[name=share_price_unit]').val(jsonobj[0].share_price_unit);
				 												 $adminTables.$taskDialog.find('#apply_date').data('DateTimePicker').date($pageEntity.MysqlDatetoDate(jsonobj[0].apply_date));
				 												 $adminTables.$taskDialog.find('input[name=active_flag]').val(jsonobj[0].active_flag);	
				 												 $adminTables.$taskDialog.find('textarea[name=remark]').html(jsonobj[0].remark);
           			 						
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
   getDateToDb:function(divid){
   		return $pageEntity.dateFormate(new Date($adminTables.$taskDialog.find('#'+divid).data('DateTimePicker').date().toString()));
   },
   addToDatabase:function(itemid){
   		if( $adminTables.$formValid.valid()){
   					//	var file_data = $adminTables.$taskDialog.find('#files').prop('files')[0];   
   						var prename		= $adminTables.$taskDialog.find('input[name=prename]').val();
					    var first_name 	= $adminTables.$taskDialog.find('input[name=first_name]').val();
					    var last_name		= $adminTables.$taskDialog.find('input[name=last_name]').val();
					    var address_no 	= $adminTables.$taskDialog.find('input[name=address_no]').val();
					    var moo		= $adminTables.$taskDialog.find('input[name=moo]').val();
					    var sub_district 	= $adminTables.$taskDialog.find('input[name=sub_district]').val();
					    var district		= $adminTables.$taskDialog.find('input[name=district]').val();
					    var province 	= $adminTables.$taskDialog.find('input[name=province]').val();
					    var share_amount		= $adminTables.$taskDialog.find('input[name=share_amount]').val();
					    var share_price_unit 	= $adminTables.$taskDialog.find('input[name=share_price_unit]').val();
   					    var apply_date 	= $adminTables.getDateToDb('apply_date');
					    var active_flag 	= $adminTables.$taskDialog.find('input[name=active_flag]').val();
					    var remark 	= $adminTables.$taskDialog.find('textarea[name=remark]').html();
   					 	var attno = $adminTables.objdata();
	 								attno.prename = prename;
	 								attno.first_name = first_name;
									attno.last_name = last_name;	
									attno.address_no = address_no;
	 								attno.moo = moo;
									attno.sub_district = sub_district;
									attno.district = district;
									attno.province = province;	
									attno.share_amount = share_amount;
									attno.share_price_unit = share_price_unit;
									attno.apply_date = apply_date;
									attno.active_flag = active_flag;
									attno.remark = remark;
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

