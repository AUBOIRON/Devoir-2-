function Conf()
{
    $.ajax
    (
        {
            type:"get",
            url:"views/getFormulaire.php",
            success:function(data)
            {
                $('#divConf').empty();
                $('#divConf').append(data);
            },
        }
    );
}