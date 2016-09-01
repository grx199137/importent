$(".insertdata").click(function(){
    $("#myModal").modal();
    $(".myform").attr("action","/insertdata");
    $(".myform").removeAttr("readonly");
})

$(".updatedata").click(function(){
    $("#myModal").modal();
    $(".myform").attr("action","/updatedata")
    var name=$(this).attr("data_name");
    $(".name").val(name).attr("readonly","readonly")
})

$(".removedata").click(function(){
    var name=$(this).attr("data_name");
    var $form=$("<form>");
    var $input=$("<input>");
    $form.attr("action","/removedata");
    $form.attr("method","post");
    $input.val(name);
    $input.attr("name","name");
    $form.append($input);
    $form.submit();
})
