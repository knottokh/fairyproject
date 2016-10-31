
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Royal Project</title>
    <meta name="description" content="Manage you account.">
    <?php $rootpath="../_layout/"; ?>
    <?php $scriptroot="../../"; ?>   

    <?php include $rootpath."scriptref.php";?>

     <script src="<?=$scriptroot?>js/admin/admin_mill_fund_member.js"></script>
    </head>
<body>
<?php include $rootpath."header.php";?>

    
    <div class="kduo-contents">
        <div class="container">
     <h1>ตาราง mill_fund_member</h1>
     <br/>
     <div class="form-group">
          <button class="btn btn-primary btn-dlg-newItem" type="button" >New Data</button>
    </div>

<div id="gridMainTables" class="grid gridMain">
    <div class="searching clearfix">
        <div class="search-box hidden">
            <div class="search-box-textbox">
                <input type="search" name="txtGridSearch" class="form-control" />
            </div>
            <div class="search-box-button">
                <input type="button" name="btnGridSearch" class="btn btn-default btn-search" value="Search" />
            </div>
        </div>
        <div class="tablenav bottom">
            <div class="tablenav-totals">
                Total : <span class="displaying-num"></span> Items
            </div>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                   <th data-name="records_no" class="col-center" style="width: 50px">No.</th>
                    <th class="col-center">prename</th>
                    <th class="col-center">first_name</th>
                    <th class="col-center">last_name</th>
                    <th class="col-center">address_no</th>
                    <th class="col-center">moo</th>
                    <th class="col-center">sub_district</th>
                    <th class="col-center">district</th>
                    <th class="col-center">province</th>
                    <th class="col-right">share_amount</th>
                    <th class="col-right">share_price_unit</th>
                    <th class="col-right">apply_date</th>
                    <th class="col-right">active_flag</th>
                    <th class="col-center">remark</th>    
                    <th data-name="action" style="width: 110px"></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <div class="paging clearfix">
        <ul class="pagination hidden"></ul>
    </div>
</div>

</div>
                
     </div>       


<div id="gridMainTablesTeamp" class="hidden">
    <table>
        <tbody>
            <tr data-id="{0}">
                <td class="col-center">{1}</td>
                <td class="">{2}</td>
                <td class="">{3}</td>
                <td class="">{4}</td>
                <td class="">{5}</td>
                <td class="">{6}</td>
                <td class="">{7}</td>
                <td class="">{8}</td>
                <td class="">{9}</td>
                <td class="col-right">{10}</td>
                <td class="col-right">{11}</td>
                <td class="col-right">{12}</td>
                <td class="col-right">{13}</td>
                <td class="table-details">{14}</td>
                <td class="col-right">
                    <span tracking="V" class="glyphicon glyphicon-eye-open kduo-pointer kudo-button btn-view hidden" title="View" aria-hidden="true"></span>
                    <span tracking="E" class="glyphicon glyphicon-pencil kduo-pointer kudo-button btn-assign hidden" title="Edit" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon-trash kduo-pointer kudo-button btn-delete hidden" title="Delete" aria-hidden="true"></span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div id="tablesDataTmp" class="hidden">
     <form id="tablesDataForms" name="tablesDataForms" class="form-horizontal" role="form" method="get" action="">
            <div class="form-group">
                <label class="col-sm-3 control-label" for="prename">
                    prename <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="prename" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="first_name">
                    first_name <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="first_name" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="last_name">
                    last_name <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="last_name" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="address_no">
                    address_no <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="address_no" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="moo">
                    moo <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="moo" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="sub_district">
                    sub_district <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="sub_district" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="district">
                    district <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="district" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="province">
                    province <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="province" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="share_amount">
                    share_amount <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="share_amount" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="share_price_unit">
                    share_price_unit <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="share_price_unit" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                    <label class="col-sm-3 control-label" for="apply_date">
                        apply_date <span class="required">*</span> :
                    </label>
                    <div class="col-sm-9">
                        <div class='input-group date' id='apply_date'>
                                <input type='text' name="apply_date" class="form-control"/>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>

                    </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="active_flag">
                    active_flag <span class="required">*</span>:
                </label>
                <div class="col-sm-9">
                    <input type="text" name="active_flag" class="form-control form_number" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="remark">
                    remark <span class="required">*</span> :
                </label>
                <div class="col-sm-9">
                    <textarea rows="5" name="remark" class="form-control"></textarea>
                </div>
            </div>    
             <div class="modal-footer">
                <button class="btn btn-primary btn-save" type="button" >Save</button>
                <button type="button" class="btn btn-secondary btn-cancel" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-secondary btn-close" data-dismiss="modal">Close</button>
            </div>
     </form>
</div>
        <script type="text/javascript">

                $(function(){
                        $adminTables.init();
                        $adminTables.loadData();
                       // $adminTeams.newdata();
                });
        </script>

<?php include $rootpath."footer.php";?>
    </body>
</html>