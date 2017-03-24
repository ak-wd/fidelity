$(document).ready(function(){
  $("#addbtn").on("click",function(){
            var stock_table= $("#stock_table").val();
  					var s_name= $("#s_name").val();
            var s_sym= $("#s_sym").val();
            var s_ind= $("#s_ind").val();
            var s_val= $("#s_val").val();
  					$("#stock_table").append("<tr><td>"+s_name+"</td><td>"+s_sym+"</td><td>"+s_ind+"</td><td>"+s_val+"</td></tr>");
  });
});
