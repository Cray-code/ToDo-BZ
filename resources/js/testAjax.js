jQuery(document).ready(function($){

    jQuery('#btn-get').click(function () {
        jQuery('#myForm').trigger("reset");
        jQuery('#formModal').modal('show');
    });

    $("#btn-request").click(function (e) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
            }
        });
        e.preventDefault();
        var is_checked = jQuery('#favorites').is('checked') ? 1 : 0
        var formData = {
            task_id: jQuery('#task_id').val(),
            list_id: jQuery('#list_id').val(),
            user_id: jQuery('#user_id').val(),
            favorites: is_checked
        };
        $.ajax({
            type: 'POST',
            url: '/api/test',
            data: formData,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                jQuery('#formModal').modal('hide')
            },
            error: function () {
                jQuery('#formModal').modal('hide')
            }
        });
    });
});
