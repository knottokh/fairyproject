
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

     <script src="<?=$scriptroot?>js/admin/admin_observe_activity_tn.js"></script>
    </head>
<body>
<?php include $rootpath."header.php";?>

    
    <div class="kduo-contents">
        <div class="container">
     <h1>ตาราง observe_activity_tn</h1>
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
                    <th class="col-right">obs_date</th>
                    <th class="col-center">obs_detail</th>
                    <th class="col-right">obs_amount</th>
                    <th class="col-right">obs_expense</th>
                    <th class="col-center">obs_remark</th>
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
                <td class="col-right">{2}</td>
                <td class="table-details">{3}</td>
                <td class="col-right">{4}</td>
                <td class="col-right">{5}</td>
                <td class="table-details">{6}</td>
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
                    <label class="col-sm-3 control-label" for="obs_date">
                        obs_date <span class="required">*</span> :
                    </label>
                    <div class="col-sm-9">
                        <div class='input-group date' id='obs_date'>
                                <input type='text' name="obs_date" class="form-control"/>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>

                    </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="obs_detail">
                    obs_detail <span class="required">*</span> :
                </label>
                <div class="col-sm-9">
                    <textarea rows="5" name="obs_detail" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="obs_amount">
                    obs_amount <span class="required">*</span> :
                </label>
                <div class="col-sm-9">
                    <input type="text" name="obs_amount" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="obs_expense">
                    obs_expense <span class="required">*</span> :
                </label>
                <div class="col-sm-9">
                    <input type="text" name="obs_expense" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="obs_remark">
                    obs_remark <span class="required">*</span> :
                </label>
                <div class="col-sm-9">
                    <textarea rows="5" name="obs_remark" class="form-control"></textarea>
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